# Color System v3 — Helixar
# Light Brutalist — Warm Off-White Base, Near-Black Type, Orange Only

---

## The Pivot

v1: Cold near-black Linear clone.
v2: Warm AMOLED dark with orange stamp.
v3: LIGHT BRUTALIST.

Why light? Enterprise buyers trust light. Orange hits harder without dark competition.
Every AI tool launched in the past 18 months is dark. We go the other direction.

The reference: premium printed matter — a well-designed annual report, a Swiss poster,
a high-end magazine. These are light. They command attention through type weight
and negative space, not through darkness.

---

## Core Palette

### Backgrounds (Light, warm off-white — never pure white)

```
--color-bg-base:        #F5F2EE   /* Warm off-white — page background */
--color-bg-alternate:   #EDEBE8   /* Slightly darker — alternating sections */
--color-bg-card:        #FAFAF8   /* Cards, elevated surfaces */
--color-bg-paper-dark:  #E0DAD5   /* Borders, section dividers, inputs */
--color-bg-invert:      #1A1916   /* Near-black — footer ONLY */
```

Never use #FFFFFF. Never use #000000. Always the warm variants.

### Brand Orange (unchanged — orange hits harder on light)

```
--color-brand:          #FF5E2C   /* The only color on the page */
--color-brand-hover:    #FF7A45
--color-brand-muted:    rgba(255, 94, 44, 0.10)
--color-brand-glow:     rgba(255, 94, 44, 0.18)
--color-brand-bg:       #FFE8E0   /* Very light orange tint — for muted badges */
```

Orange is still used as a stamp/block AND as a UI accent. Same rules as v2.
The difference: on light, orange is MORE dominant. It needs to be used more sparingly.
Orange in 10% of UI space reads perfectly. Used more than that, it becomes garish.

### Text (Near-black, warm — never pure black)

```
--color-text-primary:   #1A1916   /* Near-black, warm — headlines, strong UI */
--color-text-secondary: #424249   /* Mid-dark — subheads, nav links */
--color-text-body:      #6B6B72   /* Reading copy */
--color-text-muted:     #999690   /* Captions, labels, secondary data */
--color-text-placeholder: #C8C4BF
```

### Borders (Hairline precision)

```
--color-border-hairline: #E8E4DF  /* Thinnest visible — section separators */
--color-border-default:  #E0DAD5  /* Standard borders */
--color-border-strong:   #C8C4BF  /* Emphasis borders */
```

---

## The Orange Stamp Pattern (Unchanged from v2 — works even better on light)

```css
.stamp {
  background: #FF5E2C;
  color: #F5F2EE;
  padding: 0 10px 4px;
  display: inline-block;
  line-height: inherit;
}

.ticket-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FF5E2C;
  background: rgba(255, 94, 44, 0.08);
  border: 1px solid rgba(255, 94, 44, 0.2);
  padding: 3px 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 0;
}

.ticket-label::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #FF5E2C;
  flex-shrink: 0;
}
```

### Section Eyebrow (orange ticket with square prefix)
Used at top of every section to name the section.

---

## 60 / 30 / 10 Rule (Light version)

- **60%** — Warm off-white backgrounds (#F5F2EE, #EDEBE8, #FAFAF8)
- **30%** — Near-black type and structural elements (#1A1916, #6B6B72)
- **10%** — Brand orange (#FF5E2C) — stamps, active states, section eyebrows, CTAs

---

## Section Background Rhythm

Sections alternate to create scroll depth without color noise:

```
NAV:                #F5F2EE (transparent until scroll, then solid)
HERO:               #F5F2EE
MARQUEE:            #EDEBE8
THE LOOP:           #F5F2EE
PROBLEM:            #EDEBE8
FEATURES:           #F5F2EE
TESTIMONIALS:       #EDEBE8
COMPOUND:           #F5F2EE
FINAL CTA:          #EDEBE8
FOOTER:             #1A1916  ← ONLY dark element. Anchors the page.
```

The dark footer on a light page = a period at the end of a sentence.
Everything else is light. The footer lands like a full stop.
