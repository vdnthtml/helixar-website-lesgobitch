# Cards & Containers v3 — Helixar
# Light Brutalist

---

## Data Panel Card (Feature sections)

```css
.data-panel {
  background: #FAFAF8;
  border: 1px solid #E8E4DF;
  border-radius: 12px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}

/* Orange top accent line — signature of data panels */
.data-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #FF5E2C, transparent);
  border-radius: 12px 12px 0 0;
}
```

Stat row inside data panel:
```css
.stat-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px 0;
  border-top: 1px solid #E8E4DF;
}
.stat-row:first-child { border-top: none; padding-top: 0; }

.stat-label {
  font-family: 'Geist Mono', monospace;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #999690;
}

.stat-value {
  font-family: 'Geist Mono', monospace;
  font-size: 18px;
  font-weight: 700;
  color: #1A1916;
}

.stat-bar-track {
  height: 2px;
  background: #E8E4DF;
  border-radius: 9999px;
  margin-top: 8px;
}

.stat-bar-fill {
  height: 2px;
  background: #FF5E2C;
  border-radius: 9999px;
}
```

---

## MacBook Mockup Component

CSS-only. No Three.js. No external libraries.

```css
.macbook-wrapper {
  position: relative;
  width: 520px; /* desktop */
}

.macbook {
  transform: perspective(1200px) rotateY(-18deg) rotateX(6deg);
  transform-style: preserve-3d;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: perspective(1200px) rotateY(-18deg) rotateX(6deg) translateY(0px);
  }
  50% {
    transform: perspective(1200px) rotateY(-18deg) rotateX(6deg) translateY(-12px);
  }
}

.macbook-bezel {
  background: #1A1916;
  border-radius: 12px 12px 0 0;
  border: 1.5px solid rgba(255, 255, 255, 0.10);
  padding: 12px 12px 0;
  position: relative;
}

.macbook-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 20px;
  background: #1A1916;
  border-radius: 0 0 8px 8px;
  z-index: 2;
}

.macbook-screen {
  background: #0D0C0A;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  position: relative;
}

.macbook-hinge {
  height: 4px;
  background: #2A2A28;
  width: 100%;
}

.macbook-base {
  background: #2A2A28;
  height: 14px;
  width: 106%;
  margin-left: -3%;
  border-radius: 0 0 8px 8px;
}

.macbook-trackpad {
  width: 80px;
  height: 48px;
  background: #252522;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  top: -2px;
}

.macbook-glow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 16px;
  background: rgba(255, 94, 44, 0.25);
  filter: blur(24px);
  border-radius: 50%;
  pointer-events: none;
}

/* Screen ambient overlay */
.macbook-screen::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 94, 44, 0.05), transparent 50%);
  pointer-events: none;
}

/* Mobile */
@media (max-width: 768px) {
  .macbook-wrapper { width: 320px; }
}
```

---

## Testimonial Card

Featured (large):
```css
.testimonial-featured {
  background: #FAFAF8;
  border-left: 3px solid #FF5E2C;
  border-radius: 0 12px 12px 0;
  padding: 40px;
  min-height: 280px;
}
```

Small:
```css
.testimonial-small {
  background: #FAFAF8;
  border-left: 2px solid rgba(255, 94, 44, 0.25);
  border-radius: 0 12px 12px 0;
  padding: 28px;
}
```

Quote: italic · #1A1916 (featured) or #6B6B72 (small)
Author: initials circle 36px (bg #E8E4DF · font #1A1916 Geist 600 13px)
         + name #1A1916 14px Geist 600 + role #999690 13px
