import { Section, SectionHeader, Hl } from "./ui";
import { CircleCheck, Rocket } from "./icons";

type Phase = {
  n: string;
  tl: string;
  title: string;
  focus: string;
  out: string;
  launch?: boolean;
};

const phases: Phase[] = [
  {
    n: "Phase 1",
    tl: "2–3 weeks",
    title: "Discovery",
    focus: "Understand the strategy workflow, templates, algorithms, cases, and constraints.",
    out: "Clear scope for Strategy Brain – Part 1.",
  },
  {
    n: "Phase 2",
    tl: "2–3 weeks",
    title: "Strategy Brain — Part 1",
    focus: "Use limited cases, templates, and outputs to validate the first useful AI-assisted direction.",
    out: "Proof of concept and confirmed direction for deeper build.",
  },
  {
    n: "Phase 3",
    tl: "3–4 weeks",
    title: "Strategy Brain — Part 2",
    focus: "Build the validated internal strategy model using Chlorophyll's cases, frameworks, and algorithms.",
    out: "A usable internal Strategy Brain supporting live workflows.",
    launch: true,
  },
  {
    n: "Phase 4",
    tl: "3–4 weeks",
    title: "External Research Augmentation",
    focus: "Add market, category, competitor, audience, and cultural intelligence.",
    out: "External intelligence connected to the internal Strategy Brain.",
  },
  {
    n: "Phase 5",
    tl: "2 weeks",
    title: "Integration",
    focus: "Combine internal strategy knowledge and external research into one workflow.",
    out: "Integrated Strategy Intelligence System.",
  },
];

export function Section2() {
  return (
    <Section id="s2">
      <SectionHeader num="02" eyebrow="First Track · Strategy" title="The Strategy track, phase by phase.">
        Five phases from discovery to an <Hl>integrated strategy intelligence system</Hl>.
      </SectionHeader>

      <div className="relative mt-6 pl-[30px] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200 before:content-['']">
        {phases.map((p, i) => (
          <div key={p.n} className={`reveal relative ${i === phases.length - 1 ? "pb-0" : "pb-[18px]"}`}>
            {/* timeline node */}
            <div
              className={`absolute left-[-30px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 bg-white after:h-[7px] after:w-[7px] after:rounded-full after:content-[''] ${
                p.launch ? "border-purple-500 after:bg-purple-500" : "border-neutral-300 after:bg-neutral-400"
              }`}
            />
            <div
              className={`rounded-xl px-[18px] py-4 ${
                p.launch
                  ? "border border-purple-tint-38 bg-purple-tint-06 ring-1 ring-inset ring-purple-tint-22 shadow-[0_10px_26px_rgba(88,41,199,0.16)]"
                  : "border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]"
              }`}
            >
              {p.launch && (
                <span className="mb-2 inline-flex items-center gap-[5px] rounded-pill bg-purple-500 px-[9px] py-1 text-[9.5px] font-bold uppercase tracking-[0.08em] text-white">
                  <Rocket className="h-[11px] w-[11px] text-white" strokeWidth={2.3} /> First launch · Week 7–10
                </span>
              )}
              <div className="flex items-baseline justify-between gap-2.5">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-purple-500">{p.n}</span>
                <span className="whitespace-nowrap rounded-pill bg-neutral-100 px-[9px] py-[3px] text-[11px] font-semibold text-neutral-700">{p.tl}</span>
              </div>
              <h3 className="mt-[7px] font-display text-[17px] font-semibold leading-[1.12] tracking-[-0.01em]">{p.title}</h3>
              <div className="mt-2 text-[12.5px] leading-[1.36] text-neutral-700">{p.focus}</div>
              <div
                className={`mt-2.5 rounded-md px-3 py-[11px] text-[12.5px] font-semibold leading-[1.34] text-neutral-900 ${
                  p.launch ? "border border-purple-tint-28 bg-purple-tint-11" : "border border-purple-tint-16 bg-purple-tint-06"
                }`}
              >
                <div className="mb-1 flex items-center gap-[5px] text-[9.5px] font-bold uppercase tracking-[0.1em] text-purple-500">
                  <CircleCheck className="h-3 w-3 text-purple-500" strokeWidth={2.2} />
                  Outcome
                </div>
                {p.out}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-[22px] flex items-center justify-between gap-3 rounded-xl bg-brand-deep px-5 py-4 text-white">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-lavender-200">Total estimated timeline</span>
        <span className="font-display text-[21px] font-semibold tracking-[-0.01em]">12–16 weeks</span>
      </div>
    </Section>
  );
}
