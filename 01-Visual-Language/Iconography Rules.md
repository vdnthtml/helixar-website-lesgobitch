# Iconography Rules — Helixar

---

## Icon Library: Lucide Icons

Source: https://lucide.dev
Why: Clean, consistent 24px grid, open source, 1000+ icons, maintained actively.

```bash
npm install lucide-react  # For React/web
```

---

## Size Scale

```
16px — Inline icons (next to text labels, inside badges)
20px — UI icons (sidebar nav, toolbar actions, input icons)
24px — Standard icons (feature list, empty states)
32px — Feature icons (landing page feature cards)
40px — Section icons (larger landing page moments)
48px — Illustration-level icons (empty states, onboarding)
```

**Rule:** Never scale icons between sizes. Use the scale above. A 22px icon is a design error.

---

## Stroke Width

All Lucide icons default to 2px stroke. Use these adjustments:

```
16px icons → stroke-width: 2.5  (thinner icons disappear at small sizes)
20px icons → stroke-width: 2
24px icons → stroke-width: 2
32px+ icons → stroke-width: 1.5 (thicker icons look heavy at large sizes)
```

---

## Color Rules

Icons inherit text color by default (`currentColor`). Explicit overrides:

```
Navigation (inactive): --color-text-tertiary
Navigation (active):   --color-brand
Action icons:          --color-text-secondary
Destructive actions:   --color-error
Success states:        --color-success
Warning states:        --color-warning
```

Never use `--color-text-primary` for icons — they compete with text hierarchy.

---

## Icon + Label Pairing

```
Gap between icon and label: --space-2 (8px) for 20px icons
                             --space-1 (4px) for 16px icons

Vertical alignment: center (never baseline for icons)
```

---

## Feature Icons (Landing Page)

For the features section, icons get an orange-tinted background container:

```css
.feature-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-brand-muted);
  border: 1px solid rgba(255, 92, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-brand);
}
```

---

## Icon Mapping (Key Features)

```
Workspace / Files        → FolderOpen
Competitor Research      → Search / Telescope
Web Research             → Globe
AI Memory                → Brain
Strategy Analysis        → BarChart3 / TrendingUp
Campaign Management      → Megaphone / Flag
Performance Tracking     → Activity
A/B Testing              → FlaskConical
Content Generation       → Sparkles / Wand2
Transcription            → Mic / FileAudio
Notion Integration       → ExternalLink (or Notion logo SVG)
HubSpot Integration      → ExternalLink (or HubSpot logo SVG)
```

---

## What We Never Do

- Use filled icons mixed with stroke icons on the same screen
- Rotate icons to create new meaning (use the correct icon)
- Use emoji as icons in the UI
- Mix icon libraries (no Heroicons, Phosphor, or FontAwesome alongside Lucide)
- Use icons without labels in primary navigation (accessibility)
