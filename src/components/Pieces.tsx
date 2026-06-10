import { Section, SectionHeader } from "./ui";
import { Database, Archive } from "./icons";
import { MicroLabel, Chips } from "./modal-ui";
import { parallels } from "./content";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";
const PROSE = "text-[14px] leading-[1.6] text-neutral-700 md:text-[15px]";

// Quiet track-record facts — stated plainly, not as a pitch.
const track = [
  { lead: "6 years", rest: "building in the ML & agentic space" },
  { lead: "Multiple startups", rest: "scalable production solutions shipped" },
  { lead: "20+ years", rest: "average experience across a globally-seasoned team" },
];

/* ── s7: intro — the two pieces at a glance + track record ───────────── */
export function PiecesIntro() {
  const { quilt, kittykat } = parallels;
  return (
    <Section id="s7">
      <SectionHeader num="07" eyebrow="How we work" title="We've built the pieces of this before.">
        {parallels.intro}
      </SectionHeader>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        {[
          { name: quilt.name, label: quilt.label, summary: quilt.summary, Icon: Database },
          { name: kittykat.name, label: kittykat.label, summary: kittykat.summary, Icon: Archive },
        ].map(({ name, label, summary, Icon }) => (
          <div key={name} className={`reveal flex flex-col px-[18px] py-[18px] ${CARD}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-pill border border-neutral-200 bg-white">
                <Icon className="h-[18px] w-[18px] text-purple-500" strokeWidth={1.8} />
              </span>
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{label}</div>
                <h3 className="font-display text-[18px] font-semibold leading-[1.1] tracking-[-0.01em]">{name}</h3>
              </div>
            </div>
            <p className="mt-3 text-[13px] leading-[1.42] text-neutral-700">{summary}</p>
          </div>
        ))}
      </div>

      <p className="reveal mt-4 text-[13px] leading-[1.45] text-neutral-700">
        Brought together for your strategy work — AI <b className="font-semibold text-neutral-900">amplifies</b>{" "}
        institutional knowledge; it doesn&apos;t replace strategist judgment.
      </p>

      <div className="reveal mt-5 grid grid-cols-1 gap-4 border-t border-neutral-100 pt-5 sm:grid-cols-3">
        {track.map(({ lead, rest }) => (
          <div key={lead}>
            <div className="font-display text-[16px] font-semibold leading-[1.1] tracking-[-0.01em] text-neutral-900">
              {lead}
            </div>
            <div className="mt-1 text-[12px] leading-[1.4] text-neutral-600">{rest}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── s8: Quilt in detail ─────────────────────────────────────────────── */
export function PieceQuilt() {
  const { quilt } = parallels;
  return (
    <Section id="s8">
      <SectionHeader num="08" eyebrow="How we work" title="Quilt — research intelligence.">
        {quilt.built}
      </SectionHeader>

      <div className="reveal mt-6">
        <MicroLabel>It combines</MicroLabel>
        <div className="mt-3">
          <Chips items={quilt.combines} />
        </div>
      </div>

      <p className={`reveal mt-6 ${PROSE}`}>{quilt.applied}</p>
    </Section>
  );
}

/* ── s9: KittyKat in detail ──────────────────────────────────────────── */
export function PieceKittyKat() {
  const { kittykat } = parallels;
  return (
    <Section id="s9">
      <SectionHeader num="09" eyebrow="How we work" title="KittyKat — brand & asset knowledge.">
        {kittykat.built}
      </SectionHeader>

      <div className="reveal mt-6">
        <MicroLabel>It included</MicroLabel>
        <div className="mt-3">
          <Chips items={kittykat.included} />
        </div>
      </div>

      <div className="reveal mt-6">
        <p className={PROSE}>{kittykat.extends}</p>
        <div className="mt-3">
          <Chips items={kittykat.extendedTo} />
        </div>
      </div>

      <p className={`reveal mt-6 border-t border-neutral-100 pt-5 ${PROSE}`}>{parallels.philosophy}</p>
    </Section>
  );
}
