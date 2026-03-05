# Motion Principles — Helixar

---

## The Rule

**If it moves, it's saying something. If it's not saying anything, it doesn't move.**

Animation at Helixar is a communication layer — not a personality layer.

---

## Easing Functions

```css
/* Standard — Most UI transitions */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* Enter — Elements appearing */
--ease-enter: cubic-bezier(0, 0, 0.2, 1);

/* Exit — Elements leaving */
--ease-exit: cubic-bezier(0.4, 0, 1, 1);

/* Spring — Playful, organic moments */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Sharp — Snappy, precise actions */
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
```

---

## Duration Scale

```
--duration-instant:  50ms   → Hover color changes
--duration-fast:     100ms  → Button press feedback
--duration-normal:   150ms  → Most UI transitions (default)
--duration-moderate: 250ms  → Panel open/close, dropdown appear
--duration-slow:     350ms  → Modal appear, page transitions
--duration-deliberate: 500ms → Hero animations, onboarding
--duration-cinematic: 800ms+ → Landing page scroll reveals only
```

**Rule:** App interactions should never exceed 350ms. Users are in work mode — slow animations feel like lag.

---

## State Transitions

### Hover
```css
transition: background-color var(--duration-instant) var(--ease-standard),
            border-color var(--duration-fast) var(--ease-standard),
            color var(--duration-instant) var(--ease-standard);
```

### Focus (keyboard)
```css
transition: box-shadow var(--duration-fast) var(--ease-enter);
```
Focus ring appears instantly. Removal is slightly slower (100ms) so it doesn't feel abrupt.

### Page / View Transitions (In-App)
```css
/* Content fades + slides up slightly */
animation: contentEnter var(--duration-slow) var(--ease-enter);

@keyframes contentEnter {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Sidebar Items (Stagger)
When a list loads, items stagger in at 30ms intervals. Maximum stagger: 5 items. Items 6+ appear instantly.

---

## Landing Page Motion

The landing page can be more expressive. These patterns are landing-page only.

### Hero Entrance (On Load)
1. Background grid fades in: 0ms delay, 800ms, ease-enter
2. Eyebrow slides up + fades: 200ms delay, 600ms, ease-spring
3. Headline reveals word by word: 400ms delay, 800ms total, stagger 80ms per word
4. Subhead fades in: 900ms delay, 500ms
5. CTAs slide up + fade: 1100ms delay, 400ms, ease-spring
6. Hero product shot fades + scales from 0.96: 600ms delay, 900ms

### Scroll-Triggered Reveals
```css
/* Default scroll reveal */
@keyframes scrollReveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Trigger: IntersectionObserver at 15% threshold */
/* Duration: 600ms, ease-enter, no stagger unless list */
```

### Feature Cards (Scroll)
Cards in the features section stagger on scroll:
- Delay between cards: 80ms
- Each card: fade + translateY(16px) → 0
- Duration: 500ms per card

### The Glow Pulse (Brand Element)
On the hero section, the Helixar logo/wordmark has a subtle orange glow that pulses slowly.
```css
@keyframes glowPulse {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(255, 92, 0, 0.3)); }
  50%       { filter: drop-shadow(0 0 20px rgba(255, 92, 0, 0.6)); }
}
animation: glowPulse 3s ease-in-out infinite;
```

---

## GSAP vs CSS

| Use Case | Technology |
|---|---|
| Hover, focus, state changes | CSS transitions |
| Page/view transitions | CSS animations + JS class toggle |
| Scroll-triggered reveals | GSAP ScrollTrigger |
| Hero entrance sequence | GSAP Timeline |
| Particle / canvas effects | Custom canvas or Three.js |
| Number counting animations | GSAP |

---

## What We Never Do

- Animate layout properties (width, height) — use transform instead
- Loop animations in the app (only on landing page)
- Animate more than 3 elements simultaneously
- Use bounce easing on professional/serious UI elements
- Auto-play video with sound
- Animate on scroll without respecting `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
