# COMPONENT LIBRARY
### Every reusable element. Exact specs. No interpretation.

---

## 01 — Navigation

```
height:       64px
position:     sticky, top 0, z-index 100
background:   transparent initially
              → #F5F2EE + border-bottom 1px solid #E2DED9 after 40px scroll
backdrop:     blur(12px) when scrolled
transition:   background 200ms ease, border-color 200ms ease

inner:        max-width 1200px, margin 0 auto, padding 0 48px
              display flex, align-items center, justify-content space-between
```

**Logo:**
```html
<a class="nav-logo">
  <span style="color: #FF5E2C">■</span> HELIXAR
</a>
```
```
font:  Geist 700 16px #2A2825
gap:   4px between ■ and HELIXAR
```

**Links (max 3):**
```
"How it works"  /  "Pricing"  /  "Changelog"
font:   Geist 500 14px #6B6869
hover:  color #2A2825, transition 120ms
```

**CTA:**
```
"Add to Slack"
height: 40px, padding 0 20px
bg: #FF5E2C, color white, Geist 600 14px
border-radius: 6px
hover: bg #FF7A45, translateY(-1px), box-shadow 0 8px 24px rgba(255,94,44,0.30)
```

---

## 02 — Ticket Label (section eyebrow)

```css
.ticket-label {
  font-family:    'Geist Mono', monospace;
  font-size:      10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color:          #FF5E2C;
  background:     #FFE4D9;
  border:         1px solid rgba(255, 94, 44, 0.30);
  padding:        4px 10px;
  border-radius:  0;          /* always zero */
  display:        inline-flex;
  align-items:    center;
  gap:            6px;
}
.ticket-label::before {
  content:    '';
  width:      4px;
  height:     4px;
  background: #FF5E2C;
  flex-shrink: 0;
}

/* On dark backgrounds */
.ticket-label--dark {
  background:  rgba(255, 94, 44, 0.10);
  border-color: rgba(255, 94, 44, 0.25);
  /* color and ::before stay same orange */
}
```

**Usage:** Always the first element in a section. 16px gap below before the headline.
One per section. Never mid-content.

---

## 03 — The Stamp

```css
.stamp {
  background:    #FF5E2C;
  color:         #FAF9F7;
  padding:       0 10px;
  display:       inline;
  border-radius: 0;           /* always zero */
  font-family:   inherit;     /* inherits Bebas Neue */
  font-size:     inherit;
  line-height:   inherit;
}
```

**Rules:**
- Maximum **1** per section
- Last line of headline only — never mid-headline
- The entire last phrase goes in the stamp, not just one word
- Never on body text, subheads, or already-orange elements

---

## 04 — Command Block

```css
.command-block {
  font-family:    'Geist Mono', monospace;
  font-size:      14px;
  font-weight:    500;
  background:     #0D0C0A;
  color:          #FAF9F7;
  padding:        10px 20px;
  border-radius:  4px;
  display:        inline-flex;
  align-items:    center;
  gap:            8px;
  width:          fit-content;   /* NEVER full-width */
  white-space:    nowrap;
}
.command-block .prompt {
  color:       #FF5E2C;
  font-weight: 500;
}
```

```html
<div class="command-block">
  <span class="prompt">></span>
  @helixar report [brand]
</div>
```

Always standalone. Never inside a card container. Never stretched.

---

## 05 — Buttons

### Primary
```css
.btn-primary {
  background:    #FF5E2C;
  color:         #FFFFFF;
  height:        44px;
  padding:       0 24px;
  font-family:   'Geist', sans-serif;
  font-size:     14px;
  font-weight:   600;
  border-radius: 6px;
  border:        none;
  cursor:        pointer;
  display:       inline-flex;
  align-items:   center;
  gap:           8px;
  transition:    all 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover {
  background:  #FF7A45;
  transform:   translateY(-1px);
  box-shadow:  0 8px 24px rgba(255, 94, 44, 0.30);
}
.btn-primary:active {
  transform:   scale(0.97);
  transition:  transform 80ms ease;
}
.btn-primary:focus-visible {
  outline:       2px solid #FF5E2C;
  outline-offset: 3px;
}
```

### Ghost (text link style)
```css
.btn-ghost {
  background:  transparent;
  color:       #A09D9A;
  font-size:   14px;
  font-weight: 500;
  border:      none;
  padding:     0;
  cursor:      pointer;
  transition:  color 120ms ease;
}
.btn-ghost:hover { color: #2A2825; }
```
Copy format: "Watch it work →" — the arrow is part of the copy.

### Secondary (outlined)
```css
.btn-secondary {
  background:    transparent;
  color:         #6B6869;
  height:        44px;
  padding:       0 24px;
  font-size:     14px;
  font-weight:   500;
  border:        1px solid #E2DED9;
  border-radius: 6px;
  cursor:        pointer;
  transition:    all 150ms ease;
}
.btn-secondary:hover {
  border-color: #6B6869;
  color:        #2A2825;
}
```

---

## 06 — Background Ghost Word

```css
.bg-word {
  font-family:    'Bebas Neue', sans-serif;
  font-size:      clamp(160px, 20vw, 260px);
  color:          #2A2825;
  opacity:        0.04;
  position:       absolute;
  top:            50%;
  left:           50%;
  transform:      translate(-50%, -50%);
  pointer-events: none;
  user-select:    none;
  white-space:    nowrap;
  z-index:        0;
  line-height:    1;
}
/* On dark sections */
.bg-word--dark {
  color: #FAF9F7;
  opacity: 0.04;
}
```

The parent section needs `position: relative; overflow: hidden;`.

---

## 07 — Slack UI Mockup

The product demo card. Mimics real Slack interface.
Used in hero and each feature row.

```
Outer shell:
  background:    #0D0C0A
  border-radius: 12px
  overflow:      hidden
  box-shadow:    0 24px 80px rgba(0,0,0,0.18)

  NO outer wrapper border
  NO second container around this
```

**Window chrome bar (top):**
```
height:        40px
background:    #1A1816
border-bottom: 1px solid rgba(255,255,255,0.06)
padding:       0 16px
display:       flex, align-items center

Traffic dots (left): 3 circles × 12px
  gap: 6px
  colors: #FF5F57 / #FEBC2E / #28C840

Channel name (center-left): # marketing-intel
  font: Geist Mono 13px #FAF9F7 at 70% opacity
```

**Message area:**
```
padding:        16px
display:        flex, flex-direction column, gap 12px
```

**User message:**
```
Avatar:  32px circle, background #FF5E2C, Geist 600 12px #FFFFFF, initials "YT"
Name:    Geist 600 13px #FAF9F7
Time:    Geist 400 11px #A09D9A
Text:    Geist 400 14px #FAF9F7  — "@helixar report Nike"
```

**Helixar bot response:**
```
Avatar:   32px circle, background #161412, border 1px solid rgba(255,255,255,0.10)
          Small orange ■ icon inside
APP badge: "APP" — Geist Mono 9px uppercase, background rgba(255,94,44,0.25),
           color #FF5E2C, padding 1px 4px, border-radius 2px

Response card:
  background:    #1E1C19
  border:        1px solid rgba(255,255,255,0.08)
  border-radius: 6px
  padding:       14px 16px
  margin-top:    6px

  Title row:
    "Nike Competitor Brief"  Geist 600 13px #FAF9F7
    "Generated 10:07 AM"     Geist 400 11px #A09D9A  (float right)

  Divider: 1px solid rgba(255,255,255,0.06), margin 10px 0

  Data rows (gap 8px each):
    ● label    value
    Dot: 8px circle colored per platform
    Label: Geist Mono 10px #A09D9A uppercase tracking-[0.06em]
    Value: Geist 400 13px #FAF9F7
    Positive delta: small Geist 500 11px badge, bg rgba(255,94,44,0.15), color #FF5E2C

  Gaps section:
    "TOP 3 GAPS VS YOUR BRAND:"
    Geist Mono 10px #A09D9A uppercase tracking-[0.06em]
    margin-bottom 6px

    Three lines: Geist 400 12px #6B6869

  Button row (margin-top 12px, display flex, gap 6px):
    "View Full Brief ↗"  dark-outline btn: border 1px solid rgba(255,255,255,0.12),
                         Geist 500 12px #A09D9A, padding 4px 10px, border-radius 4px
    "Monitor Nike"       same
    "Export PDF"         Geist 400 12px #6B6869, no border (ghost)

Typing indicator (below card):
  "● ● ●  Helixar is analyzing..."
  Geist 400 12px #A09D9A
  The three dots pulse opacity 0.4 → 1.0, staggered 200ms each
```

**Platform dot colors:**
```
Instagram:  #E1306C
YouTube:    #FF0000
TikTok:     #69C9D0
X/Twitter:  #FAF9F7
LinkedIn:   #0A66C2
Facebook:   #1877F2
```
Use colored dots. No emoji.

---

## 08 — Cards (restricted use)

Cards are for product screenshots ONLY.
If the card contains text — it should not be a card.

```css
.product-card {
  background:    #FAF9F7;
  border:        1px solid #E2DED9;
  border-radius: 12px;
  overflow:      hidden;
  transition:    box-shadow 200ms ease, transform 200ms ease;
}
.product-card:hover {
  box-shadow:  0 8px 32px rgba(0,0,0,0.08);
  transform:   translateY(-2px);
}
```

**The card test:**
Does this card contain a screenshot or embedded UI?
→ YES: card is appropriate
→ NO: remove the card, let content breathe

---

## 09 — Pricing Cards

```css
.pricing-card {
  background:    #FAF9F7;
  border:        1px solid #E2DED9;
  border-radius: 8px;
  padding:       40px;
  display:       flex;
  flex-direction: column;
  gap:           24px;
}
/* Featured card (Pro only) */
.pricing-card--featured {
  border-top:   3px solid #FF5E2C;
  box-shadow:   0 8px 32px rgba(0,0,0,0.08);
}
```

```
Tier name:      Geist 700 20px #2A2825
Tier tagline:   Geist 400 14px #A09D9A
Price:          Geist Mono 700 48px #2A2825  +  Geist 400 16px #A09D9A "/mo"
Billing note:   Geist 400 13px #A09D9A  "billed annually"
Feature text:   Geist 400 15px #6B6869  — PROSE SENTENCES, not a list
CTA:            Full-width button, margin-top auto (pushed to bottom)
```

---

## 10 — Marquee Ticker

```
Outer:
  height:     44px
  background: #0D0C0A
  overflow:   hidden
  position:   relative

Track (.marquee-track):
  display:    flex
  animation:  marquee 40s linear infinite
  white-space: nowrap
  &:hover { animation-play-state: paused }

Text:
  Geist Mono 11px uppercase tracking-[0.1em]
  color: #FAF9F7 at 50% opacity
  padding: 0 32px  (each item)
  separator: ›

Right stamp:
  position: absolute, right 0, top 0
  width: 44px, height: 44px
  background: #FF5E2C
  z-index: 10
  Clips the scrolling text — this is the editorial mark
```

---

## 11 — Testimonial Quote

```
border-left:    2px solid #FF5E2C
padding-left:   20px
NO card container, NO box, NO background

Quote:    Geist 400 italic 16px #6B6869 line-height 1.7
Author:   margin-top 16px
  Name:   Geist 600 14px #2A2825
  Role:   Geist 400 13px #A09D9A
```

---

## 12 — Section Wrapper Pattern

Every content section uses this structure:

```html
<section class="section" style="background: [var]">
  <div class="bg-word [bg-word--dark?]">[WORD]</div>
  <div class="section-inner">
    <!-- content here -->
  </div>
</section>
```

```css
.section {
  position: relative;
  overflow: hidden;
}
.section-inner {
  position:   relative;
  z-index:    1;
  max-width:  1200px;
  margin:     0 auto;
  padding:    96px 48px;
}
```
