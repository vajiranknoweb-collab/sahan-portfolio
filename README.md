# Sahan Chathuranga Ranasinghe — Portfolio

Premium single-page portfolio prototype. Content is centralized in `js/content.js`. Layout renders from that object so copy, metrics, links and image paths can change without rewriting sections.

## Run

```bash
python -m http.server 4173
```

Or:

```bash
npm start
```

Open [http://localhost:4173](http://localhost:4173).

## Checks

```bash
python tools/check.py
```

## Replace placeholders

Development diagrams are clearly labeled. Drop authentic files into:

- `assets/images/portrait/` — professional portrait
- `assets/images/sanota/` — workshop / machinery photography
- `assets/images/agriculture/` — processing plant photography
- `assets/images/smart-drain/` — product / team photography
- `assets/images/covid/` — invention photographs or original diagrams
- `assets/images/awards/` — authentic recognition photography only
- `assets/images/ventures/` — venture imagery and logos

Then update the matching `src` paths in `js/content.js` and set `placeholder: false`.

Do not add invented awards, patents, clients, quotations or certificate mockups.

## Stack

HTML5, Tailwind CSS (CDN), custom CSS tokens, and a small amount of vanilla JavaScript for navigation, counters, timeline progress, the case-study dialog, map focus and the mailto form.
