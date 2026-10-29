// Hash router and home page.
$(function () {
  var C = Core;
  var VIEWS = { home: renderHome, concepts: Concepts.enter, exam: Exam.enter, practice: Practice.enter, flash: Flash.enter };

  function renderHome() {
    var counts = {};
    QBANK.items.forEach(function (q) { counts[q.domain] = (counts[q.domain] || 0) + 1; });
    var cardCounts = {};
    FCBANK.items.forEach(function (c) { cardCounts[c.domain] = (cardCounts[c.domain] || 0) + 1; });
    $("#home-bank").html(
      "<tr><th>Domain</th><th>Exam weight</th><th>Questions</th><th>Flashcards</th></tr>" +
      DOMAIN_IDS.map(function (d) {
        return "<tr><td>" + C.esc(C.domainLabel(d)) + "</td><td>" + DOMAINS[d].weight + "%</td><td>" +
          (counts[d] || 0) + "</td><td>" + (cardCounts[d] || 0) + "</td></tr>";
      }).join("") +
      "<tr class=\"total\"><td>Total</td><td>100%</td><td>" + QBANK.items.length + "</td><td>" + FCBANK.items.length + "</td></tr>"
    );
    var hist = C.store.get("exam.history", []);
    var life = C.store.get("practice.lifetime", { answered: 0, right: 0 });
    var bits = [];
    if (hist.length) bits.push("Last timed exam: <b>" + hist[0].pct + "%</b> (" + hist[0].n + " questions)");
    if (life.answered) bits.push("Practice all-time: <b>" + life.right + "/" + life.answered + "</b> (" + Math.round(100 * life.right / life.answered) + "%)");
    $("#home-progress").html(bits.join(" · "));
  }

  function route() {
    var name = (location.hash || "#home").slice(1);
    if (!VIEWS[name]) name = "home";
    $(".view").addClass("hidden");
    $("#view-" + name).removeClass("hidden");
    $("nav a").removeClass("active").filter('[href="#' + name + '"]').addClass("active");
    VIEWS[name]();
  }

  Exam.init();
  Practice.init();
  Flash.init();
  Concepts.init();
  $(window).on("hashchange", route);
  route();
});
