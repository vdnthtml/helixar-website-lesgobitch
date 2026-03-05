# How To Talk To AI Studio — Helixar Code Generation Guide

---

## The Core Problem

AI Studio (and similar code generators) produces generic, unstyled code by default.
It doesn't know your design system. You have to teach it every time.

The solution: give it your design tokens as context before asking for any component.

---

## The Context Block (Paste This First)

Before every code generation session in AI Studio, paste this as your first message:

```
I'm building Helixar — a dark-themed AI marketing desktop app (Electron, React).
Here is my design system. Use ONLY these values:

COLORS:
--color-bg-base: #0A0A0B
--color-bg-surface: #111113
--color-bg-elevated: #1A1A1E
--color-bg-overlay: #222228
--color-brand: #FF5C00
--color-brand-hover: #FF7A2E
--color-brand-muted: rgba(255,92,0,0.12)
--color-text-primary: #F2F2F3
--color-text-secondary: #8A8A96
--color-text-tertiary: #52525C
--color-border-default: #2A2A34
--color-border-subtle: #1E1E24
--color-success: #22C55E
--color-warning: #F59E0B
--color-error: #EF4444

TYPOGRAPHY:
Font: Geist (import from https://vercel.com/font)
Monospace: Geist Mono
Scale: 11px(xs), 13px(sm), 15px(base), 17px(md), 21px(lg), 28px(xl), 36px(2xl), 48px(3xl), 64px(4xl)
Headline tracking: -0.04em to -0.06em at large sizes

SPACING: 8px base unit. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px
BORDER RADIUS: 4px(sm), 8px(md), 12px(lg), 16px(xl), 9999px(full)

COMPONENTS:
- Primary button: bg #FF5C00, text #0A0A0B, border-radius 8px, height 40px, padding 0 20px, font-weight 600
- Secondary button: transparent bg, border 1px solid #2A2A34, same sizing
- Card: bg #111113, border 1px solid #2A2A34, border-radius 12px, padding 24px
- Input: bg #0A0A0B, border 1px solid #2A2A34, border-radius 8px, height 40px, focus border #FF5C00

All icons: Lucide React, 20px default, stroke-width 2
```

---

## Component Request Format

After pasting the context block, request components like this:

**Template:**
```
Build a React component for [COMPONENT NAME].

FUNCTION: [What it does in one sentence]

PROPS:
- propName: type — description
- propName: type — description

CONTENT/DATA: [Exact copy or data structure]

BEHAVIOR:
- [Interaction 1]
- [Interaction 2]

USE EXACTLY: [Any specific CSS values or tokens]

DO NOT: [Specific things to avoid]
```

---

## Example Prompts

### Campaign Status Badge
```
Build a React StatusBadge component using the design system above.

FUNCTION: Displays campaign lifecycle status as a colored pill badge.

PROPS:
- status: 'draft' | 'pending' | 'deploying' | 'active' | 'paused' | 'completed'
- size: 'sm' | 'md' (default md)

BEHAVIOR:
- Active status: pulse animation on the dot indicator (2s infinite ease-in-out)
- Each status has a distinct color from the semantic palette above

STATUS COLORS:
- draft: #52525C (neutral)
- pending: #F59E0B (warning)
- deploying: #FF5C00 (brand)
- active: #22C55E (success) with animated dot
- paused: #8A8A96 (muted)
- completed: #3A3A44 (very muted)

DO NOT use any colors not listed above. No gradients.
```

### Research Platform Progress
```
Build a React PlatformProgress component using the design system above.

FUNCTION: Shows scraping progress per platform during competitor research.

PROPS:
- platforms: Array of { name: string, status: 'pending' | 'loading' | 'done' | 'error', icon: string }

CONTENT: Platform names: YouTube, Instagram, TikTok, X, Facebook, LinkedIn

BEHAVIOR:
- pending: grey dot, platform name in text-tertiary
- loading: orange spinner (animated), platform name in text-secondary
- done: green checkmark icon, platform name in text-primary
- error: red X icon, platform name in error color

LAYOUT: Vertical list, each row 40px height, icon left + name + status right
USE EXACTLY: Lucide icons — Loader2 (spinning) for loading, CheckCircle for done, XCircle for error
```

---

## Converting Stitch Design → Code

When you have a Stitch design and want to convert it to code:

1. **Screenshot the Stitch output**
2. **Upload to AI Studio**
3. **Use this prompt:**

```
Here is a design mockup for a [section name] from the Helixar landing page.

Convert this to clean React + CSS (or HTML/CSS) code.

CRITICAL: 
- Use the design token system I provided above — don't invent new color values
- The font is Geist (not Inter, not system-ui)
- All spacing must be multiples of 8px
- Orange (#FF5C00) appears ONLY on the primary CTA button
- Implement hover states on all interactive elements
- Add the GSAP scroll animation from this spec: [paste relevant section from Animation Plan.md]

OUTPUT: Single React component file with styles as CSS modules or styled-components.
```

---

## The Iteration Rule

When AI Studio's output is wrong, **name the exact line or element** and give the exact fix:

**Bad:** "The button doesn't look right"
**Good:** "The button background should be #FF5C00, not the current blue. The text should be #0A0A0B (very dark, not white). Add `box-shadow: 0 0 0 0px transparent` that transitions to `0 0 0 3px rgba(255,92,0,0.3)` on hover."

The more specific your correction, the less it breaks everything else.
