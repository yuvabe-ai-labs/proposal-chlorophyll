import { Section, SectionHeader, Hl } from "./ui";
import { CircleCheck } from "./icons";
import { Reveal } from "./Reveal";
import { phases, type Phase } from "./content";

/* ── Shared phase card body (used in both layouts) ───────────────────── */
function PhaseCard({ p }: { p: Phase }) {
  return (
    <div
      className={`h-full rounded-xl px-[18px] py-4 ${
        p.launch
          ? "border border-purple-tint-38 bg-purple-tint-06 ring-1 ring-inset ring-purple-tint-22 shadow-[0_10px_26px_rgba(88,41,199,0.16)]"
          : "border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]"
      }`}
    >
      {p.launch && (
        <span className="mb-2 inline-flex items-center gap-[5px] rounded-pill bg-purple-500 px-[9px] py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-white">
          Targeted first launch
        </span>
      )}
      <div className="flex items-baseline justify-between gap-2.5">
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-purple-500">{p.n}</span>
        <span className="whitespace-nowrap rounded-pill bg-neutral-100 px-[9px] py-[3px] text-[11px] font-semibold text-neutral-700">
          {p.timeline}
        </span>
      </div>
      <h3 className="mt-[7px] font-display text-[16px] font-semibold leading-[1.12] tracking-[-0.01em]">{p.title}</h3>
      <p className="mt-2 text-body leading-[1.36] text-neutral-700">{p.focus}</p>
      <div
        className={`mt-2.5 rounded-md px-3 py-[11px] text-body font-medium leading-[1.34] text-neutral-900 ${
          p.launch ? "border border-purple-tint-28 bg-purple-tint-11" : "border border-purple-tint-16 bg-purple-tint-06"
        }`}
      >
        <div className="mb-1 flex items-center gap-[5px] text-[9.5px] font-bold uppercase tracking-[0.1em] text-purple-500">
          <CircleCheck className="h-3 w-3 text-purple-500" strokeWidth={2.2} />
          Outcome
        </div>
        {p.outcome}
      </div>
      <div className="mt-3">
        <Reveal label="Possible outputs">
          <div className="space-y-4 border-t border-neutral-100 pt-4">
            <div>
              <div className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-neutral-400">Outputs</div>
              <p className="mt-2 text-[13px] font-medium leading-[1.5] text-neutral-700">
                {p.detail.outputs.slice(0, 2).join("  ·  ")}
              </p>
            </div>
            <div>
              <div className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-purple-500">How it helps</div>
              <p className="mt-2 text-[13px] font-medium leading-[1.5] text-neutral-700">
                {p.detail.business.slice(0, 2).join("  ·  ")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ── A timeline of a phase subset: vertical on mobile, horizontal on desktop ─ */
function Timeline({ items, gridClass }: { items: Phase[]; gridClass: string }) {
  return (
    <>
      {/* Mobile: vertical */}
      <div className="relative mt-6 pl-[30px] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200 before:content-[''] lg:hidden">
        {items.map((p, i) => (
          <div key={p.id} className={`reveal relative ${i === items.length - 1 ? "pb-0" : "pb-[18px]"}`}>
            <div
              className={`absolute left-[-30px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 bg-white after:h-[7px] after:w-[7px] after:rounded-full after:content-[''] ${
                p.launch ? "border-purple-500 after:bg-purple-500" : "border-neutral-300 after:bg-neutral-400"
              }`}
            />
            <PhaseCard p={p} />
          </div>
        ))}
      </div>

      {/* Desktop: horizontal */}
      <div className="relative mt-10 hidden lg:block">
        <div className="absolute left-0 right-0 top-[6px] h-0.5 bg-neutral-200" />
        <div className={`grid gap-4 ${gridClass}`}>
          {items.map((p) => (
            <div key={p.id} className="reveal relative pt-7">
              <span
                className={`absolute left-0 top-0 grid h-[13px] w-[13px] place-items-center rounded-full border-2 bg-white after:h-[5px] after:w-[5px] after:rounded-full after:content-[''] ${
                  p.launch ? "border-purple-500 after:bg-purple-500" : "border-neutral-300 after:bg-neutral-400"
                }`}
              />
              <PhaseCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── s4: the path to the first launch (Phases 1–3) ───────────────────── */
export function RoadmapPath() {
  return (
    <Section id="s4">
      <SectionHeader num="04" eyebrow="The Strategy track" title="The path to the first launch.">
        Three phases take us from discovery to a working internal Strategy Brain — Chlorophyll&apos;s{" "}
        <Hl>first targeted launch</Hl>. Tap any phase to see how it works.
      </SectionHeader>
      <Timeline items={phases.slice(0, 3)} gridClass="lg:grid-cols-3" />

      <div className="reveal mt-8 flex items-center justify-between gap-3 rounded-xl border border-purple-tint-30 bg-purple-tint-06 px-5 py-4 md:mt-10">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-purple-500">
          Time to first launch (P1–P3)
        </span>
        <span className="font-display text-[21px] font-semibold tracking-[-0.01em] text-neutral-900">7–10 weeks</span>
      </div>
    </Section>
  );
}

/* ── s5: the full recommended engagement (Phases 4–5 + the "all five" case) ─ */
export function RoadmapFull() {
  return (
    <Section id="s5">
      <SectionHeader num="05" eyebrow="What we recommend" title="The complete engagement — all five phases.">
        The first launch is a milestone, not the finish line. The Strategy Brain becomes far more useful once it draws on{" "}
        <Hl>external market reality</Hl> and is <Hl>integrated into one workflow</Hl>.
      </SectionHeader>

      <Timeline items={phases.slice(3)} gridClass="lg:grid-cols-2" />

      <div className="reveal mt-8 flex items-center justify-between gap-3 rounded-xl bg-brand-deep px-5 py-4 text-white md:mt-10">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-lavender-200">
          Total · all five phases (P1–P5)
        </span>
        <span className="font-display text-[21px] font-semibold tracking-[-0.01em]">12–16 weeks</span>
      </div>
    </Section>
  );
}
