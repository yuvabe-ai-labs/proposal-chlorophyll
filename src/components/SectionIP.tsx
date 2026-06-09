import { Section, SectionHeader, Hl, Chip } from "./ui";
import { DeepDive } from "./DeepDive";
import { Shield, BookOpen } from "./icons";
import { ipFrameworks, sovereignty } from "./content";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

// Short, faithful role labels for the top-level cards; full detail lives in the deep-dive.
const roles: Record<string, string> = {
  "anthrop™": "Brand understanding",
  "wholon™": "Synthesis to a whole",
  "ideantity™": "Identity & meaning",
  "litmosi™": "Language & expression",
};

export function SectionIP() {
  return (
    <Section id="s3">
      <SectionHeader num="03" eyebrow="Your IP" title="Your methods, studied — never assumed.">
        Chlorophyll&apos;s work is shaped by proprietary thinking — anthrop™, wholon™, ideantity™, and litmosi™. Discovery
        studies how these are <Hl>actually used</Hl>, and everything stays <Hl>owned and protected</Hl> throughout.
      </SectionHeader>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {ipFrameworks.map(({ name }) => (
          <div key={name} className={`reveal flex flex-col px-4 py-4 ${CARD}`}>
            <span className="font-display text-[17px] font-semibold tracking-[-0.01em] text-neutral-900">{name}</span>
            <span className="mt-1.5 text-[12px] leading-[1.35] text-neutral-600">{roles[name]}</span>
          </div>
        ))}
      </div>

      <div className="reveal mt-3.5 flex items-start gap-[13px] rounded-xl border border-neutral-200 bg-neutral-50 px-[18px] py-4">
        <Chip className="h-[34px] w-[34px] border-transparent bg-purple-500">
          <Shield className="h-[17px] w-[17px] text-white" strokeWidth={1.8} />
        </Chip>
        <p className="text-[12.5px] leading-[1.42] text-neutral-700">
          Chlorophyll owns all source material, derived structures, and outputs. Data is{" "}
          <b className="font-semibold text-neutral-900">never used to train external models</b>, access is controlled, and
          strategists stay responsible for client-facing work.
        </p>
      </div>

      <div className="reveal mt-4">
        <DeepDive label="What discovery clarifies" title="Your IP — studied & protected">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-purple-500">
            <BookOpen className="h-3.5 w-3.5" strokeWidth={2} />
            What discovery clarifies
          </div>
          <dl className="mt-3 divide-y divide-neutral-100 border-y border-neutral-100">
            {ipFrameworks.map(({ name, clarifies }) => (
              <div key={name} className="grid gap-1 py-3 sm:grid-cols-[140px_1fr] sm:gap-4">
                <dt className="font-display text-[15px] font-semibold tracking-[-0.01em] text-neutral-900">{name}</dt>
                <dd className="text-[13px] leading-[1.45] text-neutral-700">{clarifies}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-purple-500">
            <Shield className="h-3.5 w-3.5" strokeWidth={2} />
            How your IP stays protected
          </div>
          <dl className="mt-3 divide-y divide-neutral-100 border-y border-neutral-100">
            {sovereignty.map(({ principle, meaning }) => (
              <div key={principle} className="grid gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
                <dt className="text-[13px] font-semibold text-neutral-900">{principle}</dt>
                <dd className="text-[13px] leading-[1.45] text-neutral-700">{meaning}</dd>
              </div>
            ))}
          </dl>
        </DeepDive>
      </div>
    </Section>
  );
}
