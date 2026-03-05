# Helixar Design OS

**The complete design system and production landing page for Helixar — the AI marketing workspace.**

Built with Next.js 16, React 19, GSAP, and a hand-crafted CSS design system.

---

## Quick Start

```bash
cd helixar-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Repository Structure

### Design System (Documentation)

```
00-Foundation/          Brand identity and design philosophy
├── Brand DNA.md            What Helixar is, who it's for, core value props
├── Design Principles.md    Rules behind every design decision
└── Voice and Tone.md       Writing style, personality, do's and don'ts

01-Visual-Language/     Complete visual identity specification
├── Color System.md         Full palette — backgrounds, brand, semantic, text
├── Typography.md           Font stack, scale, weights, letter-spacing
├── Spacing.md              Spacing scale, section rhythm, padding rules
├── Motion.md               Easing curves, durations, animation philosophy
└── Icons.md                Icon usage, sizing, Lucide icon set guidelines

02-Component-Library/   Every reusable UI component, documented
├── Buttons.md              Primary, secondary, sizes, states, interactions
├── Cards.md                Card variants, backgrounds, border treatments
├── Navigation.md           Navbar, links, scroll behavior, CTAs
├── Forms.md                Input styling, labels, validation states
├── Tables.md               Data tables, metric displays, formatting
└── Badges.md               Status badges, pills, platform indicators

03-Landing-Page/        Page strategy and content planning
├── Strategy and Narrative.md   The story arc from hero to CTA
├── Section Map.md              Every section in order with purpose
├── Copy.md                     All headlines, body text, CTAs — final copy
├── Animation Plan.md           Scroll triggers, entrance sequences, timings
└── Stitch Prompts.md           AI design tool prompts for generating visuals

04-App-UI/              Application interface specifications
├── Architecture.md         App layout, navigation patterns, information hierarchy
├── Screen Inventory.md     Every screen/view in the product
├── Interactions.md         Hover states, transitions, loading patterns
└── Mac vs Windows.md       Platform-specific considerations

05-References/          Competitive research and inspiration sources
├── Competitor Audit.md     Feature-by-feature comparison with market
├── Inspo Breakdown.md      What we learned from reference sites
└── Anti-Patterns.md        What NOT to do — common mistakes to avoid

06-AI-Prompting-System/ Prompt engineering for design consistency
├── How To Talk To Stitch.md    Figma/Stitch prompting guide
├── How To Talk To AI Studio.md Code generation prompting guide
├── Prompt Recipes.md           Ready-to-use prompts for common tasks
└── Output Review Checklist.md  QA checklist for AI-generated output

07-Handoff-Dev/         Developer handoff documentation
├── Tokens.md               Design tokens mapping (design → code)
├── CSS Variables.md         Complete CSS custom properties reference
├── Dev Notes.md             Implementation notes, gotchas, conventions
└── QA Checklist.md          Visual QA and interaction testing checklist
```

### Landing Page (Production Code)

```
helixar-landing/
├── app/
│   ├── globals.css             Master stylesheet — all CSS variables, component
│   │                           styles, section layouts, responsive breakpoints
│   ├── layout.tsx              Root layout with Geist font, metadata, body setup
│   ├── page.tsx                Page composition — renders all sections in order
│   │
│   └── components/
│       ├── Nav.tsx             Sticky navbar — logo, links with hover underline, CTA
│       ├── Hero.tsx            Hero section — eyebrow, headline, subhead, CTAs,
│       │                      product mockup with stage gradient and dissolve fade
│       ├── ProductMockup.tsx   Interactive product UI mockup — sidebar, metrics,
│       │                      platform badges, competitor analysis table
│       ├── SocialProof.tsx     Infinite marquee of client/partner names
│       ├── TheLoop.tsx         4-step process (Research → Analyze → Generate → Track)
│       │                      with numbered steps in orange monospace
│       ├── PainPoints.tsx      3 persona cards (Solopreneur, Agency, Team Lead)
│       │                      showing pain → resolution narrative
│       ├── FeaturesGrid.tsx    Primary features in alternating full-width rows
│       │                      (copy + stat panel) plus secondary 3-column list
│       ├── Testimonials.tsx    3 testimonial cards — italic quotes, avatar circles,
│       │                      min-height 280px, hover lift effect
│       ├── CompoundAdvantage.tsx  3 metric cards showing compounding intelligence
│       ├── FinalCTA.tsx        Closing CTA section with radial orange glow
│       ├── Footer.tsx          4-column footer with links, copyright, tagline
│       ├── Animations.tsx      GSAP orchestration — hero entrance timeline,
│       │                      scroll-triggered reveals, cursor spotlight on cards
│       └── DeepDives.tsx       (Legacy — no longer used in page.tsx)
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | **Next.js 16** | App router, server components, static export |
| UI | **React 19** | Component composition |
| Styling | **Vanilla CSS** | Full design system via CSS custom properties — no Tailwind |
| Animation | **GSAP 3.14** + ScrollTrigger | Hero timeline, scroll reveals, stagger effects |
| Icons | **Lucide React** | Consistent 24px icon set |
| Fonts | **Geist Sans / Mono** | Primary typeface via `next/font` |

---

## Design Inspirations

The visual language and interaction patterns are directly influenced by five premium product sites. Each was studied in depth — screenshots, recordings, and detailed breakdowns are documented in `05-References/`.

### [Linear](https://linear.app)
The primary structural reference. Helixar adopted Linear's approach to:
- **Alternating full-width feature sections** (copy on one side, visual on the other) instead of generic icon card grids
- **Left-aligned section content** — centering is for hero sections only
- **Large, confident typography** — headlines that dominate their viewport
- **Translucent card borders** (`rgba(255,255,255,0.07)`) with hover brightening
- **Dark panel data displays** as feature visuals rather than screenshots

### [Vercel](https://vercel.com)
Influenced the hero and product presentation:
- **Product mockup as the centerpiece** — wide, staged, dissolving into the page
- **Radial gradient stage effect** behind the mockup creating depth
- **Section background alternation** (#0A0A0B / #0C0C0E) for scroll rhythm
- **Grain texture overlay** for physical materiality

### [Resend](https://resend.com)
Shaped the micro-interactions and button states:
- **Button hover glow ring** — `box-shadow` expanding outward on hover
- **Press-down physics** — `scale(0.98)` on `:active` for tactile feedback
- **Stat pills** with translucent backgrounds and rounded borders

### [Raycast](https://raycast.com)
Inspired the animation system:
- **`power3.out` easing** for all scroll reveals — smooth deceleration
- **Tight stagger timing** (0.08s between siblings)
- **Cursor spotlight effect** — radial gradient following mouse position on cards

### [Dia](https://dia.so)
Influenced the overall dark aesthetic:
- **Hero vignette** — radial gradients creating cinematic center focus
- **Footer dimness** — text at 0.5 opacity, brightening on hover
- **Generous negative space** — letting content breathe

---

## Key Design Decisions

- **No orange icon boxes** — The most "template" pattern in web design. Replaced with monospace step numbers, bare muted icons, and typographic hierarchy.
- **No Tailwind** — The design system is expressed entirely through CSS custom properties in `globals.css`. This keeps the styling self-contained, inspectable, and framework-agnostic.
- **No decorative quote marks** — Testimonials stand on their own as italic statements, not wrapped in oversized quotation marks.
- **2-hex-step background variation** — Sections alternate between `#0A0A0B` and `#0C0C0E`. Invisible individually, but creates unconscious depth perception while scrolling.

---

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

*Helixar — Research → Analyze → Generate → Track.*
