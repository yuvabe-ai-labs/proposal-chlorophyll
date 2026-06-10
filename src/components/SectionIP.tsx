import { Section, SectionHeader, Hl } from "./ui";
import { Reveal } from "./Reveal";
import { Shield } from "./icons";
import { Group, Defs } from "./modal-ui";
import { ipFrameworks, sovereignty } from "./content";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

export function SectionIP() {
  return (
    <Section id="s3">
      <SectionHeader num="03" eyebrow="Your IP" title="Your methods, studied — never assumed.">
        Chlorophyll&apos;s work is shaped by proprietary thinking — anthrop™, wholon™, ideantity™, and litmosi™. Discovery
        studies how these are <Hl>actually used</Hl>, and everything stays <Hl>owned and protected</Hl> throughout.
      </SectionHeader>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {ipFrameworks.map(({ name, label, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal group flex flex-col px-4 py-4 transition-colors hover:border-purple-tint-40 ${CARD}`}
          >
            <span className="flex items-center justify-between gap-2">
              <span className="font-display text-[17px] font-semibold tracking-[-0.01em] text-neutral-900">{name}</span>
              <span aria-hidden className="text-[12px] text-neutral-300 transition-colors group-hover:text-purple-500">
                ↗
              </span>
            </span>
            <span className="mt-1.5 text-[12px] leading-[1.35] text-neutral-600">{label}</span>
          </a>
        ))}
      </div>

      <div className="reveal mt-3.5 flex items-start gap-[13px] rounded-xl border border-neutral-200 bg-neutral-50 px-[18px] py-4">
        <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-pill bg-purple-500">
          <Shield className="h-[17px] w-[17px] text-white" strokeWidth={1.8} />
        </span>
        <p className="text-[12.5px] leading-[1.42] text-neutral-700">
          Chlorophyll owns all source material, derived structures, and outputs. Data is{" "}
          <b className="font-semibold text-neutral-900">never used to train external models</b>, access is controlled, and
          strategists stay responsible for client-facing work.
        </p>
      </div>

      <div className="reveal mt-4">
        <Reveal label="What discovery clarifies">
          <div className={`${CARD} space-y-8 px-5 py-5 md:px-6 md:py-6`}>
            <Group label="What discovery clarifies">
              <Defs rows={ipFrameworks.map((f) => ({ term: f.name, desc: f.clarifies }))} />
            </Group>
            <Group label="How your IP stays protected" divided>
              <Defs rows={sovereignty.map((s) => ({ term: s.principle, desc: s.meaning }))} />
            </Group>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
