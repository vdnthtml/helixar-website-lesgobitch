# HELIXAR DESIGN SYSTEM v3
### Built from the reference board up. No compromises.

---

## What's in here

```
helixar-design-system-v3/
│
├── 00-foundation/
│   ├── PHILOSOPHY.md          Core design principles + the one rule
│   └── BLACKLIST.md           Every bad pattern from v2 — never returns
│
├── 01-colors/
│   └── COLORS.md              Three colors, extended palette, usage rules, section sequence
│
├── 02-typography/
│   └── TYPOGRAPHY.md          Bebas Neue, Geist, Geist Mono — complete scale + rules
│
├── 03-spacing/
│   └── SPACING.md             8px base, full scale, grid, breakpoints
│
├── 04-components/
│   └── COMPONENTS.md          Every component: nav, stamp, ticket label, command block,
│                              buttons, slack mockup, cards, pricing, marquee, quote
│
├── 05-sections/
│   └── PAGE-MAP.md            Every section: exact layout, exact copy, exact "NOT" rules
│
├── 06-css/
│   └── globals.css            Production-ready — paste directly, replaces everything
│
└── 07-prompts/
    └── ANTIGRAVITY-PROMPTS.md 6 sequential prompts, paste-ready, no ambiguity
```

---

## How to use this

**If you're sending to Antigravity:**
Start at `07-prompts/ANTIGRAVITY-PROMPTS.md`.
Send Prompt 01 first. Wait for confirmation. Then 02, 03, 04, 05, 06.

**If a component looks wrong:**
Check `00-foundation/BLACKLIST.md` first.
Then `04-components/COMPONENTS.md` for the exact spec.

**If a section layout is broken:**
Read `05-sections/PAGE-MAP.md` for that specific section.
It has the grid, spacing, content, and explicit NOT rules.

**If colors are off:**
Read `01-colors/COLORS.md` — every element has an assigned color.
No color decisions are left to interpretation.

---

## The design in three sentences

Three colors: black, white, orange. The orange is used like ink — material, sparse, intentional.
Bebas Neue at architectural scale. Geist for everything functional. Negative space is the design.
The product is Slack. Show Slack. Nothing else.

---

## What changed from v2

| v2 (wrong) | v3 (correct) |
|------------|--------------|
| Rounded border box around hero headline | Free-standing left-aligned Bebas text |
| Orange on every feature icon | Orange on CTAs + stamps only |
| Tick marks in feature lists | Prose sentences |
| "MONDAY MORNING. 9AM." scenario section | Pure arithmetic: 3 hours → 4 minutes |
| Equal 3-column feature grid | Alternating 45fr/55fr editorial rows |
| Generic subhead font styling | Strict Geist 400 17px max-width 380px |
| CSS blobs / Three.js shapes | Real Slack UI screenshots only |
| "HELIXAR" watermark over mockup | bg-word at 4% opacity behind layout |
| Centered headlines | Left-aligned always |
| Bullet point feature descriptions | Prose sentences max 45 words |
