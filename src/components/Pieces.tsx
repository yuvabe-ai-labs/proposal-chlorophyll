import { Section, SectionHeader, Hl, Chip } from "./ui";
import { DeepDive } from "./DeepDive";
import { Database, Archive } from "./icons";
import { Lede, Prose, Group, MicroLabel, Chips } from "./modal-ui";
import { parallels } from "./content";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

export function Pieces() {
  const { quilt, kittykat } = parallels;
  return (
    <Section id="s6">
      <SectionHeader num="06" eyebrow="How we work" title="A Strategy Brain is two things we've already built.">
        This isn&apos;t unfamiliar territory for us. A strategy intelligence layer brings together two capabilities
        we&apos;ve built before — <Hl>research intelligence</Hl> and <Hl>brand &amp; asset knowledge</Hl>.
      </SectionHeader>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className={`reveal flex flex-col px-[18px] py-[18px] ${CARD}`}>
          <div className="flex items-center gap-3">
            <Chip className="h-10 w-10">
              <Database className="h-[18px] w-[18px] text-purple-500" strokeWidth={1.8} />
            </Chip>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{quilt.label}</div>
              <h3 className="font-display text-[18px] font-semibold leading-[1.1] tracking-[-0.01em]">{quilt.name}</h3>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-[1.42] text-neutral-700">{quilt.summary}</p>
        </div>

        <div className={`reveal flex flex-col px-[18px] py-[18px] ${CARD}`}>
          <div className="flex items-center gap-3">
            <Chip className="h-10 w-10">
              <Archive className="h-[18px] w-[18px] text-purple-500" strokeWidth={1.8} />
            </Chip>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{kittykat.label}</div>
              <h3 className="font-display text-[18px] font-semibold leading-[1.1] tracking-[-0.01em]">{kittykat.name}</h3>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-[1.42] text-neutral-700">{kittykat.summary}</p>
        </div>
      </div>

      <p className="reveal mt-4 text-[13px] leading-[1.45] text-neutral-700">
        Brought together for your strategy work — AI <b className="font-semibold text-neutral-900">amplifies</b>{" "}
        institutional knowledge; it doesn&apos;t replace strategist judgment.
      </p>

      <div className="reveal mt-4">
        <DeepDive label="See the parallels" title="What we've built">
          <div className="space-y-8">
            <Lede>{parallels.intro}</Lede>

            <Group label={`${quilt.label} · ${quilt.name}`} divided>
              <Prose>{quilt.built}</Prose>
              <div className="mt-5">
                <MicroLabel>It combines</MicroLabel>
              </div>
              <div className="mt-3">
                <Chips items={quilt.combines} />
              </div>
              <div className="mt-4">
                <Prose>{quilt.applied}</Prose>
              </div>
            </Group>

            <Group label={`${kittykat.label} · ${kittykat.name}`} divided>
              <Prose>{kittykat.built}</Prose>
              <div className="mt-5">
                <MicroLabel>It included</MicroLabel>
              </div>
              <div className="mt-3">
                <Chips items={kittykat.included} />
              </div>
              <div className="mt-4">
                <Prose>{kittykat.extends}</Prose>
              </div>
              <div className="mt-3">
                <Chips items={kittykat.extendedTo} />
              </div>
            </Group>

            <Group label="Our philosophy" divided>
              <Prose>{parallels.philosophy}</Prose>
            </Group>
          </div>
        </DeepDive>
      </div>
    </Section>
  );
}
