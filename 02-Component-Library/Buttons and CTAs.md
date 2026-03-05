# Buttons & CTAs — Helixar

---

## Button Hierarchy

### Primary — Orange (The "Do The Thing" Button)
Used for: The most important action on the screen. One per viewport max.

```css
.btn-primary {
  background: var(--color-brand);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 600;
  padding: 10px 20px;
  height: 40px;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}

.btn-primary:hover {
  background: var(--color-brand-hover);
  box-shadow: 0 0 0 3px var(--color-brand-glow);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0px);
  box-shadow: none;
}
```

### Secondary — Ghost (Supporting Actions)
Used for: Secondary actions that sit next to a primary. "Learn more", "View details".

```css
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: 10px 20px;
  height: 40px;
}

.btn-secondary:hover {
  background: var(--color-bg-overlay);
  border-color: var(--color-border-strong);
}
```

### Tertiary — Text (Low Priority)
Used for: Inline actions, "Cancel", breadcrumb-style nav.

```css
.btn-tertiary {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  font-size: var(--text-sm);
  font-weight: 500;
  padding: 8px 12px;
  height: 36px;
}

.btn-tertiary:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-overlay);
  border-radius: var(--radius-md);
}
```

### Destructive — Red (Irreversible Actions)
Used for: Delete, remove, disconnect. Always paired with a confirmation step.

```css
.btn-destructive {
  background: var(--color-error);
  color: #ffffff;
  /* Same sizing as primary */
}

.btn-destructive:hover {
  background: #DC2626;
}
```

---

## Sizes

```
sm:  height 32px, padding 8px 14px, font-size text-xs
md:  height 40px, padding 10px 20px, font-size text-sm  ← DEFAULT
lg:  height 48px, padding 12px 24px, font-size text-base
xl:  height 56px, padding 14px 32px, font-size text-md  ← Hero CTAs only
```

---

## States

All buttons must implement:
- Default
- Hover (visual feedback)
- Active/pressed (transform: translateY(0), slight darken)
- Focus-visible (2px orange outline, 2px offset)
- Disabled (opacity: 0.4, cursor: not-allowed, no hover effects)
- Loading (replace label with spinner, maintain width, disable interaction)

---

## Loading State

```css
.btn-loading {
  position: relative;
  color: transparent;  /* Hide label text */
  pointer-events: none;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

---

## CTA Copy Rules

- Primary CTA: Verb + noun. "Start Building", "Download for Mac", "Get Started Free"
- Never: "Click here", "Submit", "OK", "Yes" (these are lazy)
- Secondary CTA: Often "Learn more", "See how it works", "Watch demo"
- The primary and secondary CTA on a page should imply the same destination — but different commitment levels. Primary = ready. Secondary = not quite.

---

## Hero CTA Pair (Landing Page Standard)

```
[  Download for Mac  ]   [  See how it works →  ]
   Primary (orange)          Tertiary (text)
```

The arrow on the secondary CTA is intentional — it signals continuation, not commitment.
