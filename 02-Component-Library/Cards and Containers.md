# Cards & Containers — Helixar

---

## Card Variants

### Base Card
The default container for grouped content.

```css
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}
```

### Interactive Card (Clickable)
Used in: Campaign list, competitor list, research results.

```css
.card-interactive {
  /* Inherits base card */
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-standard),
              background var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}

.card-interactive:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-elevated);
  transform: translateY(-2px);
}
```

### Feature Card (Landing Page)
Larger, more visual. Used in the features section.

```css
.card-feature {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  /* On hover: subtle orange border tint */
}

.card-feature:hover {
  border-color: rgba(255, 92, 0, 0.2);
}
```

### Stat Card (Metrics)
For displaying campaign performance numbers.

```css
.card-stat {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
```

### Highlight Card (Orange Accent)
For promoting key actions or states. Used sparingly.

```css
.card-highlight {
  background: var(--color-brand-muted);
  border: 1px solid rgba(255, 92, 0, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}
```

---

## Container Patterns

### Section Container (Landing Page)
```css
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-24) var(--space-6);
}
```

### App Panel
```css
.panel {
  background: var(--color-bg-surface);
  border-right: 1px solid var(--color-border-subtle);
  height: 100%;
  overflow-y: auto;
}
```

### Modal Container
```css
.modal {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  max-width: 560px;
  width: 100%;
  box-shadow: 0 24px 64px rgba(0,0,0,0.6);
}
```

---

## Empty States

Every card/container must have an empty state designed. No blank white/dark voids.

Empty state anatomy:
1. Icon (48px, `--color-text-tertiary`)
2. Title: "Nothing here yet" style — short, neutral
3. Description: What to do next — one sentence
4. CTA (optional): Primary action to fill the empty state

```
Example — Empty campaigns view:

  [Megaphone icon]
  No campaigns yet
  Create your first campaign to start tracking performance.
  [ + New Campaign ]
```

---

## Dividers

```css
.divider {
  height: 1px;
  background: var(--color-border-subtle);
  margin: var(--space-6) 0;
}

/* Vertical divider */
.divider-vertical {
  width: 1px;
  height: 100%;
  background: var(--color-border-subtle);
}
```

Never use `<hr>` directly — always a styled div with semantic meaning.
