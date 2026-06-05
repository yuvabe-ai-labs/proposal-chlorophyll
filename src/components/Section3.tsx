import { Section, SectionHeader, Hl } from "./ui";
import { Rocket, Info } from "./icons";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

function VNode({ phase, title, tone }: { phase: string; title: string; tone: "pre" | "post" }) {
  return (
    <div className={`reveal flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-[18px] py-3.5`}>
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{phase}</span>
        <div className="mt-px font-display text-[15px] font-semibold leading-[1.1] tracking-[-0.01em]">{title}</div>
      </div>
      <span className="sr-only">{tone}</span>
    </div>
  );
}

function Conn({ hot = false }: { hot?: boolean }) {
  return <div className={`mx-auto h-4 w-0.5 ${hot ? "bg-purple-500" : "bg-neutral-200"}`} />;
}

const stages = [
  { dot: "bg-neutral-400", title: "Before launch", body: "Understand the workflow, validate the direction, and build the internal Strategy Brain.", b2: false },
  { dot: "bg-purple-500", title: "First launch", body: "The internal Strategy Brain is used inside live strategy workflows for the first time.", b2: true },
  { dot: "bg-lavender-500", title: "After launch", body: "Add external research and integrate it into a single, connected workflow.", b2: false },
];

export function Section3() {
  return (
    <Section id="s3">
      <SectionHeader num="03" eyebrow="Launch Sequencing" title="Phase 3 is the first live launch.">
        First production use lands around <Hl>week 7–10</Hl>, after Strategy Brain – Part 2.
      </SectionHeader>

      <div className="mt-6 flex flex-col items-stretch">
        <VNode phase="Phase 1" title="Discovery" tone="pre" />
        <Conn />
        <VNode phase="Phase 2" title="Validate direction" tone="pre" />
        <Conn />
        <VNode phase="Phase 3" title="Internal Strategy Brain" tone="pre" />
        <Conn hot />
        <div className="reveal flex items-center gap-3 rounded-lg border border-purple-500 bg-purple-500 px-[18px] py-3.5 shadow-[0_10px_26px_rgba(88,41,199,0.24)]">
          <div className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/[0.18]">
            <Rocket className="h-[17px] w-[17px] text-white" strokeWidth={2.1} />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80">Milestone</span>
            <div className="mt-px font-display text-[17px] font-semibold leading-[1.1] tracking-[-0.01em] text-white">First launch</div>
            <div className="mt-0.5 text-[10px] font-semibold tracking-[0.02em] text-white/80">≈ Week 7–10</div>
          </div>
        </div>
        <Conn />
        <VNode phase="Phase 4" title="External research" tone="post" />
        <Conn />
        <VNode phase="Phase 5" title="Integration" tone="post" />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {stages.map((s) => (
          <div key={s.title} className={`reveal flex items-start gap-[13px] px-[18px] py-4 ${CARD} ${s.b2 ? "border-purple-tint-30" : ""}`}>
            <span className={`mt-1.5 h-2.5 w-2.5 flex-none rounded-full ${s.dot}`} />
            <div>
              <h4 className="font-display text-[16px] font-semibold tracking-[-0.01em]">{s.title}</h4>
              <p className="mt-[5px] text-[13px] leading-[1.42] text-neutral-700">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-3.5 flex items-start gap-[13px] rounded-lg border border-neutral-200 border-l-[3px] border-l-purple-500 bg-neutral-50 px-[18px] py-4">
        <Info className="mt-px h-5 w-5 flex-none text-purple-500" strokeWidth={1.9} />
        <p className="text-[13.5px] leading-[1.44] text-neutral-900">
          The first launch is <b className="font-semibold">not the final system.</b> It is the first production use of Chlorophyll&apos;s internal Strategy Brain inside real strategy work.
        </p>
      </div>
    </Section>
  );
}
