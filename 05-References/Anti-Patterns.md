# Anti-Patterns — What To Avoid

## Design Anti-Patterns

### The Purple Gradient Disease
Every AI startup did purple-to-blue in 2022–2024. It reads as "nothing specific about us."
**Helixar rule:** No purple. No blue gradients. One gradient: orange to lighter orange, used sparingly.

### The Feature Dump Homepage
When everything is important, nothing is.
**Helixar rule:** Max 6 features on the homepage. Lead each with pain removed, not capability added.

### The Vague Hero
"The Future of Marketing is Here." Could be any company.
**Helixar rule:** The headline names something the user has felt. Specific enough to exclude non-targets.

### The Overcrowded Dashboard
12 cards, 3 charts, 2 tables visible at once. Nobody knows where to look.
**Helixar rule:** One primary action or insight per screen. Default views show essential 20%.

### The Decorative Animation
Floating blobs. Particle systems that communicate nothing.
**Helixar rule:** Every animation communicates a state change. If removing it doesn't change meaning — remove it.

### The Confidence-Lacking CTA
"Try it for free today!" or "Start your journey." or "Learn More" as primary CTA.
**Helixar rule:** Direct actions only. "Download for Mac." No exclamation marks. No journeys.

### The Fake Testimonial
"Helixar completely transformed our workflow!" — Jane D., Marketing Professional
**Helixar rule:** Full name, specific role, specific company, specific result. No exclamation marks.

---

## Copy Anti-Patterns

- **Jargon Spiral:** "Leveraging cutting-edge AI to synergize your marketing ecosystem..."
- **Benefit-Free Feature List:** "Multi-platform competitor scraping" — so what?
- **Unnecessary Caveat:** "Helixar can help you potentially improve..." — own the claim or change it.

---

## Technical Anti-Patterns

- **Animate layout properties** (width/height) — use transform instead. Layout repaints are expensive.
- **No reduced motion check** — always respect `prefers-reduced-motion`.
- **Placeholder as label** — when typing starts, the label disappears. Use proper labels above inputs.
- **Hover-only interactions** — invisible on mobile/touch screens. Everything must work without hover.
