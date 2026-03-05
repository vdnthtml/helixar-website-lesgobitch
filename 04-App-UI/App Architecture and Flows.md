# App Architecture & Flows — Helixar (Mac & Windows)

---

## Mental Model

Helixar is a workspace, not a dashboard. The distinction matters for design:

**Dashboard:** You visit it to check on things. It presents information.
**Workspace:** You live in it. It is where you do work.

The app should feel like a place — not a report.

---

## Top-Level Navigation Structure

```
Helixar App
├── Workspace        → File browser, recent files, project folders
├── Research         → Competitor research hub
│   ├── New Research
│   ├── Saved Research (list)
│   └── [Research Detail View]
├── Campaigns        → Full lifecycle campaign management
│   ├── All Campaigns
│   ├── Active
│   └── [Campaign Detail View]
├── Performance      → Metrics, tracking, optimization
│   ├── Overview
│   ├── By Campaign
│   └── Recommendations
├── Experiments      → A/B tests
│   ├── Active Tests
│   ├── Completed
│   └── Learnings Library
├── Memory           → AI intelligence layer
│   ├── Companies
│   ├── Strategies
│   └── Ask Memory (chat interface)
└── Settings
    ├── Integrations (Notion, HubSpot)
    ├── Workspace
    └── Account
```

---

## Primary User Flows

### Flow 1 — First Use / Onboarding
```
App opens →
  Welcome screen (3-step onboarding) →
    1. Name your workspace
    2. Connect first integration (Notion / HubSpot — optional, skippable)
    3. "Start with research" → drops into Research with a prompt
  → Workspace view (empty state with clear next action)
```

### Flow 2 — Competitor Research
```
Click "Research" in nav →
  Research hub (list of past research) →
    Click "+ New Research" →
      Input: Brand name or competitor name →
        Helixar finds profiles across platforms (loading state) →
          Confirmation: "Found Nike on YouTube, Instagram, TikTok, X, LinkedIn" →
            Scraping in progress (progress indicator per platform) →
              Research complete →
                Research detail view (metrics, content table, insights)
```

### Flow 3 — Create & Deploy Campaign
```
Click "Campaigns" →
  All campaigns list →
    Click "+ New Campaign" →
      Campaign form (name, goal, platforms, budget, dates) →
        [Save as Draft] →
          Campaign detail view →
            [Generate Content] → Content variants generated →
              Review variants →
                [Submit for Approval] →
                  Approval screen (human review) →
                    [Approve & Deploy] →
                      Campaign goes Active →
                        Performance tracking begins
```

### Flow 4 — Ask Memory
```
Click "Memory" →
  Ask Memory interface (chat-style) →
    Type: "What campaigns have worked for SaaS clients?" →
      Response: Pulls from stored campaign data, patterns, outcomes →
        Option to save insight or add to campaign
```

---

## State Machine — Campaign

```
DRAFT → PENDING_APPROVAL → DEPLOYING → ACTIVE → MONITORING → PAUSED → COMPLETED
                                                                    ↗
                                                              ACTIVE
```

Each state has:
- A distinct badge color
- A different set of available actions
- A different primary CTA in the detail view

---

## Screen Count (MVP)

| Section | Screens |
|---|---|
| Onboarding | 3 |
| Workspace | 2 (overview + file view) |
| Research | 3 (hub + new + detail) |
| Campaigns | 4 (list + new + detail + approval) |
| Performance | 3 (overview + campaign + recommendations) |
| Experiments | 3 (list + detail + learnings) |
| Memory | 2 (overview + ask) |
| Settings | 3 (integrations + workspace + account) |
| **Total** | **23 screens** |
