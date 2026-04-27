# Olympus Talent — Design System v0.3

> "Most companies don't have a hiring problem. They have a decision problem."

A dark, editorial platform with a violet→cyan signature gradient, glassmorphism cards, Greek-meander detailing, and a data-dashboard-embedded-in-marketing aesthetic. Positioned as decision infrastructure, not recruitment.

---

## 1. Logo

Simplified OT monogram in a circle for nav, with OLYMPUS/TALENT wordmark stacked beside it.

Usage:
- Circle: 36px, 1px border `ot-smoke/40`, "OT" in 10px bold, tracking 0.15em.
- Wordmark: OLYMPUS 11px, tracking 0.28em, bold. TALENT 8px, tracking 0.36em, smoke.
- Greek meander pattern retained as decorative section breaks (not in logo).

---

## 2. Colour

### Surfaces
| Token | Hex | Use |
|---|---|---|
| `ot-obsidian` | `#070712` | Page background, deep void. |
| `ot-midnight` | `#0C0C1A` | Alt section bg (protocols, intelligence). |
| `ot-graphite` | `#12121F` | Card surface (grad-border bg). |
| `ot-carbon`   | `#18182A` | Elevated surface, tags. |
| `ot-steel`    | `#232338` | Borders, dividers. |
| `ot-fog`      | `#2E2E4A` | Hover borders. |

### Text
| Token | Hex | Use |
|---|---|---|
| `ot-bone` | `#F2F2F7` | Primary. |
| `ot-ash`  | `#B4B4C4` | Secondary / body. |
| `ot-smoke`| `#7A7A90` | Tertiary / labels / eyebrows. |
| `ot-iron` | `#4A4A60` | Disabled. |

### Accents
| Token | Hex | Use |
|---|---|---|
| `ot-violet`  | `#8B5CF6` | Primary accent, eyebrows, OS node borders. |
| `ot-purple`  | `#7C3AED` | Gradient mid-stop. |
| `ot-cyan`    | `#22D3EE` | Secondary accent, Tenmon layer. |
| `ot-signal`  | `#4ADE80` | Positive states, outcomes, Chimon layer. |
| `ot-crimson` | `#EF4444` | Problems, critical. |
| `ot-warn`    | `#F59E0B` | Urgent, Yōnin layer. |
| `ot-magenta` | `#EC4899` | Accent, Innin layer. |

### Signature gradient (primary action, brand moments)
```css
background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 45%, #22D3EE 100%);
```

### Gradient text
```css
background: linear-gradient(135deg, #E9D5FF 0%, #A78BFA 40%, #22D3EE 100%);
-webkit-background-clip: text; background-clip: text; color: transparent;
```

---

## 3. Typography

| Family | Role |
|---|---|
| **Inter** | Primary display + body. Black weight for hero headlines. |
| **Instrument Serif** | Reframe section, italic editorial accents, specialism subtitles. |
| **IBM Plex Mono** | Eyebrow labels, data stats, tags, trademark lines. |

### Scale (desktop)
| Token | Size | Line | Use |
|---|---|---|---|
| Hero | clamp(2.8rem,6.5vw,5.5rem) | 0.95 | Main hero. |
| Section head | clamp(2rem,4.5vw,3.5rem) | 1.02 | Section heroes. |
| Reframe | clamp(2.5rem,6vw,5rem) | 1.05 | Serif reframe. |
| Card title | 1.25rem | 1.2 | Card headings. |
| Body | 0.875rem | relaxed | Card body, descriptions. |
| Eyebrow | 0.6875rem | — | Mono labels, uppercase, tracking 0.18em. |
| Micro | 0.625rem | — | Tags, badges, tracking 0.14em+. |

---

## 4. Card System

### Glass card (`.glass`)
Translucent bg `rgba(18,18,31,0.65)`, backdrop-blur 24px, 1px violet/12% border, 16px radius. Used for stat cards, cohort stats.

### Glass strong (`.glass-strong`)
Heavier: bg 0.8 opacity, blur 32px, violet/20% border. Used for engagement profile, OS layer cards.

### Gradient-border card (`.grad-border`)
Solid `ot-graphite` bg, gradient border via mask-composite (violet→cyan at 135°). Used for problem cards, protocol cards, specialisms, case studies.

### Data card hover (`.data-card`)
translateY(-3px) + border-color shift on hover. Applied to all interactive cards.

---

## 5. Component Architecture (v0.3)

| Component | Section | Notes |
|---|---|---|
| `StickyCTABar` | Fixed bottom | Shows after scrolling past hero. "use client". |
| `SiteNav` | Sticky top | OT monogram, 5 nav links, "Speak to Olympus" CTA. |
| `HeroDecision` | Hero | Decision problem headline, data strip (4 glass cards). |
| `TheProblem` | 01 | 4 grad-border cards with progress bars. Crimson section. |
| `TheReframe` | 02 | Centered serif italic + gradient text. Meander divider. |
| `OlympusOS` | 03 | 5-column grid, Kanji nodes with pulse-ring animation. |
| `Protocols` | 04 | 4 protocol cards with numbered badges and tags. Midnight bg. |
| `Specialisms` | 05 | 4 vertical cards with live stats and explore links. |
| `IntelligenceDashboard` | 06 | Engagement profile card + 4 cohort stat cards. Midnight bg. |
| `ProofSection` | 07 | 3 case study cards (Problem/Intervention/Outcome). |
| `CtaFinal` | CTA | Hero-glow bg, meander top/bottom, dual CTAs. |
| `SiteFooter` | Footer | 4-column grid, trademark line. |

---

## 6. Motion

- Default easing: `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo).
- Default duration: 420ms.
- Hover lifts: -2px/-3px translateY + border shift.
- Gradient CTAs: background-position shift on hover.
- OS nodes: `pulse-ring` animation, 3s ease infinite, staggered delays (0.6s apart).
- Scroll reveal: opacity 0→1, translateY 16px→0, 600ms, staggered 80ms per grid child.
- Sticky CTA: translateY(100%→0) on scroll trigger, 500ms.

---

## 7. Signature Elements

1. **Greek-key meander** — Repeating SVG pattern, stroke `ot-steel`, 14px tall. Used as section breaks in reframe and CTA.
2. **Gradient CTA button** — Violet→cyan, 8px radius, dark text, hover lift + glow.
3. **Ghost button** — Transparent, 1px steel border, hover: violet border + subtle bg.
4. **Mono eyebrow** — `01 / The Problem` style, IBM Plex Mono, uppercase, 0.18em tracking.
5. **Progress bar** — 4px tall, gradient fill (violet→magenta default, custom per card).
6. **Hero glow** — Stacked radial gradients (violet, cyan, purple) with 50px blur.
7. **Section glow** — Centered radial violet gradient, 800px wide, 60px blur.
8. **Engagement profile card** — RLX-inspired delegate card with role data, tags, strategic priorities.

---

## 8. Copy Rules

- **Positioning verbatim:** "Most companies don't have a hiring problem. They have a decision problem."
- **Descriptor:** "Decision infrastructure for hiring across Payroll, HR, IT & Finance."
- Product names always get ™ on first use: HireIQ™, FIRE Protocol™, Olympus Talent Hub™, Olympus Talent Method™, Olympus Talent OS™, Olympus Hiring Doctrine™.
- OS layer names are proper nouns (Seishin, Tenmon, Chimon, Yōnin, Innin).
- Protocol names are proper nouns (Culture-First Protocol, Strategic Alignment Protocol, FIRE Protocol™, Outcome Protocol).
- **Never use:** "Submit CV", "Apply now", "Get in touch", generic recruitment language.
- **Use instead:** "Build a Better Hiring System", "Speak to Olympus", "Start a Strategic Hiring Conversation", "Access the Talent Market Properly".
- **Microcopy:** "This is not a sales call. It's a diagnostic."

---

## 9. What We Do Not Do

- No stock photography of smiling suits.
- No rainbow gradients on body text — only hero gradient line and specific brand moments.
- No emoji in UI.
- No "Powered by AI" lorem — we name the system (HireIQ™, FIRE Protocol™, Olympus Talent OS™).
- No "We're different" or "We're not like other recruiters" — let the positioning and data speak.
- No percentage-fee framing — subscription model is the default.
