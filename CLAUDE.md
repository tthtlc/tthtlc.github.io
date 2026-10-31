# Project conventions

## Index, data, and home pages — freshness rule

The site's shell pages and data files must never sit more than 1 day stale. Whenever you work in this repo,
check each file below and bring it up to date before finishing if its mtime is older than 1 day:

```bash
find index*.html _data -type f -mtime +1
```

**Files covered**
- Main/home page: `index.html`
- Index/shell pages: `index_all.html`, `index_gallery.html`, `index_search.html`, `index_spa.html`,
  `index_todo.html`, `index_discussion.html` (and the standalone utility `index_object_generator.html`,
  which is not driven by `_data`)
- `_data/*`: `visualizations.yml`, `visualization_categories.yml`, `recent_pages.yml`, `navigation.yml`

**How to update each**
- `_data/visualizations.yml` — the master list of every visualization page. Reconcile it against the `.html`
  files actually on disk (add any new page, remove any deleted page, keep it alphabetically sorted).
- `_data/visualization_categories.yml` — regenerate: `python3 scripts/categorize_visualizations.py`.
- `_data/recent_pages.yml` — regenerate: `python3 scripts/generate_recent_pages.py`.
- `_data/navigation.yml` — review for stale or broken links.
- Index/shell pages — these are Jekyll templates that read `site.data.*` at build time, so keeping the data
  files fresh is what keeps them current; also verify the hand-maintained `index_todo.html` list still points
  only at files that exist.

## Solo graphics content template

For any **new or modified standalone interactive graphics page** (a single canvas with controls), use
[`dualfold_variation.html`](dualfold_variation.html) as the canonical template. Copy its structure and adapt only the
geometry, formula, and sliders to the new curve.

This applies to **solo graphics content only**, and does **not** apply to:
- index / related-index pages, the home page, the blog page, the gallery page, To-do pages
- the discussion page, search pages, random-pics pages
- visualization / category-listing pages

### Essential features to preserve
1. **Dark background** — the `#10151d` palette with the radial-gradient stage (`#253247` → `#10151d`).
2. **Right-hand sidebar** listing all controls (sliders, colour picker, Reset / Save PNG / Save GIF / Animate buttons).
3. **Top-left corner** — title + eyebrow, and a "Geometry" `<details>` dropdown describing the math.
4. **Bottom** — a formula bar showing the formula with the current parameter values substituted.
5. **Animation** — just auto-sweeping the **first slider** on a timer tick (slowly, ~1.3 s per step).

Keep the shell identical (layout, styles, gtag snippet, right-click block, PNG/GIF export, saved-PNG gallery). Change
only the `fx` / `fy` / `formulaLines` / `drawScene` functions, the `SLIDERS` definition, the title/eyebrow, and the
Geometry text.
