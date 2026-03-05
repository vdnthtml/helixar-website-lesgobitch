# Forms & Inputs — Helixar

---

## Text Input

```css
.input {
  height: 40px;
  padding: 0 12px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: var(--text-sm);
  font-family: inherit;
  width: 100%;
  transition: border-color var(--duration-fast), box-shadow var(--duration-fast);
}

.input::placeholder {
  color: var(--color-text-tertiary);
}

.input:hover {
  border-color: var(--color-border-strong);
}

.input:focus {
  outline: none;
  border-color: var(--color-brand);
  box-shadow: 0 0 0 3px var(--color-brand-muted);
}

.input.error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px var(--color-error-muted);
}
```

---

## Input with Icon

```
[ 🔍  Search competitors...                              ]
```

Icon sits inside the input, left-aligned. 20px, `text-tertiary` color.
Input padding-left: 40px when icon is present.

---

## Textarea

Same as input but:
- `min-height: 120px`
- `resize: vertical`
- `padding: 12px`
- `line-height: 1.6`

---

## Select / Dropdown

Don't use native `<select>`. Use a custom component:

```
[ Platform  ▾ ]
```

- Trigger: Same height/style as .input
- Dropdown: `.card-elevated` styles, `max-height: 280px`, scrollable
- Option hover: `bg-overlay`
- Option selected: `bg-brand-muted`, `text-brand`, checkmark icon right-aligned

---

## Label

```css
.label {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-2);
  display: block;
}
```

---

## Helper Text & Errors

```css
.helper-text {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  margin-top: var(--space-1);
}

.error-text {
  font-size: var(--text-xs);
  color: var(--color-error);
  margin-top: var(--space-1);
}
```

---

## Toggle / Switch

Used for: Settings, feature flags, density mode.

```
Off:  [○        ]  — bg: border-default
On:   [      ●]  — bg: brand orange
```

Width: 44px, Height: 24px, Knob: 20px, transition: 150ms

---

## Checkbox

```
☐ Unchecked — border: border-default
☑ Checked   — bg: brand, border: brand, white checkmark icon
```

Size: 16px, border-radius: 4px

---

## Form Layout Rules

1. **One column for complex forms.** Two columns only for simple paired fields (First / Last name).
2. **Label above input. Always.** Never placeholder-as-label (accessibility).
3. **Error inline.** Show errors below the field they relate to — not in a banner at the top.
4. **Group related fields** with subtle dividers or spacing (--space-8 between groups).
5. **Primary submit button** always at the bottom, full-width on mobile, right-aligned on desktop.
