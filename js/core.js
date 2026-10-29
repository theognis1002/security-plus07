// Shared helpers: randomness, storage, question instances, rendering, and scoring.
var Core = (function () {
  var LETTERS = "ABCDEFGH";
  var NUM_WORDS = { 2: "two", 3: "three" };
  // Radios with the same name form one group across the whole document, so each render gets its own name.
  var renderSeq = 0;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sample(arr, n) { return shuffle(arr).slice(0, n); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // localStorage can throw (private mode, blocked storage), so every access is guarded.
  var store = {
    get: function (key, fallback) {
      try {
        var v = localStorage.getItem("secplus." + key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem("secplus." + key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
    remove: function (key) {
      try { localStorage.removeItem("secplus." + key); } catch (e) { /* ignore */ }
    }
  };

  var byId = null;
  function questionById(id) {
    if (!byId) {
      byId = {};
      QBANK.items.forEach(function (q) { byId[q.id] = q; });
    }
    return byId[id];
  }

  // Build one randomized presentation of a bank question: random stem, random distractors, random order.
  function makeInstance(q) {
    var inst = { qid: q.id, type: q.type, domain: q.domain, objective: q.objective, topic: q.topic, stem: pick(q.stems) };
    if (q.type === "single") {
      inst.options = shuffle([q.correct[0]].concat(sample(q.wrong, 3)));
      inst.correct = [q.correct[0]];
    } else if (q.type === "multi") {
      var nWrong = Math.min(q.wrong.length, 6 - q.correct.length);
      inst.options = shuffle(q.correct.concat(sample(q.wrong, nWrong)));
      inst.correct = q.correct.slice();
      inst.stem += " (Choose " + NUM_WORDS[q.correct.length] + ".)";
    } else {
      inst.pairs = shuffle(q.pairs);
      var answers = {};
      q.pairs.forEach(function (p) { answers[p.answer] = true; });
      (q.extraOptions || []).forEach(function (o) { answers[o] = true; });
      inst.options = shuffle(Object.keys(answers));
    }
    inst.response = q.type === "match" ? {} : [];
    return inst;
  }

  // Build a question from a flashcard, using other cards in the same group as distractors.
  function makeCardInstance(card, cards) {
    var peers = cards.filter(function (c) { return c.group === card.group && c.term !== card.term; });
    if (peers.length < 3) return null;
    var others = sample(peers, 3);
    var askTerm = Math.random() < 0.5;
    var inst = {
      qid: "card:" + card.term, type: "single", domain: card.domain, objective: "", topic: card.group,
      generated: true, card: card, response: []
    };
    if (askTerm) {
      inst.stem = pick([
        "Which of the following terms best matches this description?\n\n",
        "A security team uses the following description in its documentation. Which of the following is being described?\n\n",
        "Which of the following is defined as:\n\n"
      ]) + card.def;
      inst.correct = [card.term];
      inst.options = shuffle([card.term].concat(others.map(function (c) { return c.term; })));
    } else {
      inst.stem = pick([
        "Which of the following best describes " + card.term + "?",
        "A junior analyst asks what " + card.term + " means. Which of the following is the best explanation?",
        "Which of the following statements about " + card.term + " is correct?"
      ]);
      inst.correct = [card.def];
      inst.options = shuffle([card.def].concat(others.map(function (c) { return c.def; })));
    }
    inst.others = others;
    return inst;
  }

  // Details for feedback and review: explanation, hint, and references.
  function details(inst) {
    if (inst.generated) {
      var c = inst.card;
      return {
        explanation: c.term + (c.full ? " (" + c.full + ")" : "") + ": " + c.def,
        hint: "Compare with: " + inst.others.map(function (o) { return o.term; }).join(", "),
        refs: [c.ref]
      };
    }
    // A saved exam can outlive a question that was later removed or renamed in the bank.
    var q = questionById(inst.qid);
    if (!q) return { explanation: "This question is no longer in the bank.", hint: "", refs: [] };
    return { explanation: q.explanation, hint: q.hint, refs: q.refs };
  }

  function isAnswered(inst) {
    if (inst.type === "match") return Object.keys(inst.response).length > 0;
    return inst.response.length > 0;
  }

  function matchScore(inst) {
    var right = 0;
    inst.pairs.forEach(function (p) { if (inst.response[p.item] === p.answer) right++; });
    return { right: right, total: inst.pairs.length };
  }

  function isCorrect(inst) {
    if (inst.type === "match") {
      var s = matchScore(inst);
      return s.right === s.total;
    }
    var got = inst.response.slice().sort();
    var want = inst.correct.slice().sort();
    return got.length === want.length && got.every(function (v, i) { return v === want[i]; });
  }

  function domainLabel(d) { return "Domain " + d + ": " + DOMAINS[d].name; }

  function metaLine(inst) {
    var bits = [domainLabel(inst.domain)];
    if (inst.objective) bits.push("Objective " + inst.objective);
    if (inst.type === "match") bits.push("Performance-based (simulation)");
    if (inst.generated) bits.push("Term review");
    return bits.join(" · ");
  }

  // Render an answerable question into $el. onChange fires after each selection.
  function renderQuestion($el, inst, onChange) {
    var html = '<div class="q-meta">' + esc(metaLine(inst)) + "</div>";
    html += '<div class="q-stem">' + esc(inst.stem) + "</div>";
    if (inst.type === "match") {
      html += '<table class="match"><tbody>';
      inst.pairs.forEach(function (p, i) {
        html += "<tr><td>" + esc(p.item) + '</td><td><select data-item="' + i + '"><option value="">— Select —</option>';
        inst.options.forEach(function (o) {
          var sel = inst.response[p.item] === o ? " selected" : "";
          html += '<option value="' + esc(o) + '"' + sel + ">" + esc(o) + "</option>";
        });
        html += "</select></td></tr>";
      });
      html += "</tbody></table>";
    } else {
      var inputType = inst.type === "multi" ? "checkbox" : "radio";
      var groupName = "opt-" + (++renderSeq);
      html += '<div class="options">';
      inst.options.forEach(function (o, i) {
        var checked = inst.response.indexOf(o) >= 0 ? " checked" : "";
        html += '<label class="opt"><input type="' + inputType + '" name="' + groupName + '" value="' + i + '"' + checked + ">" +
          '<span class="letter">' + LETTERS[i] + ".</span><span>" + esc(o) + "</span></label>";
      });
      html += "</div>";
    }
    $el.html(html);

    $el.find("select").on("change", function () {
      var p = inst.pairs[+$(this).data("item")];
      if (this.value) inst.response[p.item] = this.value; else delete inst.response[p.item];
      if (onChange) onChange();
    });
    $el.find(".opt input").on("change", function () {
      inst.response = $el.find(".opt input:checked").map(function () { return inst.options[+this.value]; }).get();
      if (onChange) onChange();
    });
  }

  // Render a graded view: correct answers, the user's choices, explanation, hint, and references.
  function renderGraded(inst, opts) {
    opts = opts || {};
    var ok = isCorrect(inst);
    var d = details(inst);
    var html = "";
    if (opts.showStem) {
      html += '<div class="q-meta">' + esc(metaLine(inst)) + "</div>";
      html += '<div class="q-stem">' + esc(inst.stem) + "</div>";
    }
    if (inst.type === "match") {
      html += '<table class="match graded"><tbody>';
      inst.pairs.forEach(function (p) {
        var got = inst.response[p.item];
        var right = got === p.answer;
        html += '<tr class="' + (right ? "good" : "bad") + '"><td>' + esc(p.item) + "</td><td>" +
          (right ? "✔ " + esc(p.answer)
            : "✘ " + (got ? esc(got) : "<em>(no answer)</em>") + ' <span class="fix">→ ' + esc(p.answer) + "</span>") +
          "</td></tr>";
      });
      html += "</tbody></table>";
      var s = matchScore(inst);
      html += '<div class="small">' + s.right + " of " + s.total + " matched correctly.</div>";
    } else {
      html += '<div class="options graded">';
      inst.options.forEach(function (o, i) {
        var isRight = inst.correct.indexOf(o) >= 0;
        var chosen = inst.response.indexOf(o) >= 0;
        var cls = isRight ? "good" : chosen ? "bad" : "";
        var tag = isRight && chosen ? "Correct — your answer" : isRight ? "Correct answer" : chosen ? "Your answer" : "";
        html += '<div class="opt ' + cls + '"><span class="letter">' + LETTERS[i] + ".</span><span>" + esc(o) + "</span>" +
          (tag ? '<span class="tag">' + tag + "</span>" : "") + "</div>";
      });
      html += "</div>";
    }

    var body = '<div class="explain"><h4>Explanation</h4><p>' + esc(d.explanation) + "</p>" +
      '<h4>Hint for next time</h4><p class="hint">' + esc(d.hint) + "</p>" +
      "<h4>References &amp; learning material</h4><ul class=\"refs\">" +
      d.refs.map(function (r) {
        return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + "</a></li>";
      }).join("") + "</ul></div>";

    if (ok && opts.collapseWhenRight) {
      html += '<details class="explain-wrap"><summary>Show explanation and references</summary>' + body + "</details>";
    } else {
      html += body;
    }
    return html;
  }

  return {
    shuffle: shuffle, sample: sample, pick: pick, esc: esc, store: store,
    questionById: questionById, makeInstance: makeInstance, makeCardInstance: makeCardInstance,
    isAnswered: isAnswered, isCorrect: isCorrect, domainLabel: domainLabel,
    renderQuestion: renderQuestion, renderGraded: renderGraded
  };
})();
