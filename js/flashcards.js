// Flashcards: click (or Space) to flip; choose term-first, definition-first, or mixed.
var Flash = (function () {
  var C = Core;
  var prefs = C.store.get("flash.prefs", { mode: "term", domain: "all", group: "all", hideKnown: false });
  var known = C.store.get("flash.known", {});
  var cards = [];
  var pos = 0;
  var termFront = true;

  function filtered() {
    return FCBANK.items.filter(function (c) {
      return (prefs.domain === "all" || c.domain === +prefs.domain) &&
        (prefs.group === "all" || c.group === prefs.group) &&
        !(prefs.hideKnown && known[c.term]);
    });
  }

  function savePrefs() { C.store.set("flash.prefs", prefs); }

  function renderGroups() {
    var groups = {};
    FCBANK.items.forEach(function (c) {
      if (prefs.domain === "all" || c.domain === +prefs.domain) groups[c.group] = (groups[c.group] || 0) + 1;
    });
    if (prefs.group !== "all" && !groups[prefs.group]) prefs.group = "all";
    $("#f-group").html('<option value="all">All groups</option>' + Object.keys(groups).sort().map(function (g) {
      return '<option value="' + C.esc(g) + '"' + (g === prefs.group ? " selected" : "") + ">" + C.esc(g) + " (" + groups[g] + ")</option>";
    }).join(""));
  }

  function deal() {
    cards = C.shuffle(filtered());
    pos = 0;
    renderCard();
  }

  function renderCard() {
    var total = FCBANK.items.length;
    var knownCount = Object.keys(known).length;
    $("#f-known-count").text(knownCount + " of " + total + " marked known");
    var $card = $("#f-card").removeClass("flipped");
    if (!cards.length) {
      $("#f-front").html('<div class="f-text">No cards match these filters.</div>');
      $("#f-back").empty();
      $("#f-pos").text("0 / 0");
      return;
    }
    var c = cards[pos];
    termFront = prefs.mode === "term" || (prefs.mode === "mixed" && Math.random() < 0.5);
    var label = '<div class="f-label">D' + c.domain + " · " + C.esc(c.group) + (known[c.term] ? " · ✔ known" : "") + "</div>";
    var termHtml = '<div class="f-text f-term">' + C.esc(c.term) + "</div>";
    var defHtml = '<div class="f-text f-def">' + C.esc(c.def) + "</div>";
    // The expansion would give the answer away, so it only shows on the back.
    var fullHtml = c.full ? '<div class="f-text f-full">' + C.esc(c.full) + "</div>" : "";
    var refHtml = '<a class="f-ref" href="' + C.esc(c.ref.url) + '" target="_blank" rel="noopener">Source: ' + C.esc(c.ref.title) + "</a>";
    $("#f-front").html(label + (termFront ? termHtml : defHtml));
    $("#f-back").html(label + (termFront ? fullHtml + defHtml : termHtml + fullHtml) + refHtml);
    $("#f-pos").text((pos + 1) + " / " + cards.length);
    $card.attr("aria-label", "Flashcard. Front: " + (termFront ? c.term : c.def));
  }

  function flip() { $("#f-card").toggleClass("flipped"); }

  function move(delta) {
    if (!cards.length) return;
    pos = (pos + delta + cards.length) % cards.length;
    renderCard();
  }

  function mark(isKnown) {
    if (!cards.length) return;
    var c = cards[pos];
    if (isKnown) known[c.term] = true; else delete known[c.term];
    C.store.set("flash.known", known);
    if (!isKnown) {
      // "Again" puts the card back a few places ahead so it comes around soon.
      var again = cards.splice(pos, 1)[0];
      cards.splice(Math.min(cards.length, pos + 3), 0, again);
      return renderCard();
    }
    if (prefs.hideKnown) {
      cards.splice(pos, 1);
      if (pos >= cards.length) pos = 0;
      return renderCard();
    }
    move(1);
  }

  function init() {
    $("#f-domain").append(DOMAIN_IDS.map(function (d) {
      return '<option value="' + d + '">D' + d + " " + C.esc(DOMAINS[d].name) + "</option>";
    }).join(""));
    $("#f-mode").val(prefs.mode);
    $("#f-domain").val(prefs.domain);
    $("#f-hide-known").prop("checked", prefs.hideKnown);
    renderGroups();

    $("#f-mode").on("change", function () { prefs.mode = this.value; savePrefs(); renderCard(); });
    $("#f-domain").on("change", function () { prefs.domain = this.value; renderGroups(); savePrefs(); deal(); });
    $("#f-group").on("change", function () { prefs.group = this.value; savePrefs(); deal(); });
    $("#f-hide-known").on("change", function () { prefs.hideKnown = this.checked; savePrefs(); deal(); });
    $("#f-shuffle").on("click", deal);
    $("#f-reset-known").on("click", function () { known = {}; C.store.set("flash.known", known); deal(); });
    $("#f-card").on("click", function (e) { if (!$(e.target).is("a")) flip(); });
    $("#f-prev").on("click", function () { move(-1); });
    $("#f-next").on("click", function () { move(1); });
    $("#f-again").on("click", function () { mark(false); });
    $("#f-got").on("click", function () { mark(true); });
    // After a mouse click (detail > 0), move focus to the card so Space flips it instead of clicking the button again.
    $("#view-flash .row").on("click", "button", function (e) { if (e.detail) $("#f-card").trigger("focus"); });
    // Keyboard: Space/Enter flip, arrows move, 1 = again, 2 = got it.
    $(document).on("keydown", function (e) {
      if (!$("#view-flash").is(":visible") || e.ctrlKey || e.metaKey || e.altKey || $(e.target).is("select, input, textarea, a")) return;
      if (e.key === " " || e.key === "Enter") {
        // A focused button keeps its own Space/Enter action.
        if ($(e.target).is("button")) return;
        e.preventDefault();
        flip();
      }
      else if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
      else if (e.key === "1") mark(false);
      else if (e.key === "2") mark(true);
    });
  }

  function enter() { if (!cards.length) deal(); }

  return { init: init, enter: enter };
})();
