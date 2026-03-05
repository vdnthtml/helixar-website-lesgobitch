# Output Review Checklist

---

## Use This After Every AI Design Output

Before accepting any output from Stitch, AI Studio, or any other tool — run it through this checklist. Takes 2 minutes. Saves hours of iterating on the wrong foundation.

---

## ✦ Color Check

- [ ] Background is #0A0A0B (not grey, not navy, not slightly-off-black)
- [ ] Orange (#FF5C00) appears ONLY on primary CTAs and logo
- [ ] No purple, teal, or blue anywhere
- [ ] Text hierarchy: near-white primary → grey secondary → muted tertiary
- [ ] Cards are slightly lighter than background (#111113)
- [ ] No gradients except on the brand logo element

---

## ✦ Typography Check

- [ ] Font is Geist (not Inter, Space Grotesk, or system-ui)
- [ ] Large headlines (48px+) have negative letter-spacing (-0.04em or tighter)
- [ ] Headline font weight is 700 or 800 (not 400, not 600 for heroes)
- [ ] Body text is 15px, color #8A8A96 (not white, not too dark)
- [ ] Uppercase text is used only for labels/eyebrows, never headlines
- [ ] No lorem ipsum — real Helixar copy is in place

---

## ✦ Layout Check

- [ ] Maximum content width: 1200px on landing page
- [ ] Spacing feels generous — not cramped, not sparse
- [ ] Card padding is 24px (not 12px, not 32px)
- [ ] Border radius: cards 12px, buttons 8px, badges full-radius
- [ ] Grid alignment: everything snaps to 8px grid

---

## ✦ Component Check

- [ ] Primary button: orange bg, dark text, 40px height, 8px radius
- [ ] Secondary button: transparent bg, subtle border, same sizing
- [ ] Input fields: dark bg (#0A0A0B), subtle border, orange focus ring
- [ ] Cards have visible but subtle borders (#2A2A34)
- [ ] Status badges use semantic colors (green=active, orange=deploying, etc.)

---

## ✦ Content Check

- [ ] Hero headline is one of the approved options (see Copy Drafts.md)
- [ ] Feature copy leads with pain, not capability
- [ ] No jargon words (leverage, synergize, streamline, robust, seamless)
- [ ] CTA copy is direct action (not "Learn More" or "Click Here")
- [ ] No exclamation marks in primary copy

---

## ✦ Motion Check (if animated)

- [ ] Animations have purpose — they communicate state, not decorate
- [ ] App interactions are under 350ms
- [ ] Landing page reveals are 500–800ms (more expressive allowed)
- [ ] `prefers-reduced-motion` is respected
- [ ] Nothing loops in the app (looping is for landing page only)

---

## ✦ The 5-Second Test

Show the design to someone who hasn't seen it for 5 seconds. Then ask:

1. What is this product?
2. Who is it for?
3. What is the one thing you're supposed to do?

If they can't answer #1 and #3 — the design needs work.

---

## Red Flags (Start Over on This Section)

If you see any of these, don't iterate — restart that section with a better prompt:

🚩 Purple or blue as the primary accent color
🚩 Light background or white sections in a dark-themed design
🚩 Stock photos of people using computers
🚩 The font is clearly not Geist
🚩 More than 3 different accent colors visible
🚩 A headline that could belong to any marketing tool
🚩 Animations that serve no communicative purpose
🚩 Cards without visible borders (they disappear into the background)
