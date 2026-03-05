# How To Talk To Stitch — Helixar Prompting Guide

---

## The Core Problem

Stitch (and most design AI) defaults to "what most landing pages look like." 
Your job is to fight that default with specificity.

Every vague word you use gives Stitch permission to be generic.
Every specific instruction forces it toward what you actually want.

---

## The Anatomy of a Good Stitch Prompt

A great Stitch prompt has 6 parts, in this order:

```
1. PRODUCT NAME + WHAT IT IS (1 sentence)
2. VISUAL STYLE (colors, fonts, aesthetic reference)
3. LAYOUT (structure, what goes where)
4. EXACT COPY (paste the actual words — don't let it invent)
5. DETAILS (padding, sizes, specific treatments)
6. DO NOT (explicit exclusions)
```

Every part matters. Skipping #4 is the most common mistake — Stitch will invent copy and it's always wrong.

---

## Style Reference Language

Use these exact phrases to get the right aesthetic:

**For dark, precise, developer-tool feeling:**
"Linear.app + Raycast aesthetic — dark, precise, quiet confidence"

**For the color system:**
"Dark background #0A0A0B, surface cards #111113, brand orange #FF5C00 used sparingly on CTAs only"

**For typography:**
"Geist font family, large negative-tracked headlines, muted secondary text at #8A8A96"

**For spacing:**
"Generous whitespace, 8px grid, consistent padding — never cramped"

**For cards:**
"Subtle border #2A2A34, card background #111113, 12px border radius"

---

## Iteration Protocol

Round 1: Get the structure right. Ignore color/type mistakes.
Round 2: Fix the color system. One instruction at a time.
Round 3: Fix typography. Sizes, weights, tracking.
Round 4: Fix spacing and density.
Round 5: Details — hover states, shadows, border treatments.

**Never ask for everything to change at once.** Name the one thing.

**Good iteration prompt:**
"Keep everything exactly the same. The only change: make the CTA button #FF5C00 (not the current blue), and add a very subtle glow behind it using rgba(255,92,0,0.3). Nothing else changes."

**Bad iteration prompt:**
"Can you make it more orange and less blue and also the font looks wrong and the spacing feels tight?"

---

## Prompts That Actually Work

### Getting the right dark background:
"Background color must be exactly #0A0A0B — not dark grey, not navy, not #1a1a1a. Specifically #0A0A0B."

### Getting the right orange:
"Brand orange is #FF5C00. This is used ONLY on the primary CTA button and the logo. Nowhere else. No orange text, no orange backgrounds, no orange borders except on the CTA."

### Getting good typography:
"Headline should be Geist font, weight 800, approximately 64–80px, with negative letter-spacing (-0.05em to -0.06em). It should feel tightly set — not loose."

### Getting good card design:
"Cards have background #111113, border 1px solid #2A2A34, border-radius 12px, padding 24px. No drop shadows. No gradients. Flat and precise."

### Getting a screenshot mockup:
"Show a dark desktop application screenshot inside a container. The screenshot shows a sidebar on the left (240px, dark) and main content on the right. Inside the screenshot, show a table with 4 rows of realistic marketing data (not Lorem Ipsum)."

---

## What Stitch Gets Wrong (And How To Fix It)

| Stitch Default | How To Override |
|---|---|
| Purple/blue accents | "Brand color is exclusively #FF5C00. No purple, no blue, no teal." |
| Rounded, soft corners | "Border-radius maximum 12px on cards. Buttons: 8px." |
| Light backgrounds | "This is a dark theme only. Background #0A0A0B. No light sections." |
| Generic stock-photo humans | "No photography. No people. No stock imagery." |
| Thin, wispy fonts | "Headline font-weight: 800. Section titles: 700. Never below 500." |
| Too many colors | "Two colors only: near-white (#F2F2F3) for text, #FF5C00 for CTAs. Everything else is grey variants." |
| Centered body text | "Body copy and descriptions are left-aligned. Only headlines and hero CTAs are centered." |

---

## Section-Specific Prompt Templates

See: `Stitch Prompt Templates.md` in `03-Landing-Page/` for full copy-paste prompts per section.
