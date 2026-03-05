# Typography System — Helixar

---

## Font Stack

### Display / Headlines — Geist
Used for: Hero headlines, section titles, feature names
Why: Sharp, modern, technical. Feels like it belongs in a developer tool — without being cold.
Source: https://vercel.com/font (free, from Vercel)

```css
font-family: 'Geist', system-ui, sans-serif;
```

### Body — Geist (Regular weight)
The same family carries body for consistency. Different weight = different register.

### Monospace — Geist Mono
Used for: Code snippets, data outputs, metrics, platform handles, file paths
Why: Makes data feel precise. Reinforces the "workspace" mental model.

```css
font-family: 'Geist Mono', 'Fira Code', monospace;
```

---

## Type Scale

```
--text-xs:    11px / 1.4 / tracking +0.04em  → Metadata, badges, timestamps
--text-sm:    13px / 1.5 / tracking +0.01em  → Secondary labels, captions
--text-base:  15px / 1.6 / tracking 0         → Body copy, descriptions
--text-md:    17px / 1.5 / tracking -0.01em  → Feature intros, lead text
--text-lg:    21px / 1.4 / tracking -0.02em  → Section subtitles
--text-xl:    28px / 1.3 / tracking -0.03em  → Section headlines
--text-2xl:   36px / 1.2 / tracking -0.03em  → Page titles
--text-3xl:   48px / 1.15/ tracking -0.04em  → Hero subhead
--text-4xl:   64px / 1.05/ tracking -0.05em  → Hero headline
--text-5xl:   80px / 1.0 / tracking -0.06em  → Hero — desktop only, max size
```

---

## Font Weights

```
300 — Light      → Use sparingly. Large display text only.
400 — Regular    → Body copy, secondary labels.
500 — Medium     → UI labels, navigation items.
600 — Semibold   → Feature names, section titles.
700 — Bold       → Section headlines, strong emphasis.
800 — Extrabold  → Hero headline only.
```

**Rule:** Never use 800 weight at sizes below 40px. It reads as shouting.

---

## Hierarchy in Practice

### Landing Page Hero
```
Eyebrow:   text-sm / 500 / text-brand / tracking +0.1em / UPPERCASE
Headline:  text-5xl / 800 / text-primary / tracking -0.06em
Subhead:   text-xl / 400 / text-secondary / tracking -0.02em
CTA label: text-base / 600 / text-inverse (on orange button)
```

### In-App Section Header
```
Section title:  text-xl / 700 / text-primary
Description:    text-base / 400 / text-secondary
```

### Data / Metrics
```
Number:     text-2xl / 700 / text-primary / Geist Mono
Label:      text-xs / 500 / text-tertiary / tracking +0.06em / UPPERCASE
Delta:      text-sm / 600 / color-success or color-error
```

---

## Rules

1. **One typeface family.** Geist does everything. Don't introduce a second face.
2. **Hierarchy through weight and size — not color.** Color is for state, not level.
3. **Negative tracking on large text. Always.** Geist at 64px without -0.05em tracking looks amateur.
4. **Line length cap: 72 characters.** Beyond that, readability degrades. Enforce with `max-width`.
5. **Uppercase is for labels only.** Eyebrows, metadata, tab labels. Never headlines, never body.
6. **Monospace for anything that is data.** Numbers, handles, file names, API keys, metrics.
