# Tables & Data Display — Helixar

---

## Standard Table

Used for: Campaign list, competitor list, experiment results.

```css
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 8px 16px;
  text-align: left;
  border-bottom: 1px solid var(--color-border-subtle);
}

.table td {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-subtle);
  vertical-align: middle;
}

.table tr:hover td {
  background: var(--color-bg-overlay);
}

.table tr:last-child td {
  border-bottom: none;
}
```

---

## Status Badges

Used for: Campaign stages, experiment status, sync status.

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
}

/* Color variants */
.badge-active    { background: var(--color-success-muted); color: var(--color-success); }
.badge-pending   { background: var(--color-warning-muted); color: var(--color-warning); }
.badge-error     { background: var(--color-error-muted);   color: var(--color-error); }
.badge-neutral   { background: var(--color-bg-elevated);   color: var(--color-text-secondary); }
.badge-brand     { background: var(--color-brand-muted);   color: var(--color-brand); }
```

Dot indicator (for live status):
```css
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
/* On active badges, animate the dot */
.badge-active .badge-dot {
  animation: pulse 2s ease-in-out infinite;
}
```

---

## Metric Display

Used for: Performance stats, channel scores, budget tracking.

```
┌──────────────────┐
│  TOTAL REACH     │
│  2.4M            │
│  ↑ +12.3%        │
└──────────────────┘
```

```
Label:   text-xs / uppercase / text-tertiary / tracking +0.06em
Value:   text-2xl / 700 / text-primary / Geist Mono
Delta:   text-sm / 600 / success-green (positive) or error-red (negative)
         With ↑ or ↓ arrow prefix
```

---

## Progress / Score Bar

Used for: Channel scores (0–100), campaign progress.

```css
.score-bar {
  height: 4px;
  background: var(--color-bg-elevated);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.score-bar-fill {
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--color-brand);
  transition: width 600ms var(--ease-enter);
}

/* Color the bar based on score */
/* 0–40:  error    */
/* 41–70: warning  */
/* 71–100: success */
```

---

## Loading States

Never show blank areas while data loads.

**Skeleton loading** — for tables and cards:
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-surface) 25%,
    var(--color-bg-elevated) 50%,
    var(--color-bg-surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

Show 3–5 skeleton rows that match the real layout dimensions.
