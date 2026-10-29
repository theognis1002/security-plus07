# Security+ SY0-701 Practice

A small, offline study app for the CompTIA Security+ **SY0-701** exam. It is plain HTML, CSS, and JavaScript (jQuery). It has no build step and no server.

## Run it

Open `index.html` in a browser. Double-click works (`file://`). If you prefer a local server:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Features

| Page | What it does |
| --- | --- |
| **Concepts** | A short syllabus for each domain: one card per exam objective, with the key terms and reference links. |
| **Timed Exam** | Full (90 Q / 90 min), half (45 / 45), or quick (20 / 20). Questions follow the official domain weights. Performance-based (matching) questions come first, like the real exam. You can flag questions, use a review grid, and submit early; the exam auto-submits when time runs out. The results page shows a score by domain, and every missed question has its explanation, a hint, and reference links. A refresh in the middle of an exam does not lose it: use **Resume exam**. |
| **Endless Practice** | Untimed and never-ending. You get instant feedback after each answer. A wrong answer shows the explanation, a hint, and references. Missed questions come back 4–9 questions later, with a different wording and answer order. Filter by domain. Optional term questions are built from the flashcards. The page tracks score, streak, and per-domain results. Keys: `1`–`6` select, `Enter` submits or goes to the next question. |
| **Flashcards** | Click (or press `Space`) to flip. You can show the term first, the definition first, or a random side. Filter by domain and group. Mark cards **Again** or **Got it**, and optionally hide known cards. Keys: arrows move, `1` again, `2` got it. |

### How the app limits memorization

- Each bank question has **2–4 different wordings (stems)** of the same concept. The app picks one at random.
- Each single-answer question has a **pool of wrong answers**. The app picks 3 at random and shuffles all options.
- Endless practice also mixes in **generated term questions**. They ask "term → definition" or "definition → term", and the wrong answers come from the same flashcard group.

### Exam facts used

- Up to 90 questions, 90 minutes, and a passing score of 750 on a scale of 100–900.
- Domain weights: 1 General Security Concepts 12%, 2 Threats, Vulnerabilities, and Mitigations 22%, 3 Security Architecture 18%, 4 Security Operations 28%, 5 Security Program Management and Oversight 20%.
- CompTIA does not publish the raw-to-scaled score conversion. The app shows a percentage, and it uses 85% as a "ready" target. This target is a study guide, not an official cut score.

## Project layout

```
index.html                 all pages (hash routes: #home #concepts #exam #practice #flash)
css/style.css              styles (light and dark)
js/bank.js                 QBANK / FCBANK registries and the domain weights
js/core.js                 shuffle, storage, question instances, rendering, scoring
js/exam.js                 timed exam
js/practice.js             endless practice
js/flashcards.js           flashcards
js/concepts.js             concepts syllabus
js/app.js                  router and home page
js/vendor/                 jQuery 3.7.1 (local copy, so the app works offline)
data/questions/d1-*.js … d5-*.js   question bank, one file per domain
data/flashcards.js         flashcards
data/concepts.js           concepts syllabus (one entry per objective)
tools/validate.js          data validator and link checker
tools/vetted-urls.txt      reference URLs that were checked
```

Progress (exam history, practice totals, known flashcards, and settings) is kept in your browser's `localStorage`.

## Add questions

Add objects to the array in the correct `data/questions/dN-*.js` file. Use a new, unique `id`.

```js
{
  id: "d4-086",                 // unique; prefix = domain
  domain: 4,                    // 1-5
  objective: "4.5",             // a real SY0-701 objective number in that domain
  topic: "DNS filtering",
  type: "single",               // "single" | "multi" | "match"
  stems: [                      // 2-4 different wordings of the SAME concept
    "Scenario wording one ... Which of the following ...?",
    "Different scenario wording ... Which of the following ...?"
  ],
  correct: ["Right answer"],    // single: exactly 1. multi: 2-3 (the app adds "(Choose two.)")
  wrong: ["Wrong 1", "Wrong 2", "Wrong 3", "Wrong 4"],  // single: 3+ (3 are picked at random). multi: 5+ options in total
  explanation: "Why the right answer is right, and why the main distractors are wrong.",
  hint: "The keyword clue or memory trick.",
  refs: [{ title: "Source name", url: "https://..." }]   // 1-3 authoritative sources
}
```

Matching (performance-based) questions use `pairs` instead of `correct`/`wrong`:

```js
{
  id: "d4-087", domain: 4, objective: "4.8", topic: "IR phases", type: "match",
  stems: ["Match each activity with its incident response phase."],
  pairs: [ { item: "Isolate the host", answer: "Containment" }, { item: "...", answer: "..." } ],
  extraOptions: ["Optional extra wrong choice"],
  explanation: "...", hint: "...", refs: [ ... ]
}
```

Flashcards go in `data/flashcards.js`:

```js
{ term: "SPF", full: "Sender Policy Framework", def: "A DNS TXT record that lists ...", domain: 4,
  group: "Email security", ref: { title: "RFC 7208", url: "https://www.rfc-editor.org/rfc/rfc7208" } }
```

Rules for flashcards:

- `group` must hold the same kind of thing, with at least 4 cards. Cards in a group are used as wrong answers for each other.
- `def` must not contain the term text.
- Put an acronym's expansion in `full`, not in `def`. The expansion gives the answer away, so the app shows it only on the back of the card and in the explanation.

Concepts go in `data/concepts.js`, one entry per objective:

```js
{ domain: 4, objective: "4.5", title: "Enhancing enterprise security",
  points: [["DNS filtering", "Block known-bad domains when they are resolved."]],
  refs: [{ title: "Source name", url: "https://..." }] }
```

To add a new data file, add a `<script>` tag for it in `index.html`, next to the other data files.

## Validate after you edit

```sh
node tools/validate.js            # schema, ids, objectives, duplicates
node tools/validate.js --links    # also checks that every reference URL resolves
```

The validator checks these things:

- Every question has 2+ wordings, enough wrong answers, no duplicate options, and a valid SY0-701 objective.
- Every flashcard group has 4+ cards, and no definition contains its term or spells out its acronym.
- Every reference URL resolves. With `--links`, hhs.gov and iso.org can return 403 to scripts; these are reported as warnings, so check them in a browser.

## Sources

The questions and flashcards cite primary sources: NIST CSRC (glossary, SP 800 series, FIPS), IETF RFCs, OWASP, MITRE ATT&CK, CISA, FIRST CVSS, and others. They also link learning material, such as the [Professor Messer SY0-701 course](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/). The official objectives are on [CompTIA's Security+ page](https://www.comptia.org/certifications/security).

This is an unofficial study aid. It is not affiliated with CompTIA.
