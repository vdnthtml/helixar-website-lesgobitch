# SPACING & GRID
### 8px base. Everything is a multiple.

---

## Base unit: 8px

Half-steps (4px) allowed only inside tight components.
Quarter-steps do not exist in this system.

## Token scale

| Token | Value | Primary use |
|-------|-------|-------------|
| `--sp-1` | `4px` | Minimum gap — inside tight components |
| `--sp-2` | `8px` | Icon-to-text, label-to-value |
| `--sp-3` | `12px` | Small internal padding |
| `--sp-4` | `16px` | Component padding sm / gap between label and headline |
| `--sp-6` | `24px` | Component gap default / gutter |
| `--sp-8` | `32px` | Card internal padding |
| `--sp-12` | `48px` | Horizontal content padding (desktop) |
| `--sp-16` | `64px` | Between related content blocks |
| `--sp-20` | `80px` | Section padding — compressed |
| `--sp-24` | `96px` | Section padding — default |
| `--sp-30` | `120px` | Section padding — important |
| `--sp-40` | `160px` | Hero top padding |

---

## Layout grid

| Property | Value |
|----------|-------|
| Max content width | `1200px` centered |
| Horizontal padding | `48px` desktop / `24px` mobile |
| Column system | 12 columns, `24px` gutter |
| Hero grid | `1fr 1fr` — equal split |
| Feature row grid | `45fr 55fr` alternating — NOT equal |
| Pricing grid | `repeat(3, 1fr)`, `24px` gap, max card width `360px` |

## Breakpoints

| Name | Value | Notes |
|------|-------|-------|
| Mobile | `< 768px` | Single column layouts |
| Tablet | `768px – 1024px` | 2-column where appropriate |
| Desktop | `> 1024px` | Full grid |

---

## Column alternation rule

Feature rows alternate which side the text lives on:

```
Row 1: grid-template-columns: 45fr 55fr  — text left,  screenshot right
Row 2: grid-template-columns: 55fr 45fr  — screenshot left,  text right
Row 3: grid-template-columns: 45fr 55fr  — text left,  screenshot right
```

The 45/55 split (not 50/50) gives the screenshot column more breathing room.
This is intentional. The product should always feel like it has space.

---

## Section background alternation

The page breathes through background rhythm, not decorative dividers.
No `<hr>` elements. No gradient dividers. No "wave" SVG separators.
Background color change IS the section separator.

---

## The 40% rule

Every section: at least 40% of its visible height should be white space.
If you feel the urge to "fill it up" — resist.
The emptiness is doing work.
