import { Section, SectionHeader, Hl } from "./ui";
import { DeepDive } from "./DeepDive";
import { CircleCheck, ListChecks } from "./icons";
import { phases, type Phase } from "./content";

/* ── Deep-dive body: full per-phase detail ───────────────────────────── */
function PhaseDetail({ detail }: { detail: Phase["detail"] }) {
  return (
    <div className="space-y-6">
      <p className="text-[14px] leading-[1.5] text-neutral-700">{detail.purpose}</p>

      {detail.activities && (
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-purple-500">Discovery process</h4>
          <ul className="mt-2.5 divide-y divide-neutral-100 border-y border-neutral-100">
            {detail.activities.map((a) => (
              <li key={a.activity} className="py-3">
                <div className="text-[13.5px] font-semibold text-neutral-900">{a.activity}</div>
                <div className="mt-0.5 text-[12.5px] leading-[1.4] text-neutral-700">{a.what}</div>
                <div className="mt-1 text-[11.5px] leading-[1.35] text-neutral-500">{a.who}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {detail.audit && (
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-purple-500">Audit methodology</h4>
          <ul className="mt-2.5 divide-y divide-neutral-100 border-y border-neutral-100">
            {detail.audit.map((a) => (
              <li key={a.area} className="grid gap-1 py-3 sm:grid-cols-[130px_1fr] sm:gap-4">
                <span className="text-[13px] font-semibold text-neutral-900">{a.area}</span>
                <span className="text-[12.5px] leading-[1.4] text-neutral-700">
                  {a.inspect}
                  <span className="mt-0.5 block text-[11.5px] text-neutral-500">{a.why}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-500">Outputs</h4>
          <ul className="mt-2 space-y-1.5">
            {detail.outputs.map((o) => (
              <li key={o} className="flex items-start gap-2 text-[12.5px] leading-[1.4] text-neutral-800">
                <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-neutral-400" />
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.12em] text-purple-500">How it helps Chlorophyll</h4>
          <ul className="mt-2 space-y-1.5">
            {detail.business.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[12.5px] leading-[1.4] text-neutral-800">
                <CircleCheck className="mt-[2px] h-3.5 w-3.5 flex-none text-purple-500" strokeWidth={2} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

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
      <p className="mt-2 text-[12.5px] leading-[1.36] text-neutral-700">{p.focus}</p>
      <div
        className={`mt-2.5 rounded-md px-3 py-[11px] text-[12.5px] font-medium leading-[1.34] text-neutral-900 ${
          p.launch ? "border border-purple-tint-28 bg-purple-tint-11" : "border border-purple-tint-16 bg-purple-tint-06"
        }`}
      >
        <div className="mb-1 flex items-center gap-[5px] text-[9.5px] font-bold uppercase tracking-[0.1em] text-purple-500">
          <CircleCheck className="h-3 w-3 text-purple-500" strokeWidth={2.2} />
          Outcome
        </div>
        {p.outcome}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-neutral-400">
        <ListChecks className="h-3.5 w-3.5" strokeWidth={2} />
        <DeepDive label="Go deeper" title={`${p.n} · ${p.title}`}>
          <PhaseDetail detail={p.detail} />
        </DeepDive>
      </div>
    </div>
  );
}

export function Section2() {
  return (
    <Section id="s4">
      <SectionHeader num="04" eyebrow="The Strategy track" title="The strategy track, phase by phase.">
        Five phases from discovery to an <Hl>integrated strategy intelligence system</Hl>. Tap any phase to see how it
        works.
      </SectionHeader>

      {/* Mobile: vertical timeline */}
      <div className="relative mt-6 pl-[30px] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200 before:content-[''] lg:hidden">
        {phases.map((p, i) => (
          <div key={p.id} className={`reveal relative ${i === phases.length - 1 ? "pb-0" : "pb-[18px]"}`}>
            <div
              className={`absolute left-[-30px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 bg-white after:h-[7px] after:w-[7px] after:rounded-full after:content-[''] ${
                p.launch ? "border-purple-500 after:bg-purple-500" : "border-neutral-300 after:bg-neutral-400"
              }`}
            />
            <PhaseCard p={p} />
          </div>
        ))}
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="relative mt-10 hidden lg:block">
        <div className="absolute left-0 right-0 top-[6px] h-0.5 bg-neutral-200" />
        <div className="grid grid-cols-5 gap-4">
          {phases.map((p) => (
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

      <div className="reveal mt-[22px] flex items-center justify-between gap-3 rounded-xl bg-brand-deep px-5 py-4 text-white md:mt-10">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-lavender-200">
          Total estimated timeline
        </span>
        <span className="font-display text-[21px] font-semibold tracking-[-0.01em]">12–16 weeks</span>
      </div>
    </Section>
  );
}
