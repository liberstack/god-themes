# God Themes

Static frontend theming demo — three visual identities (Fire, Earth, Sky), each with its own color palette, imagery, and display typeface, cycling on a single-page experience.

Fire. Earth. Sky. Three gods, three palettes, three typefaces — one page.

## What this demonstrates

A single content shell (`index.html`) that fully reskins itself on every transition — color, background imagery, and typography all switch through one state change, driven entirely by CSS custom properties. No frameworks, no build step.

## Themes

| God | Creature | Palette | Display face |
|---|---|---|---|
| Fire — War God | Snow Leopard | `#e0452c` on near-black | Cinzel, weight 700, tight tracking |
| Earth — Earth Goddess | Wolf | `#6fa85a` on deep green-black | Fraunces, weight 600, italic tagline |
| Sky — Sky God | Swan | `#6db4ef` on deep navy | Jost, weight 300, wide tracking |

Each theme carries its own accent color, background/surface tones, ink color, backdrop image, and typographic identity (font family, weight, letter-spacing) — chosen to match its character rather than reused across all three.

## How it works

- **`config.js`** — single source of truth. Each theme is a plain object: copy, colors, image path, and typography (`fontDisplay`, `titleWeight`, `titleTracking`, `taglineStyle`).
- **`themes.js`** — applies a theme by writing CSS custom properties to `:root` and crossfading between two stacked backdrop layers (no image flash, no layout shift).
- **`ui.js`** — renders theme copy into the panel and keeps the progress dots / next-label in sync.
- **`main.js`** — orchestrates the cycle: click, spacebar, or right-arrow advances to the next god.
- **`style.css`** — all visual values (`--accent`, `--background`, `--font-display`, `--title-tracking`, etc.) are consumed as custom properties, so `themes.js` never touches a class name — it only sets variables.

## Run locally

No build step. Serve the folder statically:

```bash
npx serve .
# or
python3 -m http.server
```

Open the local address it prints, then click the arrow (or press → / space) to cycle themes.

## Add a new theme

1. Add an entry to `themes` in `config.js` with copy, palette, image, and typography fields.
2. Add its key to `themeOrder`.
3. Drop the backdrop image at the referenced path.

That's it — `themes.js` and `ui.js` read from the theme object, nothing else needs to change.

## Stack

Vanilla JS (ES modules), CSS custom properties, no dependencies, no build tooling.