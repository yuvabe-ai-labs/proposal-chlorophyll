import { Section, SectionHeader } from "./ui";
import { Chips, MicroLabel } from "./modal-ui";
import { PlatformExhibit, type Capability } from "./PlatformExhibit";
import { ComparisonMatrix } from "./ComparisonMatrix";
import { Network, BrainCog, Globe, Database, Search, Sparkle, Archive, Palette, Target, Copy } from "./icons";
import { parallels, comparison, capabilities } from "./content";

const QUILT_LOGO = "/assets/quilt-logo.png";
const KK_LOGO = "/assets/kk-logo.png";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";
const PROSE = "text-body leading-[1.6] text-neutral-700 md:text-[15px]";

// Capability → icon maps for the platform exhibits. Labels are tightened for
// the diagram; the fuller phrasing still appears in the prose around it.
const QUILT_CAPS: Capability[] = [
  { label: "Multi-source research", Icon: Globe },
  { label: "Knowledge organization", Icon: Database },
  { label: "Pattern discovery", Icon: Network },
  { label: "Semantic retrieval", Icon: Search },
  { label: "Insight generation", Icon: Sparkle },
];
const KK_CAPS: Capability[] = [
  { label: "Brand memory", Icon: Archive },
  { label: "Asset intelligence", Icon: Palette },
  { label: "Knowledge retrieval", Icon: Search },
  { label: "Context-aware recs", Icon: Target },
  { label: "Knowledge reuse", Icon: Copy },
];

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
      <SectionHeader num="07" eyebrow="How we work" title="We've built two of these before.">
        {parallels.intro}
      </SectionHeader>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        {[
          { name: quilt.name, label: quilt.label, summary: quilt.summary, logo: QUILT_LOGO, logoH: "h-[26px]" },
          { name: kittykat.name, label: kittykat.label, summary: kittykat.summary, logo: KK_LOGO, logoH: "h-[22px]" },
        ].map(({ name, label, summary, logo, logoH }) => (
          <div key={name} className={`reveal flex flex-col px-[18px] py-[18px] ${CARD}`}>
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{label}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={name} className={`mt-2.5 w-auto self-start ${logoH}`} />
            <p className="mt-3 text-body leading-[1.42] text-neutral-700">{summary}</p>
          </div>
        ))}
      </div>

      <p className="reveal mt-4 text-body leading-[1.45] text-neutral-700">
        Brought together for your strategy work — AI <b className="font-semibold text-neutral-900">amplifies</b>{" "}
        institutional knowledge; it doesn&apos;t replace strategist judgment.
      </p>

      <div className="reveal mt-5 grid grid-cols-1 gap-4 border-t border-neutral-100 pt-5 sm:grid-cols-3">
        {track.map(({ lead, rest }) => (
          <div key={lead}>
            <div className="font-display text-[16px] font-semibold leading-[1.1] tracking-[-0.01em] text-neutral-900">
              {lead}
            </div>
            <div className="mt-1 text-body leading-[1.4] text-neutral-600">{rest}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── s8: Why Yuvabe — the three-domain comparison matrix ─────────────── */
export function PiecesCompare() {
  return (
    <Section id="s8">
      <SectionHeader num="08" eyebrow="Why Yuvabe" title="The same system, three domains.">
        {comparison.intro}
      </SectionHeader>

      <div className="reveal mt-6">
        <ComparisonMatrix columns={comparison.columns} rows={comparison.rows} />
      </div>

      <div className="reveal mt-6 border-t border-neutral-100 pt-5">
        <MicroLabel>Proven building blocks</MicroLabel>
        <div className="mt-3">
          <Chips items={capabilities} />
        </div>
      </div>

      <p className={`reveal mt-6 ${PROSE}`}>{parallels.philosophy}</p>
    </Section>
  );
}

/* ── Appendix · Quilt in detail ──────────────────────────────────────── */
export function PieceQuilt() {
  const { quilt } = parallels;
  return (
    <Section id="s10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={QUILT_LOGO} alt="Quilt" className="reveal mb-4 h-7 w-auto self-start" />
      <SectionHeader num="A1" eyebrow="Appendix" title="Quilt — research intelligence.">
        {quilt.built}
      </SectionHeader>

      <div className="reveal mt-6">
        <PlatformExhibit
          name={quilt.name}
          label={quilt.label}
          shift={quilt.shift}
          capabilities={QUILT_CAPS}
          CoreIcon={Network}
        />
      </div>

      <p className={`reveal mt-6 ${PROSE}`}>{quilt.applied}</p>
    </Section>
  );
}

/* ── Appendix · KittyKat in detail ───────────────────────────────────── */
export function PieceKittyKat() {
  const { kittykat } = parallels;
  return (
    <Section id="s11">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={KK_LOGO} alt="KittyKat" className="reveal mb-4 h-6 w-auto self-start" />
      <SectionHeader num="A2" eyebrow="Appendix" title="KittyKat — brand & asset knowledge.">
        {kittykat.built}
      </SectionHeader>

      <div className="reveal mt-6">
        <PlatformExhibit
          name={kittykat.name}
          label={kittykat.label}
          shift={kittykat.shift}
          capabilities={KK_CAPS}
          CoreIcon={BrainCog}
        />
      </div>

      <div className="reveal mt-6">
        <p className={PROSE}>{kittykat.extends}</p>
        <div className="mt-3">
          <Chips items={kittykat.extendedTo} />
        </div>
      </div>
    </Section>
  );
}
