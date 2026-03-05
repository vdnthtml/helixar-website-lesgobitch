# Navigation — Helixar

---

## App Navigation Structure

Helixar uses a left sidebar navigation. Fixed. Never collapsing automatically — only on user preference.

---

## Sidebar Anatomy

```
┌─────────────────────────────┐
│  ⬡ Helixar         [Org ▾]  │  ← Logo + Org switcher
├─────────────────────────────┤
│                             │
│  ○ Workspace                │  ← Primary nav items
│  ○ Research                 │
│  ○ Campaigns                │
│  ○ Performance              │
│  ○ Experiments              │
│  ○ Memory                   │
│                             │
├─────────────────────────────┤
│  ○ Integrations             │  ← Secondary section
│  ○ Settings                 │
├─────────────────────────────┤
│  [Avatar]  Your Name        │  ← User footer
│            Free Plan    [?] │
└─────────────────────────────┘
```

---

## Sidebar Specs

```
Width:        240px (expanded), 56px (collapsed/icon-only)
Background:   var(--color-bg-base)
Border-right: 1px solid var(--color-border-subtle)
Padding:      16px 12px
```

---

## Nav Item States

```css
.nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px 12px;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: background var(--duration-instant), color var(--duration-instant);
}

.nav-item:hover {
  background: var(--color-bg-overlay);
  color: var(--color-text-primary);
}

.nav-item.active {
  background: var(--color-brand-muted);
  color: var(--color-brand);
  border: 1px solid rgba(255, 92, 0, 0.12);
}

.nav-item.active .nav-icon {
  color: var(--color-brand);
}
```

---

## Top Bar (In-App)

Sits above the main content area. Does NOT scroll.

```
┌─────────────────────────────────────────────────────────┐
│  Research ›  Competitor Analysis      [⌘K]  [+ New]  [?]│
└─────────────────────────────────────────────────────────┘
```

```
Height:       56px
Background:   var(--color-bg-base)
Border-bottom: 1px solid var(--color-border-subtle)
Padding:      0 24px
```

Contains:
- Breadcrumb (current location)
- Global search trigger (⌘K)
- Primary action for current section
- Help / notifications

---

## Landing Page Navigation

```
┌────────────────────────────────────────────────────────┐
│  ⬡ Helixar      Features  Pricing  Changelog     [Download] │
└────────────────────────────────────────────────────────┘
```

```css
.landing-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background: rgba(10, 10, 11, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-subtle);
  z-index: 100;
}
```

On scroll past 100px: border-bottom becomes slightly more visible (opacity 0 → 1 transition).

Nav links: `text-sm / 500 / text-secondary` → hover: `text-primary`

CTA in nav: Primary button, size `sm` (32px height). "Download for Mac" or "Get Started".

---

## Breadcrumb

```
Research  ›  Nike Competitor Analysis  ›  Instagram

↑ text-sm     ↑ text-sm                   ↑ text-sm
text-tertiary  text-tertiary               text-primary (current)
```

Separator: `›` in `text-tertiary`. Gap: 8px each side.
