# ANTIGRAVITY BUILD PROMPTS
### 6 prompts. Send in order. Wait for confirmation before each next.

---

## HOW TO USE THESE

1. Send **Prompt 01** first. Wait until Antigravity confirms completion.
2. Then **Prompt 02**, and so on.
3. Do NOT batch them together — each builds on the previous.
4. If something looks wrong after any prompt, fix it before continuing.

---

---

## PROMPT 01 — COMPLETE RESET + GLOBALS

```
We are rebuilding the Helixar website from scratch.
Delete every existing component file. Keep only: layout.tsx, page.tsx, and the app directory structure.
Then do the following:

STEP 1 — Replace globals.css entirely with this content:
[paste the entire contents of 06-css/globals.css here]

STEP 2 — Update layout.tsx to import these Google Fonts:
Bebas Neue (weight: 400)
Geist (weights: 300 400 500 600 700 800)
Geist Mono (weights: 400 500 600 700)
All with display: swap.

STEP 3 — Set page.tsx to a blank shell:
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Helixar — Slack-Native AI for Marketing Teams',
  description: 'Type a command in Slack. Get a full competitor brief in under 5 minutes.',
}

export default function Home() {
  return (
    <main>
      {/* sections go here */}
    </main>
  )
}

STEP 4 — Create a /components folder if it doesn't exist.

Confirm when done. Do not build anything else yet.
```

---

---

## PROMPT 02 — NAV + MARQUEE

```
Build two components: Nav.tsx and Marquee.tsx

━━━━━━━━━━━━━━━━━━━━━━━━━━
NAV.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━

Use 'use client' — the nav has scroll behavior.

Structure: sticky top-0 z-[100], height 64px.
On scroll past 40px: add backdrop-blur(12px), background rgba(245,242,238,0.92), 
border-bottom 1px solid #E2DED9. Transition: 200ms ease.

Inner container: max-width 1200px, margin 0 auto, padding 0 48px, 
display flex, align-items center, justify-content space-between, height 100%.

LEFT — Logo:
<a href="/">
  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 4 }}>
    <span style={{ color: 'var(--orange)' }}>■</span> HELIXAR
  </span>
</a>

CENTER — Links:
<nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
  <a href="#how-it-works" style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500, color: 'var(--text-body)' }}>How it works</a>
  <a href="#pricing" style={{ same }}>Pricing</a>
  <a href="/changelog" style={{ same }}>Changelog</a>
</nav>
Hover: color var(--text-primary), transition 120ms.

RIGHT — CTA button:
<button className="btn-primary" style={{ height: 40, padding: '0 20px', fontSize: 14 }}>
  Add to Slack
</button>

━━━━━━━━━━━━━━━━━━━━━━━━━━
MARQUEE.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━

Outer div: height 44px, background #0D0C0A, overflow hidden, position relative.

Inner track (.marquee-track from globals.css):
  Two identical spans side by side (for seamless loop):
  "USED BY 2,400+ MARKETING TEAMS  ›  AGENCIES  ›  IN-HOUSE TEAMS  ›  FREELANCERS  ›  STARTUPS  ›  CONSULTANCIES  ›    "
  
  Text style: fontFamily var(--font-mono), fontSize 11, textTransform uppercase,
  letterSpacing '0.1em', color '#FAF9F7', opacity 0.5, padding '0 32px each item'.
  
  Use CSS animation: marquee 40s linear infinite (defined in globals.css).
  Pause on mouseenter (animation-play-state: paused).

Right stamp: position absolute, right 0, top 0, width 44, height 44, background #FF5E2C, zIndex 10.

Add both to page.tsx after the <Nav /> component.
```

---

---

## PROMPT 03 — HERO SECTION

```
Build Hero.tsx. This is the most critical section. Read every word.

━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTER SHELL
━━━━━━━━━━━━━━━━━━━━━━━━━━
<section> with:
  background: var(--bg-base)
  minHeight: '90vh'
  display: flex, alignItems: center
  position: relative, overflow: hidden

━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKGROUND WORD (z-index 0)
━━━━━━━━━━━━━━━━━━━━━━━━━━
<div className="bg-word">HELIXAR</div>
(uses .bg-word from globals.css — position absolute, centered, opacity 0.04)

━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT LAYER (z-index 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━
<div style={{
  position: 'relative', zIndex: 1,
  maxWidth: 1200, margin: '0 auto',
  padding: '160px 48px 80px',
  display: 'grid', gridTemplateColumns: '1fr 1fr',
  gap: 64, alignItems: 'center',
  width: '100%'
}}>

━━━━━━━━━━━━━━━━━━━━━━━━━━
LEFT COLUMN
━━━━━━━━━━━━━━━━━━━━━━━━━━

① Ticket label:
<div className="ticket-label">SLACK-NATIVE AI FOR MARKETING TEAMS</div>

② Headline (margin-top 20px):
Each line is a SEPARATE div — not one block with line breaks.

<div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 10vw, 116px)', lineHeight: 0.90, letterSpacing: '0.01em', color: 'var(--text-primary)', marginTop: 20 }}>
  <div>TYPE A</div>
  <div>COMMAND.</div>
  <div>GET A</div>
  <div><span className="stamp">COMPETITOR BRIEF.</span></div>
</div>

❌ DO NOT put the headline inside a rounded border box
❌ DO NOT center the headline
❌ DO NOT change the line order

③ Subhead (margin-top 24px):
<p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 400, color: 'var(--text-body)', maxWidth: 380, lineHeight: 1.65, marginTop: 24 }}>
  Type a command in Slack. Get a full competitor brief in under 5 minutes. No tabs. No tools.
</p>

④ CTA row (margin-top 32px):
<div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 32 }}>
  <button className="btn-primary">
    Add to Slack — Free
  </button>
  <button className="btn-ghost">
    Watch it work →
  </button>
</div>

⑤ Caption (margin-top 12px):
<p style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
  Setup takes 2 minutes. No credit card required.
</p>
This is plain text. NOT a badge, NOT a pill, NOT highlighted.

━━━━━━━━━━━━━━━━━━━━━━━━━━
RIGHT COLUMN — SLACK MOCKUP
━━━━━━━━━━━━━━━━━━━━━━━━━━

Build the Slack UI mockup as pure HTML/CSS. No outer container border.
The dark bg of the card IS the container.

<div style={{
  background: '#0D0C0A',
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
  width: '100%'
}}>

  {/* Window chrome */}
  <div style={{ height: 40, background: '#1A1816', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
    {/* Traffic light dots */}
    <div style={{ display: 'flex', gap: 6 }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
    </div>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(250,249,247,0.7)', marginLeft: 8 }}># marketing-intel</span>
  </div>

  {/* Messages area */}
  <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>

    {/* User message */}
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#FF5E2C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: '#fff' }}>YT</span>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>You</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#A09D9A' }}>10:03 AM</span>
        </div>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: '#FAF9F7' }}>@helixar report Nike</p>
      </div>
    </div>

    {/* Helixar bot message */}
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#161412', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ color: '#FF5E2C', fontSize: 14, fontWeight: 700 }}>■</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>Helixar</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', background: 'rgba(255,94,44,0.25)', color: '#FF5E2C', padding: '1px 4px', borderRadius: 2 }}>APP</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#A09D9A' }}>10:07 AM</span>
        </div>

        {/* Response card */}
        <div style={{ background: '#1E1C19', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: '#FAF9F7' }}>Nike Competitor Brief</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#A09D9A' }}>Generated 10:07 AM</span>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Data row helper: colored dot + label + value */}
            {[
              { dot: '#E1306C', label: 'Content Volume', value: '847 posts/month' },
              { dot: '#69C9D0', label: 'Avg Engagement', value: '4.2%', delta: '+12%' },
              { dot: '#FF0000', label: 'Top Format',     value: 'Reels (63% of top posts)' },
              { dot: '#FAF9F7', label: 'Winning Hook',   value: '"Before/After transformations"' },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#A09D9A', width: 120, flexShrink: 0 }}>{row.label}</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: '#FAF9F7' }}>{row.value}</span>
                {row.delta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'rgba(255,94,44,0.15)', color: '#FF5E2C', padding: '1px 5px', borderRadius: 3 }}>{row.delta}</span>}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 10, paddingTop: 10 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#A09D9A', marginBottom: 6 }}>TOP 3 GAPS VS YOUR BRAND:</div>
            {['Behind-the-scenes production content', 'Creator collabs under 100K', 'Morning routine integrations'].map(gap => (
              <div key={gap} style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: '#6B6869', lineHeight: 1.8 }}>{gap}</div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
            {['View Full Brief ↗', 'Monitor Nike', 'Export PDF'].map((label, i) => (
              <button key={label} style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500, color: '#A09D9A', background: 'transparent', border: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none', padding: '4px 10px', borderRadius: 4, cursor: 'pointer' }}>{label}</button>
            ))}
          </div>
        </div>

        {/* Typing indicator */}
        <div style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontSize: 12, color: '#A09D9A', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>● ● ●</span>
          <span>Helixar is analyzing...</span>
        </div>
      </div>
    </div>

  </div>
</div>

Add Hero to page.tsx. Confirm when done.
```

---

---

## PROMPT 04 — HOW IT WORKS

```
Build HowItWorks.tsx. This is the most important content section.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION HEADER
━━━━━━━━━━━━━━━━━━━━━━━━━━
background: var(--bg-base)
position: relative, overflow: hidden
id="how-it-works"

Background word: <div className="bg-word">COMMANDS</div>

Inner (max-width 1200px, padding 96px 48px 72px, position relative z-index 1):
  <div className="ticket-label">HOW IT WORKS</div>

  Headline (margin-top 16px, fontFamily var(--font-display), fontSize clamp(60px,7vw,88px), lineHeight 0.90, color var(--text-primary)):
    <div>THREE COMMANDS.</div>
    <div>THAT'S THE <span className="stamp">WHOLE PRODUCT.</span></div>

  Subhead (margin-top 16px, Geist 400 16px var(--text-body)):
    "No dashboards. No onboarding. Just type in Slack."

━━━━━━━━━━━━━━━━━━━━━━━━━━
THREE FEATURE ROWS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Map over this data array:

const rows = [
  {
    step: '01',
    command: '@helixar report [brand]',
    headline: 'A full competitor brief in under 5 minutes.',
    body: 'Helixar scrapes 6 platforms simultaneously and generates a ranked brief — content volume, engagement rates, top formats, winning hooks, and your specific content gaps.',
    side: 'right',  // screenshot on right
    bg: 'var(--bg-base)',
    mockupType: 'brief',
  },
  {
    step: '02',
    command: '@helixar monitor [brand]',
    headline: 'Never miss a competitor move.',
    body: 'Set monitoring for any brand. A weekly digest lands in Slack every Monday — spikes, new campaigns, follower shifts, anything that changed in the last 7 days.',
    side: 'left',  // screenshot on left
    bg: 'var(--bg-alt)',
    mockupType: 'monitor',
  },
  {
    step: '03',
    command: '@helixar what do we know about [brand]?',
    headline: 'Everything it\'s ever learned. Instantly recalled.',
    body: 'Every data point from your first report to today — campaign shifts, platform changes, strategy pivots — cross-referenced and searchable in seconds. It never starts from zero.',
    side: 'right',  // screenshot on right
    bg: 'var(--bg-base)',
    mockupType: 'memory',
  },
]

Each row renders as:
<section style={{ background: row.bg, borderTop: '1px solid var(--border)' }}>
  <div style={{
    maxWidth: 1200, margin: '0 auto', padding: '80px 48px',
    display: 'grid',
    gridTemplateColumns: row.side === 'right' ? '45fr 55fr' : '55fr 45fr',
    gap: 64, alignItems: 'center'
  }}>

  If side === 'right': [TEXT COLUMN, SCREENSHOT COLUMN]
  If side === 'left':  [SCREENSHOT COLUMN, TEXT COLUMN]

━━━━━━━━━━━━━━━━━━━━━━━━━━
TEXT COLUMN
━━━━━━━━━━━━━━━━━━━━━━━━━━
<div>
  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{row.step}</div>
  
  <div className="command-block" style={{ marginTop: 8 }}>
    <span className="prompt">></span> {row.command}
  </div>
  
  <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.2, marginTop: 20 }}>
    {row.headline}
  </h3>
  
  <p style={{ fontFamily: 'var(--font-ui)', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.65, maxWidth: 420, marginTop: 12 }}>
    {row.body}
  </p>
</div>

❌ NO tick marks
❌ NO bullet points
❌ NO bordered box around the text column

━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREENSHOT COLUMNS
━━━━━━━━━━━━━━━━━━━━━━━━━━

mockupType === 'brief': same Slack card as Hero but can be a bit smaller

mockupType === 'monitor': Slack card showing:
  User: "@helixar monitor Nike"
  Bot response (no inner card, just the message):
    Header: "Nike Weekly Digest — Mar 10" Geist 600 13px white
    ─────────────────────────────────
    <span style color #FF5E2C>↑ 23%</span> engagement spike on Reels
    Launched new campaign: <strong>#JustDoMore</strong>
    Added <strong>47K followers</strong> this week
    [View Full Digest ↗] button

mockupType === 'memory': Slack card showing:
  User: "@helixar what do we know about Lululemon?"
  Bot response card — title "Lululemon — since Jan 2025"
  Three timeline entries:
    Jan 15  First competitor report. 12 platforms indexed.
    Feb 03  Detected shift to UGC-first strategy. Reels up 40%.
    Mar 01  New campaign: #FeelNothing. Community engagement +18%.
  [Full Timeline ↗]  [Compare Brands] buttons

All screenshot columns:
  bg #0D0C0A, borderRadius 12, boxShadow '0 24px 80px rgba(0,0,0,0.18)'
  NO outer container border
  width: '100%'

Add HowItWorks to page.tsx. Confirm when done.
```

---

---

## PROMPT 05 — THE MATH + TESTIMONIALS + PRICING

```
Build three components: TheMath.tsx, Testimonials.tsx, Pricing.tsx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THEMATH.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<section style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
  <div className="bg-word bg-word-dark">FASTER</div>
  <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '96px 48px' }}>

  <div className="ticket-label-dark">THE OLD WAY</div>

  Headline (margin-top 16px):
    fontFamily var(--font-display), fontSize clamp(64px,7vw,88px), lineHeight 0.90, color var(--text-inverse)
    "3 HOURS BECOMES 4 MINUTES."

  Subhead (margin-top 16px):
    Geist 400 16px var(--text-inverse-body)
    "Every week. For every competitor. For every client."

  Two columns (margin-top 64px, padding-top 64px, border-top '1px solid rgba(255,255,255,0.06)'):
    grid-template-columns: 1fr 1fr, gap 64px

  LEFT COLUMN:
    Numbered list — plain text, NO strikes, NO X icons:
    fontFamily var(--font-ui), fontSize 14, color var(--text-inverse-body), lineHeight 2.4
    1. Open Sprout Social
    2. Export CSV (wait 3 mins)
    3. Open Google Sheets
    4. Paste and format data
    5. Open ChatGPT
    6. Write the prompt
    7. Copy output to Notion
    8. Format and send to client

    Below (margin-top 28px): fontFamily var(--font-mono), fontSize 24, fontWeight 500, color var(--text-inverse-body)
    "⏱ 3 hours"

  RIGHT COLUMN:
    Command block:
    <div className="command-block" style={{ width: 'fit-content' }}>
      <span className="prompt">></span> @helixar report Nike
    </div>

    Mini result card (margin-top 20px):
      bg '#161412', border '1px solid rgba(255,255,255,0.06)', borderRadius 12, padding 16
      Header: "Nike Brief" Geist 600 13px white + "4 min" Geist Mono 11px #A09D9A float right
      Divider
      Three data rows: Volume 847/mo / Engagement 4.2% / Top Format Reels
      (each row: 8px colored dot + Geist Mono 10px muted label + Geist 400 13px white value)

    Total time (margin-top 24px):
      fontFamily var(--font-mono), fontSize clamp(48px,5vw,64px), fontWeight 700, color var(--orange)
      "⏱ 4 minutes"

  Bottom caption (margin-top 48px, padding-top 32px, border-top '1px solid rgba(255,255,255,0.06)', text-align center):
    Geist 400 italic 15px var(--text-inverse-body)
    "That's 2h 56min you just got back. Every week."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TESTIMONIALS.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<section style={{ background: 'var(--bg-alt)' }}>
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 48px' }}>

  <div className="ticket-label">RESULTS</div>

  <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: 40, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginTop: 16 }}>
    From people who made the switch.
  </h2>

  Three-column grid (margin-top 64px, grid-template-columns '1fr 1fr 1fr', gap 40):

  const quotes = [
    {
      text: "I used to spend Monday mornings building competitor reports. Now I type one command and have a full brief before my first call. That time went straight into client strategy.",
      name: "Sarah Chen",
      role: "Head of Marketing, Arch Software"
    },
    {
      text: "Client asked what their top competitor was doing on TikTok. I made the Slack. They didn't. We got the contract.",
      name: "Marcus Webb",
      role: "Freelance Brand Strategist"
    },
    {
      text: "After 90 days, Helixar knew our vertical better than most junior marketers. The recommendations went from decent to genuinely surprising.",
      name: "Priya Nair",
      role: "Growth Lead, Voltara Labs"
    }
  ]

  Each quote renders as:
  <div style={{ borderLeft: '2px solid var(--orange)', paddingLeft: 20 }}>
    <p style={{ fontFamily: 'var(--font-ui)', fontSize: 16, fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.7 }}>
      "{quote.text}"
    </p>
    <div style={{ marginTop: 16 }}>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{quote.name}</div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{quote.role}</div>
    </div>
  </div>

  NO card backgrounds. NO avatars. NO star ratings. NO company logos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRICING.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

'use client' — has toggle state.
const [yearly, setYearly] = useState(true)

<section id="pricing" style={{ background: 'var(--bg-base)' }}>
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 48px' }}>

  <div className="ticket-label">PRICING</div>

  Headline (margin-top 16px):
    fontFamily var(--font-display), fontSize clamp(56px,6vw,80px), lineHeight 0.90, color var(--text-primary)
    "SIMPLE. <span className='stamp'>TWO OPTIONS.</span>"

  Toggle (margin-top 28px):
    Pill toggle — border '1px solid var(--border)', borderRadius 6, display inline-flex, overflow hidden
    [Monthly button] [Yearly button]
    Active state: bg var(--orange), color white
    Inactive: bg transparent, color var(--text-body)

    Inside Yearly button: "Yearly  " + <span className="stamp" style={{ fontSize: 10 }}>SAVE 31%</span>

  Three cards grid (margin-top 48px, grid-template-columns 'repeat(3,1fr)', gap 24):

  CARD 1 — STARTER:
    bg var(--bg-card), border '1px solid var(--border)', borderRadius 8, padding 40
    
    <div style font 700 20px text-primary>Starter</div>
    <div style font 400 14px text-muted>For freelancers and small teams.</div>
    
    Price row (margin-top 24px, display flex, align-items baseline, gap 4):
      <span font-mono 700 48px text-primary>${yearly ? '20' : '29'}</span>
      <span font 400 16px text-muted>/mo</span>
    <div font 400 13px text-muted>{yearly ? 'billed annually' : 'billed monthly'}</div>
    
    Feature text (margin-top 24px, font 400 15px text-body, line-height 1.65):
      "1 Slack workspace, 3 reports per month, 2 monitored brands, and basic memory."
      THIS IS PROSE. NOT A LIST. NOT BULLET POINTS.
    
    CTA (margin-top auto, padding-top 32px):
      <button className="btn-secondary" style={{ width: '100%' }}>Start Free — 14 days</button>

  CARD 2 — PRO (featured):
    bg var(--bg-card), border '1px solid var(--border)', borderTop '3px solid var(--orange)'
    borderRadius 8, padding 40, boxShadow var(--shadow-md)
    
    <div className="ticket-label" style={{ marginBottom: 20 }}>MOST POPULAR</div>
    <div font 700 20px>Pro</div>
    <div font 400 14px muted>For agencies and growing teams.</div>
    
    Price: ${yearly ? '49' : '69'}/mo — same layout as Starter
    
    Feature text:
      "3 workspaces, unlimited reports, 10 monitored brands, full AI memory, and priority support."
    
    CTA: <button className="btn-primary" style={{ width: '100%' }}>Start Free — 14 days</button>

  CARD 3 — ENTERPRISE:
    same structure as Starter card (secondary styling)
    Price: "Custom" — Geist 700 40px (use Geist not Bebas Neue)
    No billing note
    Feature text: "Unlimited workspaces, forward-deployed setup, custom model training, dedicated Slack channel, SOC 2 compliant, and SLA guarantees."
    CTA: <button className="btn-secondary" style={{ width: '100%' }}>Talk to us</button>

  Trust signals (margin-top 40px, text-align center):
    <p font 400 14px text-muted>"No contracts. Cancel anytime. 14-day free trial on all plans."</p>
    
    Pill row (margin-top 16px, display flex, gap 24, justify-content center, flex-wrap wrap):
      ["● NO CREDIT CARD", "● CANCEL ANYTIME", "● GDPR COMPLIANT", "● SOC 2 READY", "● SLACK CERTIFIED"]
      font-mono 10px uppercase tracking-[0.1em] text-muted

Add all three components to page.tsx. Confirm when done.
```

---

---

## PROMPT 06 — FINAL CTA + FOOTER

```
Build FinalCTA.tsx and Footer.tsx. Last two components.

━━━━━━━━━━━━━━━━━━━━━━━━━━
FINALCTA.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━

<section style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
  <div className="bg-word bg-word-dark">HELIXAR</div>
  <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', padding: '120px 48px' }}>
  
  Headline:
    fontFamily var(--font-display), fontSize clamp(64px,8vw,96px), lineHeight 0.90, color var(--text-inverse)
    <div>STOP RESEARCHING.</div>
    <div>START <span className="stamp">KNOWING.</span></div>

  Subhead (margin-top 24px):
    Geist 400 16px var(--text-inverse-body) line-height 1.65
    "Add Helixar to your Slack workspace. Type @helixar report [your competitor]. See what it finds in under 5 minutes."

  CTA row (margin-top 40px, display flex, justifyContent center, gap 20, alignItems center):
    <button className="btn-primary">Add to Slack — Free</button>
    <button className="btn-ghost btn-ghost-dark">Book a 15-min demo →</button>

━━━━━━━━━━━━━━━━━━━━━━━━━━
FOOTER.TSX
━━━━━━━━━━━━━━━━━━━━━━━━━━

<footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px 48px' }}>

  Four-column grid (grid-template-columns '2fr 1fr 1fr 1fr', gap 48):

  COLUMN 1 — Brand:
    Logo: <div><span style color #FF5E2C>■</span> HELIXAR</div> Geist 700 16px #FAF9F7
    Tagline (margin-top 12px): Geist 400 14px #6B6869
    "Built for marketers who refuse to settle."

  COLUMN 2 — PRODUCT:
    Header: Geist Mono 10px uppercase tracking-[0.1em] #A09D9A margin-bottom 16px
    "PRODUCT"
    Links: Features / Pricing / Changelog / Add to Slack
    Geist 400 14px #6B6869, display block, line-height 2.2, hover #FAF9F7

  COLUMN 3 — COMPANY:
    Header: "COMPANY"
    Links: About / Careers / Blog / Contact

  COLUMN 4 — LEGAL:
    Header: "LEGAL"
    Links: Privacy / Terms / Security

  Bottom bar (margin-top 48px, padding-top 24px, border-top '1px solid rgba(255,255,255,0.06)'):
    display flex, justify-content space-between, align-items center
    
    Left: "© 2025 Helixar. All rights reserved." Geist 400 12px #A09D9A
    Right: <div style={{ width: 16, height: 16, background: '#FF5E2C' }} />

━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL CHECKLIST — Verify before confirming:
━━━━━━━━━━━━━━━━━━━━━━━━━━

[ ] No tick marks (✓) anywhere on the page
[ ] No bullet point lists — all feature text is prose
[ ] No rounded border box around the hero left column headline
[ ] No "HELIXAR" watermark overlapping the hero screenshot
[ ] No orange CSS blobs or geometric shapes
[ ] Background ghost word opacity is 0.04 — barely there
[ ] Section backgrounds alternate correctly: base / dark strip / base+alt / dark / alt / base / dark / dark
[ ] Command blocks are always dark bg, fit-content width (never stretched)
[ ] Orange used ONLY on: CTAs, stamps, ticket labels, command prompt >, stat numbers, testimonial left border, featured card top border, footer ■, marquee right stamp
[ ] All Bebas Neue headlines are LEFT-ALIGNED

If any of these fail — fix them before confirming.
```
