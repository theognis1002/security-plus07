// Timed exam: domain-weighted question set, countdown, flag for review, results with explanations.
var Exam = (function () {
  var C = Core;
  var LENGTHS = { full: { count: 90, minutes: 90 }, half: { count: 45, minutes: 45 }, quick: { count: 20, minutes: 20 } };
  var READY_TARGET = 85;
  var state = null;
  var timer = null;
  var confirmArmed = false;

  // Split `count` across domains by exam weight (largest remainder method).
  function quotas(count) {
    var raw = DOMAIN_IDS.map(function (d) { return { d: d, v: count * DOMAINS[d].weight / 100 }; });
    var q = {};
    var used = 0;
    raw.forEach(function (r) { q[r.d] = Math.floor(r.v); used += q[r.d]; });
    raw.sort(function (a, b) { return (b.v % 1) - (a.v % 1); });
    for (var i = 0; used < count; i++, used++) q[raw[i % raw.length].d]++;
    return q;
  }

  function buildSet(count) {
    var quota = quotas(count);
    var pools = {};
    DOMAIN_IDS.forEach(function (d) {
      pools[d] = C.shuffle(QBANK.items.filter(function (q) { return q.domain === d; }));
    });
    // Like the real exam, a few performance-based questions come first.
    var pbqWanted = Math.max(1, Math.round(count / 18));
    var pbqs = C.shuffle(QBANK.items.filter(function (q) { return q.type === "match"; })).slice(0, pbqWanted);
    var chosen = [];
    pbqs.forEach(function (q) {
      if (quota[q.domain] > 0) { chosen.push(q); quota[q.domain]--; }
    });
    var rest = [];
    var leftovers = [];
    DOMAIN_IDS.forEach(function (d) {
      var pool = pools[d].filter(function (q) { return q.type !== "match"; });
      rest = rest.concat(pool.slice(0, quota[d]));
      leftovers = leftovers.concat(pool.slice(quota[d]));
    });
    // Fill any gap (a small domain pool) from the other domains.
    leftovers = C.shuffle(leftovers);
    while (chosen.length + rest.length < count && leftovers.length) rest.push(leftovers.pop());
    return chosen.concat(C.shuffle(rest)).map(C.makeInstance);
  }

  function save() { if (state) C.store.set("exam.active", state); }

  function show(part) {
    $("#exam-setup, #exam-run, #exam-review, #exam-results").addClass("hidden");
    $("#exam-" + part).removeClass("hidden");
    window.scrollTo(0, 0);
  }

  function renderSetup() {
    var active = C.store.get("exam.active", null);
    // Time ran out while the page was closed: grade what was answered.
    if (active && !active.submitted && active.endsAt <= Date.now()) {
      state = active;
      return submit(true);
    }
    if (active && !active.submitted) {
      state = active;
      $("#exam-resume").removeClass("hidden");
    } else {
      $("#exam-resume").addClass("hidden");
      if (active) C.store.remove("exam.active");
    }
    var hist = C.store.get("exam.history", []);
    $("#exam-history").html(hist.length ? "<h3>Recent attempts</h3><table class=\"hist\"><tr><th>Date</th><th>Length</th><th>Score</th></tr>" +
      hist.slice(0, 10).map(function (h) {
        return "<tr><td>" + C.esc(new Date(h.date).toLocaleString()) + "</td><td>" + h.n + " Q</td><td class=\"" +
          (h.pct >= READY_TARGET ? "good-text" : "bad-text") + "\">" + h.pct + "%</td></tr>";
      }).join("") + "</table>" : "");
    show("setup");
  }

  function start() {
    var len = LENGTHS[$("#exam-length").val()];
    state = {
      instances: buildSet(len.count),
      flags: [],
      current: 0,
      endsAt: Date.now() + len.minutes * 60 * 1000,
      submitted: false
    };
    save();
    run();
  }

  function run() {
    confirmArmed = false;
    show("run");
    renderCurrent();
    clearInterval(timer);
    timer = setInterval(tick, 1000);
    tick();
  }

  function tick() {
    if (!state || state.submitted) return clearInterval(timer);
    var left = Math.max(0, state.endsAt - Date.now());
    var m = Math.floor(left / 60000);
    var s = Math.floor((left % 60000) / 1000);
    $(".exam-timer").text(m + ":" + (s < 10 ? "0" : "") + s).toggleClass("low", left < 10 * 60 * 1000);
    if (left <= 0) submit(true);
  }

  function renderCurrent() {
    var i = state.current;
    var inst = state.instances[i];
    $("#exam-pos").text("Question " + (i + 1) + " of " + state.instances.length);
    $("#exam-flag").prop("checked", state.flags.indexOf(i) >= 0);
    C.renderQuestion($("#exam-q"), inst, save);
    $("#exam-prev").prop("disabled", i === 0);
    $("#exam-next").text(i === state.instances.length - 1 ? "Review answers" : "Next");
  }

  function go(delta) {
    var n = state.current + delta;
    if (n >= state.instances.length) return renderReview();
    state.current = Math.max(0, n);
    save();
    renderCurrent();
  }

  function renderReview() {
    confirmArmed = false;
    var unanswered = 0;
    var html = state.instances.map(function (inst, i) {
      var answered = C.isAnswered(inst);
      if (!answered) unanswered++;
      var cls = (answered ? "answered" : "unanswered") + (state.flags.indexOf(i) >= 0 ? " flagged" : "");
      return '<button class="grid-cell ' + cls + '" data-i="' + i + '">' + (i + 1) + "</button>";
    }).join("");
    $("#exam-grid").html(html);
    $("#exam-review-summary").text(
      (state.instances.length - unanswered) + " answered, " + unanswered + " unanswered, " + state.flags.length + " flagged for review."
    );
    $("#exam-submit").text("Submit exam");
    show("review");
  }

  function submit(timedOut) {
    clearInterval(timer);
    state.submitted = true;
    var perDomain = {};
    var right = 0;
    state.instances.forEach(function (inst) {
      var ok = C.isCorrect(inst);
      inst.ok = ok;
      if (ok) right++;
      var pd = perDomain[inst.domain] || (perDomain[inst.domain] = { right: 0, total: 0 });
      pd.total++;
      if (ok) pd.right++;
    });
    var pct = Math.round(100 * right / state.instances.length);
    var hist = C.store.get("exam.history", []);
    hist.unshift({ date: Date.now(), n: state.instances.length, pct: pct });
    C.store.set("exam.history", hist.slice(0, 50));
    C.store.remove("exam.active");
    renderResults(right, pct, perDomain, timedOut);
  }

  function renderResults(right, pct, perDomain, timedOut) {
    var n = state.instances.length;
    var ready = pct >= READY_TARGET;
    var html = (timedOut ? '<p class="notice">Time expired.</p>' : "") +
      '<div class="score-big ' + (ready ? "good-text" : "bad-text") + '">' + pct + "%</div>" +
      '<p class="center">' + right + " / " + n + " correct</p>" +
      "<h3>Score by domain</h3><div class=\"bars\">" +
      Object.keys(perDomain).sort().map(function (d) {
        var p = perDomain[d];
        var dp = Math.round(100 * p.right / p.total);
        return '<div class="bar-row"><div class="bar-label">' + C.esc(C.domainLabel(d)) + '</div><div class="bar"><div class="bar-fill ' +
          (dp >= READY_TARGET ? "good-bg" : "bad-bg") + '" style="width:' + dp + '%"></div></div><div class="bar-val">' +
          p.right + "/" + p.total + " (" + dp + "%)</div></div>";
      }).join("") + "</div>";
    $("#exam-results-summary").html(html);
    $("#exam-show-all").prop("checked", false);
    renderResultList();
    show("results");
  }

  function renderResultList() {
    var showAll = $("#exam-show-all").is(":checked");
    var html = "";
    state.instances.forEach(function (inst, i) {
      if (inst.ok && !showAll) return;
      html += '<div class="card result ' + (inst.ok ? "is-right" : "is-wrong") + '"><div class="result-head">Question ' + (i + 1) +
        " — " + (inst.ok ? "Correct" : "Incorrect") + "</div>" + C.renderGraded(inst, { showStem: true }) + "</div>";
    });
    $("#exam-result-list").html(html || '<p class="center">No incorrect answers.</p>');
  }

  function init() {
    $("#exam-start").on("click", start);
    $("#exam-resume-btn").on("click", run);
    $("#exam-prev").on("click", function () { go(-1); });
    $("#exam-next").on("click", function () { go(1); });
    $("#exam-to-review").on("click", renderReview);
    $("#exam-flag").on("change", function () {
      var i = state.current;
      var at = state.flags.indexOf(i);
      if (this.checked && at < 0) state.flags.push(i);
      if (!this.checked && at >= 0) state.flags.splice(at, 1);
      save();
    });
    $("#exam-grid").on("click", ".grid-cell", function () {
      state.current = +$(this).data("i");
      show("run");
      renderCurrent();
    });
    $("#exam-back").on("click", function () { show("run"); renderCurrent(); });
    // Two-step submit instead of a browser confirm() dialog.
    $("#exam-submit").on("click", function () {
      if (!confirmArmed) {
        confirmArmed = true;
        $(this).text("Confirm submit");
        return;
      }
      submit(false);
    });
    $("#exam-show-all").on("change", renderResultList);
    $("#exam-new").on("click", renderSetup);
  }

  // Keep whatever part is on screen (a running exam or results); show setup on the first visit.
  function enter() {
    if (!$("#exam-setup, #exam-run, #exam-review, #exam-results").not(".hidden").length) renderSetup();
  }

  return { init: init, enter: enter };
})();
