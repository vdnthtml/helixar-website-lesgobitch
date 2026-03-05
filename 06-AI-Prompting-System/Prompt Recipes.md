# Prompt Recipes — Quick Reference

---

## Landing Page Recipes

### "Make it feel more premium"
```
The design feels generic. Make these specific changes:
1. Increase headline size to 72px, set letter-spacing to -0.05em
2. Reduce the body text to 15px (it feels too large/bloggy)
3. The card padding should be 24px (it's currently too tight)
4. Add 1px border to all cards: #2A2A34
5. The orange CTA button needs a subtle glow: box-shadow 0 0 20px rgba(255,92,0,0.25)
Make only these changes. Nothing else.
```

### "The hero feels empty"
```
Add a background treatment to the hero section:
- Very subtle dot grid: radial-gradient dots at rgba(255,255,255,0.04), 48px spacing
- Top-left soft orange ambient glow: radial-gradient at 20% 30%, rgba(255,92,0,0.06), 600px radius
- This should add depth without competing with the headline
```

### "The screenshot mockup doesn't look real enough"
```
The product screenshot needs to look like a real desktop app, not a mockup.
Add:
- Subtle drop shadow below the screenshot container: 0 32px 80px rgba(0,0,0,0.6)
- A very thin border: 1px solid rgba(255,255,255,0.08)
- Slightly round the corners of the container: border-radius 12px
- Inside the screenshot, make sure there are visible UI elements (sidebar, content, some data rows)
```

---

## App UI Recipes

### "The sidebar looks unfinished"
```
The sidebar navigation needs these fixes:
1. Active item: background rgba(255,92,0,0.1), left border 2px solid #FF5C00, text color #FF5C00
2. Inactive items: text color #8A8A96, no background
3. Hover: background #222228, text color #F2F2F3
4. All transitions: 100ms ease
5. Item height: 36px, padding: 0 12px, border-radius 8px
6. Gap between items: 2px
```

### "The data table rows look too heavy"
```
Lighten the table rows:
1. Remove row background entirely (transparent)
2. Row separator: 1px solid #1E1E24 (very subtle)
3. Row height: 48px (comfortable) or 36px (compact)
4. Cell text: primary text #F2F2F3 for main content, #8A8A96 for metadata
5. Hover state: row bg rgba(255,255,255,0.03) — barely visible
6. Don't use alternating row colors (too old-fashioned)
```

### "The empty state looks like an error"
```
Redesign the empty state to feel like an invitation:
1. Center content vertically and horizontally in the container
2. Icon: 48px Lucide icon, color #52525C (very muted — not a statement)
3. Title: "Nothing here yet" style — 17px, semibold, #F2F2F3
4. Description: 1 sentence, 15px, #8A8A96, max-width 320px, centered
5. CTA button (if applicable): primary orange, compact size (32px height)
6. No background color change. No box. No border. Just the centered content.
```

---

## Animation Recipes

### "Add scroll reveal to this section"
```
Add GSAP scroll reveal to the [section name] section.

Requirements:
- Trigger: when section enters viewport at 70% threshold
- Animation: opacity 0→1, translateY 24px→0
- Duration: 500ms
- Easing: power2.out
- If there are multiple items: stagger 80ms between each

Code:
gsap.from("[selector]", {
  scrollTrigger: {
    trigger: "[section selector]",
    start: "top 70%",
  },
  opacity: 0,
  y: 24,
  duration: 0.5,
  stagger: 0.08,
  ease: "power2.out"
});
```

### "Add a typing/reveal animation to the headline"
```
Split the headline into individual words and animate them in on page load.

Step 1 — Wrap words in spans (JavaScript):
headline.innerHTML = headline.textContent
  .split(' ')
  .map(w => `<span class="word" style="display:inline-block; overflow:hidden">
    <span class="word-inner">${w}</span></span>`)
  .join(' ');

Step 2 — GSAP animation:
gsap.from(".word-inner", {
  opacity: 0,
  y: "100%",
  duration: 0.5,
  stagger: 0.07,
  ease: "power3.out",
  delay: 0.4
});
```

---

## Copy Recipes

### "This copy feels too feature-focused"
Rewrite formula: **[Pain]** → **[Helixar removes the pain]** → **[Result]**

Before: "Multi-platform competitor scraping with real-time data ingestion"
After: "You used to spend 10–20 hours pulling competitor data. Helixar scrapes every platform simultaneously and saves it to your workspace automatically. That time is yours again."

### "This headline is too generic"
Test: Could any other marketing tool use this headline?
If yes → rewrite.

Formula: Name the SHIFT (before → after), not the feature.

Generic: "Supercharge your marketing with AI"
Specific: "Marketing used to need a team. Now it needs you."
