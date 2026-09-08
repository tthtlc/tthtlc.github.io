---
name: "Mathematical Art — The Monograph"
description: "Interactive geometric visualizations — curves, fractals, and animations framed as a printed math monograph."
colors:
  cloth: "#2f4a3e"
  cloth-deep: "#233a30"
  cloth-ink: "#ece7d6"
  cloth-ink-dim: "#c7c3af"
  paper: "#f6f3ea"
  paper-deep: "#efece0"
  ink: "#1d2620"
  ink-soft: "#39443d"
  marginalia: "#5d635a"
  gilt: "#b3822c"
  gilt-deep: "#8a5f18"
  gilt-bright: "#c9994a"
  gold-on-cloth: "#e3cd92"
  hairline: "#d9d3bf"
  hairline-strong: "#c3bb9f"
typography:
  display:
    fontFamily: "'STIX Two Text', 'Source Serif', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 6.25vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'STIX Two Text', 'Source Serif', Georgia, 'Times New Roman', serif"
    fontSize: "1.9rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "'STIX Two Text', 'Source Serif', Georgia, 'Times New Roman', serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "'STIX Two Text', 'Source Serif', Georgia, 'Times New Roman', serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Source Code Pro', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "10px"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  section: "3rem"
components:
  action-primary:
    backgroundColor: "{colors.gilt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.5rem"
  action-primary-hover:
    backgroundColor: "{colors.gilt-bright}"
    textColor: "{colors.ink}"
  action-secondary:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.5rem"
  action-secondary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.gilt-deep}"
  figure-card:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.xl}"
  pill:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  tag:
    backgroundColor: "rgba(179, 130, 44, 0.1)"
    textColor: "{colors.gilt-deep}"
    rounded: "{rounded.pill}"
  nav-current:
    backgroundColor: "{colors.gilt-bright}"
    textColor: "{colors.cloth-deep}"
    rounded: "{rounded.md}"
  back-to-top:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.cloth-ink}"
    rounded: "50%"
    size: "2.6rem"
---

# Design System: Mathematical Art — The Monograph

## Overview

**Creative North Star: "The Monograph"**

The whole collection is one printed math book. A deep book-cloth green carries the binding and structure; warm paper holds every piece of content; near-black notation ink does the reading; and a single antique-gold accent marks the things that move and the things that matter. The ~350 interactive visualizations are its numbered figures, each framed as a plate, and the shell pages (home, gallery, search, todo, discussion, random picks, all) are its front matter and table of contents.

The system is deliberately editorial and restrained, not decorative. It is flat at rest, uses hairline rules where another system would use borders or shadows, and reserves color for meaning: cloth for the frame, paper for the field, gilt for the accent. Type does the heavy lifting of character — a serif text face (STIX Two Text) for prose and a mono face (Source Code Pro) for notation, filenames, captions, and counts, the way a textbook sets its equations apart from its sentences.

Everything ships from one shared stylesheet, `/assets/math-art.css`. The shell pages load it plus three shared includes (masthead, footer, Gitalk). Each visualization page contributes only a single `<link rel="stylesheet" href="/assets/math-art.css">` and inherits the base frame — the forced serif body, the hairline canvas plate, the gilt controls, and the themed selection/focus/scrollbar — with no per-page duplication of the system.

**Key Characteristics:**
- One shared sheet is the single source of truth; ~350 pages inherit from it through one `<link>`.
- Deep book-cloth green (structure) + warm paper (content) + near-black ink (text) + antique gold (accent).
- STIX Two Text serif for prose, Source Code Pro mono for notation, filenames, captions, and counts.
- Flat at rest; hairline rules instead of heavy borders; shadows appear only as a response to state.
- Numbered figures, plate-framed canvases, gilt playhead/thumb as the sole accent surface.

## Colors

The palette is a four-role system: one gold accent, one green structural cloth, a warm neutral paper/ink field, and hairline rules that live between them. The gold is scarce on purpose — its rarity is the point.

### Primary

- **Antique Gold / Gilt** (#b3822c): The single accent. Marks the interactive and the important: the range-slider thumb (the playhead), the focus ring, the current nav item, the primary action button, the masthead/footer gold band, and hover emphasis. On the cloth green it is lightened (`--gold-on-cloth #e3cd92` / `--gilt-bright #c9994a`) for legibility; on paper it is darkened to `--gilt-deep #8a5f18` for link-text contrast.

### Structure

- **Book-Cloth Green / Cloth** (#2f4a3e): The binding. Background of the masthead and footer, the section-head rule, the back-to-top button, and the selection highlight. It never sits behind body content.
- **Cloth Deep** (#233a30): The hover/depth shade of the cloth; text color for the current nav item against the gilt-bright fill.
- **Chalk on Cloth** (#ece7d6): Primary text on cloth — the title and nav links. Dimmed to **Chalk Dim** (#c7c3af) for the subtitle and footer body.

### Neutral

- **Warm Paper** (#f6f3ea): The content field — the page background. **Paper Deep** (#efece0) is the card/alt-band surface, the default button fill, and the code background.
- **Notation Ink** (#1d2620): Near-black text for body and headings. **Ink Soft** (#39443d) is secondary body text (the frontispiece lede, code text).
- **Marginalia** (#5d635a): Muted gray-green for captions, filenames, section counts, and empty states — the textbook's margin notes.
- **Hairline** (#d9d3bf) and **Hairline Strong** (#c3bb9f): The rules. Hairline frames cards and canvases; hairline-strong is the stroke for inputs, buttons, pills, and the range track.

### Named Rules

**The Gilt-Is-Rare Rule.** Gilt is the only accent in the system. It is never used as body-text fill on paper; there it appears as the focus ring, the range thumb, the primary action, and the hover state. Introducing a second accent breaks the book.

**The Cloth-Carries-Structure Rule.** Book-cloth green appears only in the frame (masthead, footer, back-to-top, section rules, selection). Content always sits on paper. Cloth behind a block of reading text is a defect, not a style.

## Typography

**Display Font:** STIX Two Text (with Source Serif, Georgia, Times New Roman, serif)
**Body Font:** STIX Two Text (same stack)
**Label/Mono Font:** Source Code Pro (with ui-monospace, SFMono-Regular, Menlo, Consolas, monospace)

**Character:** A text-book serif for the prose and a code face for the notation — the classic monograph pairing, where the mono signals a filename, a figure number, a count, or a piece of code, and the serif does everything else.

### Hierarchy

- **Display** (700, clamp(2.5rem, 6.25vw, 4.25rem), 1.2): The frontispiece title and page heroes. The masthead title is the smaller fixed step at 2.5rem/700.
- **Headline** (600, 1.9rem, 1.2): Section/chapter heads (`h2`), set over a 2px cloth rule in `.ma-section-head`.
- **Title** (600, 1.4rem, 1.2): `h3` and figure-card titles (card titles run 1.1rem/600).
- **Body** (400, 17px, 1.6): Reading text. Set on the serif and forced via `!important` on `body` so a visualization page's own `font-family: Arial` cannot win. Line length is capped at 70ch for section notes.
- **Label** (400, 0.75rem, 0.02em tracking): Mono labels — filenames, "Fig. n" captions, counts, tags, pills, and the search result tally. Code runs 0.9em on `--paper-deep`.

### Named Rules

**The Forced Serif Rule.** The shared sheet forces `font-family: var(--serif) !important` on `body` (and `border`/`max-width` `!important` on `canvas`). This is the one place the system overrides a page's own `<style>`; everywhere else the shared sheet keeps to low-specificity element selectors so a page's own rules still win where they disagree.

**The Notation Face Rule.** Anything that is not prose — filenames, figure numbers, counts, code — is set in Source Code Pro, never the serif.

## Layout

The shell is a single centered column with a `max-width: 1180px` container (the masthead inner, sections, search, pills, footer, and wide-figure pages all share it). The frontispiece, lede, notes, and dropdown are narrower at 760px / 620px / 560px respectively. Gutter padding is a steady `1.25rem` of side padding. Sections sit `3rem` apart; the masthead and footer are the only full-bleed cloth bands, joined to the content by a 3px gilt rule.

The figure grid is `repeat(auto-fill, minmax(230px, 1fr))` with a `1.1rem` gap — a numbered table of plates, not a masonry. The single responsive breakpoint is 760px: body drops to 16px, the masthead title to 1.55rem, the masthead top stacks vertically, the figure grid tightens to `minmax(160px, 1fr)`, plates shorten to 130px, and the search row stacks. Spacing follows a 0.25rem base step (0.25 / 0.5 / 0.75 / 1 / 1.25rem) rather than an arbitrary scale.

## Elevation & Depth

The system is flat at rest. Depth is tonal — paper over paper-deep over cloth — not shadowed. Shadows exist only as a response to state:

### Shadow Vocabulary

- **Resting plate** (`box-shadow: 0 2px 8px rgba(29, 38, 32, 0.07)`): The faint lift under a canvas plate, drawn with box-shadow so it never shifts the layout of a full-viewport canvas.
- **Hover lift** (`box-shadow: 0 10px 26px rgba(29, 38, 32, 0.12)`): The figure-card hover, paired with `translateY(-3px)`. The search dropdown reuses the same soft shadow.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state — a card on hover, a popover dropdown, a resting canvas. There is no ambient or structural shadowing in the shell.

## Shapes

The form language is rectangular with hairline framing, not rounded glass. Controls use a 6px radius (inputs, buttons, nav links); actions and search inputs use 8px; figure cards and wide iframes use 10px — the "plate" edge. Pills and tags go fully round (999px) to mark them as chips, distinct from buttons. Canvases are framed by a 1px hairline ring at a tight 2px radius. The masthead and footer carry a 3px gilt band (top and bottom) as the book's spine rule. The one decorative gesture is the frontispiece ornament: a 1px gilt rule broken by a small rotated square — the bookplate mark.

## Components

### Masthead / Nav

- **Style:** Full-bleed cloth band with a 3px gilt bottom rule. Title "Mathematical Art" in chalk serif with "Art" accented in gilt-bright; italic chalk-dim subtitle beneath.
- **Nav:** Serif 0.95rem links in chalk, each padded `0.3rem 0.65rem` with a 6px radius. Hover warms to `--gold-on-cloth` with a translucent gilt border. The current page fills gilt-bright with cloth-deep text — the book's thumb-tab.

### Frontispiece

Centered hero (760px): clamp(2.5rem, 6.25vw, 4.25rem) display title, a 1.15rem ink-soft lede, the action pair, and the ornament divider. This is the title page of the monograph.

### Actions

- **Primary:** gilt fill, ink text, 8px radius, `0.75rem 1.5rem` padding; hover brightens to gilt-bright.
- **Secondary:** paper-deep fill with a hairline-strong border, ink text; hover goes white with a gilt border and gilt-deep text.

### Buttons / Inputs / Range

All form controls share the serif at 0.95rem, a white fill, a 1px hairline-strong border, 6px radius, and `0.5rem 0.7rem` padding. Focus drops the outline and rings the control in gilt (`box-shadow: 0 0 0 3px rgba(179, 130, 44, 0.18)`). Range sliders are re-skinned end to end: a 4px hairline-strong track and a 15px gilt thumb with a 2px cloth border — the playhead. Buttons hover to white with a gilt border and gilt-deep text.

### Figure Cards / Plates

The signature surface. A paper-deep card (10px radius, hairline border) holding a white "plate" preview — the visualization rendered as a scaled-down iframe snapshot — above a serif title and a mono filename line ("Fig. n · file.html"). On hover the card lifts 3px, the border goes gilt, and a cloth "Open" chip fades in over the plate. Tags sit as 999px gilt-tinted mono chips.

### Pills

Category navigation: mono 0.78rem chips on paper-deep with a hairline-strong border, fully round, with a marginalia count. Hover flips to a gilt border and gilt-deep text.

### Search

A full-width input (1rem, 8px radius, white) beside a mono result count. The autocomplete dropdown is a white 8px-radius panel with the hover shadow, listing mono filenames; items hover to paper-deep with gilt-deep text.

### Footer (Colophon)

Full-bleed cloth band with a 3px gilt top rule, centered chalk-dim serif at 0.9rem. The site name is chalk-bold; links are gold-on-cloth. This is the colophon.

### Back-to-Top

A fixed 2.6rem circle at the bottom-right — cloth fill, gilt border, chalk mono arrow glyph — hidden until the page scrolls past 600px, then faded in at 0.95 opacity.

### Browser Surfaces

Selection inverts to cloth on chalk; focus-visible draws a 2px gilt outline; the scrollbar is hairline-strong on paper. These are part of the system, carried by the shared sheet.

## Do's and Don'ts

### Do:
- **Do** route every surface — shell page or visualization — through the single `/assets/math-art.css` link; a new page adds one `<link>`, not new styling.
- **Do** keep reading text on warm paper (#f6f3ea) in notation ink (#1d2620), and reserve cloth green (#2f4a3e) for the frame.
- **Do** reserve gilt (#b3822c) for the accent surfaces: the playhead/range thumb, focus rings, current nav, primary action, and hover emphasis. Use gilt-deep (#8a5f18) for link text on paper.
- **Do** set filenames, figure numbers, counts, tags, and code in Source Code Pro; prose in STIX Two Text.
- **Do** frame canvases with the 1px hairline ring rather than a black or colored border.
- **Do** stay flat at rest — a shadow is a response to hover or a popover, never a resting surface property.

### Don't:
- **Don't** introduce a second accent color. There is one gold in this book.
- **Don't** put content on cloth green — it carries structure, never the reading field.
- **Don't** edit each of the ~350 visualization pages for a style change; the shared sheet is the only place the system changes.
- **Don't** use hard offset shadows or neon. The palette is cloth, paper, ink, and gold.
- **Don't** round figure cards or plates into circles; the round language (999px) belongs to pills, tags, and the back-to-top button only.
