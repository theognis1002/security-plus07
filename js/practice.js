// Endless practice: untimed, random questions with instant feedback; missed questions come back later.
var Practice = (function () {
  var C = Core;
  var CARD_QUESTION_RATE = 0.25;
  var settings = C.store.get("practice.settings", { domains: DOMAIN_IDS.slice(), useCards: true });
  var deck = [];
  var retry = [];
  var lastId = null;
  var inst = null;
  var graded = false;
  var session = freshSession();

  function freshSession() { return { answered: 0, right: 0, streak: 0, best: 0, perDomain: {} }; }

  function eligibleQuestions() {
    return QBANK.items.filter(function (q) { return settings.domains.indexOf(q.domain) >= 0; });
  }

  function eligibleCards() {
    var counts = {};
    FCBANK.items.forEach(function (c) { counts[c.group] = (counts[c.group] || 0) + 1; });
    return FCBANK.items.filter(function (c) { return settings.domains.indexOf(c.domain) >= 0 && counts[c.group] >= 4; });
  }

  function instanceFor(entry) {
    if (entry.kind === "card") {
      var card = FCBANK.items.filter(function (c) { return c.term === entry.id; })[0];
      return card && C.makeCardInstance(card, FCBANK.items);
    }
    var q = C.questionById(entry.id);
    return q && C.makeInstance(q);
  }

  function nextInstance() {
    // Missed questions return a few questions later, with a new wording and answer order.
    for (var i = 0; i < retry.length; i++) {
      if (retry[i].due <= session.answered) {
        var due = retry.splice(i--, 1)[0];
        var again = instanceFor(due);
        if (again) { again.retry = true; return again; }
      }
    }
    var cards = settings.useCards ? eligibleCards() : [];
    if (cards.length && Math.random() < CARD_QUESTION_RATE) {
      var ci = C.makeCardInstance(C.pick(cards), FCBANK.items);
      if (ci) return ci;
    }
    if (!deck.length) {
      deck = C.shuffle(eligibleQuestions().map(function (q) { return q.id; }));
      if (deck.length > 1 && deck[deck.length - 1] === lastId) deck.unshift(deck.pop());
    }
    if (!deck.length) return null;
    lastId = deck.pop();
    return C.makeInstance(C.questionById(lastId));
  }

  function renderScore() {
    var pct = session.answered ? Math.round(100 * session.right / session.answered) : 0;
    $("#p-answered").text(session.answered);
    $("#p-right").text(session.right);
    $("#p-pct").text(session.answered ? pct + "%" : "–");
    $("#p-streak").text(session.streak);
    $("#p-best").text(session.best);
    var rows = Object.keys(session.perDomain).sort().map(function (d) {
      var p = session.perDomain[d];
      return "<span class=\"chip\">D" + d + ": " + p.right + "/" + p.total + "</span>";
    }).join(" ");
    $("#p-domains").html(rows);
  }

  function showNext() {
    inst = nextInstance();
    graded = false;
    if (!inst) {
      $("#p-question").html("<p>Select at least one domain.</p>");
      $("#p-submit").prop("disabled", true);
      return;
    }
    C.renderQuestion($("#p-question"), inst, function () { $("#p-submit").prop("disabled", !C.isAnswered(inst)); });
    if (inst.retry) $("#p-question").prepend('<div class="retry-tag">Missed earlier</div>');
    $("#p-submit").text("Submit answer").prop("disabled", true);
  }

  function grade() {
    graded = true;
    var ok = C.isCorrect(inst);
    session.answered++;
    var pd = session.perDomain[inst.domain] || (session.perDomain[inst.domain] = { right: 0, total: 0 });
    pd.total++;
    if (ok) {
      session.right++;
      pd.right++;
      session.streak++;
      session.best = Math.max(session.best, session.streak);
    } else {
      session.streak = 0;
      retry.push({ kind: inst.generated ? "card" : "q", id: inst.generated ? inst.card.term : inst.qid, due: session.answered + 4 + Math.floor(Math.random() * 6) });
    }
    var life = C.store.get("practice.lifetime", { answered: 0, right: 0 });
    life.answered++;
    if (ok) life.right++;
    C.store.set("practice.lifetime", life);

    // Replace the question with its graded view so the options are not shown twice.
    $("#p-question").html(
      '<div class="verdict ' + (ok ? "good-text" : "bad-text") + '">' + (ok ? "✔ Correct" : "✘ Incorrect") + "</div>" +
      C.renderGraded(inst, { showStem: true, collapseWhenRight: true })
    );
    $("#p-submit").text("Next question").prop("disabled", false).trigger("focus");
    renderScore();
  }

  function renderSettings() {
    $("#p-domain-boxes").html(DOMAIN_IDS.map(function (d) {
      return '<label class="chk"><input type="checkbox" value="' + d + '"' + (settings.domains.indexOf(d) >= 0 ? " checked" : "") +
        "> D" + d + " " + C.esc(DOMAINS[d].name) + "</label>";
    }).join(""));
    $("#p-use-cards").prop("checked", settings.useCards);
  }

  function settingsChanged() {
    settings.domains = $("#p-domain-boxes input:checked").map(function () { return +this.value; }).get();
    settings.useCards = $("#p-use-cards").is(":checked");
    C.store.set("practice.settings", settings);
    deck = [];
    retry = [];
    showNext();
  }

  function init() {
    renderSettings();
    $("#p-domain-boxes").on("change", "input", settingsChanged);
    $("#p-use-cards").on("change", settingsChanged);
    $("#p-submit").on("click", function () { if (graded) showNext(); else if (C.isAnswered(inst)) grade(); });
    $("#p-skip").on("click", showNext);
    $("#p-reset").on("click", function () { session = freshSession(); retry = []; renderScore(); showNext(); });
    // Keyboard: 1-6 pick an option, Enter submits or moves to the next question.
    $(document).on("keydown", function (e) {
      if (!$("#view-practice").is(":visible") || e.ctrlKey || e.metaKey || e.altKey || $(e.target).is("select, textarea, a")) return;
      if (e.key === "Enter") {
        // A focused button or <summary> keeps its own Enter action (Skip, Reset, settings toggle).
        if ($(e.target).is("button, summary")) return;
        e.preventDefault();
        $("#p-submit:enabled").trigger("click");
        return;
      }
      var n = parseInt(e.key, 10);
      if (!graded && n >= 1 && n <= 6) {
        var $in = $("#p-question .opt input").eq(n - 1);
        if ($in.length) $in.prop("checked", $in.is(":radio") ? true : !$in.prop("checked")).trigger("change");
      }
    });
  }

  function enter() {
    if (!inst) showNext();
    renderScore();
  }

  return { init: init, enter: enter };
})();
