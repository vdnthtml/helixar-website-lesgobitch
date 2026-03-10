# PAGE MAP — helixar.com
### Every section. Exact layout. Exact copy. What NOT to do.

---

## SECTION ORDER

```
NAV
S1  HERO
S2  MARQUEE STRIP
S3  HOW IT WORKS — Three Commands
S4  THE MATH — Before / After
S5  TESTIMONIALS
S6  PRICING
S7  FINAL CTA
    FOOTER
```

---

## NAV

**Structure:** `max-width 1200px / padding 0 48px / flex / space-between`

| Zone | Content |
|------|---------|
| Left | `■` (orange) `HELIXAR` (Geist 700 16px charcoal) |
| Center | "How it works" · "Pricing" · "Changelog" — Geist 500 14px #6B6869 |
| Right | "Add to Slack" — primary button, height 40px |

**Scroll behavior:**
- 0px scroll: `background transparent`, no border
- 40px scroll: `background #F5F2EE`, `border-bottom 1px solid #E2DED9`, `backdrop-blur(12px)`
- Transition: `200ms ease`

---

## S1 — HERO

```
background:  #F5F2EE
min-height:  90vh
display:     flex, align-items center
position:    relative, overflow hidden
```

**Background layer:**
```
<div class="bg-word">HELIXAR</div>
Opacity 0.04 — barely visible, centered absolutely
```

**Grid:**
```
max-width: 1200px, margin 0 auto
padding: 160px 48px 80px
grid-template-columns: 1fr 1fr
gap: 64px
align-items: center
```

---

### LEFT COLUMN

```
① Ticket label
   "■ SLACK-NATIVE AI FOR MARKETING TEAMS"

② Headline  (margin-top 20px)
   Each line is a separate <div>
   font: Bebas Neue clamp(80px,10vw,116px) line-height 0.90

   <div>TYPE A</div>
   <div>COMMAND.</div>
   <div>GET A</div>
   <div><span class="stamp">COMPETITOR BRIEF.</span></div>

   ❌ NOT wrapped in a rounded border box
   ❌ NOT centered
   ❌ NOT orange text color (only the stamp bg is orange)

③ Subhead  (margin-top 24px)
   Geist 400, 17px, #6B6869, max-width 380px, line-height 1.65
   "Type a command in Slack. Get a full competitor brief
    in under 5 minutes. No tabs. No tools."

④ CTA row  (margin-top 32px, flex, gap 16px, align-items center)
   [Add to Slack — Free]  ← primary orange button
   Watch it work →         ← ghost text link

⑤ Caption  (margin-top 12px)
   Geist 400 12px #A09D9A
   "Setup takes 2 minutes. No credit card required."
   Plain text. NOT a badge. NOT a pill.
```

---

### RIGHT COLUMN

```
The Slack UI mockup showing:
  Channel: #marketing-intel
  User message: "@helixar report Nike"
  Helixar response: Nike Competitor Brief card

  bg #0D0C0A, border-radius 12px
  box-shadow: 0 24px 80px rgba(0,0,0,0.18)
  width: 100% of column

  ❌ NO outer container border wrapping this column
  ❌ NO "HELIXAR" label overlapping the mockup
  ❌ NO rounded rectangle border around the right column
  The dark bg of the Slack card IS the visual container.
```

**Data to show in the Nike Competitor Brief card:**

```
Content Volume:    847 posts/month
Avg Engagement:    4.2%  +12% (orange delta badge)
Top Format:        Reels (63% of top posts)
Winning Hook:      "Before/After transformations"

TOP 3 GAPS VS YOUR BRAND:
Behind-the-scenes production content
Creator collabs under 100K
Morning routine integrations

Buttons: [View Full Brief ↗]  [Monitor Nike]  [Export PDF]
```

---

## S2 — MARQUEE STRIP

```
height:     44px
background: #0D0C0A

Scrolling text (Geist Mono 11px uppercase tracking-[0.1em] #FAF9F7 50% opacity):
"USED BY 2,400+ MARKETING TEAMS  ›  AGENCIES  ›  IN-HOUSE TEAMS  ›
 FREELANCERS  ›  STARTUPS  ›  CONSULTANCIES  ›  "
Repeated twice seamlessly. 40s linear infinite. Pause on hover.

Right stamp: position absolute right 0, width 44px height 44px, bg #FF5E2C
             This clips the marquee text — purely editorial
```

---

## S3 — HOW IT WORKS

```
Position: relative, overflow hidden
```

**Section header:**
```
bg:      #F5F2EE
padding: 96px 48px 72px
max-width: 1200px centered

① Ticket label: "■ HOW IT WORKS"

② Headline (margin-top 16px)
   Bebas Neue clamp(60px,7vw,88px) line-height 0.90 #2A2825

   <div>THREE COMMANDS.</div>
   <div>THAT'S THE <span class="stamp">WHOLE PRODUCT.</span></div>

③ Subhead (margin-top 16px)
   Geist 400 16px #6B6869
   "No dashboards. No onboarding. Just type in Slack."

Background word: "COMMANDS" — bg-word class, centered
```

---

### Feature Row Layout (×3)

```
Each row:
  border-top:      1px solid #E2DED9
  max-width:       1200px, centered
  padding:         80px 48px
  display:         grid
  gap:             64px
  align-items:     center

Row 1: bg #F5F2EE  | grid-template-columns: 45fr 55fr  (text left, screenshot right)
Row 2: bg #ECEAE6  | grid-template-columns: 55fr 45fr  (screenshot left, text right)
Row 3: bg #F5F2EE  | grid-template-columns: 45fr 55fr  (text left, screenshot right)
```

### Text column (each row)

```
Step:        Geist Mono 11px #A09D9A uppercase tracking-[0.1em]  — "01"
Command:     .command-block  (margin-top 8px)
Headline:    Geist 700 clamp(22px,2.5vw,30px) #2A2825 tracking-tight  (margin-top 20px)
Description: Geist 400 15px #6B6869 line-height 1.65 max-width 420px  (margin-top 12px)
             PROSE SENTENCES. NO tick marks. NO bullets. Max 45 words.
```

### Screenshot column (each row)

```
Slack UI mockup component
bg #0D0C0A, border-radius 12px, box-shadow 0 24px 80px rgba(0,0,0,0.18)
NO outer container border
Width: 100% of its column
```

---

### Row 1 — Report

```
Step:     01
Command:  > @helixar report [brand]
Headline: "A full competitor brief in under 5 minutes."
Body:     "Helixar scrapes 6 platforms simultaneously and generates a ranked
           brief — content volume, engagement rates, top formats, winning hooks,
           and your specific content gaps."
Screenshot: Nike Competitor Brief (full card as per component spec)
```

### Row 2 — Monitor

```
Step:     02
Command:  > @helixar monitor [brand]
Headline: "Never miss a competitor move."
Body:     "Set monitoring for any brand. A weekly digest lands in Slack
           every Monday — spikes, new campaigns, follower shifts, anything
           that changed in the last 7 days."
Screenshot:
  Helixar APP  Mon 8:00 AM
  ─────────────────────────────────────────
  Nike Weekly Digest — Mar 10

  ↑ 23% engagement spike on Reels
  Launched new campaign: #JustDoMore
  Added 47K followers this week

  [View Full Digest ↗]
```

### Row 3 — Memory

```
Step:     03
Command:  > @helixar what do we know about [brand]?
Headline: "Everything it's ever learned. Instantly recalled."
Body:     "Every data point from your first report to today — campaigns,
           strategy shifts, platform changes — cross-referenced and
           searchable in seconds. It never starts from zero."
Screenshot:
  Lululemon — since Jan 2025
  ─────────────────────────────────────────
  Jan 15  First competitor report. 12 platforms indexed.
  Feb 03  Detected shift to UGC-first strategy. Reels up 40%.
  Mar 01  New campaign: #FeelNothing. Community engagement +18%.

  [Full Timeline ↗]  [Compare Brands]
```

---

## S4 — THE MATH

```
background:  #0D0C0A
padding:     96px 48px
position:    relative, overflow hidden
```

**Background word:**
```
"FASTER" — .bg-word.bg-word--dark
color #FAF9F7, opacity 0.04
```

**Content:**
```
① Ticket label (dark variant): "■ THE OLD WAY"

② Headline  (margin-top 16px)
   Bebas Neue clamp(64px,7vw,88px) #FAF9F7 line-height 0.90
   "3 HOURS BECOMES 4 MINUTES."

③ Subhead  (margin-top 16px)
   Geist 400 16px #6B6869
   "Every week. For every competitor. For every client."
```

**Two columns (margin-top 64px, padding-top 64px, border-top 1px solid rgba(255,255,255,0.06)):**
```
grid-template-columns: 1fr 1fr
gap: 64px
```

**Left — The Old Way:**
```
Numbered list — NO icons, NO strikes, NO X marks. Plain list.
Geist 400 14px #6B6869 line-height 2.4

1. Open Sprout Social
2. Export CSV (wait 3 mins)
3. Open Google Sheets
4. Paste and format data
5. Open ChatGPT
6. Write the prompt
7. Copy output to Notion
8. Format and send to client

Total (margin-top 28px):
"⏱ 3 hours"  Geist Mono 500 24px #6B6869
```

**Right — With Helixar:**
```
Command block (dark, width fit-content):
  > @helixar report Nike

Mini result card (margin-top 20px):
  bg: #161412, border 1px solid rgba(255,255,255,0.06)
  border-radius: 12px, padding: 16px

  "Nike Brief"  Geist 600 13px #FAF9F7
  "4 min"       Geist Mono 11px #A09D9A  (float right)

  ─────────────────────────
  Volume      847/mo
  Engagement  4.2%
  Top Format  Reels

Total (margin-top 24px):
"⏱ 4 minutes"  Geist Mono 700  clamp(48px,5vw,64px)  #FF5E2C
```

**Bottom caption:**
```
margin-top:  48px
padding-top: 32px
border-top:  1px solid rgba(255,255,255,0.06)
text-align:  center
Geist 400 italic 15px #6B6869
"That's 2h 56min you just got back. Every week."
```

**What this section is NOT:**
- NOT "MONDAY MORNING. 9AM." — no scenario storytelling
- NOT rounded border boxes around each column
- NOT strike-through text on the left column
- NOT X icons next to old steps
- NOT equal colored cards side by side

---

## S5 — TESTIMONIALS

```
background: #ECEAE6
padding:    96px 48px
```

```
① Ticket label: "■ RESULTS"

② Headline  (margin-top 16px)
   Geist 700 40px #2A2825 tracking-tight
   "From people who made the switch."

③ Three-column grid  (margin-top 64px)
   grid-template-columns: 1fr 1fr 1fr
   gap: 40px
```

**Each quote:**
```
border-left:  2px solid #FF5E2C
padding-left: 20px
NO background, NO card container, NO box-shadow

Quote:  Geist 400 italic 16px #6B6869 line-height 1.7
Author: margin-top 16px
  Name: Geist 600 14px #2A2825
  Role: Geist 400 13px #A09D9A
```

**Three quotes:**

1. *"I used to spend Monday mornings building competitor reports. Now I type one command and have a full brief before my first call. That time went straight into client strategy."*
   — **Sarah Chen**, Head of Marketing, Arch Software

2. *"Client asked what their top competitor was doing on TikTok. I made the Slack. They didn't. We got the contract."*
   — **Marcus Webb**, Freelance Brand Strategist

3. *"After 90 days, Helixar knew our vertical better than most junior marketers. The recommendations went from decent to genuinely surprising."*
   — **Priya Nair**, Growth Lead, Voltara Labs

**What this section is NOT:**
- NOT avatar circles with photos
- NOT star ratings (★★★★★)
- NOT company logos
- NOT full bordered card containers

---

## S6 — PRICING

```
background: #F5F2EE
padding:    96px 48px
```

```
① Ticket label: "■ PRICING"

② Headline  (margin-top 16px)
   Bebas Neue clamp(56px,6vw,80px) #2A2825 line-height 0.90
   "SIMPLE.  <span class='stamp'>TWO OPTIONS.</span>"

③ Toggle  (margin-top 28px, inline-flex, border 1px solid #E2DED9, border-radius 6px)
   [Monthly]  [Yearly  ■ SAVE 31%]
   Yearly pre-selected. "SAVE 31%" is .stamp inline inside the Yearly button.

④ Three cards  (margin-top 48px, grid-template-columns repeat(3,1fr), gap 24px)
```

**Starter:**
```
Name:    "Starter" — Geist 700 20px
Tag:     "For freelancers and small teams." — Geist 400 14px #A09D9A
Price:   $20  Geist Mono 700 48px  +  /mo  Geist 400 16px #A09D9A
Billing: "billed annually" — Geist 400 13px #A09D9A
Body:    "1 Slack workspace, 3 reports per month, 2 monitored brands, and basic memory."
         Geist 400 15px #6B6869 — PROSE, not a list
CTA:     [Start Free — 14 days]  secondary button, full-width
```

**Pro (featured):**
```
Badge:   .ticket-label "MOST POPULAR" — top of card, margin-bottom 20px
Accent:  border-top: 3px solid #FF5E2C  (replaces default 1px)
Name:    "Pro" — Geist 700 20px
Tag:     "For agencies and growing teams." — Geist 400 14px #A09D9A
Price:   $49  Geist Mono 700 48px  +  /mo  Geist 400 16px #A09D9A
Billing: "billed annually" — Geist 400 13px #A09D9A
Body:    "3 workspaces, unlimited reports, 10 monitored brands, full AI memory, and priority support."
CTA:     [Start Free — 14 days]  PRIMARY orange button, full-width
```

**Enterprise:**
```
Name:    "Enterprise" — Geist 700 20px
Tag:     "Forward-deployed setup for large teams." — Geist 400 14px #A09D9A
Price:   "Custom" — Geist 700 40px (use Geist not Bebas, keeps it grounded)
Body:    "Unlimited workspaces, forward-deployed setup, custom model training, dedicated Slack channel, SOC 2 compliant, and SLA guarantees."
CTA:     [Talk to us]  secondary button, full-width
```

**Trust signals (below cards, centered, margin-top 32px):**
```
"No contracts. Cancel anytime. 14-day free trial on all plans."
Geist 400 14px #A09D9A

Pill row (margin-top 16px, flex, gap 24px, justify-content center):
● NO CREDIT CARD  ● CANCEL ANYTIME  ● GDPR COMPLIANT  ● SOC 2 READY  ● SLACK CERTIFIED
Geist Mono 10px uppercase tracking-[0.1em] #A09D9A
```

---

## S7 — FINAL CTA

```
background:  #0D0C0A
padding:     120px 48px
text-align:  center
position:    relative, overflow hidden
```

**Background word:**
```
"HELIXAR" — .bg-word.bg-word--dark
color #FAF9F7, opacity 0.04
```

**Content (max-width 680px, margin 0 auto, position relative z-index 1):**
```
① Headline
   Bebas Neue clamp(64px,8vw,96px) #FAF9F7 line-height 0.90
   "STOP RESEARCHING."
   "START <span class='stamp'>KNOWING.</span>"

② Subhead  (margin-top 24px)
   Geist 400 16px #6B6869 line-height 1.65
   "Add Helixar to your Slack workspace. Type @helixar report [your competitor].
    See what it finds in under 5 minutes."

③ CTA row  (margin-top 40px, flex, justify-content center, gap 20px)
   [Add to Slack — Free]  primary orange
   Book a 15-min demo →   ghost, color #A09D9A, hover #FAF9F7
```

**What this section is NOT:**
- NOT a floating product mockup (the dark section IS the moment — no product needed here)
- NOT an orange gradient blob behind the text
- NOT confetti on button click
- NOT "We'll send you an email" form

---

## FOOTER

```
background:  #0D0C0A  (continues from CTA)
border-top:  1px solid rgba(255,255,255,0.06)
padding:     64px 48px 48px
```

**Four-column grid:**
```
grid-template-columns: 2fr 1fr 1fr 1fr
gap: 48px
max-width: 1200px, centered
```

**Col 1 — Brand:**
```
Logo: ■ HELIXAR  (■ in #FF5E2C, text Geist 700 16px #FAF9F7)
Tagline (margin-top 12px): Geist 400 14px #6B6869
"Built for marketers who refuse to settle."
```

**Col 2 — PRODUCT:**
```
Header: Geist Mono 10px uppercase tracking-[0.1em] #A09D9A
Links: Features / Pricing / Changelog / Add to Slack
       Geist 400 14px #6B6869, hover #FAF9F7
```

**Col 3 — COMPANY:**
```
Header: same
Links: About / Careers / Blog / Contact
```

**Col 4 — LEGAL:**
```
Header: same
Links: Privacy / Terms / Security
```

**Bottom bar (margin-top 48px, padding-top 24px, border-top rgba(255,255,255,0.06)):**
```
display flex, justify-content space-between, align-items center

Left:  "© 2025 Helixar. All rights reserved."  Geist 400 12px #A09D9A
Right: ■ solid square — width 16px height 16px background #FF5E2C
```
