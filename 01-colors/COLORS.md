# COLOR SYSTEM
### Three colors. That is the entire palette.

---

## The three

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Dark | Near Black | `#0D0C0A` | Type on light / dark section backgrounds / footer |
| Light | Warm White | `#F5F2EE` | Page base background — never pure #FFFFFF |
| Accent | Orange | `#FF5E2C` | The only accent — used as a material, not a color |

---

## Extended tones (derived — never introduce others)

| Name | Hex | Use |
|------|-----|-----|
| Charcoal | `#2A2825` | Primary type on light backgrounds |
| Mid Grey | `#6B6869` | Body copy, descriptions |
| Muted Grey | `#A09D9A` | Captions, metadata, secondary labels |
| Hairline | `#E2DED9` | Dividers only — 1px maximum |
| Paper | `#ECEAE6` | Alternate section backgrounds |
| Card White | `#FAF9F7` | Elevated card surfaces |
| Dark Surface | `#161412` | Cards inside dark sections |
| Dark Raised | `#1E1C19` | Elevated cards inside dark sections |
| Orange Hover | `#FF7A45` | Hover state on orange elements only |
| Orange Dim | `#FFE4D9` | Ticket label backgrounds |
| Orange Glow | `rgba(255,94,44,0.22)` | Drop shadows under orange CTAs |

---

## Assignment rules (enforced — no exceptions)

| Element | Value |
|---------|-------|
| Page background | `#F5F2EE` |
| Alternate section bg | `#ECEAE6` |
| Card surfaces on light | `#FAF9F7` |
| Dark section backgrounds | `#0D0C0A` |
| Cards inside dark | `#161412` |
| Elevated cards inside dark | `#1E1C19` |
| Primary type on light | `#2A2825` |
| Body copy | `#6B6869` |
| Captions, metadata | `#A09D9A` |
| Primary type on dark | `#FAF9F7` |
| Secondary type on dark | `#6B6869` |
| All borders on light | `1px solid #E2DED9` |
| All borders on dark | `1px solid rgba(255,255,255,0.06)` |

---

## Orange usage — the full allowed list

Every permitted use of `#FF5E2C`:

1. Primary CTA button background
2. The stamp — one per section maximum
3. Ticket label text and ::before square
4. Command block prompt `>` prefix
5. Large stat numbers (compound section)
6. Testimonial quote left border — `2px solid`
7. Pricing card featured top border — `3px solid`
8. Footer ■ square — `16×16px`
9. Nav logo ■ — the square only
10. Marquee right-edge stamp block
11. "SAVE X%" badge on pricing toggle

**Orange is NEVER used on:**
Body text, long descriptions, decorative dots, dividers, icon backgrounds,
hover states for text links (those go to `#2A2825`), section backgrounds.

---

## Section background sequence

Reading order, top to bottom:

```
NAV             transparent → #F5F2EE on scroll
HERO            #F5F2EE
MARQUEE         #0D0C0A     ← dark contrast strip
HOW IT WORKS
  Row 1         #F5F2EE
  Row 2         #ECEAE6
  Row 3         #F5F2EE
THE MATH        #0D0C0A     ← dark — the arithmetic section
TESTIMONIALS    #ECEAE6
PRICING         #F5F2EE
FINAL CTA       #0D0C0A     ← dark close
FOOTER          #0D0C0A     ← continues from CTA
```

Two dark zones on the page:
1. The marquee strip (44px)
2. The math section + final CTA + footer (one continuous dark block at the bottom)

This light/dark rhythm creates scroll momentum without decorative separators.
