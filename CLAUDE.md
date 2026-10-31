# Project conventions

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
