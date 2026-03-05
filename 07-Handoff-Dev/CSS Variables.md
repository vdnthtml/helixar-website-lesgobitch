# CSS Variables — Helixar

Drop this into your root CSS file. These variables power the entire design system.

---

```css
/* ============================================
   HELIXAR DESIGN SYSTEM — CSS VARIABLES
   Import this at the root of your project.
   ============================================ */

:root {

  /* ─── BACKGROUNDS ─── */
  --color-bg-base:       #0A0A0B;
  --color-bg-surface:    #111113;
  --color-bg-elevated:   #1A1A1E;
  --color-bg-overlay:    #222228;

  /* ─── BRAND ─── */
  --color-brand:         #FF5C00;
  --color-brand-hover:   #FF7A2E;
  --color-brand-muted:   rgba(255, 92, 0, 0.12);
  --color-brand-glow:    rgba(255, 92, 0, 0.25);

  /* ─── TEXT ─── */
  --color-text-primary:   #F2F2F3;
  --color-text-secondary: #8A8A96;
  --color-text-tertiary:  #52525C;
  --color-text-disabled:  #3A3A44;
  --color-text-inverse:   #0A0A0B;

  /* ─── BORDERS ─── */
  --color-border-subtle:  #1E1E24;
  --color-border-default: #2A2A34;
  --color-border-strong:  #3A3A48;

  /* ─── SEMANTIC ─── */
  --color-success:        #22C55E;
  --color-success-muted:  rgba(34, 197, 94, 0.12);
  --color-warning:        #F59E0B;
  --color-warning-muted:  rgba(245, 158, 11, 0.12);
  --color-error:          #EF4444;
  --color-error-muted:    rgba(239, 68, 68, 0.12);
  --color-info:           #3B82F6;
  --color-info-muted:     rgba(59, 130, 246, 0.12);

  /* ─── TYPOGRAPHY ─── */
  --font-sans:  'Geist', system-ui, -apple-system, sans-serif;
  --font-mono:  'Geist Mono', 'Fira Code', monospace;

  --text-xs:   11px;
  --text-sm:   13px;
  --text-base: 15px;
  --text-md:   17px;
  --text-lg:   21px;
  --text-xl:   28px;
  --text-2xl:  36px;
  --text-3xl:  48px;
  --text-4xl:  64px;
  --text-5xl:  80px;

  /* ─── SPACING ─── */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32:  128px;

  /* ─── BORDER RADIUS ─── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;

  /* ─── TRANSITIONS ─── */
  --duration-instant:  50ms;
  --duration-fast:     100ms;
  --duration-normal:   150ms;
  --duration-moderate: 250ms;
  --duration-slow:     350ms;

  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter:    cubic-bezier(0, 0, 0.2, 1);
  --ease-exit:     cubic-bezier(0.4, 0, 1, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ─── LAYOUT ─── */
  --sidebar-width:          240px;
  --sidebar-collapsed-width: 56px;
  --topbar-height:           56px;
  --max-content-width:       960px;
  --landing-max-width:       1200px;

  /* ─── SHADOWS ─── */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.4);
  --shadow-lg:  0 8px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4);
  --shadow-xl:  0 24px 64px rgba(0,0,0,0.6);
}

/* ─── BASE RESET ─── */
*, *::before, *::after { box-sizing: border-box; }

body {
  background: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── REDUCED MOTION ─── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```
