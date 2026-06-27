import type { Metadata } from "next";
import { Doc, TopBar, Section, SectionHeader, Hl, Footer } from "@/components/ui";

export const metadata: Metadata = {
  title: "Creative workflow — chlorophyll × Yuvabe",
  description: "How we integrate AI into a creative production workflow — human-in-the-loop, and a learning loop that compounds.",
};

/* Slide 1 — the integration principle */
const PRINCIPLES: { k: string; v: string }[] = [
  { k: "AI carries the load", v: "the generation — prompts, images, video" },
  { k: "The human stays the author", v: "every creative decision is theirs" },
  { k: "The system learns", v: "every correction makes the next output better" },
];

/* Slide 2 — human-in-the-loop touch points */
const TOUCHPOINTS: { t: string; d: string }[] = [
  { t: "Steers the prompt", d: "rewrites or redirects the AI before anything is generated" },
  { t: "Sets the controls", d: "lens, lighting, palette, brand colours — not left to the model to guess" },
  { t: "Picks from attempts", d: "generates several, keeps the right one, rejects the rest" },
  { t: "Edits in place", d: "a wording fix, a reframe, a tighter line — before it advances" },
  { t: "Owns the sign-off", d: "an explicit approve / reject on every image and every clip" },
];

/* Slide 3 — the learning loop */
const LOOP: { n: string; t: string; d: string }[] = [
  { n: "01", t: "Capture", d: "the AI's “before” vs. the human's shipped “after” — the strongest signal there is" },
  { n: "02", t: "Open coding", d: "read the real traces, note in plain language what went wrong, pass/fail each" },
  { n: "03", t: "Axial coding", d: "cluster those notes into a ranked list of failure modes — fix the #1 first, by count" },
  { n: "04", t: "Scorers + judge", d: "encode the top failures as pass/fail scorers; an LLM-as-judge, validated against people" },
  { n: "05", t: "Re-measure", d: "prove the change is better on a frozen set — not just luckier" },
];

export default function CreativeWorkflowPage() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <TopBar />

        {/* ── Slide 1 · how we think about it ────────────────────────────── */}
        <Section id="principle" night first>
          <SectionHeader
            num="01"
            eyebrow="Creative & asset generation"
            title="Everything after the draft."
            night
          >
            CreativeOS is our engine for the <Hl night>creative — asset-generation</Hl> workflow: reels,
            images and video, produced with AI in one end-to-end workspace instead of scattered across
            half a dozen tools. Anyone can get AI to make a first draft; the real work — judgment, brand,
            craft — is everything after it. Built on three commitments:
          </SectionHeader>

          <div className="reveal mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div key={p.k} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5">
                <span className="font-display text-[11px] font-semibold tracking-[0.12em] text-lavender-200">
                  0{i + 1}
                </span>
                <div className="mt-2 font-display text-[16px] font-semibold leading-tight text-neutral-25">
                  {p.k}
                </div>
                <p className="mt-1.5 text-[13px] leading-snug text-white/60">{p.v}</p>
              </div>
            ))}
          </div>

          <p className="reveal mt-6 text-[13px] leading-[1.55] text-white/55">
            From seven tools and a folder of screenshots → <span className="text-white/80">one end-to-end flow</span>.
          </p>
        </Section>

        {/* ── Slide 2 · human in the loop ────────────────────────────────── */}
        <Section id="human">
          <SectionHeader
            num="02"
            eyebrow="Human in the loop"
            title="The model proposes. The designer disposes."
          >
            We don&apos;t automate the creative — we automate the <Hl>toil</Hl>. Every decision stays in
            human hands:
          </SectionHeader>

          <div className="reveal mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)] lg:max-w-3xl">
            <div className="divide-y divide-neutral-200">
              {TOUCHPOINTS.map((t) => (
                <div key={t.t} className="flex items-start gap-3 px-5 py-3.5">
                  <span className="mt-[2px] grid h-5 w-5 flex-none place-items-center rounded-pill bg-purple-tint-09 text-[11px] font-semibold text-purple-500">
                    ✓
                  </span>
                  <p className="text-[13.5px] leading-[1.5] text-neutral-700">
                    <span className="font-display font-semibold text-neutral-900">{t.t}</span>
                    <span className="text-neutral-300"> — </span>
                    {t.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <figure className="reveal mx-auto mt-7 w-full max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_10px_30px_rgba(11,15,25,0.06)] md:p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/human-feedback-loop.png"
                alt="The guided creative loop: brief and context → AI proposes routes → human chooses direction → AI prepares options → human approves the package → AI generates variants → human reviews and signs off. Below, five touch points where the human stays in the loop — choosing a creative territory, selecting or editing options, picking and combining results, accepting or editing recommendations, approving the prompt package, and owning the final approve/reject sign-off."
                className="h-auto w-full rounded-xl"
              />
            </div>
            <figcaption className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-[1.55] text-neutral-500">
              The same loop, end to end — at every numbered step, a human decides before anything advances.
            </figcaption>
          </figure>

          <p className="reveal mt-7 text-body font-medium leading-[1.5] text-neutral-700">
            Nothing advances or ships that a human didn&apos;t choose — faster production, without
            surrendering authorship or brand control.
          </p>
        </Section>

        {/* ── Slide 3 · the learning loop ────────────────────────────────── */}
        <Section id="loop" night>
          <SectionHeader
            num="03"
            eyebrow="The feedback loop"
            title="Quality that compounds."
            night
          >
            Every correction — the gap between what the AI <Hl night>proposed</Hl> and what the human{" "}
            <Hl night>shipped</Hl> — becomes signal. We run the disciplined loop the best AI teams use,
            not vibe-checks:
          </SectionHeader>

          <div className="reveal mt-7 flex flex-col gap-2.5">
            {LOOP.map((s) => (
              <div
                key={s.n}
                className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 lg:max-w-2xl"
              >
                <span className="font-display text-[12px] font-semibold tracking-[0.1em] text-lavender-200">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <span className="font-display text-[14.5px] font-semibold text-neutral-25">{s.t}</span>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-white/60">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <figure className="reveal mx-auto mt-8 w-full max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/eval-loop.png"
                alt="The evals layer, five steps: 1) capture corrections — the AI's before vs. the human's shipped after; 2) error analysis — open coding of real traces, noting what went wrong; 3) encode as evals — turn the top failures into pass/fail scorers and a validated LLM-as-judge; 4) re-measure on a frozen set — prompt v1 baseline 18/20 pass vs. prompt v2 14/20, proving a change is real not lucky; 5) improve and repeat. Every correction becomes signal, so the more it's used the better it gets."
                className="h-auto w-full rounded-xl"
              />
            </div>
            <figcaption className="mx-auto mt-5 max-w-2xl text-center text-[13px] leading-[1.55] text-white/55">
              Every correction becomes signal — and signal, measured on a frozen set, turns into a better prompt. Quality compounds with each project.
            </figcaption>
          </figure>

          <div className="reveal mt-7 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 lg:max-w-2xl">
            <p className="text-[13.5px] leading-[1.6] text-white/80">
              The generation is the easy part. This <span className="font-semibold text-lavender-200">learning
              layer</span> — the thing that compounds — is the hard part, and the real craft. It&apos;s what
              we&apos;ve built.
            </p>
          </div>
        </Section>

        <Footer />
      </Doc>
    </main>
  );
}
