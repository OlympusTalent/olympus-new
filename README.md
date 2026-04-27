# Olympus Talent — Marketing Site (v0.2)

> Culture First. Every Hire. Every Time.

Dark editorial Next.js homepage for Olympus Talent. Aligned to the established brand: Greek-meander logo, violet → cyan signature gradient, per-tier owned gradients, trademarked product names, and the dual-funnel (client / candidate) entry pattern.

---

## 1. Two ways to view it

### A. Instant preview (no install)
Open `preview.html` directly in any modern browser. Everything's inline — Tailwind runtime + Google Fonts from CDN. Zero setup. Great for sharing, screenshots, and quick iteration.

### B. Full Next.js dev server
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

---

## 2. What's in the repo

```
olympus-talent/
├── app/
│   ├── layout.tsx              # fonts + shell
│   ├── page.tsx                # homepage composition
│   └── globals.css             # design tokens, button/gradient/meander
├── components/
│   ├── logo-mark.tsx           # circular Greek-key + mountain SVG
│   ├── site-nav.tsx
│   ├── hero-culture-first.tsx  # "Culture First. Every Hire. Every Time."
│   ├── trust-strip.tsx         # 140+ countries marquee
│   ├── dual-funnel.tsx         # client vs. candidate split
│   ├── platform-grid.tsx       # FIRE Protocol™ + 5 other systems
│   ├── metrics-band.tsx        # 140+ / 2 wks / 98% / 1,247
│   ├── tier-ribbon.tsx         # Ignite → Olympus Black
│   ├── cta-band.tsx
│   └── site-footer.tsx
├── DESIGN_SYSTEM.md            # v0.2 — full design language
├── preview.html                # standalone, no-install preview
├── tailwind.config.ts          # ot.* color tokens + tier gradients
├── next.config.mjs
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```

---

## 3. Brand lock-ins (don't drift)

- **Tagline:** "Culture First. Every Hire. Every Time." — verbatim.
- **Trademarks (first use per page gets ™):** HireIQ™, FIRE Protocol™, Olympus Talent Hub™, Olympus Talent Method™.
- **Logo:** monochrome only. Never apply the signature gradient to the mark itself.
- **Signature gradient:** `#8B5CF6 → #7C3AED → #22D3EE` @ 135°. Reserved for primary CTAs and the hero headline.
- **Tier gradients:** Ignite (pink→purple), Ascend (teal→cyan), Velocity (blue→indigo), Titan (amber→orange), Olympus Black (silver). Each tier owns its own.
- **Proof line:** "Trusted by enterprises across 140+ countries."
- **Reassurance line:** "Two weeks to transformation. No credit card required."

See `DESIGN_SYSTEM.md` for the full design language — colour tokens, type scale, motion, signature elements, copy rules.

---

## 4. What's shipped vs. next

**Shipped (v0.2):**
- Homepage — nav, hero, trust strip, dual funnel, platform grid, metrics, tier ribbon, CTA, footer.
- Design system doc + tailwind tokens + component library.
- Standalone preview.html.

**Next (per the platform brief):**
1. `/vacancies` — job board with advanced search, filters, AI "jobs you may like".
2. `/vacancies/[id]` — role page with salary transparency, FIRE Protocol™ preview, 1-click apply.
3. `/candidates` — portal shell (profile, saved, tracking, alerts).
4. `/clients` — hiring diagnostic tool, time-to-hire calculator, service pages per niche (payroll, HR, finance, tech).
5. `/pricing` — full tier breakdowns + ROI comparison.
6. `/insights` — The Signal articles, reports, tools.
7. `/global` — map visual, delivery hubs (Singapore, Johannesburg, Mumbai).
8. Candidate/consultant dashboards (the screens in the Lovable preview).

---

## 5. Viewing the preview

From the folder: open `preview.html` in Chrome/Safari/Firefox. Or use a one-line static server from the terminal:

```bash
cd "Website design/olympus-talent"
python3 -m http.server 5050
# then open http://localhost:5050/preview.html
```
