# Design Principles — Helixar

---

## The 5 Principles. Non-negotiable.

These are not aesthetics. They are decisions. Every screen, every component, every animation must pass through these.

---

### 1. Precision Over Polish

Good design at Helixar is not about looking beautiful — it's about feeling exact.

Every element should feel like it was placed with intention. Not "that looks nice" but "that is the only place it could go."

**In practice:**
- Align to an 8px grid. Always.
- No decorative elements that don't carry meaning.
- Whitespace is not emptiness — it is pressure.
- If something can be removed without losing meaning, remove it.

---

### 2. The Interface Disappears

The best version of Helixar is one where the user forgets they're using software.

They're thinking about their campaign. Their competitor. Their client. Not about where the button is.

**In practice:**
- Primary actions are always obvious. Never hunt.
- Cognitive load per screen is capped. One primary action per view.
- Navigation never interrupts — it sits in the periphery until needed.
- Errors explain themselves and offer the next step.

---

### 3. Dark = Focused, Not Moody

We are dark because our users are in deep work mode. Not because dark looks cool.

Dark UI at Helixar means: less distraction, more contrast on what matters, a workspace that feels serious.

**In practice:**
- Background layers have subtle distinction — not flat black.
- The only things that glow are things that deserve attention.
- Orange is used surgingly — it means *act here*.
- Typography carries more weight than color in hierarchy.

---

### 4. Motion Has Meaning

Nothing moves for decoration. Everything that moves communicates something.

**In practice:**
- Appear = something arrived (new data, new state)
- Exit = something was resolved (completed, dismissed)
- Loop = something is live/in progress (syncing, monitoring)
- Hover = there is depth here, something to discover
- Never use animation to fill time. Only to communicate state.

---

### 5. Earned Complexity

Helixar is a powerful product. But it should feel simple on first use.

Complexity is revealed progressively — only when the user is ready for it.

**In practice:**
- Onboarding hides advanced features until they're relevant.
- Default views show 20% of options. The rest is one click deeper.
- Power user features exist and are excellent — but they don't crowd the first impression.
- Empty states are not empty — they are invitations.

---

## The Design Litmus Test

Before shipping any screen, ask:

1. What is the ONE thing the user should do here?
2. Is that thing the most visually prominent element?
3. Does anything distract from it?
4. Does the motion on this screen communicate or decorate?
5. Would a tired, distracted founder understand this at 11pm?

If the answer to #5 is no — simplify.
