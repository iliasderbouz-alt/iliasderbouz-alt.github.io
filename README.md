# Ilias Derbouz — Personal Site

Static site, no build step. Built from `Ilias_Derbouz_CV.pdf`.

## Preview locally

```
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy

Any static host works as-is — drag-and-drop onto Netlify, or push to a repo and enable GitHub Pages. No build command needed; `index.html` is the entry point.

## Structure

- `index.html` — the page
- `css/styles.css` — all styling
- `js/main.js` — mobile nav + active-section highlighting
- `assets/headshot.jpg` — photo (extracted from the CV)
- `assets/Ilias_Derbouz_CV.pdf` — the CV, linked from the "Download CV" buttons
- `assets/favicon.svg` — browser tab icon

## Known placeholder decisions (see `plans/cv/initial-build.md`)

- Referee emails from the CV are not published publicly — names/titles only, "available on request." Easy to change.
- Navy + gold color scheme and general layout are a first pass; the design phase (next) will revisit this properly.
