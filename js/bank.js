// Global registries that the data files push into.
// Data files are plain <script> files (not JSON) so the app works from file:// with no server.
window.QBANK = {
  items: [],
  add: function (list) { this.items.push.apply(this.items, list); }
};

window.FCBANK = {
  items: [],
  add: function (list) { this.items.push.apply(this.items, list); }
};

// SY0-701 domains and their official exam weights.
window.DOMAINS = {
  1: { name: "General Security Concepts", weight: 12 },
  2: { name: "Threats, Vulnerabilities, and Mitigations", weight: 22 },
  3: { name: "Security Architecture", weight: 18 },
  4: { name: "Security Operations", weight: 28 },
  5: { name: "Security Program Management and Oversight", weight: 20 }
};
window.DOMAIN_IDS = Object.keys(window.DOMAINS).map(Number);

// Concepts syllabus: one entry per exam objective.
window.CONCEPTS = {
  items: [],
  add: function (list) { this.items.push.apply(this.items, list); }
};
