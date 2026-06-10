import { Section, SectionHeader, Hl, Chip } from "./ui";
import { Reveal } from "./Reveal";
import { Grid } from "./icons";
import { Lede, Group, Defs } from "./modal-ui";
import { commercials } from "./content";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

const programme: [string, string][] = [
  ["P1", "Discovery"],
  ["P2", "Prototype"],
  ["P3", "Internal build"],
  ["P4", "External research"],
  ["P5", "Integration"],
];

export function Engagement() {
  return (
    <Section id="s9">
      <SectionHeader num="09" eyebrow="The engagement" title="How we'd work together.">
        A senior-led engagement across <Hl>all five phases</Hl> — roughly 12–16 weeks — delivered on a simple monthly
        model.
      </SectionHeader>

      <div className={`reveal mt-5 p-[18px] ${CARD} border-purple-tint-30`}>
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-purple-500">
            Recommended engagement
          </span>
          <span className="whitespace-nowrap rounded-pill bg-neutral-100 px-[9px] py-[3px] text-[11px] font-semibold text-neutral-700">
            5 phases · 12–16 weeks
          </span>
        </div>
        <div className="mt-3.5 flex flex-wrap gap-[8px]">
          {programme.map(([n, label]) => (
            <span
              key={n}
              className="flex items-center gap-[7px] rounded-pill border border-purple-tint-16 bg-purple-tint-06 px-3.5 py-2 text-[13.5px] font-medium text-neutral-800"
            >
              <span className="text-[10.5px] font-bold tracking-[0.06em] text-purple-500">{n}</span>
              {label}
            </span>
          ))}
        </div>
        <p className="mt-3.5 text-body font-medium leading-[1.5] text-neutral-700">
          The first launch lands around Phase 3; the complete Strategy Intelligence System is delivered by Phase 5.
          Senior-led, billed monthly.
        </p>
      </div>

      <div className="reveal mt-3.5 flex items-start gap-[13px] rounded-xl border border-neutral-200 bg-neutral-50 px-[18px] py-4">
        <Chip className="h-[34px] w-[34px]">
          <Grid className="h-4 w-4 text-purple-500" strokeWidth={1.9} />
        </Chip>
        <p className="text-body leading-[1.42] text-neutral-700">
          The model is modular — once Strategy is validated, the same phased approach can be applied to{" "}
          <b className="font-semibold text-neutral-900">Marketing and Creative</b>, one workflow at a time rather than all
          at once.
        </p>
      </div>

      <div className="reveal mt-4">
        <Reveal
          label="Commercials"
          labelOpen="Commercials"
          locked
          triggerClassName="inline-flex items-center gap-2 rounded-pill border border-neutral-200 bg-white px-3.5 py-2 text-[12.5px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          <div className="space-y-8">
            <Lede>
              A phased, senior-led engagement — priced per month, with an early-commitment discount.
            </Lede>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                  Monthly engagement
                </div>
                <div className="mt-2 font-display text-[30px] font-semibold leading-none tracking-[-0.02em] text-neutral-900 md:text-[34px]">
                  {commercials.monthly}
                </div>
              </div>
              <div className="rounded-2xl border border-purple-tint-22 bg-purple-tint-06 px-5 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-purple-500">
                  With early commitment
                </div>
                <div className="mt-2 font-display text-[30px] font-semibold leading-none tracking-[-0.02em] text-neutral-900 md:text-[34px]">
                  {commercials.discountedMonthly}
                </div>
                <div className="mt-2 text-[12px] text-neutral-500">{commercials.discountNote}</div>
              </div>
            </div>

            <Group label="Team" divided>
              <Defs rows={commercials.team.map((t) => ({ term: t.role, desc: t.resp }))} />
            </Group>

            <Group divided>
              <ul className="space-y-2">
                {commercials.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-neutral-500">
                    <span className="mt-[8px] h-[4px] w-[4px] flex-none rounded-full bg-neutral-300" />
                    {n}
                  </li>
                ))}
              </ul>
            </Group>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
