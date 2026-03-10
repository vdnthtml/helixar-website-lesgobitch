# Typography System v2 — Helixar
# UPDATED: Swiss Brutalist Editorial

---

## Philosophy v2

The old type system was clean and functional. This system is editorial and dominant.

Reference: Image 2 (Catch Conference) and Image 5 (Mondrama).
The type IS the design. Headlines break grids. Sizing is extreme.
The ratio between the largest and smallest text is violent — that's intentional.

---

## Font Stack (Updated)

### Display — Bebas Neue OR Geist (weight 800+)
For hero headlines and section dominance.

Bebas Neue is the brutalist Swiss reference — pure condensed caps that fill space.
If Bebas Neue is unavailable, use Geist at weight 900 with tight tracking.

```css
font-family: 'Bebas Neue', 'Geist', system-ui, sans-serif;
/* For hero headline only */
```

### Body + UI — Geist
All body copy, labels, navigation, UI elements.

```css
font-family: 'Geist', system-ui, sans-serif;
```

### Monospace — Geist Mono
Data, metrics, step numbers, file paths, ticket-style labels.
The Mondrama reference (Image 5) uses monospace for the "boarding pass" aesthetic.

```css
font-family: 'Geist Mono', monospace;
```

---

## Type Scale (Updated — More Violent Contrast)

```
--text-xs:    11px  → Metadata, ticket labels, step numbers
--text-sm:    13px  → Secondary labels
--text-base:  15px  → Body copy
--text-md:    17px  → Feature intros
--text-lg:    21px  → Section subtitles
--text-xl:    28px  → Section headlines (Geist 700)
--text-2xl:   40px  → Page titles (Geist 800)
--text-3xl:   56px  → Hero subhead (Geist 800)
--text-4xl:   80px  → Hero headline (Geist 800 or Bebas Neue)
--text-5xl:  120px  → BRUTALIST HERO — fills the viewport width
--text-6xl:  160px+ → EDITORIAL BREAK — single word, bleeds off screen
```

text-5xl and text-6xl are the new additions. These are used for:
- The hero headline breaking the grid
- Section words used as background texture (opacity 0.04)
- The "stamp" word that bleeds off the right edge

---

## The Brutalist Type Rules

### Rule 1: The Hero Breaks the Grid
The hero headline must be large enough that it clips the viewport edges on mobile.
On desktop: fills 100% of the content width.
No max-width on the hero headline. It goes to the edge.

### Rule 2: Condensed Caps for Impact
Hero headline: ALL CAPS when using Bebas Neue.
Section headlines: Title case when using Geist.
Never all-caps for body. Never all-caps for anything under 32px.

### Rule 3: The Ticket Label
Borrowed from Image 5 (Mondrama boarding pass aesthetic).
Used for: step numbers, section codes, data labels.

```css
.ticket-label {
  font-family: 'Geist Mono', monospace;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  border: 1px solid var(--color-border-default);
  padding: 3px 8px;
  display: inline-block;
}
```

Used on: loop steps (01 / 02 / 03 / 04), section codes, data row labels.

### Rule 4: The Background Word
Large text used at 4% opacity as a background texture element.
Like a watermark but intentional and designed.

```css
.bg-word {
  font-size: clamp(120px, 20vw, 200px);
  font-weight: 900;
  color: var(--color-text-primary);
  opacity: 0.03;
  position: absolute;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  letter-spacing: -0.04em;
}
```

Used in: hero section background ("HELIXAR"), features section ("RESEARCH", "ANALYZE")

### Rule 5: The Orange Word
One word in a headline gets the orange stamp treatment.
Not italic. Not bold. The orange background block IS the emphasis.

```html
<h1>
  Marketing used to need a team.
  Now it needs <span class="stamp">you.</span>
</h1>
```

---

## Hierarchy Reference

```
HERO HEADLINE:      Bebas Neue / 80–120px / caps / #F0EBE3
HERO SUBHEAD:       Geist 400 / 18px / #8A8178 / max-width 480px
SECTION EYEBROW:    Geist Mono / 11px / uppercase / ticket-label style
SECTION HEADLINE:   Geist 700 / 40–56px / #F0EBE3 / tracking -0.03em
FEATURE HEADLINE:   Geist 700 / 32–40px / #F0EBE3 / left-aligned
BODY:               Geist 400 / 15–16px / #8A8178 / max-width 560px
DATA/METRIC:        Geist Mono 700 / varies / #F0EBE3
TICKET LABEL:       Geist Mono 400 / 11px / #514D48 / bordered
```
