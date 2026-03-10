# THE BLACKLIST
### Every item below appeared in the v2 build. None returns.

---

## Visual anti-patterns

**Thick rounded border around the hero left column.**
The rounded-rect container wrapping "TYPE A / COMMAND. / GET A / COMPETITOR BRIEF."
was the single worst decision in the build. It made the headline look like an app modal.
Remove it. The text is free. It stands alone.

**"HELIXAR" watermark overlapping the product screenshot.**
The bg-word belongs behind the entire layout at 4% opacity.
It does NOT overlap the Slack mockup. It is wallpaper, not content.

**Orange blob / CSS geometric shapes.**
If it is not a real product screenshot — it does not exist on the page.
No pentagons. No circles. No Three.js blobs. No abstract SVG shapes.
Real product UI or nothing.

**Tick marks (✓) anywhere.**
Especially in feature lists. They read as "generic SaaS feature checklist."
Write in prose. Two to three sentences. No symbols.

**Bullet point feature descriptions.**
Same problem as tick marks. Same fix. Write sentences.

**Equal 3-column feature grids with icons.**
Replaced by alternating full-width feature rows (45fr/55fr).
More editorial. More breathing room.

**Uneven column height from mismatched content.**
When the left column has 40px of command text and the right has a 400px screenshot —
the section looks broken. Fix: write more prose on the left OR reduce screenshot size.
Align-items: center on the row handles vertical centering, not the content height mismatch.

**"MONDAY MORNING. 9AM." scenario section.**
That entire section looked like a PowerPoint slide.
Replaced with pure arithmetic: 3 hours → 4 minutes.
No narrative. No scene-setting. Just the math.

---

## Color anti-patterns

**Orange on everything.**
One CTA button. One stamp per section. One ticket label per section.
Not every icon. Not every link. Not every divider. Not every bullet.

**Four or more colors.**
Green checkmarks, blue text links, teal badges — none of it.
If you reach for a color that isn't black, white, or orange — stop. Ask why.

**Pure #FFFFFF or #000000.**
The page background is warm white #F5F2EE.
The "black" is near-black #0D0C0A with warm undertone.
Optical black and optical white. Never digital cold.

---

## Layout anti-patterns

**Centered headline.**
Every Bebas Neue headline is left-aligned. No exceptions.

**Sections that fill the viewport with content.**
If content touches top and bottom of the screen — cut half of it.
White space is not a mistake. It is the intent.

**Cards wrapping plain text content.**
Feature descriptions, testimonials, numbered lists — none of these go in cards.
Cards are only for product screenshots.
The test: does this card contain a screenshot? No → remove the card.

---

## Product mockup anti-patterns

**Emoji in the Slack UI (📊 📈 🔥 ✨).**
Looks like a ChatGPT demo. Replace with small colored circles for platform icons.

**Two screenshots side-by-side with uneven spacing.**
One screenshot per row. Left or right column. Full width of that column.

**Outer container border wrapping the Slack card.**
The Slack UI is dark. That dark background IS the container.
No second border. No outer rounded rectangle.

**Gray placeholder boxes.**
If the screenshot isn't built yet — leave the column empty.
Never ship with placeholder rectangles.

---

## Copy anti-patterns

**"Setup takes 2 minutes" as a badge/pill.**
It's a caption. Geist 400 12px muted. Sitting quietly under the CTA buttons.
Not a badge. Not a chip. Not highlighted.

**Subheads that repeat the headline.**
"Type a command in Slack. Get a full competitor brief in under 5 minutes."
does not need to be followed by explaining that again in different words.
One message per text element.
