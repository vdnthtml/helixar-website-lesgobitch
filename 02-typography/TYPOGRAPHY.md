# TYPOGRAPHY SYSTEM
### Two fonts. One purpose each.

---

## The fonts

**Bebas Neue** — Display headlines on the marketing site only
**Geist** — All UI, body, labels, buttons, nav, everything functional
**Geist Mono** — Commands, data values, ticket labels, step numbers

No other fonts. No swapping. No mixing weights for decoration.
Weight communicates hierarchy — nothing else.

---

## Bebas Neue — Display scale

| Role | Size | Line height | Letter spacing | Color |
|------|------|-------------|----------------|-------|
| Hero headline | `clamp(80px, 10vw, 116px)` | `0.90` | `0.01em` | `#2A2825` |
| Section headline | `clamp(56px, 7vw, 88px)` | `0.92` | `0.01em` | `#2A2825` |
| Dark section headline | same | same | same | `#FAF9F7` |
| Background ghost word | `clamp(160px, 20vw, 260px)` | `1` | `0` | `#2A2825` at `4% opacity` |

**Rules — no exceptions:**
- Always left-aligned. Never centered, never right-aligned.
- Never used below 48px. At smaller sizes use Geist 700.
- Never italic, never underlined.
- On dark backgrounds only inside dark sections — never mixed.
- Each headline line is its own `<div>`. Not one `<h1>` block with `<br>`.

---

## The Stamp — inline orange block

The stamp is not a component. It is a typographic treatment on a single word or phrase.

```
Applied as: <span class="stamp">WORD</span> inside a Bebas Neue headline
Background: #FF5E2C
Color:      #FAF9F7
Padding:    0 10px  (horizontal only — never vertical)
Border-radius: 0   (always zero — stamps are not pills)
Display:    inline
Font:       inherits from parent Bebas Neue
```

**Maximum one stamp per section.**
Used on the most critical word or phrase in the section headline.
The stamp marks the point of the entire section — get it right.

Examples:
- Hero: `<span class="stamp">COMPETITOR BRIEF.</span>`
- How it works: `<span class="stamp">WHOLE PRODUCT.</span>`
- Final CTA: `<span class="stamp">KNOWING.</span>`
- Pricing: `<span class="stamp">TWO OPTIONS.</span>`

---

## Geist — UI scale

| Role | Size | Weight | Line height | Tracking | Color |
|------|------|--------|-------------|----------|-------|
| Section H2 | `40px` | `700` | `1.1` | `-0.03em` | `#2A2825` |
| Card / feature H3 | `26px` | `700` | `1.15` | `-0.02em` | `#2A2825` |
| Feature headline | `clamp(22px, 2.5vw, 30px)` | `700` | `1.2` | `-0.02em` | `#2A2825` |
| Body large | `18px` | `400` | `1.65` | `0` | `#6B6869` |
| Body default | `15px` | `400` | `1.6` | `0` | `#6B6869` |
| Body small | `13px` | `400` | `1.5` | `0` | `#A09D9A` |
| Hero subhead | `17px` | `400` | `1.65` | `0` | `#6B6869` |
| Nav links | `14px` | `500` | `1` | `-0.01em` | `#6B6869` |
| Button primary | `14px` | `600` | `1` | `0` | `#FFFFFF` |
| Button secondary | `14px` | `500` | `1` | `0` | `#6B6869` |
| Caption | `12px` | `400` | `1.5` | `0` | `#A09D9A` |
| Pricing amount | `48px` | `700` | `1` | `-0.03em` | `#2A2825` |
| Quote text | `16px` | `400` italic | `1.7` | `0` | `#6B6869` |

---

## Geist Mono — Data and command scale

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Command prompt `>` | `14px` | `500` | `#FF5E2C` | Inside dark command block |
| Command text | `14px` | `500` | `#FAF9F7` | Inside dark command block |
| Ticket label | `10px` | `400` | `#FF5E2C` | Uppercase, tracking `0.14em` |
| Section step number | `11px` | `400` | `#A09D9A` | Uppercase, tracking `0.1em` |
| Stat headline number | `clamp(48px, 6vw, 72px)` | `700` | `#FF5E2C` | Compound advantage only |
| Data value | `20px` | `600` | `#2A2825` | Inside stat panels |
| Data label | `10px` | `400` | `#A09D9A` | Uppercase, tracking `0.08em` |
| Marquee text | `11px` | `400` | `#FAF9F7 at 50% opacity` | Uppercase, tracking `0.1em` |
| Footer column headers | `10px` | `400` | `#A09D9A` | Uppercase, tracking `0.1em` |
| Pricing period `/mo` | `16px` | `400` | `#A09D9A` | After large price number |

---

## The Command Block — visual signature

The `@helixar` command displayed as a terminal artifact.
This IS the product. It must look exactly like Slack input.

```
font-family:   Geist Mono
font-size:     14px
background:    #0D0C0A
color:         #FAF9F7
padding:       10px 20px
border-radius: 4px
display:       inline-flex
align-items:   center
gap:           8px
width:         fit-content  ← NEVER full-width. NEVER stretches.
white-space:   nowrap
```

HTML:
```html
<div class="command-block">
  <span class="prompt">></span>
  @helixar report [brand]
</div>
```

Position: Standalone element above the feature description.
Never inside a bordered card container.
Never stretched to column width.

---

## Hierarchy demonstration

```
TICKET LABEL (10px mono)
─────────────────────────
BEBAS NEUE HEADLINE LINE 1    ← 88px
BEBAS NEUE HEADLINE LINE 2    ← 88px
BEBAS NEUE <STAMP>LINE 3.</STAMP>  ← 88px, last line gets stamp

17px Geist 400 subhead, color #6B6869,
max-width 380px, breathing room.

[Button] [Ghost link]
12px caption text #A09D9A
```

Three tiers of information.
Never four. Cut to three if you have four.
