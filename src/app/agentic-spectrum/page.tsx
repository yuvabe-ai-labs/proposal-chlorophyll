import type { Metadata } from "next";
import Link from "next/link";
import { Doc, TopBar, Section, SectionHeader, Hl, Footer } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Agentic Spectrum — chlorophyll × Yuvabe",
  description: "From recall to operate — the vision, and what this engagement delivers.",
};

/* The six rungs of the spectrum. Indent rises Recall → Operate so the list
   reads as a climb on wide screens; flat on mobile. `scope` marks what this
   engagement commits to vs. the future horizons. */
type Scope = "in" | "partial" | "horizon";

type Rung = {
  n: string;
  name: string;
  line: string;
  eg: string;
  skill: string;
  process: string;
  knowledge: string;
  scope: Scope;
  indent: string;
};

const RUNGS: Rung[] = [
  {
    n: "01", name: "Recall", line: "find the relevant past work",
    eg: "Surface the 3 closest past cases for this brief.",
    skill: "retrieval & similarity search",
    process: "recalling & reusing past cases",
    knowledge: "past case decks + their metadata",
    scope: "in",
    indent: "lg:ml-0",
  },
  {
    n: "02", name: "Assist", line: "draft a first cut in your voice",
    eg: "Draft a first-cut brand territory from this brief.",
    skill: "drafting in your voice",
    process: "the first-draft / briefing routine",
    knowledge: "templates, house voice, exemplars",
    scope: "in",
    indent: "lg:ml-10",
  },
  {
    n: "03", name: "Reason", line: "run a multi-step strategy chain",
    eg: "Brief → category map → three tested territory options.",
    skill: "chaining + framework application",
    process: "brief → brand core → territory → options",
    knowledge: "frameworks, algorithms, past patterns",
    scope: "partial",
    indent: "lg:ml-20",
  },
  {
    n: "04", name: "Critique", line: "challenge & stress-test",
    eg: "Where does this positioning break against the market?",
    skill: "red-teaming + consistency checks",
    process: "the challenge & decision points",
    knowledge: "quality signals, past rejections, market data",
    scope: "horizon",
    indent: "lg:ml-30",
  },
  {
    n: "05", name: "Orchestrate", line: "coordinate specialist agents",
    eg: "A synthetic workshop: analyst, semiotician & contrarian debate.",
    skill: "multi-agent orchestration",
    process: "the strategy workshop flow",
    knowledge: "role archetypes, workshop scripts",
    scope: "horizon",
    indent: "lg:ml-40",
  },
  {
    n: "06", name: "Operate", line: "run end-to-end, human-gated",
    eg: "Brief in → draft territories out, you approve at each gate.",
    skill: "end-to-end execution + gating",
    process: "delivery & sign-off, end to end",
    knowledge: "live briefs, outcomes, governance rules",
    scope: "horizon",
    indent: "lg:ml-50",
  },
];

const BLOCKS: { k: string; v: string }[] = [
  { k: "Skill", v: "the AI skill we build" },
  { k: "Process", v: "the chlorophyll method it codifies" },
  { k: "Knowledge", v: "what data exists or might be needed" },
];

/* Scope badge — label + night-slide palette per status. */
const SCOPE: Record<Scope, { label: string; cls: string }> = {
  in: { label: "In scope", cls: "border-lavender-200/30 bg-lavender-200/12 text-lavender-200" },
  partial: { label: "In scope · early", cls: "border-yellow-500/35 bg-yellow-500/12 text-yellow-500" },
  horizon: { label: "Shaped by Discovery", cls: "border-dashed border-lavender-200/40 bg-transparent text-lavender-200/80" },
};

/* Companion notes shown under the reference-architecture diagram. `lead` is a
   scannable bold anchor; `body` is the verbatim note text. */
const ARCH_NOTES: { lead: string; body: string }[] = [
  {
    lead: "Grounded in experience",
    body: "The proposed reference architecture is based on industry best practices and our prior experience building AI-powered knowledge and intelligence platforms.",
  },
  {
    lead: "Illustrative, not fixed",
    body: "It is intended to illustrate the overall solution approach, and specific technology choices may evolve during Discovery.",
  },
  {
    lead: "Finalized in Discovery",
    body: "Cloud providers, AI models, databases, and managed services will be finalized based on security, scalability, governance, and cost requirements.",
  },
  {
    lead: "Independent of the stack",
    body: "The core architecture principles — organizational memory, strategic reasoning, multi-agent orchestration, and human-in-the-loop decision support — remain independent of the underlying technology stack.",
  },
];

export default function AgenticSpectrumPage() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <TopBar />

        {/* ── Slide 1 · the vision: the full ladder ──────────────────────── */}
        <Section id="spectrum" night first>
          <Link
            href="/"
            className="reveal mb-5 inline-flex w-fit items-center gap-1.5 rounded-pill border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/70 transition-colors hover:bg-white/[0.08]"
          >
            ← Back to the proposal
          </Link>

          <SectionHeader
            num="01"
            eyebrow="The agentic spectrum"
            title="From recall to operate."
            night
          >
            AI doesn&apos;t arrive as one capability — it <Hl night>climbs a ladder</Hl>. Here&apos;s the
            full arc, and the three things every rung is built from.
          </SectionHeader>

          {/* the ladder */}
          <div className="reveal mt-7 flex flex-col gap-2.5">
            {RUNGS.map((r) => (
              <div
                key={r.n}
                className={`flex items-baseline gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 lg:max-w-2xl ${r.indent}`}
              >
                <span className="font-display text-[11px] font-semibold tracking-[0.12em] text-lavender-200">
                  {r.n}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-display text-[15px] font-semibold leading-none text-neutral-25">
                        {r.name}
                      </span>
                      <span className="text-[13px] leading-snug text-white/65">— {r.line}</span>
                    </div>
                    <span
                      className={`mt-0.5 shrink-0 rounded-pill border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em] ${SCOPE[r.scope].cls}`}
                    >
                      {SCOPE[r.scope].label}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] italic leading-snug text-white/45">e.g. {r.eg}</p>

                  <div className="mt-2.5 grid grid-cols-1 gap-x-4 gap-y-1.5 border-t border-white/8 pt-2.5 sm:grid-cols-3">
                    {[
                      { k: "Skill", v: r.skill },
                      { k: "Process", v: r.process },
                      { k: "Knowledge", v: r.knowledge },
                    ].map((x) => (
                      <div key={x.k} className="leading-snug">
                        <span className="block font-display text-[9.5px] font-semibold uppercase tracking-[0.1em] text-lavender-200">
                          {x.k}
                        </span>
                        <span className="mt-0.5 block text-[11.5px] text-white/55">{x.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* the three building blocks */}
          <div className="reveal mt-6 flex flex-wrap gap-2">
            {BLOCKS.map((b) => (
              <span
                key={b.k}
                className="inline-flex items-baseline gap-1.5 rounded-pill border border-white/12 bg-white/[0.03] px-3.5 py-2 text-[12.5px]"
              >
                <span className="font-display font-semibold text-lavender-200">{b.k}</span>
                <span className="text-white/55">— {b.v}</span>
              </span>
            ))}
          </div>

          <p className="reveal mt-5 text-[12.5px] leading-[1.5] text-white/55">
            Cumulative — each rung inherits the ones below it. And the{" "}
            <span className="text-white/80">Knowledge Base is the gating dependency</span>: you can&apos;t
            build the higher rungs until it encodes chlorophyll&apos;s method, not just its documents.
          </p>

          <div className="reveal mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 lg:max-w-2xl">
            <p className="text-[13px] leading-[1.55] text-white/70">
              <span className="font-semibold text-lavender-200">This engagement</span> commits to
              Recall, Assist and early Reason. Critique, Orchestrate and Operate are{" "}
              <span className="text-white/85">advanced capabilities</span> — shaped by Discovery, then
              built as the foundation proves out. The lower rungs are the commitment; the higher rungs
              are the trajectory.
            </p>
          </div>
        </Section>

        {/* ── Slide 2 · the reference architecture ───────────────────────── */}
        <Section id="architecture">
          <SectionHeader
            num="02"
            eyebrow="Under the hood"
            title="The multi-agent strategy brain."
          >
            A <Hl>cloud-agnostic</Hl> reference architecture for the full build — across AWS and GCP.
            This is the destination the spectrum points to; indicative, with the exact shape set in
            Discovery.
          </SectionHeader>

          <figure className="reveal mt-6 w-full">
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_4px_14px_rgba(11,15,25,0.05)] md:p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Chlorophyll_Multi_Agent_Architecture.drawio.png"
                alt="Chlorophyll Multi-Agent Strategy Brain — physical/cloud architecture: users and clients flow through edge & delivery into the chlorophyll platform (Next.js app and backend services), a multi-agent Strategy Brain layer (research, insight, strategy, recommendation and learning agents over an orchestration bus and LLM model layer), a data & knowledge layer, an ingestion & processing pipeline, cloud infrastructure, and security/governance — cloud-agnostic across AWS and GCP."
                className="block h-auto w-full min-w-[820px] rounded-xl"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-3 text-[12px] text-neutral-500">
              <span>Reference architecture — the full multi-agent vision, not this engagement&apos;s scope.</span>
              <span className="whitespace-nowrap text-neutral-400 sm:hidden">scroll to explore →</span>
            </figcaption>
          </figure>

          <div className="reveal mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 lg:max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-500">
              On this architecture
            </div>
            <div className="mt-3.5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {ARCH_NOTES.map((n) => (
                <div key={n.lead} className="flex items-start gap-2.5">
                  <span className="mt-[11px] h-[5px] w-[5px] flex-none rounded-full bg-purple-tint-40" />
                  <p className="text-[16px] leading-[1.6] text-neutral-700">
                    <span className="font-semibold text-neutral-900">{n.lead}</span>
                    <span className="text-neutral-300"> — </span>
                    {n.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Footer />
      </Doc>
    </main>
  );
}
