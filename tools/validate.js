#!/usr/bin/env node
// Validate question and flashcard data files.
//   node tools/validate.js                 -> check every data file
//   node tools/validate.js data/x.js       -> check only the given files
//   node tools/validate.js --links         -> also check that every reference URL resolves
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const args = process.argv.slice(2);
const checkLinks = args.includes("--links");
let files = args.filter((a) => !a.startsWith("--"));
if (!files.length) {
  const qdir = path.join(ROOT, "data/questions");
  files = fs.readdirSync(qdir).filter((f) => f.endsWith(".js")).map((f) => path.join(qdir, f));
  files.push(path.join(ROOT, "data/flashcards.js"));
  files.push(path.join(ROOT, "data/concepts.js"));
}

// Objectives per domain in the SY0-701 exam objectives.
const OBJECTIVES = { 1: 4, 2: 5, 3: 4, 4: 9, 5: 6 };
// Sites that block scripted requests but open fine in a browser.
const BOT_BLOCKED = ["hhs.gov", "iso.org"];

const errors = [];
const warnings = [];
const urls = new Map();
const ids = new Set();
let qCount = 0;
let fcCount = 0;
let conceptCount = 0;
const perDomain = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const fcPerDomain = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

function err(where, msg) { errors.push(where + ": " + msg); }
function isStr(s) { return typeof s === "string" && s.trim().length > 0; }

function checkRefs(where, refs) {
  if (!Array.isArray(refs) || !refs.length) return err(where, "needs at least one ref");
  refs.forEach((r) => {
    if (!r || !isStr(r.title) || !isStr(r.url)) return err(where, "ref needs title and url");
    if (!/^https:\/\//.test(r.url)) err(where, "ref url must be https: " + r.url);
    if (!urls.has(r.url)) urls.set(r.url, where);
  });
}

function checkObjective(where, item) {
  if (![1, 2, 3, 4, 5].includes(item.domain)) return err(where, "domain must be 1-5");
  const m = /^([1-5])\.(\d)$/.exec(item.objective || "");
  if (!m) return err(where, "objective must look like '4.3'");
  if (+m[1] !== item.domain) err(where, "objective " + item.objective + " not in domain " + item.domain);
  if (+m[2] < 1 || +m[2] > OBJECTIVES[item.domain]) err(where, "objective " + item.objective + " does not exist in SY0-701");
}

function checkQuestion(q, file) {
  const where = path.basename(file) + " " + (q.id || "(no id)");
  qCount++;
  if (!isStr(q.id)) err(where, "missing id");
  else if (ids.has(q.id)) err(where, "duplicate id");
  else ids.add(q.id);
  checkObjective(where, q);
  if (q.domain) perDomain[q.domain]++;
  if (!isStr(q.topic)) err(where, "missing topic");
  if (!Array.isArray(q.stems) || !q.stems.length || !q.stems.every(isStr)) err(where, "stems must be non-empty strings");
  if (!isStr(q.explanation)) err(where, "missing explanation");
  if (!isStr(q.hint)) err(where, "missing hint");
  checkRefs(where, q.refs);

  if (q.type === "single" || q.type === "multi") {
    if (q.stems && q.stems.length < 2) err(where, "write at least 2 stem variations");
    if (!Array.isArray(q.correct) || !q.correct.every(isStr)) return err(where, "correct must be strings");
    if (!Array.isArray(q.wrong) || !q.wrong.every(isStr)) return err(where, "wrong must be strings");
    if (q.type === "single" && q.correct.length !== 1) err(where, "single needs exactly 1 correct");
    if (q.type === "single" && q.wrong.length < 3) err(where, "single needs at least 3 wrong");
    if (q.type === "multi" && (q.correct.length < 2 || q.correct.length > 3)) err(where, "multi needs 2-3 correct");
    if (q.type === "multi" && q.correct.length + q.wrong.length < 5) err(where, "multi needs at least 5 options total");
    const all = q.correct.concat(q.wrong).map((s) => s.trim().toLowerCase());
    if (new Set(all).size !== all.length) err(where, "duplicate option text");
    (q.stems || []).forEach((s) => {
      if (/choose (two|three)/i.test(s)) err(where, "do not write '(Choose two.)' in stems; the app adds it");
    });
  } else if (q.type === "match") {
    if (!Array.isArray(q.pairs) || q.pairs.length < 3) return err(where, "match needs at least 3 pairs");
    q.pairs.forEach((p) => { if (!p || !isStr(p.item) || !isStr(p.answer)) err(where, "pair needs item and answer"); });
    const items = q.pairs.map((p) => String(p && p.item).trim().toLowerCase());
    if (new Set(items).size !== items.length) err(where, "duplicate pair item text");
    if (q.extraOptions && !q.extraOptions.every(isStr)) err(where, "extraOptions must be strings");
  } else {
    err(where, "type must be single, multi, or match");
  }
}

// Find a run of capitalized words whose initials spell an acronym of 3+ letters ("Public Key Infrastructure" for PKI).
const SMALL_WORDS = new Set(["and", "of", "the", "a", "an", "as", "to", "for", "in", "on", "by", "with"]);
function spellsAcronym(text, term) {
  const letters = term.replace(/[^A-Za-z]/g, "").toLowerCase();
  if (letters.length < 3) return null;
  const words = text.split(/[\s\-–\/,()]+/).filter(Boolean);
  for (let i = 0; i < words.length; i++) {
    if (!/^[A-Z]/.test(words[i])) continue;
    let k = 0, j = i;
    while (j < words.length && k < letters.length) {
      const w = words[j].toLowerCase();
      if (w[0] === letters[k]) k++;
      else if (!(k > 0 && SMALL_WORDS.has(w))) break;
      j++;
    }
    if (k === letters.length) return words.slice(i, j).join(" ");
  }
  return null;
}

function checkCard(c, file) {
  const where = path.basename(file) + " card '" + (c.term || "?") + "'";
  fcCount++;
  if (!isStr(c.term)) err(where, "missing term");
  if (!isStr(c.def)) err(where, "missing def");
  if (!isStr(c.group)) err(where, "missing group");
  if (![1, 2, 3, 4, 5].includes(c.domain)) err(where, "domain must be 1-5");
  else fcPerDomain[c.domain]++;
  checkRefs(where, c.ref ? [c.ref] : []);
  // The definition side must not give away the term.
  if (isStr(c.term) && isStr(c.def) && c.def.toLowerCase().includes(c.term.toLowerCase())) err(where, "def contains the term text");
  if (c.full !== undefined && !isStr(c.full)) err(where, "full must be a non-empty string");
  if (isStr(c.full) && isStr(c.def) && c.def.toLowerCase().includes(c.full.toLowerCase())) err(where, "def contains the full name; keep it only in 'full'");
  if (isStr(c.term) && isStr(c.def) && spellsAcronym(c.def, c.term)) err(where, "def spells out the acronym '" + spellsAcronym(c.def, c.term) + "'; move it to 'full'");
  const key = "card:" + (c.term || "").toLowerCase();
  if (ids.has(key)) err(where, "duplicate term");
  ids.add(key);
}

const QBANK = { items: [], add(l) { this.items.push(...l); } };
const FCBANK = { items: [], add(l) { this.items.push(...l); } };
const CONCEPTS = { items: [], add(l) { this.items.push(...l); } };

function checkConcept(o, file) {
  const where = path.basename(file) + " concept " + (o.objective || "?");
  conceptCount++;
  checkObjective(where, o);
  if (!isStr(o.title)) err(where, "missing title");
  if (!Array.isArray(o.points) || !o.points.length) err(where, "needs points");
  else o.points.forEach((p) => { if (!Array.isArray(p) || p.length !== 2 || !isStr(p[0]) || !isStr(p[1])) err(where, "each point must be [term, text]"); });
  checkRefs(where, o.refs);
}
for (const f of files) {
  const before = { q: QBANK.items.length, c: FCBANK.items.length, o: CONCEPTS.items.length };
  try {
    vm.runInNewContext(fs.readFileSync(f, "utf8"), { QBANK, FCBANK, CONCEPTS, window: {} }, { filename: f });
  } catch (e) {
    err(path.basename(f), "JS error: " + e.message);
    continue;
  }
  QBANK.items.slice(before.q).forEach((q) => checkQuestion(q, f));
  FCBANK.items.slice(before.c).forEach((c) => checkCard(c, f));
  CONCEPTS.items.slice(before.o).forEach((o) => checkConcept(o, f));
}

// Groups with fewer than 4 cards cannot produce 3 plausible distractors.
const groups = {};
FCBANK.items.forEach((c) => { groups[c.group] = (groups[c.group] || 0) + 1; });
Object.entries(groups).forEach(([g, n]) => { if (n < 4) warnings.push("flashcard group '" + g + "' has only " + n + " cards (needs 4+ for generated questions)"); });

async function runLinkCheck() {
  const list = [...urls.keys()];
  console.log("Checking " + list.length + " unique URLs...");
  const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
  let i = 0;
  async function worker() {
    while (i < list.length) {
      const u = list[i++];
      let status = 0;
      for (let attempt = 0; attempt < 2 && status !== 200; attempt++) {
        try {
          const r = await fetch(u, { redirect: "follow", headers: { "User-Agent": UA }, signal: AbortSignal.timeout(25000) });
          status = r.status;
        } catch (e) { status = "ERR " + e.message; }
      }
      if (status === 200) continue;
      const host = new URL(u).hostname;
      const msg = status + " " + u + " (first used by " + urls.get(u) + ")";
      if (status === 403 && BOT_BLOCKED.some((d) => host.endsWith(d))) warnings.push("bot-blocked, check by hand: " + msg);
      else errors.push("broken link: " + msg);
    }
  }
  await Promise.all(Array.from({ length: 8 }, worker));
}

(async () => {
  if (checkLinks) await runLinkCheck();
  console.log("Questions: " + qCount + "  by domain " + JSON.stringify(perDomain));
  console.log("Flashcards: " + fcCount + "  by domain " + JSON.stringify(fcPerDomain));
  console.log("Concept objectives: " + conceptCount);
  console.log("Unique reference URLs: " + urls.size);
  warnings.forEach((w) => console.log("WARN  " + w));
  errors.forEach((e) => console.log("ERROR " + e));
  console.log(errors.length ? "FAILED with " + errors.length + " error(s)" : "OK");
  process.exit(errors.length ? 1 : 0);
})();
