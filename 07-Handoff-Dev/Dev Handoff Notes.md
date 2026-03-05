# Dev Handoff Notes — Helixar

---

## Tech Stack Recommendation

### Desktop App (Mac + Windows)
```
Framework:    Electron + React
Language:     TypeScript
Styling:      CSS Modules or Tailwind (custom config using our tokens)
Icons:        Lucide React
Fonts:        Geist (self-hosted from Vercel's font package)
Animation:    GSAP (app) + Framer Motion (React transitions)
State:        Zustand (lightweight, fits Electron well)
```

### Landing Page (Web)
```
Framework:    Next.js (App Router)
Styling:      CSS Modules or Tailwind
Animation:    GSAP + ScrollTrigger
Icons:        Lucide React
Fonts:        Geist via next/font
Deployment:   Vercel
```

---

## Font Loading

```bash
npm install geist
```

```css
/* In globals.css */
@import url('https://fonts.vercel.com/geist/GeistVF.woff2') format('woff2');
@import url('https://fonts.vercel.com/geist-mono/GeistMonoVF.woff2') format('woff2');
```

Or with Next.js:
```javascript
import { GeistSans, GeistMono } from 'geist/font';
```

---

## Electron Window Setup (Mac)

```javascript
// main.js
const win = new BrowserWindow({
  width: 1280,
  height: 800,
  minWidth: 900,
  minHeight: 600,
  titleBarStyle: 'hiddenInset',  // Mac: hides native title bar, keeps traffic lights
  backgroundColor: '#0A0A0B',    // Prevents white flash on load
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    preload: path.join(__dirname, 'preload.js')
  }
});
```

## Electron Window Setup (Windows)
```javascript
titleBarStyle: 'hidden',  // We'll render our own title bar
frame: false,              // Full custom chrome
// Implement minimize/maximize/close buttons in React
```

---

## GSAP Setup (Landing Page)

```bash
npm install gsap
```

```javascript
// In your animation file
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

---

## Component Architecture

Recommended folder structure for components:

```
src/
├── components/
│   ├── ui/               ← Primitives (Button, Badge, Input, Card)
│   ├── layout/           ← Shell, Sidebar, Topbar, Modal
│   ├── features/         ← Research, Campaign, Memory components
│   └── landing/          ← Landing page section components
├── styles/
│   ├── tokens.css        ← Our CSS variables file
│   ├── reset.css         ← Base styles
│   └── typography.css    ← Type scale classes
├── hooks/                ← useDebounce, useCommandPalette, etc.
└── store/                ← Zustand stores
```

---

## Performance Notes

1. **Sidebar icons:** Load Lucide icons individually (tree-shakeable), never import the whole library.
   ```javascript
   // Good
   import { Search, Folder } from 'lucide-react';
   // Bad
   import * as Icons from 'lucide-react';
   ```

2. **Animations:** Use `will-change: transform` sparingly — only on elements that are actively animating.

3. **Images:** All marketing screenshots should be WebP format. Max 200KB for hero screenshot.

4. **Fonts:** Geist is a variable font — one file covers all weights. Don't load separate weight files.

---

## Accessibility Requirements

- All interactive elements must have `:focus-visible` styles (orange ring: `0 0 0 2px #FF5C00`)
- Icon-only buttons must have `aria-label`
- Status badges must not rely on color alone — include text label
- Color contrast minimum: 4.5:1 for all text (already designed for, but verify in code)
- Keyboard nav must work for all primary flows (tested with Tab, Enter, Escape, Arrow keys)
