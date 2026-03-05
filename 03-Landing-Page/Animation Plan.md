# Animation Plan — Helixar Landing Page

---

## Technology Stack

```
GSAP + ScrollTrigger  → Scroll-driven animations, hero sequence, number counts
CSS Animations        → Loops, pulses, hovers, badge states
Lottie (optional)     → If we create custom icon animations for the loop section
Canvas / Three.js     → Hero background effect (particle grid or noise field)
```

Install:
```bash
npm install gsap
# GSAP ScrollTrigger is included in gsap package
```

---

## Section-by-Section Animation Plan

---

### HERO — On Page Load (GSAP Timeline)

```javascript
const tl = gsap.timeline({ defaults: { ease: "power3.out" }});

// 1. Background grid/particles fade in
tl.from(".hero-bg", { opacity: 0, duration: 1.2 })

// 2. Eyebrow badge slides up
  .from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.6 }, "-=0.6")

// 3. Headline — word by word reveal
  .from(".hero-headline .word", {
    opacity: 0, y: 20, stagger: 0.07, duration: 0.5
  }, "-=0.2")

// 4. Subhead fades in
  .from(".hero-subhead", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2")

// 5. CTAs slide up together
  .from(".hero-ctas", { opacity: 0, y: 12, duration: 0.4 }, "-=0.1")

// 6. Product screenshot scales in from slightly smaller
  .from(".hero-product", {
    opacity: 0, scale: 0.96, y: 24, duration: 0.8, ease: "power2.out"
  }, "-=0.3")
```

**Wrap each word in `.word` span** — do this with JavaScript on mount:
```javascript
headline.innerHTML = headline.textContent
  .split(' ')
  .map(w => `<span class="word" style="display:inline-block">${w}</span>`)
  .join(' ');
```

---

### HERO BACKGROUND — Particle Grid (CSS + JS)

A subtle grid of dots that slowly drift/pulse. Orange tint on nearest dots.

Option A (CSS only — simplest):
```css
.hero-bg {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255,92,0,0.08) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(255,92,0,0.05) 0%, transparent 50%),
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 48px 48px, 48px 48px;
}
```

Option B (Canvas — more alive, use if dev time allows):
- Draw 80×80 grid of dots
- Each dot has slight opacity variation and slow sine wave movement
- Dots near cursor get slightly brighter orange tint
- 60fps, requestAnimationFrame loop

---

### SOCIAL PROOF BAR — Marquee

```css
.marquee-track {
  display: flex;
  gap: 48px;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

Pause on hover:
```css
.marquee-track:hover { animation-play-state: paused; }
```

---

### THE LOOP SECTION — Scroll-Triggered Flow

The 4 steps (Research → Analyze → Generate → Track) animate in sequence as user scrolls:

```javascript
gsap.utils.toArray(".loop-step").forEach((step, i) => {
  gsap.from(step, {
    scrollTrigger: {
      trigger: step,
      start: "top 75%",
    },
    opacity: 0,
    x: -20,
    duration: 0.5,
    delay: i * 0.1,
    ease: "power2.out"
  });
});
```

The connecting arrows between steps draw in (SVG stroke-dashoffset animation).

---

### FEATURES GRID — Staggered Cards

```javascript
gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".features-grid",
    start: "top 70%",
  },
  opacity: 0,
  y: 24,
  stagger: 0.08,
  duration: 0.5,
  ease: "power2.out"
});
```

---

### DEEP DIVE SECTIONS — Alternating Reveal

Left column (copy):
```javascript
gsap.from(".deep-dive-copy", {
  scrollTrigger: { trigger: ".deep-dive", start: "top 65%" },
  opacity: 0, x: -32, duration: 0.7, ease: "power3.out"
});
```

Right column (screenshot):
```javascript
gsap.from(".deep-dive-screenshot", {
  scrollTrigger: { trigger: ".deep-dive", start: "top 65%" },
  opacity: 0, x: 32, duration: 0.7, delay: 0.1, ease: "power3.out"
});
```

---

### COMPOUND ADVANTAGE — Number Counter

If we show stats (e.g., "10–20 hours → minutes"):

```javascript
gsap.from(".count-number", {
  scrollTrigger: { trigger: ".count-number", start: "top 80%" },
  textContent: 0,
  duration: 1.5,
  ease: "power2.out",
  snap: { textContent: 1 },
  onUpdate: function() {
    this.targets()[0].textContent =
      Math.round(this.targets()[0].textContent).toLocaleString();
  }
});
```

---

### FINAL CTA — Entrance

```javascript
gsap.from(".final-cta-content", {
  scrollTrigger: { trigger: ".final-cta", start: "top 70%" },
  opacity: 0, y: 32, duration: 0.8, ease: "power3.out"
});
```

---

## Reduced Motion

Always wrap animations in a check:
```javascript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  // All GSAP animations here
}
```
