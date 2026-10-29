// Concepts: a readable syllabus of key points per objective, filtered by domain.
var Concepts = (function () {
  var C = Core;
  var current = C.store.get("concepts.domain", 1);

  function render() {
    $("#c-tabs").html(DOMAIN_IDS.map(function (d) {
      return '<button class="tab' + (d === current ? " active" : "") + '" data-d="' + d + '">D' + d + "</button>";
    }).join(""));
    var html = "<h1>" + C.esc(C.domainLabel(current)) + ' <span class="weight">' + DOMAINS[current].weight + "%</span></h1>";
    CONCEPTS.items.filter(function (o) { return o.domain === current; }).forEach(function (o) {
      html += '<div class="card concept"><h2>' + C.esc(o.objective + " " + o.title) + "</h2><ul>" +
        o.points.map(function (p) { return "<li><b>" + C.esc(p[0]) + "</b> — " + C.esc(p[1]) + "</li>"; }).join("") +
        '</ul><div class="concept-refs">' +
        o.refs.map(function (r) { return '<a href="' + C.esc(r.url) + '" target="_blank" rel="noopener">' + C.esc(r.title) + "</a>"; }).join(" · ") +
        "</div></div>";
    });
    $("#c-body").html(html);
  }

  function init() {
    $("#c-tabs").on("click", ".tab", function () {
      current = +$(this).data("d");
      C.store.set("concepts.domain", current);
      render();
      window.scrollTo(0, 0);
    });
  }

  return { init: init, enter: render };
})();
