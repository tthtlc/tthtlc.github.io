---
layout: post
title: "Generating and Rendering Minimal Surfaces"
date: 2026-10-12
categories: surfaces
tags: [minimal surfaces, costa surface, catenoid, helicoid, weierstrass, interactive]
excerpt: "Twelve executable minimal-surface demonstrations — catenoid to Costa — behind one shared Canvas 2D pipeline, plus downloadable Costa samples."
---

{% include minimal-surfaces-app.html %}

## The Costa sample files

The two triangulations of Costa's surface used above are published as plain JSON as well, for offline use or your own renderer: `vertices` as arrays of `[x, y, z]`, `faces` as vertex-index triples, plus a `metadata` block recording the construction (numerical evaluation of the elliptic-function parametrization, three trimmed ends, genus 1).

- [costa_surface_lightweight.json](/costa_surface_lightweight.json) — 1,515 vertices, 2,960 triangles, 106 KB (sampling grid 40)
- [costa_surface_detailed.json](/costa_surface_detailed.json) — 3,889 vertices, 7,682 triangles, 286 KB (sampling grid 64)

The whole figure also works standalone, outside the blog chrome, at [minimal_surfaces_interactive_blog.html](/minimal_surfaces_interactive_blog.html).
