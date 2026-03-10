# CSS Variables v3 — Helixar
# Light Brutalist + Warm Off-White

```css
/* ============================================
   HELIXAR DESIGN SYSTEM v3 — CSS VARIABLES
   Light Brutalist — Warm Off-White Base
   ============================================ */

:root {

  /* ─── BACKGROUNDS ─── */
  --color-bg-base:        #F5F2EE;
  --color-bg-alternate:   #EDEBE8;
  --color-bg-card:        #FAFAF8;
  --color-bg-paper-dark:  #E0DAD5;
  --color-bg-invert:      #1A1916;

  /* ─── BRAND ORANGE ─── */
  --color-brand:          #FF5E2C;
  --color-brand-hover:    #FF7A45;
  --color-brand-muted:    rgba(255, 94, 44, 0.10);
  --color-brand-glow:     rgba(255, 94, 44, 0.18);
  --color-brand-bg:       #FFE8E0;

  /* ─── TEXT ─── */
  --color-text-primary:   #1A1916;
  --color-text-secondary: #424249;
  --color-text-body:      #6B6B72;
  --color-text-muted:     #999690;
  --color-text-placeholder: #C8C4BF;
  --color-text-inverse:   #F5F2EE;

  /* ─── BORDERS ─── */
  --color-border-hairline: #E8E4DF;
  --color-border-default:  #E0DAD5;
  --color-border-strong:   #C8C4BF;

  /* ─── SEMANTIC ─── */
  --color-success:        #16A34A;
  --color-success-muted:  rgba(22, 163, 74, 0.10);
  --color-warning:        #D97706;
  --color-warning-muted:  rgba(217, 119, 6, 0.10);
  --color-error:          #DC2626;
  --color-error-muted:    rgba(220, 38, 38, 0.10);

  /* ─── TYPOGRAPHY ─── */
  --font-display: 'Bebas Neue', 'Geist', system-ui, sans-serif;
  --font-sans:    'Geist', system-ui, -apple-system, sans-serif;
  --font-mono:    'Geist Mono', 'Fira Code', monospace;

  --text-xs:   11px;
  --text-sm:   13px;
  --text-base: 15px;
  --text-md:   17px;
  --text-lg:   21px;
  --text-xl:   28px;
  --text-2xl:  40px;
  --text-3xl:  56px;
  --text-4xl:  80px;
  --text-5xl:  120px;

  /* ─── SPACING (8px base unit) ─── */
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
  --radius-full: 9999px;

  /* ─── TRANSITIONS ─── */
  --duration-fast:     100ms;
  --duration-normal:   150ms;
  --duration-moderate: 250ms;
  --duration-slow:     350ms;

  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter:    cubic-bezier(0, 0, 0.2, 1);
  --ease-brutal:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ─── LAYOUT ─── */
  --landing-max-width:   1200px;
  --content-max-width:   960px;
  --section-padding-y:   96px;

  /* ─── SHADOWS (light mode — subtle, warm) ─── */
  --shadow-sm:   0 1px 3px rgba(26, 25, 22, 0.08);
  --shadow-md:   0 4px 12px rgba(26, 25, 22, 0.10);
  --shadow-lg:   0 8px 32px rgba(26, 25, 22, 0.12);
  --shadow-xl:   0 24px 64px rgba(26, 25, 22, 0.14);
  --shadow-brand: 0 0 0 3px rgba(255, 94, 44, 0.25);
}

/* ─── BASE RESET ─── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* ─── ORANGE STAMP ─── */
.stamp {
  background: var(--color-brand);
  color: var(--color-text-inverse);
  padding: 0 10px 4px;
  display: inline-block;
  line-height: inherit;
}

/* ─── TICKET LABEL (section eyebrow) ─── */
.ticket-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-brand);
  background: rgba(255, 94, 44, 0.08);
  border: 1px solid rgba(255, 94, 44, 0.20);
  padding: 4px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 0;
  line-height: 1;
}

.ticket-label::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background: var(--color-brand);
  flex-shrink: 0;
}

/* ─── BACKGROUND WORD ─── */
.bg-word {
  font-family: var(--font-display);
  font-size: clamp(140px, 22vw, 220px);
  font-weight: 900;
  color: var(--color-text-primary);
  opacity: 0.04;
  position: absolute;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  letter-spacing: -0.04em;
  line-height: 1;
}

/* ─── REDUCED MOTION ─── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
