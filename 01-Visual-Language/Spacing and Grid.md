# Spacing & Grid — Helixar

---

## Base Unit: 8px

Everything is a multiple of 8. No exceptions.

```
--space-1:   4px   → Tight internal padding (icon + label gap)
--space-2:   8px   → Component internal spacing
--space-3:   12px  → Small gaps between related elements
--space-4:   16px  → Standard component padding
--space-5:   20px  → Medium gaps
--space-6:   24px  → Section internal padding
--space-8:   32px  → Between components in a group
--space-10:  40px  → Between groups
--space-12:  48px  → Section top/bottom padding (compact)
--space-16:  64px  → Section top/bottom padding (standard)
--space-20:  80px  → Section top/bottom padding (spacious)
--space-24:  96px  → Between major sections (landing page)
--space-32:  128px → Large hero gaps
```

---

## Layout Grid

### Landing Page
```
Max-width:     1200px
Columns:       12
Gutter:        24px
Margin:        auto (centered)
Mobile margin: 20px each side
```

### App (Desktop)
```
Sidebar:       240px fixed
Main area:     fluid
Max content:   960px (centered in main area)
Gutter:        24px
```

### App (Compact / Sidebar collapsed)
```
Sidebar:       56px (icon-only mode)
Main area:     full remaining width
```

---

## Border Radius

```
--radius-sm:   4px   → Badges, tags, small chips
--radius-md:   8px   → Buttons, inputs, small cards
--radius-lg:   12px  → Cards, panels, modals
--radius-xl:   16px  → Feature cards (landing page)
--radius-2xl:  24px  → Large hero elements
--radius-full: 9999px → Pills, avatars, toggles
```

**Rule:** Never mix radius scales on the same component. A card with `radius-lg` has all four corners at 12px — no exceptions.

---

## Elevation System

Helixar uses three elevation levels. Each is defined by background color AND shadow.

```css
/* Level 0 — Base */
background: var(--color-bg-base);
box-shadow: none;

/* Level 1 — Surface (cards, panels) */
background: var(--color-bg-surface);
box-shadow: 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3);

/* Level 2 — Elevated (modals, dropdowns) */
background: var(--color-bg-elevated);
box-shadow: 0 8px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4);
```

Never use `box-shadow` with colored glows except on brand-orange elements.

---

## Responsive Breakpoints

```
--bp-sm:   640px   → Mobile landscape / large phone
--bp-md:   768px   → Tablet portrait
--bp-lg:   1024px  → Tablet landscape / small laptop
--bp-xl:   1280px  → Standard desktop
--bp-2xl:  1536px  → Large desktop
```

Landing page is desktop-first but must be fully functional at 375px (iPhone SE).
App targets 1280px minimum — it is a desktop application.

---

## Density Rules

Helixar has two density modes in the app:

**Comfortable (default)**
- Row height: 48px
- Cell padding: 12px 16px
- Card padding: 24px

**Compact (power users)**
- Row height: 36px
- Cell padding: 8px 12px
- Card padding: 16px

Density is a user setting. Both must be designed from the start.
