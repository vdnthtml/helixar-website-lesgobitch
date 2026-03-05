# Interaction Patterns — Helixar App

---

## Command Palette (⌘K)

The most important power-user feature. Accessible from anywhere in the app.

**Trigger:** ⌘K (Mac), Ctrl+K (Windows)
**Dismiss:** Escape, click outside

```
┌────────────────────────────────────────────────┐
│  🔍  Search or run a command...                │
├────────────────────────────────────────────────┤
│  RECENT                                        │
│  → Nike Competitor Analysis                    │
│  → Q4 Campaign — Adidas                        │
│                                                │
│  ACTIONS                                       │
│  + New Research                                │
│  + New Campaign                                │
│  ⬡ Ask Memory                                  │
│                                                │
│  NAVIGATION                                    │
│  → Research                                    │
│  → Campaigns                                   │
└────────────────────────────────────────────────┘
```

Keyboard nav: Arrow keys to navigate, Enter to select.
Search filters results in real-time.

---

## Inline AI Chat (Contextual)

On any detail view, a floating AI input appears at the bottom:

```
┌─────────────────────────────────────────────┐
│  Ask Helixar about this research...    [↑]  │
└─────────────────────────────────────────────┘
```

This is context-aware — it knows what research/campaign you're looking at.
Response appears in a slide-up panel above the input.

---

## Loading States

**Short operations (< 2s):** Inline spinner. No page-level loading.

**Medium operations (2–10s):** Progress bar with status text.
```
Scraping Instagram...  [████████░░░░░░░░] 52%
```

**Long operations (> 10s):** Background job with notification on completion.
User can navigate away. Notification badge appears on the Research nav item when done.

---

## Confirmation Dialogs

For destructive or irreversible actions only. Not for every action.

Confirm for:
- Delete campaign
- Delete research
- Disconnect integration
- Approve & deploy (this is irreversible)

Don't confirm for:
- Save draft
- Add tag
- Change settings
- Most non-destructive actions

Dialog structure:
```
┌──────────────────────────────────┐
│  Delete "Nike Analysis"?         │
│                                  │
│  This will permanently delete    │
│  the research and all saved      │
│  data. This cannot be undone.    │
│                                  │
│  [Cancel]     [Delete]           │
│                    ↑ red button  │
└──────────────────────────────────┘
```

---

## Toast Notifications

Non-blocking feedback for completed actions.

Position: Bottom-right
Duration: 3s auto-dismiss (error toasts: 6s, require manual dismiss)

Types:
```
✓ Success: "Research saved to workspace"
⚠ Warning: "Campaign budget 80% spent"
✕ Error:   "Failed to connect to Instagram. Try again."
ℹ Info:    "Helixar found 3 new competitor posts"
```

Stack up to 3 toasts. New toasts push older ones up.

---

## Drag & Drop

Used in:
- Workspace file manager (reorder, move to folder)
- Campaign content variants (reorder priority)
- Experiment variants (reorder)

Visual affordance: Grab cursor on hover. Ghost preview while dragging. Drop zone highlights.

---

## Keyboard Shortcuts

```
⌘K           → Command palette
⌘N           → New (contextual — New Research in Research, New Campaign in Campaigns)
⌘/           → Toggle help panel
⌘,           → Settings
Escape        → Close modal / dismiss panel
⌘↵           → Submit/confirm primary action
⌘D           → Duplicate selected item
```

Show keyboard shortcut hints in tooltips after 3 days of use.

---

## Tooltip System

Tooltips appear on hover after 400ms delay.

```css
.tooltip {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  padding: 5px 10px;
  font-size: var(--text-xs);
  color: var(--color-text-primary);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  pointer-events: none;
}
```

Show keyboard shortcut in tooltip when available:
`"New Campaign  ⌘N"`
