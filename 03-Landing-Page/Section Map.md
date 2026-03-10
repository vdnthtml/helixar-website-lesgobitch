# Section Map v4 — Helixar Landing Page
# Product-Led. Show the workflow. Make it obvious.

---

## The Core Rule

Every section must answer ONE of these questions:
1. What does Helixar do? (Hero)
2. How does it work? (Commands)
3. What does the output look like? (Screenshots/mockups)
4. What's the result? (Proof)
5. How much? (Pricing)

If a section doesn't answer one of those — cut it.

---

## THE HERO VISUAL: SLACK MOCKUP (Not a laptop)

The product IS Slack. Show Slack.
A dark Slack-style panel showing a real conversation:
  User types: @helixar report Nike
  Helixar responds with a structured brief showing real data

This tells someone in 2 seconds: "Oh, it's a Slack bot that does competitor research."
That's the entire job of the hero.

Build the Slack UI as a coded component:

```
SLACK PANEL COMPONENT:
  bg: #1A1D21 (Slack dark)
  border-radius: 12px
  border: 1px solid rgba(255,255,255,0.08)
  box-shadow: 0 32px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05)
  width: 480px (desktop) · 100% (mobile)
  font-family: Geist (mimics Slack's Lato/system stack)
  overflow: hidden

  CHANNEL HEADER (40px, bg #222529, border-bottom rgba(255,255,255,0.06)):
    # marketing-intel
    Geist 500 · 14px · #E8E8E8
    Right: avatar icons row (3 small circles, 24px)

  MESSAGE THREAD (padding 16px 20px, gap 16px):

    MESSAGE 1 — USER:
      Avatar: 32px circle · bg #FF5E2C · initials "YT" · Geist 600 12px white
      Name: "You" · Geist 700 · 14px · #E8E8E8
      Time: "10:03 AM" · 12px · #999
      Message: "@helixar report Nike" · 14px · #E8E8E8

    MESSAGE 2 — HELIXAR BOT:
      Avatar: 32px circle · bg #1A1916 · ■ orange square (helixar logo)
      Name: "Helixar" · Geist 700 · 14px · #E8E8E8
        + "APP" badge: 10px · bg #FF5E2C · color white · padding 1px 4px · border-radius 2px
      Time: "10:07 AM" · 12px · #999

      BRIEF CARD (bg #222529, border-radius 8px, border-left 3px solid #FF5E2C,
                   padding 12px 16px, margin-top 4px):

        Header row:
          "Nike Competitor Brief" · Geist 700 · 13px · #E8E8E8
          "Generated 10:07 AM" · 11px · #999 · right-aligned

        4 data rows (padding 8px 0, border-bottom 1px solid rgba(255,255,255,0.06)):
          Icon + label + value layout
          📊 Content Volume     847 posts/month
          📈 Avg Engagement     4.2% ↑12% vs last month
          🔥 Top Format         Reels (63% of top posts)
          🎯 Winning Hook       "Before/After transformations"

        Gap section (margin-top 10px):
          "Top 3 gaps vs your brand:" · 11px · #999 · uppercase
          Three rows:
            · Behind-the-scenes production content
            · Creator collabs under 100K
            · Morning routine integrations
          Each row: 12px · #C9C9C9

        Action buttons row (margin-top 12px, gap 8px):
          [View Full Brief ↗]  [Monitor Nike]  [Export PDF]
          Button style: bg rgba(255,255,255,0.06) · color #E8E8E8 · 
          border 1px solid rgba(255,255,255,0.10) · border-radius 4px
          padding: 4px 10px · 12px Geist 500

  TYPING INDICATOR (bottom, padding 8px 20px):
    3 animated dots · "Helixar is analyzing..." · 12px · #999
    dots animation: 0.8s bounce stagger
```

The Slack panel:
- Floats slightly (transform: perspective(800px) rotateY(-8deg) rotateX(4deg))
- Slow float animation (translateY 0 → -8px → 0, 5s ease-in-out)
- Orange glow behind it (rgba(255,94,44,0.15), blur 40px)
- No tilt on mobile — just centered, flat

---

## PAGE STRUCTURE

```
────────────────────────────────────────────────
  NAV
  bg: #F5F2EE · border-bottom on scroll: #E8E4DF

  Left: ■ HELIXAR
  Center: How it works · Pricing · Changelog
  Right: "Add to Slack — Free" [Slack icon] · orange button

────────────────────────────────────────────────

  SECTION 1 — HERO
  bg: #F5F2EE
  padding: 80px 0 60px
  .bg-word "HELIXAR" · opacity 0.04 · absolute

  Layout: Two columns, vertically centered

  LEFT (52%):

    Ticket eyebrow: [ SLACK-NATIVE AI FOR MARKETING TEAMS ]

    Headline: Bebas Neue · clamp(64px, 7.5vw, 100px) · line-height 0.93
    "TYPE A COMMAND."
    "GET A"
    <span class="stamp">COMPETITOR BRIEF.</span>

    Subhead: 16px · Geist 400 · #6B6B72 · max-width 400px
    "@helixar report Nike — and in 4 minutes you get a full
    competitor brief: top content, engagement rates, trending formats,
    and a gap analysis. All inside Slack. No tabs. No tools."

    CTA row (gap 12px, margin-top 28px):
      Primary: "Add to Slack — Free 14 days" [Slack icon]
        bg #FF5E2C · Geist 600 · 15px · height 48px · padding 0 24px
      Secondary: "Watch it work →" · #6B6B72 · hover #1A1916

    Trust line (margin-top 16px):
      "Setup takes 2 minutes. No credit card." · 13px · #999690

  RIGHT (48%):
    The Slack Mockup Component (described above)
    Orange glow behind it

────────────────────────────────────────────────

  SECTION 2 — SOCIAL PROOF BAR
  bg: #EDEBE8
  border-top/bottom: 1px solid #E8E4DF
  padding: 20px 0

  NOT a marquee of generic words.
  Show logos OR a stat row:

  "Used by 2,400+ marketing teams at:"
  Then 5 company type badges (ticket-label style):
    [ AGENCIES ] [ IN-HOUSE TEAMS ] [ FREELANCERS ] [ STARTUPS ] [ CONSULTANCIES ]

  OR if we have real logos — show those.

  Right: orange stamp block 48×48 (same as before)

────────────────────────────────────────────────

  SECTION 3 — HOW IT WORKS
  bg: #F5F2EE
  padding: 96px 0

  Ticket eyebrow: [ HOW IT WORKS ]
  Headline: "Three commands. That's the whole product."
  Geist 700 · 48px · #1A1916 · tracking -0.03em
  Subhead: "No dashboards. No onboarding. Just type in Slack."
  16px · #6B6B72

  .bg-word "COMMANDS" · opacity 0.04

  THREE COMMAND ROWS (stacked vertically, large, generous spacing):
  Each row: border-top 1px solid #E8E4DF · padding 56px 0

  --- ROW 1 ---
  Left (50%): Content
    Step label: "01" · Geist Mono · 11px · #FF5E2C
    The command (code-style):
      bg #1A1916 · color #FF5E2C · font Geist Mono · 18px
      padding 10px 16px · border-radius 6px · display inline-block
      "> @helixar report [brand]"

    What you get: Geist 700 · 24px · #1A1916 · margin-top 20px
    "A full competitor brief in under 5 minutes."

    Bullets (14px · #6B6B72 · list-style none · margin-top 12px):
      ✓ Content volume across 6 platforms
      ✓ Engagement rates and trend direction
      ✓ Top performing formats and hooks
      ✓ Content gap analysis vs your brand

  Right (50%): Slack output mockup — the Nike brief card (same component, slightly smaller)

  --- ROW 2 ---
  Left: Command "> @helixar monitor [brand]"
    "Never miss a competitor move."
    Bullets: ✓ Weekly Slack digest every Monday · ✓ Viral post alerts · 
    ✓ Follower change tracking · ✓ Campaign launch detection

  Right: Slack "weekly digest" mockup
    Monday morning message:
      "Nike Weekly Digest — Mar 10"
      3 bullet summary of activity
      "↑ 23% engagement spike on Reels"
      "Launched new campaign: #JustDoMore"
      "Added 47K followers this week"
      [View Full Digest ↗]

  --- ROW 3 ---
  Left: Command "> @helixar what do we know about [brand]?"
    "Everything it's ever learned. Instantly recalled."
    "From your first report to today — all context, searchable in seconds."
    Bullets: ✓ Full history of research · ✓ Timeline of competitor activity
    ✓ Cross-brand comparisons · ✓ Auto-updated weekly

  Right: Slack memory recall mockup
    "Here's what I know about Nike (since Jan 2025):"
    Timeline entries showing 3 months of knowledge
    Small timestamp labels on each entry

────────────────────────────────────────────────

  SECTION 4 — THE BEFORE STATE (replaces abstract "PROBLEM")
  bg: #EDEBE8
  padding: 96px 0

  Ticket eyebrow: [ THE OLD WAY ]
  Headline: "Monday morning. 9AM."
  Bebas Neue · clamp(48px, 6vw, 80px) · #1A1916

  Full-width comparison:

  LEFT SIDE — "Before Helixar":
    bg #FAFAF8 · border 1px solid #E8E4DF · border-radius 12px · padding 32px
    border-top: 3px solid #E0DAD5 (grey — not good)

    Title: "THE OLD WAY" · ticket-label style · color #999690
    
    WORKFLOW STEPS (like a receipt/checklist):
    8 steps, each with a small counter and ✗:
    ✗ 1. Open Sprout Social
    ✗ 2. Export CSV (wait 3 mins)
    ✗ 3. Open Google Sheets
    ✗ 4. Paste and format data
    ✗ 5. Open ChatGPT
    ✗ 6. Write the prompt
    ✗ 7. Copy output to Notion
    ✗ 8. Format and send to client

    TIME label: "⏱ 3 hours" · Geist Mono 700 · 24px · #999690

  RIGHT SIDE — "With Helixar":
    bg #FAFAF8 · border 1px solid #E8E4DF · border-radius 12px · padding 32px
    border-top: 3px solid #FF5E2C (orange — good)

    Title: "WITH HELIXAR" · ticket-label · color #FF5E2C
    
    ONE STEP with ✓:
    ✓ "@helixar report Nike"

    Then the output brief card (compact version)

    TIME label: "⏱ 4 minutes" · Geist Mono 700 · 24px · #FF5E2C

  Below both cards: centered quote
    "That's 2h 56min you just got back. Every week."
    Geist 600 · 18px · #1A1916 · italic

────────────────────────────────────────────────

  SECTION 5 — SOCIAL PROOF
  bg: #F5F2EE
  padding: 96px 0

  Ticket eyebrow: [ RESULTS ]

  Three testimonials — outcome-first format:

  Each card: bg #FAFAF8 · border 1px solid #E8E4DF · border-radius 12px · padding 32px

  RESULT HEADLINE (first, prominent):
    Geist 700 · 20px · #1A1916
    "3 hours → 4 minutes per competitor report."

  Quote below:
    Geist 400 italic · 15px · #6B6B72
    The actual quote (from Copy Drafts)

  Person row:
    Initials circle (36px, bg #E8E4DF) + name + role + company

────────────────────────────────────────────────

  SECTION 6 — PRICING (inline on homepage)
  bg: #EDEBE8
  padding: 96px 0

  Ticket eyebrow: [ PRICING ]
  Headline: "Simple. Two options."
  Geist 700 · 48px · #1A1916

  Toggle: Monthly / Yearly (yearly default, "SAVE 31%" orange stamp)

  THREE CARDS side by side:

  STARTER (border 1px solid #E8E4DF · bg #FAFAF8):
    $20/mo (yearly) or $29/mo
    Name + price + feature list
    CTA: "Start Free — 14 days" (secondary button)

  PRO — FEATURED (border 2px solid #FF5E2C · bg #FAFAF8):
    "MOST POPULAR" orange stamp top-right
    $49/mo (yearly) or $65/mo  ← (need actual Pro pricing from user)
    Feature list
    CTA: "Start Free — 14 days" (primary orange button)

  ENTERPRISE (border 1px solid #E8E4DF · bg #FAFAF8):
    Custom pricing
    Feature list
    CTA: "Talk to us" (secondary button)

  Trust row below:
    "No contracts. Cancel anytime. 14-day free trial on all plans."
    5 trust badges: NO CREDIT CARD · CANCEL ANYTIME · GDPR COMPLIANT · SOC 2 READY · SLACK CERTIFIED

────────────────────────────────────────────────

  SECTION 7 — FINAL CTA
  bg: #F5F2EE
  padding: 96px 0 · text-align center · position relative

  .bg-word "START" · opacity 0.04 · centered

  Headline:
    "STOP RESEARCHING."
    'START <span class="stamp">KNOWING.</span>'
    Bebas Neue · clamp(56px, 7vw, 88px) · #1A1916

  Subhead (specific):
    "Add Helixar to your Slack workspace. Type @helixar report [your competitor].
    See what it finds in under 5 minutes."
    16px · #6B6B72 · max-width 480px · margin: 0 auto

  CTA (margin-top 32px):
    "Add to Slack — Free 14 days"  [Slack icon]
    Primary button · height 52px · padding 0 32px · font-size 16px

  Below CTA:
    "2,400+ marketing teams already use Helixar."
    13px · #999690

────────────────────────────────────────────────

  FOOTER
  bg: #1A1916 (only dark element)
  All as before — logo, links, orange stamp block bottom-right

────────────────────────────────────────────────
```

---

## WHAT WAS KILLED AND WHY

KILLED: MacBook/laptop mockup
WHY: Helixar is Slack. Show Slack. A laptop says nothing about the product.

KILLED: The Loop (abstract 4-step system)
WHY: Nobody knows what "Research → Analyze → Generate → Track" means for them.
REPLACED WITH: 3 actual commands with real outputs.

KILLED: "WHO MADE MARKETING SO HARD?" editorial headline
WHY: Too clever. Too abstract. Replaced with a concrete before/after that shows the actual workflow.

KILLED: Abstract stat panels (PLATFORMS MONITORED / LAST SCRAPE / DATA POINTS)
WHY: Meaningless without context. Replaced with actual Slack output mockups.

KILLED: "EVERYTHING RUNS. YOU DIRECT." section header
WHY: Says nothing. Replaced with concrete feature outputs.

KILLED: Compound Advantage standalone section
WHY: The memory/compound angle is now shown through Command 3 (what do we know about X?)
and mentioned in testimonials. Doesn't need its own section.

ADDED: Pricing on homepage
WHY: People need to know what it costs. Hiding it = trust loss.

ADDED: Before/After comparison
WHY: Shows the actual workflow pain with specificity. Makes the time savings tangible.

ADDED: Real Slack UI mockup as hero
WHY: Someone who's never heard of Helixar knows exactly what it is in 2 seconds.
