Procedure for adding a new graph (visualization)

There are two steps:

1. Drop in the HTML file

Create the new self-contained HTML file in the repo root (e.g. new_viz.html), with everything inline — CSS, canvas/JS, no external dependencies — matching the style of the existing files like spirograph.html. No front matter needed; it's a static file and Jekyll passes it through as-is.

2. Register it in _data/visualizations.yml

Add the quoted filename to the list (kept roughly alphabetical), e.g.:

- 'new_viz.html'

That file is the single source of truth: index.html, index_all.html, index_spa.html, and index_search.html each generate their JavaScript masterList from site.data.visualizations via Liquid, so the new graph automatically appears on Home, All Visualizations, Random Picks, and Search.

3. Commit and push — the Actions workflow builds and deploys it.

To preview locally first: bundle exec jekyll serve, then open http://localhost:4000/new_viz.html.
