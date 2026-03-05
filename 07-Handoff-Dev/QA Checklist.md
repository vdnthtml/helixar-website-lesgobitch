# QA Checklist — Helixar

Run this before any design goes to development, and before any dev build ships.

---

## Design QA (Before Handoff)

### Visual
- [ ] All colors match token values (spot-check with color picker)
- [ ] Orange (#FF5C00) only appears on CTAs and logo
- [ ] No element uses a color not defined in the design system
- [ ] Typography: all headlines have correct negative tracking
- [ ] Typography: font is visibly Geist (verify at various sizes)
- [ ] Cards have visible but subtle borders (#2A2A34)
- [ ] Spacing is consistent — no "eyeballed" gaps

### Content
- [ ] No Lorem Ipsum anywhere
- [ ] All copy matches approved drafts in `Copy Drafts.md`
- [ ] No jargon words in UI copy (see Voice & Tone.md)
- [ ] Empty states are designed for every list/table view
- [ ] Error states are designed for form inputs and loading failures

### Completeness
- [ ] All 23 app screens are designed (see Screen Inventory.md)
- [ ] Both states (empty + filled) for all list views
- [ ] All button states: default, hover, active, disabled, loading
- [ ] All input states: default, focused, error, disabled

---

## Development QA (Before Shipping)

### Cross-Platform
- [ ] Mac: Traffic lights visible and functional
- [ ] Mac: Window drag works from title bar area
- [ ] Windows: Custom title bar minimize/maximize/close works
- [ ] Windows: Scrollbars use custom styling
- [ ] Both: Font renders cleanly (check on actual hardware)
- [ ] Both: All keyboard shortcuts work with correct modifier key

### Interactions
- [ ] ⌘K / Ctrl+K opens command palette
- [ ] Escape closes all modals and panels
- [ ] All hover states work
- [ ] All focus states are visible (keyboard navigation)
- [ ] Tab order is logical in all forms
- [ ] Confirm dialogs appear for all destructive actions

### Performance
- [ ] Page/view transitions feel instant (< 350ms)
- [ ] No layout shift on font load (font is preloaded)
- [ ] Skeleton screens appear for all async data
- [ ] No janky animations (check at 60fps in DevTools)

### Responsive (Landing Page)
- [ ] 375px (iPhone SE): Layout intact, no overflow
- [ ] 768px (tablet): Layout adapts cleanly
- [ ] 1280px (desktop): Full layout correct
- [ ] Text is readable at all breakpoints (min 15px body)
- [ ] Touch targets are minimum 44px on mobile

### Accessibility
- [ ] All images have alt text
- [ ] All icon-only buttons have aria-label
- [ ] Color contrast passes 4.5:1 minimum
- [ ] Screen reader announces status changes (badges, loading states)
- [ ] `prefers-reduced-motion` disables animations

### Animation (Landing Page)
- [ ] Hero entrance sequence runs on load
- [ ] Scroll reveals trigger at correct scroll positions
- [ ] Marquee runs smoothly (no stutter)
- [ ] GSAP ScrollTrigger cleans up on component unmount
- [ ] Animations are disabled when `prefers-reduced-motion` is set

---

## Sign-Off

Before any public release, all items in both checklists must be checked.
Designer signs off on visual QA. Developer signs off on dev QA.

If any item fails — log it, fix it, re-check it. Don't ship with known visual regressions.
