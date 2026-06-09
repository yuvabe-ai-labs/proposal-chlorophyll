# Chlorophyll Proposal Site — Progressive-Disclosure Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the proposal site as a desktop-first, presenter-led walkthrough of 7 sections, with heavy detail behind on-demand overlays (centered modal on desktop ↔ bottom-sheet on mobile), gated commercials, and an explanatory (non-pitch) tone.

**Architecture:** Content is centralized in `src/components/content.ts`; each section is one responsive component (desktop layout as reference, collapsing to a single mobile column). A single `<DeepDive>` overlay primitive (native `<dialog>`) powers every "go deeper" and the gated commercials. A `<NavRail>` (desktop right rail ↔ mobile bottom pill) tracks the active section via the existing `IntersectionObserver`.

**Tech Stack:** Next.js 16.2.7 (App Router), React 19.2.4, Tailwind CSS v4. No new dependencies.

**Verification approach (read this):** The repo has **no test harness** and the work is presentational, so we do **not** add unit tests (YAGNI). Each task is verified by `npm run build` (TypeScript + lint via `eslint-config-next`) plus a **visual check** against `npm run dev`. The three behavioral pieces — DeepDive (open/Esc/backdrop/scroll-lock), NavRail (active tracking), commercials gating — are verified by driving the running app (browser/Playwright MCP or manual). Commit after each task.

**Source of truth for copy:** `Proposal Note_ Strategy Intelligence Roadmap for Chlorophyll.md` (repo root) and the design spec `docs/superpowers/specs/2026-06-09-chlorophyll-proposal-progressive-disclosure-design.md`.

**Tone constraint (applies to every section):** Not a pitch. No urgency/scarcity, no hype/bragging, collaborative voice, calm labels, commercials factual & low-key. See the spec's "Tone & voice" section.

---

## File structure

**Create**
- `src/components/content.ts` — all section + deep-dive copy/data (one source of truth).
- `src/components/DeepDive.tsx` — overlay primitive (modal ↔ sheet), client component.
- `src/components/NavRail.tsx` — desktop rail ↔ mobile pill, client component (supersedes `ProgressDots`).
- `src/components/WhyNow.tsx` — section 1.
- `src/components/SectionIP.tsx` — section 3 (merged IP frameworks + sovereignty).
- `src/components/Pieces.tsx` — section 6 (Quilt/KittyKat).
- `src/components/Engagement.tsx` — section 7 (Phase 1+2, modular closing line, gated commercials).

**Modify**
- `src/app/page.tsx` — assemble s1–s7 in order; use `NavRail`.
- `src/components/ui.tsx` — responsive `Doc` shell + `Section` desktop padding/grid.
- `src/components/Section1.tsx` — becomes **Framing (s2)**, desktop layout.
- `src/components/Section2.tsx` — becomes **Roadmap (s4)**, horizontal desktop timeline + per-phase deep-dives.
- `src/components/Section4.tsx` — becomes **How it works (s5)**, desktop architecture layout (keep dark).
- `src/components/icons.tsx` — add any new icons used.

**Remove**
- `src/components/Section5.tsx` (old Scaling) — content reduced to a one-line "modular, no lock-in" note inside `Engagement`.
- `src/components/ProgressDots.tsx` — replaced by `NavRail` (delete after NavRail lands).

**Section id ↔ component map (final):**
`s1` WhyNow · `s2` Section1(Framing) · `s3` SectionIP · `s4` Section2(Roadmap) · `s5` Section4(HowItWorks) · `s6` Pieces · `s7` Engagement.

---

## Task 0: Pre-flight

**Files:** none (read-only + baseline).

- [ ] **Step 1: Read the Next.js 16 guidance** (per `AGENTS.md` — this Next.js differs from training data).

Read the App Router + components guides under `node_modules/next/dist/docs/`. Confirm: `"use client"` directive usage, metadata, and that `<dialog>`/portals work in client components. Note anything that changes the code below.

- [ ] **Step 2: Baseline build + dev run**

Run: `npm run build`
Expected: succeeds (current site compiles).
Run: `npm run dev`, open the printed URL.
Expected: current 4-section site renders.

- [ ] **Step 3: Commit nothing** (baseline only). Proceed.

---

## Task 1: Centralized content (`content.ts`)

**Files:**
- Create: `src/components/content.ts`

- [ ] **Step 1: Create the content module**

Populate from the proposal note. Shape below; fill every array with the note's actual copy (Phase 1–5 detail from Note "Phase 1..5" blocks; IP table from §3; sovereignty from §6; parallels from §7; commercials from §8).

```ts
// src/components/content.ts
// Single source of truth for all proposal copy. Edit here, not in components.

export type Phase = {
  id: string;            // "p1".."p5"
  n: string;             // "Phase 1"
  timeline: string;      // "2–3 weeks"
  title: string;         // "Discovery"
  focus: string;         // one-line summary (top level)
  outcome: string;       // outcome line
  launch?: boolean;      // Phase 3 highlight
  detail: {              // deep-dive body
    purpose: string;
    activities?: { activity: string; what: string }[]; // Phase 1 discovery process
    audit?: { area: string; inspect: string; why: string }[]; // Phase 1 audit methodology
    outputs: string[];
    business: string[];  // business outcomes
  };
};

export const phases: Phase[] = [
  // …5 entries, copy from Note Phase 1–5. Phase 1 fills activities + audit; others omit them.
];

export const ipFrameworks: { name: string; clarifies: string }[] = [
  { name: "anthrop™", clarifies: "Where it enters the strategy process, what inputs it depends on, and how it supports brand understanding" },
  { name: "wholon™",  clarifies: "How it shapes synthesis, strategic interpretation, and the move from parts to a whole brand view" },
  { name: "ideantity™", clarifies: "How it contributes to identity, differentiation, naming, positioning, or brand meaning" },
  { name: "litmosi™", clarifies: "How it supports language, expression, marketing, messaging, or creative direction" },
];

export const sovereignty: { principle: string; meaning: string }[] = [
  { principle: "Ownership", meaning: "Chlorophyll owns all source material, derived structures, and outputs" },
  { principle: "Controlled access", meaning: "Different teams can have different permission levels where needed" },
  { principle: "No external training", meaning: "Chlorophyll data should not be used to train external models" },
  { principle: "Auditability", meaning: "Usage, retrieval, and changes should be traceable" },
  { principle: "Human approval", meaning: "Strategists remain responsible for client-facing outputs" },
  { principle: "Client sensitivity", meaning: "Confidential client material is clearly marked, permissioned, and protected" },
];

export const parallels = {
  quilt: {
    label: "Research intelligence",
    name: "Quilt",
    summary: "Turning fragmented, multi-source information into structured, retrievable insight.",
    combines: ["Multi-source research", "Knowledge organization", "Pattern discovery", "Semantic retrieval", "Insight generation"],
    appliedTo: "Chlorophyll's frameworks, methodologies, historical engagements, and strategic thinking.",
  },
  kittykat: {
    label: "Brand / asset knowledge",
    name: "KittyKat",
    summary: "Capturing brand & asset knowledge with context-aware recall and reuse.",
    included: ["Brand memory systems", "Asset intelligence", "Knowledge retrieval", "Context-aware recommendations", "Organizational knowledge reuse"],
    extendedTo: ["Strategic memory", "Strategic cognition", "Institutional knowledge preservation", "Pattern recognition across engagements", "Strategy decision support"],
  },
};

export const commercials = {
  monthly: "₹10,00,000",
  discountedMonthly: "₹9,00,000",
  discountNote: "10% early-commitment discount (within 14 days)",
  team: [
    { role: "AI & Product Lead", resp: "AI strategy, platform architecture, roadmap, knowledge-system design" },
    { role: "Product & Delivery Lead", resp: "Product design, workflow design, delivery oversight, stakeholder alignment" },
    { role: "AI / Full-Stack Engineer", resp: "AI implementation, backend services, integrations, platform development" },
    { role: "AI / Full-Stack Engineer", resp: "Frontend development, workflow implementation, platform features" },
  ],
  notes: [
    "Senior-led engagement.",
    "Includes strategic consulting, product design, AI architecture, and implementation.",
    "Third-party software, model, hosting, or infrastructure costs are billed separately if applicable.",
    "Future support and enhancement engagements can be scoped separately after launch.",
  ],
};
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors (pure data module).

- [ ] **Step 3: Commit**

```bash
git add src/components/content.ts
git commit -m "feat: add centralized proposal content module"
```

---

## Task 2: Responsive `Doc` shell + `Section` (ui.tsx)

**Files:**
- Modify: `src/components/ui.tsx` (`Doc`, `Section`)

- [ ] **Step 1: Make `Doc` responsive (desktop-first wide, mobile column)**

Replace the `Doc` body. Phone column stays at small widths; widens to a centered container on desktop with a soft page background.

```tsx
export function Doc({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[460px] bg-neutral-25 shadow-[0_0_60px_rgba(11,15,25,0.10)]
                    md:max-w-3xl lg:max-w-5xl lg:shadow-[0_0_120px_rgba(11,15,25,0.08)]">
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Give `Section` desktop padding/width**

Update `Section` so content breathes on desktop while staying tight on mobile. Keep the `night`/`first` props.

```tsx
className={`relative scroll-mt-24 px-5 pt-[34px] pb-9
            md:px-10 md:pt-14 md:pb-16 lg:px-16 lg:pt-20 lg:pb-24
            ${first ? "" : "border-t border-neutral-100"}
            ${night ? "bg-night text-neutral-25" : ""}`}
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: succeeds.
Visual: `npm run dev` → existing sections now span wider on a desktop window, single column on a narrow window.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui.tsx
git commit -m "feat: responsive Doc shell and Section padding (desktop-first)"
```

---

## Task 3: `DeepDive` overlay primitive

**Files:**
- Create: `src/components/DeepDive.tsx`

Uses native `<dialog>` for free Esc + focus-trap + inert background; styled as a bottom-sheet on mobile and centered modal on desktop. Adds body scroll-lock and backdrop-click close.

- [ ] **Step 1: Implement `DeepDive`**

```tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "./icons"; // add an X icon in Task 3.5 if missing

export function DeepDive({
  label,
  title,
  children,
  trigger,
}: {
  label: string;                 // accessible label / default trigger text
  title: string;                 // heading shown in the panel
  children: ReactNode;           // deep-dive body
  trigger?: (open: () => void) => ReactNode; // optional custom trigger
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => { ref.current?.showModal(); setOpen(true); };
  const close = () => { ref.current?.close(); setOpen(false); };

  // Body scroll-lock while open (dialog inerts background but some browsers still scroll body).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {trigger ? (
        trigger(show)
      ) : (
        <button
          type="button"
          onClick={show}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-purple-500 hover:underline"
        >
          {label}
          <span aria-hidden>→</span>
        </button>
      )}

      <dialog
        ref={ref}
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === ref.current) close(); }}
        className="m-0 w-full max-w-none bg-transparent p-0 backdrop:bg-black/45 backdrop:backdrop-blur-sm
                   fixed inset-x-0 bottom-0 top-auto
                   md:inset-0 md:m-auto md:h-fit md:w-[min(40rem,92vw)]"
      >
        <div className="max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white p-5 shadow-[0_-10px_40px_rgba(11,15,25,0.25)]
                        md:max-h-[85vh] md:rounded-3xl md:p-8 md:shadow-2xl">
          <div className="mb-5 flex items-start justify-between gap-4">
            <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em] text-neutral-900 md:text-[24px]">
              {title}
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-9 w-9 flex-none place-items-center rounded-full border border-neutral-200 text-neutral-500 hover:bg-neutral-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
```

- [ ] **Step 2 (3.5): Ensure an `X` icon exists**

Check `src/components/icons.tsx` for a close/X icon. If absent, add one following the existing icon pattern (same `SVGProps` signature, `currentColor`, `strokeWidth`).

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Verify behavior** (temporary harness)

Temporarily drop `<DeepDive label="Go deeper" title="Test">…</DeepDive>` into `page.tsx`, run `npm run dev`, then confirm via the running app:
- Desktop window: opens centered, dim backdrop, Esc closes, click-outside closes, background does not scroll.
- Narrow window: opens as a bottom sheet pinned to the bottom edge.
Remove the temporary usage after confirming.

- [ ] **Step 5: Commit**

```bash
git add src/components/DeepDive.tsx src/components/icons.tsx
git commit -m "feat: DeepDive overlay primitive (modal on desktop, sheet on mobile)"
```

---

## Task 4: `NavRail` + page wiring

**Files:**
- Create: `src/components/NavRail.tsx`
- Modify: `src/app/page.tsx` (swap `ProgressDots` → `NavRail`)
- (Later, Task 12) Delete: `src/components/ProgressDots.tsx`

- [ ] **Step 1: Implement `NavRail`** (reuses the `IntersectionObserver` pattern from `ProgressDots.tsx`)

```tsx
"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "s1", n: "1", label: "Today" },
  { id: "s2", n: "2", label: "Framing" },
  { id: "s3", n: "3", label: "Your IP" },
  { id: "s4", n: "4", label: "Roadmap" },
  { id: "s5", n: "5", label: "How it works" },
  { id: "s6", n: "6", label: "Our pieces" },
  { id: "s7", n: "7", label: "How we'd start" },
] as const;

export function NavRail() {
  const [active, setActive] = useState<string>("s1");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActive(e.target.id); },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: vertical right rail */}
      <nav
        aria-label="Sections"
        className="fixed right-6 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-1 lg:flex"
      >
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={on ? "true" : undefined}
              className={`group flex items-center justify-end gap-2.5 rounded-pill py-1.5 pl-3 pr-1 text-[12.5px] font-medium transition-colors ${
                on ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              <span className={`whitespace-nowrap transition-opacity ${on ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                {s.label}
              </span>
              <span className={`h-1.5 w-1.5 flex-none rounded-full transition-all ${on ? "scale-125 bg-purple-500" : "bg-neutral-300"}`} />
            </a>
          );
        })}
      </nav>

      {/* Mobile: floating bottom pill of numbered dots */}
      <nav
        aria-label="Sections"
        className="fixed bottom-[calc(14px+env(safe-area-inset-bottom))] left-1/2 z-[60] -translate-x-1/2 lg:hidden"
      >
        <div className="flex items-center gap-1 rounded-pill border border-neutral-200/70 bg-[rgba(252,252,253,0.85)] p-1.5 shadow-[0_8px_30px_rgba(11,15,25,0.18)] backdrop-blur-[16px]">
          {SECTIONS.map((s) => {
            const on = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-label={`${s.n}. ${s.label}`}
                aria-current={on ? "true" : undefined}
                className={`grid h-8 w-8 place-items-center rounded-pill text-[12px] font-semibold transition-all ${
                  on ? "bg-purple-500 text-white" : "text-neutral-500 active:bg-neutral-100"
                }`}
              >
                {s.n}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
```

- [ ] **Step 2: Wire into `page.tsx`** (interim — full section order arrives in Task 12)

Replace the `ProgressDots` import/usage with `NavRail`. Leave existing sections for now so the app keeps rendering.

- [ ] **Step 3: Verify**

Run: `npm run build` → succeeds.
Visual (`npm run dev`): desktop window shows the right rail; active label highlights as you scroll. Narrow window shows the bottom pill with 7 dots; active dot tracks scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/NavRail.tsx src/app/page.tsx
git commit -m "feat: NavRail (desktop rail + mobile pill) replacing ProgressDots"
```

---

## Task 5: Section 1 — `WhyNow` (s1)

**Files:**
- Create: `src/components/WhyNow.tsx`

**Tone:** shared opportunity, NO urgency/risk wording (see spec). Reuse `Section`, `SectionHeader`, `Hl`.

- [ ] **Step 1: Build the section**

`id="s1"`, `first`. Header eyebrow e.g. "AI transformation · Context". Title calm, e.g. "Making 27 years of strategy easier to reach." Body: 27 years across 400 brands lives in people, decks, templates, methods — a shared opportunity to make it easier to access, apply, and reuse, with strategist judgment kept central. Add a small stat row (27 years / 400 brands) using existing card styles from `Section1.tsx` (the `CARD` constant pattern). Desktop: stats sit in a 2- or 3-up grid (`md:grid-cols-3`); mobile stacks.

- [ ] **Step 2: Verify** — `npm run build` succeeds; visually the copy reads as observation, not a warning. Grep the file to confirm none of: "risk", "now is the time", "urgent", "don't fall behind".

- [ ] **Step 3: Commit**

```bash
git add src/components/WhyNow.tsx
git commit -m "feat: section 1 WhyNow (shared-opportunity framing)"
```

---

## Task 6: Section 2 — Framing (adapt `Section1.tsx` → s2)

**Files:**
- Modify: `src/components/Section1.tsx`

- [ ] **Step 1: Re-key + desktop layout**

Change `id="s1"` → `id="s2"`, header num `01` → `02`, drop `first`. Keep the 3 buckets + 2 lenses content. Desktop: render the 3 bucket cards in a `lg:grid-cols-3` grid (instead of stacked), and the two lens cards side-by-side (`md:grid-cols-2`). Mobile keeps the current single-column stack. Soften any salesy labels (e.g. keep "Starting" badge calm/neutral).

- [ ] **Step 2: Verify** — `npm run build` succeeds; desktop shows 3 buckets across, mobile stacks.

- [ ] **Step 3: Commit**

```bash
git add src/components/Section1.tsx
git commit -m "feat: section 2 Framing — desktop grid layout"
```

---

## Task 7: Section 3 — `SectionIP` (merged frameworks + sovereignty, s3)

**Files:**
- Create: `src/components/SectionIP.tsx`

**Source:** `ipFrameworks` + `sovereignty` from `content.ts`. Reads "studied, not assumed; owned & protected." Uses `DeepDive`.

- [ ] **Step 1: Build the section**

`id="s3"`, header num `03`, eyebrow "Your IP", title e.g. "Your methods, studied — never assumed." Top level:
- Four framework chips/cards (anthrop™ · wholon™ · ideantity™ · litmosi™) each with a one-line role. Desktop `lg:grid-cols-2` or `lg:grid-cols-4`; mobile stacks.
- A short "owned & protected" strip summarizing sovereignty in one calm line.
- A `<DeepDive label="What discovery clarifies" title="Your IP — studied & protected">` whose body renders (a) the `ipFrameworks` table (framework → what discovery clarifies) and (b) the 6 `sovereignty` principles as a definition list.

- [ ] **Step 2: Verify** — `npm run build` succeeds; deep-dive opens and shows both the IP table and the 6 principles; closes via Esc/backdrop/✕.

- [ ] **Step 3: Commit**

```bash
git add src/components/SectionIP.tsx
git commit -m "feat: section 3 Your IP — merged frameworks + sovereignty with deep-dive"
```

---

## Task 8: Section 4 — Roadmap (adapt `Section2.tsx` → s4, horizontal desktop + per-phase deep-dives)

**Files:**
- Modify: `src/components/Section2.tsx`
- Uses: `phases` from `content.ts`, `DeepDive`

- [ ] **Step 1: Drive from `content.ts`**

Replace the inline `phases` array with the imported `phases`. Keep the vertical timeline for mobile (current design). Add a **desktop horizontal timeline**: at `lg:`, render the 5 phases as a horizontal row (`lg:flex lg:flex-row` with a connecting line) instead of the vertical rail. Keep the Phase 3 "first launch" highlight calm.

- [ ] **Step 2: Add per-phase deep-dive**

Each phase card gets a `<DeepDive label="Go deeper" title={`${p.n} · ${p.title}`}>` rendering `p.detail`: purpose, then (Phase 1 only) the discovery `activities` table and `audit` methodology table, then `outputs` and `business` outcome lists. Other phases show purpose + outputs + business.

- [ ] **Step 3: Verify** — `npm run build` succeeds; mobile = vertical timeline, desktop = horizontal; every phase's "Go deeper" opens its detail; Phase 1 shows the richer activities/audit tables.

- [ ] **Step 4: Commit**

```bash
git add src/components/Section2.tsx
git commit -m "feat: section 4 Roadmap — content-driven, horizontal desktop timeline, per-phase deep-dives"
```

---

## Task 9: Section 5 — How it works (adapt `Section4.tsx` → s5)

**Files:**
- Modify: `src/components/Section4.tsx`

- [ ] **Step 1: Re-key + desktop layout**

Keep `id="s3"`? No — change to `id="s5"`, header num `03` → `05`. Keep the dark (`night`) architecture diagram. Desktop: lay the Inputs / Platform / Layers / Memory / Outcomes groups into a wider arrangement (e.g. inputs in a `lg:grid-cols-3` row; the three layers side-by-side) rather than one tall column. Mobile keeps the stacked flow with `NConn` connectors.

- [ ] **Step 2: Verify** — `npm run build` succeeds; dark section reads as a calm "here's the shape of the system," wider on desktop, stacked on mobile.

- [ ] **Step 3: Commit**

```bash
git add src/components/Section4.tsx
git commit -m "feat: section 5 How it works — desktop architecture layout"
```

---

## Task 10: Section 6 — `Pieces` (Quilt/KittyKat, s6)

**Files:**
- Create: `src/components/Pieces.tsx`

**Source:** `parallels` from `content.ts`. **Framing:** "We've built the pieces before" — soft, not "why us." Uses `DeepDive`.

- [ ] **Step 1: Build the section**

`id="s6"`, header num `06`, eyebrow "How we work", title e.g. "A Strategy Brain is two things we've already built." Top level: two cards side-by-side on desktop (`md:grid-cols-2`), stacked on mobile:
- Quilt card — label "Research intelligence", `parallels.quilt.summary`.
- KittyKat card — label "Brand / asset knowledge", `parallels.kittykat.summary`.
- A one-line "brought together for your strategy work; AI amplifies, it doesn't replace judgment."
- A `<DeepDive label="See the parallels" title="What we've built">` rendering both parallels in full: Quilt `combines` → `appliedTo`; KittyKat `included` → `extendedTo`.

No "Why Yuvabe", no credentials/brag language, no law-firm analogy.

- [ ] **Step 2: Verify** — `npm run build` succeeds; grep file to confirm no "why us"/"why yuvabe"/"law firm"/"precedent" strings; deep-dive shows both capability lists.

- [ ] **Step 3: Commit**

```bash
git add src/components/Pieces.tsx
git commit -m "feat: section 6 Pieces — Quilt/KittyKat as research + asset intelligence (soft framing)"
```

---

## Task 11: Section 7 — `Engagement` (Phase 1+2, modular note, gated commercials, s7)

**Files:**
- Create: `src/components/Engagement.tsx`

**Source:** `commercials` from `content.ts`. **Tone:** "how we'd start," commercials factual/low-key/gated.

- [ ] **Step 1: Build the section**

`id="s7"`, header num `07`, eyebrow "How we'd start", title e.g. "A simple way to begin." Top level:
- A calm recommendation: begin with Phase 1 + Phase 2 (discovery + focused prototype), clearly bounded.
- The demoted **Scaling** note as ONE low-key line: "The model is modular — Marketing and Creative can follow the same path later, only if you choose. No lock-in." (replaces old `Section5.tsx`).
- A low-key (not a big CTA) `<DeepDive label="Commercials" title="How we'd structure it">` — the **gated** reveal — rendering: monthly `₹10,00,000`, the `discountNote`, discounted `₹9,00,000`, the 4-role `team` table, and `notes`. Present as facts, no urgency.

- [ ] **Step 2: Verify** — `npm run build` succeeds; commercials are NOT visible until "Commercials" is clicked; the scaling note is a single calm line, not a section.

- [ ] **Step 3: Commit**

```bash
git add src/components/Engagement.tsx
git commit -m "feat: section 7 Engagement — Phase 1+2, modular note, gated commercials"
```

---

## Task 12: Assemble `page.tsx` + cleanup

**Files:**
- Modify: `src/app/page.tsx`
- Delete: `src/components/Section5.tsx`, `src/components/ProgressDots.tsx`

- [ ] **Step 1: Final composition**

```tsx
import { Doc, Footer } from "@/components/ui";
import { NavRail } from "@/components/NavRail";
import { WhyNow } from "@/components/WhyNow";
import { Section1 as Framing } from "@/components/Section1";
import { SectionIP } from "@/components/SectionIP";
import { Section2 as Roadmap } from "@/components/Section2";
import { Section4 as HowItWorks } from "@/components/Section4";
import { Pieces } from "@/components/Pieces";
import { Engagement } from "@/components/Engagement";

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <WhyNow />        {/* s1 */}
        <Framing />       {/* s2 */}
        <SectionIP />     {/* s3 */}
        <Roadmap />       {/* s4 */}
        <HowItWorks />    {/* s5 */}
        <Pieces />        {/* s6 */}
        <Engagement />    {/* s7 */}
        <Footer />
      </Doc>
      <NavRail />
    </main>
  );
}
```

(Keep/adjust `TopBar` if still desired — verify it isn't double-imported.)

- [ ] **Step 2: Delete the retired files**

```bash
git rm src/components/Section5.tsx src/components/ProgressDots.tsx
```

Then grep for any remaining `ProgressDots` / `Section5` imports and remove them.

- [ ] **Step 3: Verify**

Run: `npm run build` → succeeds, no unresolved imports.
Visual (`npm run dev`): all 7 sections render in order s1–s7; NavRail tracks all seven.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: assemble 7-section proposal page; remove retired Section5/ProgressDots"
```

---

## Task 13: Final verification

**Files:** none (verification only).

- [ ] **Step 1: Build + lint clean**

Run: `npm run build`
Expected: compiles, no lint/type errors.

- [ ] **Step 2: Desktop walkthrough** (wide window via `npm run dev`)

Confirm, in order: all 7 sections render; the roadmap timeline is horizontal; open every deep-dive — IP (table + 6 principles), each of the 5 phases (Phase 1 shows activities + audit), both parallels, commercials — each opens centered, dims the background, traps focus, closes via Esc / ✕ / backdrop click, and the page behind does not scroll.

- [ ] **Step 3: Gating check**

Confirm commercials (₹ figures, team) are NOT in the initial render and appear only after clicking "Commercials".

- [ ] **Step 4: Mobile walkthrough** (narrow viewport / DevTools responsive)

Confirm single-column collapse; roadmap timeline becomes vertical; deep-dives open as bottom-sheets; NavRail becomes the bottom pill; nothing overflows horizontally.

- [ ] **Step 5: Tone pass**

Re-read all top-level copy against the spec's Tone & voice: no urgency/scarcity, no hype/brag, no "the ask," commercials low-key. Fix any stragglers.

- [ ] **Step 6: Final commit (if Step 5 changed anything)**

```bash
git add -A
git commit -m "chore: final tone + responsive polish pass"
```

---

## Self-review (author checklist — done)

- **Spec coverage:** all 7 sections (s1 WhyNow, s2 Framing, s3 IP+sovereignty merged, s4 Roadmap+deep-dives, s5 How it works, s6 Pieces, s7 Engagement+gated commercials), DeepDive (modal↔sheet), NavRail (rail↔pill), responsive Doc, content.ts, Scaling demoted, law-firm analogy removed, tone constraint — each maps to a task. ✓
- **Placeholders:** primitives (content.ts shape, DeepDive, NavRail, Doc, page.tsx) have complete code; section tasks specify exact files/ids/sources/deep-dive bodies and pull copy from `content.ts` + the note (no invented copy). ✓
- **Type consistency:** components consume the `content.ts` exports (`phases`, `ipFrameworks`, `sovereignty`, `parallels`, `commercials`) as defined in Task 1; section ids s1–s7 match `NavRail` `SECTIONS`. ✓
