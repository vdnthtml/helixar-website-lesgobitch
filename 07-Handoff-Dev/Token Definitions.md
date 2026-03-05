# Token Definitions — Helixar Design System

---

## What Are Tokens

Design tokens are the single source of truth for every visual value in Helixar.
One change here cascades everywhere. No hunting through CSS files.

---

## Full Token Reference

### Color Tokens

```json
{
  "color": {
    "bg": {
      "base":     { "value": "#0A0A0B" },
      "surface":  { "value": "#111113" },
      "elevated": { "value": "#1A1A1E" },
      "overlay":  { "value": "#222228" }
    },
    "brand": {
      "default":  { "value": "#FF5C00" },
      "hover":    { "value": "#FF7A2E" },
      "muted":    { "value": "rgba(255, 92, 0, 0.12)" },
      "glow":     { "value": "rgba(255, 92, 0, 0.25)" }
    },
    "text": {
      "primary":   { "value": "#F2F2F3" },
      "secondary": { "value": "#8A8A96" },
      "tertiary":  { "value": "#52525C" },
      "disabled":  { "value": "#3A3A44" },
      "inverse":   { "value": "#0A0A0B" }
    },
    "border": {
      "subtle":  { "value": "#1E1E24" },
      "default": { "value": "#2A2A34" },
      "strong":  { "value": "#3A3A48" }
    },
    "semantic": {
      "success":        { "value": "#22C55E" },
      "success-muted":  { "value": "rgba(34, 197, 94, 0.12)" },
      "warning":        { "value": "#F59E0B" },
      "warning-muted":  { "value": "rgba(245, 158, 11, 0.12)" },
      "error":          { "value": "#EF4444" },
      "error-muted":    { "value": "rgba(239, 68, 68, 0.12)" },
      "info":           { "value": "#3B82F6" },
      "info-muted":     { "value": "rgba(59, 130, 246, 0.12)" }
    }
  }
}
```

---

### Typography Tokens

```json
{
  "typography": {
    "family": {
      "sans":  { "value": "'Geist', system-ui, sans-serif" },
      "mono":  { "value": "'Geist Mono', 'Fira Code', monospace" }
    },
    "size": {
      "xs":   { "value": "11px" },
      "sm":   { "value": "13px" },
      "base": { "value": "15px" },
      "md":   { "value": "17px" },
      "lg":   { "value": "21px" },
      "xl":   { "value": "28px" },
      "2xl":  { "value": "36px" },
      "3xl":  { "value": "48px" },
      "4xl":  { "value": "64px" },
      "5xl":  { "value": "80px" }
    },
    "weight": {
      "light":     { "value": "300" },
      "regular":   { "value": "400" },
      "medium":    { "value": "500" },
      "semibold":  { "value": "600" },
      "bold":      { "value": "700" },
      "extrabold": { "value": "800" }
    },
    "tracking": {
      "wide":    { "value": "0.06em" },
      "normal":  { "value": "0" },
      "tight":   { "value": "-0.02em" },
      "tighter": { "value": "-0.04em" },
      "tightest":{ "value": "-0.06em" }
    }
  }
}
```

---

### Spacing Tokens

```json
{
  "spacing": {
    "1":  { "value": "4px"  },
    "2":  { "value": "8px"  },
    "3":  { "value": "12px" },
    "4":  { "value": "16px" },
    "5":  { "value": "20px" },
    "6":  { "value": "24px" },
    "8":  { "value": "32px" },
    "10": { "value": "40px" },
    "12": { "value": "48px" },
    "16": { "value": "64px" },
    "20": { "value": "80px" },
    "24": { "value": "96px" },
    "32": { "value": "128px"}
  }
}
```

---

### Border Radius Tokens

```json
{
  "radius": {
    "sm":   { "value": "4px" },
    "md":   { "value": "8px" },
    "lg":   { "value": "12px" },
    "xl":   { "value": "16px" },
    "2xl":  { "value": "24px" },
    "full": { "value": "9999px" }
  }
}
```

---

### Duration Tokens

```json
{
  "duration": {
    "instant":    { "value": "50ms" },
    "fast":       { "value": "100ms" },
    "normal":     { "value": "150ms" },
    "moderate":   { "value": "250ms" },
    "slow":       { "value": "350ms" },
    "deliberate": { "value": "500ms" }
  }
}
```
