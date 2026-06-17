# Kyoto Business Automation System

A pre-consultation proposal site built for a Kyoto private experience business — documenting a Claude-powered operating system that automates inquiries, lead management, itinerary generation, and client onboarding.

**Live demo:** [yousufalidev.github.io/kyoto-automation](https://yousufalidev.github.io/kyoto-automation)

---

## What This Is

This is a single-page HTML proposal document presented to a prospective client before a 30-minute Upwork consultation. It outlines a full business automation system built around Claude AI, Make.com, respond.io, Notion, Stripe, and Google Workspace.

The site covers:

- System architecture — three-layer automation diagram (inbound → Claude AI brain → outputs)
- 4-phase build roadmap with week-by-week deliverables
- Full tool stack with alternatives and rationale (e.g. respond.io vs ManyChat)
- 8 automated workflows documented step by step
- First 3 priorities with clear reasoning

---

## File Structure

```
kyoto-automation/
├── index.html      # All content and markup
├── styles.css      # All styling — layout, components, responsive
├── app.js          # Accordion toggle, smooth scroll, active nav highlight
├── README.md       # This file
├── LICENSE.md      # MIT License
└── .gitignore      # Standard web project ignores
```

---

## Deployment

Hosted on **GitHub Pages** — no build step, no dependencies, no frameworks.

To deploy your own copy:

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Save — your site will be live at `https://yourusername.github.io/kyoto-automation`

---

## Tech Stack

Pure HTML, CSS, and vanilla JavaScript. No frameworks, no npm, no build tools. Intentionally lightweight so the site loads instantly and is easy to hand off or maintain.

- **HTML** — semantic markup, accessible accordion headers with keyboard support
- **CSS** — custom properties (CSS variables), responsive grid, no external libraries
- **JS** — accordion toggle, scroll-based active nav highlight, smooth scroll with sticky header offset

---

## Business Context

The client runs a growing Kyoto private experience business focused on hidden Kyoto, local culture, and meaningful travel. Inquiries come through Instagram DMs and WhatsApp. The goal is to build automation that handles the repetitive 80% — so the owner can focus on content creation and client experiences.

Key tools in the proposed stack:

| Tool | Role |
|---|---|
| Claude Projects | AI brain — knowledge base, FAQ logic, itinerary drafting |
| Make.com | Automation layer connecting all platforms |
| respond.io | Unified inbox replacing ManyChat (AI-native) |
| Notion | Lead CRM and SOP documentation |
| Stripe | Payment collection with automated triggers |
| Google Workspace | Email workflows and document storage |

---

## License

MIT — see [LICENSE.md](LICENSE.md)
