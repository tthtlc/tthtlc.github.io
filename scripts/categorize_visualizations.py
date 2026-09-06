#!/usr/bin/env python3
"""Categorize the visualization pages listed in _data/visualizations.yml.

Reads the master list, extracts each page's real <title> (falling back to a
humanized filename), classifies every page into a topic category via filename
rules (first match wins, so rule order matters), and writes
_data/visualization_categories.yml consumed by the gallery page.

Re-run after adding new pages:
    python3 scripts/categorize_visualizations.py
"""
import os
import re
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Order matters: the first category whose rule matches wins.
CATEGORIES = [
    # (slug, name, emoji, description, [regex rules...])
    ("spirographs", "Spirographs & Rolling Curves", "🌀",
     "Epitrochoids, hypotrochoids and other rolling-circle curves — the classic "
     "spirograph family, from simple loops to multi-wheel explorers.",
     [r"hypotrochoid", r"epicycloid", r"epitrochoid", r"spirograph", r"cardiod",
      r"hypocycloid", r"double_(?!ellipse)", r"triple_", r"rotating_circle"]),
    ("lemniscates", "Lemniscates & Figure-Eights", "∞",
     "The lemniscate family — figure-eight curves radiating, rotating and "
     "multiplying.",
     [r"lemniscate", r"figure_eight"]),
    ("chasing", "Chasing & Rotating Polygons", "🏃",
     "Polygons chasing their own vertices, auto-rotating frames and polygons "
     "spinning around polygons in endless pursuit.",
     [r"chasing", r"auto_rotate", r"rotating_polygon", r"rotated_polygon",
      r"rotated_ngon", r"rotated_triangle", r"rotating_chasing", r"rotating_diamond",
      r"pentapentagon", r"rotating_pentagon_about", r"moving_square"]),
    ("rings", "Polygons Around Polygons", "⭕",
     "Regular polygons inscribed around other polygons, layered into rings of "
     "rotating symmetry.",
     [r"around_"]),
    ("fractals", "Fractals", "❄️",
     "Self-similar geometry: ferns, dragon curves, Mandelbrot and Julia sets, "
     "Koch snowflakes, Sierpinski carpets and more.",
     [r"barnsley", r"fractal_fern", r"dragon_curve", r"hilbert", r"koch",
      r"sierpinski", r"menger", r"mandelbrot", r"julia", r"vicsek", r"t_square",
      r"hexaflake", r"pythagorean"]),
    ("threed", "3D Surfaces & Solids", "🧊",
     "Three-dimensional geometry: minimal surfaces, Klein bottles, tori, "
     "Platonic solids, Möbius strips and tessellations.",
     [r"enneper", r"klein", r"torus", r"sphere", r"spherical", r"icosahedron",
      r"dodecahedron", r"rhombic", r"mobius", r"tessellation"]),
    ("waves", "Waves & Oscillations", "🌊",
     "Sine waves, square waves and sinusoidal ribbons — oscillation drawn in "
     "animated color.",
     [r"sinusoid", r"sinsoid", r"sinewave", r"squarewave", r"square_sine",
      r"wavy", r"wavelines", r"sine_sinusoidal"]),
    ("hearts", "Hearts & Valentine", "💗",
     "Heart-shaped curves and clickable valentine games.",
     [r"heart", r"valentine"]),
    ("games", "Games & Simulations", "🎮",
     "Interactive games and simulations, from clicking hearts to Conway's "
     "Game of Life.",
     [r"_game", r"conway"]),
    ("ellipses", "Ellipses & Ovals", "🥚",
     "Ellipses in motion: rotating, sliding and super-rotating ovals and the "
     "line art drawn across them.",
     [r"ellipse", r"ellipsical"]),
    ("petals", "Petals & Flowers", "🌸",
     "Flower-like curves built from rotated petals, from simple blossoms to "
     "complex multi-petal motion.",
     [r"petal", r"flower"]),
    ("spirals", "Spirals & Islamic Patterns", "🐚",
     "Spirals, vortexes and Islamic geometric star patterns in rotation.",
     [r"spiral", r"vortex", r"islamic"]),
    ("lineart", "Line Art & Sectors", "📐",
     "Line drawings across polygon vertices, spokes and randomized sectors — "
     "polygonal scribble art.",
     [r"line_rotate", r"line_drawing", r"drawsector", r"sector", r"spoke"]),
    ("circles", "Circles & Concentric Rings", "🎯",
     "Circles on circles, concentric rings and polar-coordinate drawings.",
     [r"concentric", r"circle", r"hexagon_circle"]),
    ("shapes", "Shapes & Curiosities", "💠",
     "Diamonds, windmills, boomerangs, turtle graphics, parametric patterns "
     "and other geometric curiosities.",
     [r"diamond", r"boomerang", r"windmill", r"chopstick", r"turtle",
      r"parametric", r"cubic", r"psychedlic", r"sin_cos", r"pinterest",
      r"quart", r"square_triangle", r"twotriangle", r"pentagon_star"]),
    ("backgrounds", "Backgrounds & Templates", "🎨",
     "Animated color backgrounds and gradient templates.",
     [r"background", r"gradient"]),
    ("extras", "Experiments & Extras", "📦",
     "Test pages and one-off experiments that don't fit elsewhere.",
     [r"."]),  # catch-all
]

TAG_RULES = [
    (r"explore", "Interactive"),
    (r"_game", "Game"),
    (r"animated|animate", "Animated"),
    (r"rotating|rotate|revolving", "Rotating"),
    (r"moving", "Motion"),
    (r"color", "Color"),
    (r"gradient", "Gradient"),
    (r"random", "Random"),
    (r"manual", "Manual"),
    (r"savepng", "Save PNG"),
    (r"template", "Template"),
]

WORD_FIXES = {
    "3gon": "Triangle", "4gon": "Square", "5gon": "Pentagon", "6gon": "Hexagon",
    "ngon": "Polygon", "cardiod": "Cardioid", "hypotrochoid": "Hypotrochoid",
    "epicycloid": "Epicycloid", "epitrochoid": "Epitrochoid", "spirograph": "Spirograph",
    "vicsek": "Vicsek", "sierpinski": "Sierpinski", "mandelbrot": "Mandelbrot",
    "enneper": "Enneper", "mobius": "Möbius", "torus": "Torus", "lemniscate": "Lemniscate",
    "valentine": "Valentine", "conway": "Conway", "v2": "v2", "v3": "v3",
}


def humanize(filename):
    base = filename.rsplit(".", 1)[0]
    words = []
    for w in base.split("_"):
        words.append(WORD_FIXES.get(w, w))
    return " ".join(words).title()


def extract_title(filename):
    path = os.path.join(ROOT, filename)
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8", errors="ignore") as fh:
        head = fh.read(3000)
    m = re.search(r"<title>(.*?)</title>", head, re.S | re.I)
    if m and m.group(1).strip():
        return " ".join(m.group(1).split())
    return None


def classify(filename):
    base = filename.lower()
    if base.startswith("todo_design/"):
        return "extras"  # draft pages under todo_design/
    for slug, name, emoji, desc, rules in CATEGORIES:
        if any(re.search(r, base) for r in rules):
            return slug
    return "extras"


def tags_for(filename):
    base = filename.lower()
    tags = []
    for rule, label in TAG_RULES:
        if re.search(rule, base):
            tags.append(label)
    return tags[:3]


def main():
    master_path = os.path.join(ROOT, "_data", "visualizations.yml")
    with open(master_path, encoding="utf-8") as fh:
        files = yaml.safe_load(fh)

    buckets = {slug: [] for slug, _, _, _, _ in CATEGORIES}
    missing = []
    for f in files:
        if not os.path.exists(os.path.join(ROOT, f)):
            missing.append(f)
            continue
        buckets[classify(f)].append({
            "file": f,
            "title": extract_title(f) or humanize(f),
            "tags": tags_for(f),
        })

    output = []
    for slug, name, emoji, desc, _ in CATEGORIES:
        items = buckets[slug]
        if not items:
            continue
        output.append({
            "name": name,
            "slug": slug,
            "emoji": emoji,
            "description": desc,
            "items": items,
        })

    out_path = os.path.join(ROOT, "_data", "visualization_categories.yml")
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write("# Generated by scripts/categorize_visualizations.py — do not edit by hand.\n")
        yaml.safe_dump(output, fh, allow_unicode=True, sort_keys=False, width=100)

    print(f"Wrote {out_path}")
    for cat in output:
        print(f"  {cat['emoji']} {cat['name']:<32s} {len(cat['items']):3d}")
    print(f"Total categorized: {sum(len(c['items']) for c in output)}")
    if missing:
        print("Missing from disk (skipped):")
        for f in missing:
            print("  ", f)


if __name__ == "__main__":
    main()
