import { Section, SectionHeader, Chip } from "./ui";
import { Reveal } from "./Reveal";
import { Group, Defs, MicroLabel } from "./modal-ui";
import { User, BrainCog, Archive, Lock, CircleCheck } from "./icons";
import { discovery } from "./content";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

/* Icons for the four "how we learn" moves, aligned to discovery.moves order. */
const MOVE_ICONS = [User, BrainCog, Archive, Lock];

/* ── s6: Discovery — how we learn before we build ────────────────────── */
export function DiscoveryProcess() {
  return (
    <Section id="s6">
      <SectionHeader num="06" eyebrow="Phase 1 · Discovery" title="We learn how you work before we build.">
        {discovery.intro}
      </SectionHeader>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {discovery.moves.map(({ title, body }, i) => {
          const Icon = MOVE_ICONS[i] ?? User;
          return (
            <div key={title} className={`reveal flex flex-col px-[18px] py-[18px] ${CARD}`}>
              <Chip className="h-[38px] w-[38px]">
                <Icon className="h-[18px] w-[18px] text-purple-500" strokeWidth={1.8} />
              </Chip>
              <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-neutral-900">
                {title}
              </div>
              <p className="mt-1.5 text-body leading-[1.45] text-neutral-600">{body}</p>
            </div>
          );
        })}
      </div>

      <div className="reveal mt-4">
        <Reveal label="How Discovery works, in detail">
          <div className={`${CARD} space-y-8 px-5 py-5 md:px-6 md:py-6`}>
            <Group label="The discovery process">
              <Defs
                rows={discovery.process.map((p) => ({
                  term: p.activity,
                  desc: (
                    <>
                      {p.what} <span className="text-neutral-400">· {p.who}</span>
                    </>
                  ),
                }))}
              />
            </Group>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── s7: Discovery — what you walk away with ─────────────────────────── */
export function DiscoveryOutcome() {
  return (
    <Section id="s7">
      <SectionHeader num="07" eyebrow="Phase 1 · Discovery" title="What Discovery delivers.">
        {discovery.outcome}
      </SectionHeader>

      <div className="mt-5">
        <MicroLabel>Outputs</MicroLabel>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {discovery.outputs.map(({ title, desc }) => (
            <div key={title} className={`reveal flex items-start gap-3 px-4 py-3.5 ${CARD}`}>
              <span className="grid h-7 w-7 flex-none place-items-center rounded-pill border border-purple-tint-16 bg-purple-tint-06">
                <CircleCheck className="h-4 w-4 text-purple-500" strokeWidth={2} />
              </span>
              <div>
                <div className="font-display text-[14px] font-semibold tracking-[-0.01em] text-neutral-900">{title}</div>
                <p className="mt-1 text-body leading-[1.4] text-neutral-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-6 rounded-xl border border-purple-tint-22 bg-purple-tint-06 px-5 py-4">
        <MicroLabel>Why it de-risks the build</MicroLabel>
        <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {discovery.businessOutcomes.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-body leading-[1.4] text-neutral-700">
              <CircleCheck className="mt-[2px] h-4 w-4 flex-none text-purple-500" strokeWidth={2} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
