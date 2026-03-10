# Buttons & CTAs v3 — Helixar
# Light Brutalist

---

## Primary Button — "Add to Slack"

```css
.btn-primary {
  background: #FF5E2C;
  color: #F5F2EE;
  font-family: 'Geist', system-ui;
  font-size: 14px;
  font-weight: 600;
  height: 44px;
  padding: 0 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 150ms ease;
}

.btn-primary:hover {
  background: #FF7A45;
  transform: translateY(-1px);
  box-shadow: 0 0 0 3px rgba(255, 94, 44, 0.25);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: none;
  transition: all 80ms ease;
}
```

Slack icon inside: 16px SVG · color #F5F2EE

---

## Secondary Button / Text CTA

```css
.btn-secondary {
  background: transparent;
  color: #6B6B72;
  font-family: 'Geist', system-ui;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  padding: 0 20px;
  border: 1px solid #E0DAD5;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 150ms ease;
}

.btn-secondary:hover {
  color: #1A1916;
  border-color: #C8C4BF;
  background: rgba(26, 25, 22, 0.04);
}

.btn-text {
  background: none;
  border: none;
  color: #6B6B72;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  transition: color 150ms ease;
}

.btn-text:hover { color: #1A1916; }
```

---

## Nav CTA (smaller variant)

```css
.btn-nav {
  /* Same as primary but height 36px */
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
}
```

---

## Rules

- PRIMARY everywhere: "Add to Slack" — always orange, always with Slack icon
- SECONDARY for "See it work →", "Book a demo →" — text or outlined
- Never two primary buttons side by side — one primary, one secondary
- Button text never all-caps (that's for .ticket-label only)
