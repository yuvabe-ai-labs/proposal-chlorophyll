import type { ComponentType, SVGProps } from "react";
import { Section, SectionHeader, Hl } from "./ui";
import { Bars, Database, Globe, Cpu, Network, GitBranch, Workflow, Archive, BrainCog, User, Target } from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;
type Variant = "default" | "cog" | "out" | "human";

const variants: Record<Variant, { card: string; nico: string; icon: string }> = {
  default: {
    card: "bg-white/5 border-white/[0.13]",
    nico: "bg-[rgba(150,136,192,0.16)] border-[rgba(150,136,192,0.3)]",
    icon: "text-lavender-200",
  },
  cog: {
    card: "bg-cog border-[rgba(150,136,192,0.36)]",
    nico: "bg-[rgba(255,202,45,0.16)] border-[rgba(255,202,45,0.32)]",
    icon: "text-yellow-500",
  },
  out: {
    card: "bg-out border-[rgba(255,202,45,0.28)]",
    nico: "bg-[rgba(255,202,45,0.18)] border-[rgba(255,202,45,0.34)]",
    icon: "text-yellow-500",
  },
  human: {
    card: "bg-white/5 border-white/[0.13]",
    nico: "bg-white/[0.12] border-white/[0.22]",
    icon: "text-white",
  },
};

function NCard({ Icon, title, tags, variant = "default" }: { Icon: Icon; title: string; tags: string[]; variant?: Variant }) {
  const v = variants[variant];
  return (
    <div className={`reveal rounded-[13px] border px-4 py-3.5 ${v.card}`}>
      <div className="mb-[9px] flex items-center gap-2.5">
        <span className={`grid h-[30px] w-[30px] flex-none place-items-center rounded-lg border ${v.nico}`}>
          <Icon className={`h-4 w-4 ${v.icon}`} strokeWidth={1.8} />
        </span>
        <span className="font-display text-[15px] font-semibold leading-[1.1] tracking-[-0.01em] text-white">{title}</span>
      </div>
      <Tags tags={tags} />
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-[5px]">
      {tags.map((t) => (
        <span key={t} className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-[3px] text-[11px] leading-[1.15] text-white/75">
          {t}
        </span>
      ))}
    </div>
  );
}

function GrpLabel({ children, first = false }: { children: string; first?: boolean }) {
  return (
    <div className={`mb-[9px] text-[9.5px] font-bold uppercase tracking-[0.14em] text-lavender-200 ${first ? "mt-0" : "mt-[18px]"}`}>
      {children}
    </div>
  );
}

function NConn() {
  return <div className="mx-auto my-[7px] h-[15px] w-0.5 bg-[rgba(150,136,192,0.5)]" />;
}

export function Section4() {
  return (
    <Section id="s3" night>
      <SectionHeader num="03" eyebrow="Technical Approach" title="From knowledge to strategy intelligence." night>
        A structured AI knowledge platform that <Hl night>supports the strategist</Hl> — it does not replace them.
      </SectionHeader>

      <div className="mt-[22px] flex flex-col items-stretch">
        <GrpLabel first>Inputs</GrpLabel>
        <NCard Icon={Bars} title="Chlorophyll IP" tags={["Brand Core", "Brand Territory", "Strategy Algorithms", "Founder Knowledge", "Workshop Templates"]} />
        <NConn />
        <NCard Icon={Database} title="Knowledge Assets" tags={["Historical Cases", "Recommendations", "Research", "Workshop Decks"]} />
        <NConn />
        <NCard Icon={Globe} title="External Intelligence" tags={["Market Signals", "Competitors", "Culture", "Audience Insights"]} />

        <GrpLabel>Platform</GrpLabel>
        <div className="reveal flex items-center gap-[13px] rounded-[13px] border border-[rgba(150,136,192,0.42)] bg-platform px-4 py-3.5">
          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[9px] bg-white/15">
            <Cpu className="h-[19px] w-[19px] text-white" strokeWidth={1.8} />
          </span>
          <div>
            <div className="font-display text-[17px] font-semibold tracking-[-0.01em] text-white">AI Knowledge Platform</div>
            <div className="mt-0.5 text-[11.5px] leading-[1.3] text-white/[0.66]">
              Organizes IP, cases, frameworks, algorithms &amp; external intelligence into one structured system.
            </div>
          </div>
        </div>

        <GrpLabel>Three layers</GrpLabel>
        <div className="reveal flex flex-col gap-2.5">
          <NCard Icon={Network} title="Knowledge Layer" tags={["Representation", "Semantic Understanding", "Retrieval", "Ranking"]} />
          <div className="grid grid-cols-2 gap-2.5">
            <NCard Icon={GitBranch} title="Reasoning" tags={["Agentic Reasoning", "Pattern Discovery"]} />
            <NCard Icon={Workflow} title="Orchestration" tags={["Context Assembly", "Workflow Intelligence"]} />
          </div>
        </div>

        <GrpLabel>Memory &amp; cognition</GrpLabel>
        <NCard Icon={Archive} title="Strategic Memory — what Chlorophyll knows" tags={["Cases", "Research", "Frameworks", "Algorithms", "Institutional Knowledge"]} />
        <NConn />
        <NCard Icon={BrainCog} title="Strategic Cognition — how Chlorophyll thinks" tags={["Pattern Recognition", "Territory Exploration", "Tension Analysis", "Opportunity Discovery"]} variant="cog" />

        <GrpLabel>Strategist &amp; outcomes</GrpLabel>
        <NCard Icon={User} title="Human Strategist" tags={["Judgment", "Creativity", "Context"]} variant="human" />
        <NConn />
        <NCard Icon={Target} title="Client Outcomes" tags={["Better Decisions", "Institutionalized Expertise", "Faster Development", "Competitive Advantage"]} variant="out" />
      </div>

      <div className="reveal mt-[18px] flex items-start gap-3">
        <span className="flex-none font-display text-[34px] font-semibold leading-[0.8] text-lavender-200">&ldquo;</span>
        <p className="text-[12.5px] leading-[1.42] text-white/[0.82]">
          The system does not replace the strategist. It{" "}
          <b className="font-semibold text-white">organizes Chlorophyll&apos;s IP, cases, frameworks, algorithms, and external intelligence</b>{" "}
          into a structured AI knowledge platform that supports strategic thinking.
        </p>
      </div>
    </Section>
  );
}
