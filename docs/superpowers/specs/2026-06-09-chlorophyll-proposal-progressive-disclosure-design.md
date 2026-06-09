# Chlorophyll Proposal Site — Progressive-Disclosure Redesign

**Date:** 2026-06-09
**Source content:** `Proposal Note_ Strategy Intelligence Roadmap for Chlorophyll.md` (12 sections)

## Context

The live site (`src/`, a Next.js app) currently presents the proposal as a
**440px phone-width document** with four sections: Framing, Strategy track,
Technical approach, Scaling. The newer proposal note is ~3× richer and adds
material the site does not yet show: the proprietary IP frameworks, IP
sovereignty/data-protection, Yuvabe credibility, commercials/pricing, the
recommended first engagement, and deep per-phase detail.

We want to (a) fold the new content in, (b) restructure it as a presenter-led
walkthrough with **progressive disclosure** — a tight top level, with detail
revealed on demand — and (c) make it a **real desktop site** that also works
responsively on mobile.

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Primary audience / use | **Presenter-led** walkthrough to Chlorophyll leadership |
| Pricing on the site | **Gated deep-dive** — revealed on demand, not visible on first scroll |
| Deep-dive mechanism | **Overlay** — centered modal (desktop) ↔ bottom-sheet (mobile) |
| Layout priority | **Desktop-first** (presentation surface); collapses responsively to mobile |

## Tone & voice (governing constraint)

We already have a relationship with Chlorophyll. **This is not a pitch and must
not feel like one.** The site explains *how we work* and *where it would help
them* — it never sells overtly or pushes. Every section is reviewed against this.

How to apply:
- **No urgency or scarcity.** No countdowns, no "act now." The early-commitment
  discount is stated quietly as a fact, not used as pressure.
- **No hype or bragging.** "Why Yuvabe" presents Quilt/KittyKat as *relevant
  experience and how we've approached similar problems* — not credentials meant
  to impress.
- **Collaborative, explanatory voice.** "Here's how we'd explore this together"
  rather than "what we will deliver" or "the ask."
- **Soften pitch cues.** Tone down loud badges/CTAs (e.g. the "STARTING" and
  rocket "First launch" badges); calm labels over salesy ones.
- **Commercials stay factual and low-key** — framed as "how we'd structure
  working together," still gated behind the reveal, never the headline.
- **Section titles avoid pitch framing:** prefer "Where Chlorophyll is today"
  over "Why now"; "How we'd work / relevant experience" over "Why Yuvabe";
  "How we'd start" over "First engagement / the ask."

## Goals

- One logical narrative covering all current + new content (explanatory, not a pitch — see Tone & voice).
- Top level reads in minutes; every heavy detail block is one tap behind an overlay.
- Desktop is the designed/QA'd reference; mobile is a clean responsive collapse.
- Copy lives in one place so the still-changing note is easy to edit.

## Non-goals

- No CMS / no auth on the pricing gate (it is presentation control, not security —
  the deploy is a public Vercel URL, so pricing is collapsed-by-default, not secret).
- No new runtime dependencies.
- No content rewriting beyond restructuring; wording comes from the note.

## Architecture

### Responsive strategy — separate content from presentation
- Section *data* lives in a new **`src/components/content.ts`** (arrays/objects).
  Several sections already do this (buckets, phases); extend the pattern to all.
- Each section is **one component** that renders the desktop layout as the
  reference and collapses to single-column on small screens. Sections whose
  layouts genuinely diverge (the **phase timeline**: horizontal on desktop →
  vertical stack on mobile) branch internally rather than duplicating content.
- **`Doc` shell** (`src/components/ui.tsx`): wide centered container
  (`max-w-6xl` + section grid/padding) on desktop; phone-width single column on
  mobile. Replaces the fixed `max-w-[440px]`.

### Deep-dive system — `<DeepDive>`
A single reusable overlay primitive opened by any "go deeper" trigger.
- **Desktop (primary):** centered modal, dimmed backdrop.
- **Mobile:** bottom-sheet sliding up (~90% height).
- Close via ✕, Esc, or backdrop click. Accessible: `role="dialog"`,
  `aria-modal`, focus trap, body scroll-lock.
- Body is `children` — each section supplies its own deep-dive content.
- Built with native `<dialog>` or a small custom hook; no new deps.

### Navigation — `<NavRail>`
Nine sections is too many for the current label pills.
- **Desktop (primary):** fixed **vertical nav rail** on the right with section labels.
- **Mobile:** collapses to the floating bottom pill (numbered dots; labels on tap).
- Active-section tracking reuses the existing `IntersectionObserver` from
  `ProgressDots.tsx`.

## Content arc — top level vs. deep-dive

| # | Section (id) | Top level (always visible) | Deep-dive (overlay) | Source |
|---|--------------|----------------------------|----------------------|--------|
| 1 | Where Chlorophyll is today (`s1`) | 27 yrs · 400 brands; knowledge worth making easier to access & reuse | — | Note §2 |
| 2 | Framing (`s2`) | 3 areas × 2 lenses, Strategy first | — | current S1 / Note §1,4 |
| 3 | Your IP (`s3`) | anthrop™ · wholon™ · ideantity™ · litmosi™ + one-liners | "What discovery clarifies" table | Note §3 |
| 4 | Roadmap (`s4`) | 5-phase horizontal timeline, 12–16 wks | Per phase: activities, audit methodology, outputs, business outcomes | current S2 / Note §5, Phase 1–5 |
| 5 | How it works (`s5`) | knowledge-platform architecture (dark) | — | current S4 / Note §7 platform concepts |
| 6 | IP sovereignty (`s6`) | 6 principles (ownership, no external training, auditability, human approval, controlled access, client sensitivity) | — | Note §6 |
| 7 | How we work (`s7`) | Two parallels at a glance + "amplify, don't replace" philosophy | **Parallel 1 (Quilt)** and **Parallel 2 (KittyKat)** in full | Note §7 (law-firm analogy removed) |
| 8 | Scaling (`s8`) | how the model extends to Marketing & Creative later | — | current S5 / Note §9 |
| 9 | How we'd start (`s9`) | a suggested way to begin (Phase 1+2) | **Reveal commercials** (gated, low-key) → ₹10L/mo → 10% early-commit → ₹9L, 4-role team, notes | Note §8, §10 |

### Section 7 detail (Why Yuvabe)
- **Top level:** "We've built this shape of system before."
  - Parallel 1 — **Quilt**: market intelligence → the proposed Strategy Intelligence Platform.
  - Parallel 2 — **KittyKat**: brand knowledge → the strategy domain.
  - Philosophy: AI preserves/organizes/amplifies institutional knowledge; it does not replace strategic expertise.
- **Deep-dive (verbatim from Note §7):**
  - **Quilt** combines: multi-source research, knowledge organization, pattern
    discovery, semantic retrieval, insight generation → applied to Chlorophyll's
    frameworks, methodologies, historical engagements, strategic thinking.
  - **KittyKat** included: brand memory systems, asset intelligence, knowledge
    retrieval, context-aware recommendations, organizational knowledge reuse →
    extended into strategy as: strategic memory, strategic cognition,
    institutional knowledge preservation, pattern recognition across
    engagements, strategy decision support.
- **Explicitly removed:** the "comparable pattern from adjacent fields" /
  law-firm precedent-library analogy.

## Components & files

**New**
- `src/components/content.ts` — all section + deep-dive copy.
- `src/components/DeepDive.tsx` — overlay primitive (modal ↔ sheet).
- `src/components/NavRail.tsx` — desktop rail (absorbs/extends `ProgressDots`).
- Section components: `WhyNow`, `SectionIP`, `Sovereignty`, `WhyYuvabe`, `Engagement`.

**Modified**
- `src/app/page.tsx` — new section order (s1–s9), `NavRail` instead of `ProgressDots`.
- `src/components/ui.tsx` — responsive `Doc` shell; `Section` desktop padding/grid.
- `src/components/Section1/2/4/5.tsx` — desktop layouts; timeline horizontal on desktop.
- Reuse `src/components/icons.tsx`; add icons as needed.

## Build notes

- **Next.js caveat (`AGENTS.md`):** this Next.js has breaking changes — read the
  relevant guide in `node_modules/next/dist/docs/` before writing component code.
- No new dependencies; overlay + focus management is native/custom.
- Tailwind tokens/fonts already exist (`globals.css`, `fonts.ts`).

## Verification

1. `npm run dev`.
2. **Desktop width:** walk all 9 sections in order; open every deep-dive
   (IP table, each of the 5 phases, both Yuvabe parallels, commercials); confirm
   modal centering, Esc/backdrop close, focus trap, scroll-lock.
3. Confirm **commercials stay hidden** until "Reveal commercials" is triggered.
4. **Mobile width** (DevTools responsive): confirm single-column collapse, the
   horizontal timeline becomes a vertical stack, deep-dives become bottom-sheets,
   nav rail becomes the bottom pill.
5. `npm run build` passes (lint + types).
