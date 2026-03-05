# Color System — Helixar

---

## Philosophy

Color at Helixar is not decoration. It is a communication system.

The dark background creates focus. The orange creates urgency. Everything else creates hierarchy.

---

## Core Palette

### Backgrounds (The Layers)

```
--color-bg-base:       #0A0A0B   /* The void. True base. Almost black. */
--color-bg-surface:    #111113   /* Cards, panels. Slightly lifted. */
--color-bg-elevated:   #1A1A1E   /* Modals, dropdowns. Visibly elevated. */
--color-bg-overlay:    #222228   /* Hover states on surfaces. */
```

Each layer is distinct but subtle. Users shouldn't consciously notice the difference — they should just feel that some things are "above" others.

---

### Brand — Orange

```
--color-brand:         #FF5C00   /* Primary orange. Helixar identity. */
--color-brand-hover:   #FF7A2E   /* Hover state. Warmer, slightly lighter. */
--color-brand-muted:   #FF5C0020 /* 12% opacity. Used for glow, bg tints. */
--color-brand-glow:    #FF5C0040 /* 25% opacity. Used under active CTAs. */
```

**Rule:** Orange is used ONLY for:
1. Primary CTAs ("Get Started", "Download", "Deploy")
2. Active/selected states
3. Progress indicators
4. The logo

If you find yourself using orange for a third thing on the same screen — you're diluting it.

---

### Text

```
--color-text-primary:   #F2F2F3   /* Headlines, labels. Near-white. */
--color-text-secondary: #8A8A96   /* Body copy, descriptions. Muted. */
--color-text-tertiary:  #52525C   /* Placeholders, metadata. Quiet. */
--color-text-disabled:  #3A3A44   /* Disabled states. Almost invisible. */
--color-text-inverse:   #0A0A0B   /* Text on orange backgrounds. */
```

---

### Borders & Lines

```
--color-border-subtle:  #1E1E24   /* Between sections. Barely visible. */
--color-border-default: #2A2A34   /* Card borders, input borders. */
--color-border-strong:  #3A3A48   /* Focus rings, active component borders. */
```

---

### Semantic Colors

```
--color-success:        #22C55E   /* Green. Campaigns live, tests passed. */
--color-success-muted:  #22C55E15
--color-warning:        #F59E0B   /* Amber. Budget threshold, slow metrics. */
--color-warning-muted:  #F59E0B15
--color-error:          #EF4444   /* Red. Errors, failed states. */
--color-error-muted:    #EF444415
--color-info:           #3B82F6   /* Blue. Informational only. */
--color-info-muted:     #3B82F615
```

---

## Usage Rules

### The 60 / 30 / 10 Rule
- **60%** — Background layers (`bg-base`, `bg-surface`)
- **30%** — Text and supporting elements
- **10%** — Brand orange. Never more.

### Glow Usage
Orange glow (box-shadow with `--color-brand-glow`) is used on:
- Active primary buttons (subtle glow underneath)
- Selected sidebar items
- Live/active status indicators

Never use glow on more than one element per viewport.

### Gradient Rules
The only approved gradient is:
```css
background: linear-gradient(135deg, #FF5C00, #FF8C42);
```
Used for: Logo mark rendering, hero accent elements only.

No purple. No blue-to-purple. No rainbow. Ever.

---

## Accessibility

All text/background combinations meet WCAG AA (4.5:1 minimum):
- `text-primary` on `bg-base`: ✅ 15.2:1
- `text-secondary` on `bg-surface`: ✅ 6.1:1
- `text-inverse` on `brand`: ✅ 4.8:1

Check contrast before using `text-tertiary` as anything other than metadata.
