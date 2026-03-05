# Badges & Tags — Helixar

---

## Badge vs Tag — The Difference

**Badge:** System-generated. Communicates status or count. User can't remove it.
Example: "Active", "3 campaigns", "Live"

**Tag:** User-applied. Categorization. User can add/remove.
Example: "#saas", "Q4-2024", "Nike"

---

## Badge Sizes

```
sm: padding 2px 6px,  font-size text-xs,  height auto
md: padding 3px 8px,  font-size text-xs,  height auto  ← DEFAULT
lg: padding 4px 10px, font-size text-sm,  height auto
```

---

## Badge Types (Full Reference)

```
Campaign Status:
  [● Active]     → badge-active (green)
  [● Deploying]  → badge-brand (orange)
  [● Pending]    → badge-pending (amber)
  [● Paused]     → badge-neutral (grey)
  [● Completed]  → badge-neutral (grey, slightly muted)
  [● Draft]      → badge-neutral (grey, dashed border)

Platform Badges:
  [YT]  → YouTube red tint
  [IG]  → Instagram purple-pink tint
  [TK]  → TikTok neutral
  [X]   → X neutral
  [FB]  → Facebook blue tint
  [LI]  → LinkedIn blue tint

Score Badges:
  [92]  → score >= 70: success green
  [54]  → score 40–69: warning amber
  [28]  → score < 40:  error red
```

---

## Tag Component

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 3px 8px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: default;
}

.tag-removable {
  cursor: pointer;
}

.tag-removable:hover {
  border-color: var(--color-border-strong);
  color: var(--color-text-primary);
}

.tag-remove-btn {
  color: var(--color-text-tertiary);
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.tag-remove-btn:hover {
  background: var(--color-error-muted);
  color: var(--color-error);
}
```

---

## Count / Notification Badge

For sidebar nav or icon buttons showing a count:

```css
.count-badge {
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--color-brand);
  color: var(--color-text-inverse);
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

For counts > 99, display "99+"
