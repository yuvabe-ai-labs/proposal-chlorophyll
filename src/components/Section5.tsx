import type { ComponentType, SVGProps } from "react";
import { Section, SectionHeader, Hl, Chip } from "./ui";
import { Compass, Send, Palette, Copy, Grid, CircleCheck } from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;
const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

const steps = [
  ["P1", "Discovery"],
  ["P2", "Direction validation"],
  ["P3", "Internal build"],
  ["P4", "External augmentation"],
  ["P5", "Integration"],
];

const ghosts: { name: string; Icon: Icon }[] = [
  { name: "Marketing", Icon: Send },
  { name: "Creative / Asset Creation", Icon: Palette },
];

const notes: { Icon: Icon; title: string; body: string }[] = [
  {
    Icon: Grid,
    title: "The transformation stays modular.",
    body: "Each bucket gets its own discovery, validation, build, external augmentation, and integration path — instead of forcing one large AI system across the organization.",
  },
  {
    Icon: CircleCheck,
    title: "Strategy proves the approach first.",
    body: "Marketing and Creative follow the same phased model once the approach is validated on Strategy.",
  },
];

export function Section5() {
  return (
    <Section id="s4">
      <SectionHeader num="04" eyebrow="Scaling the Model" title="One model, repeated across buckets.">
        Once Strategy is validated, the same phased approach extends — <Hl>independently</Hl> — to Marketing and Creative.
      </SectionHeader>

      {/* primary track */}
      <div className={`reveal mt-3.5 p-[18px] ${CARD} border-purple-tint-30 shadow-[0_6px_18px_rgba(11,15,25,0.06)]`}>
        <div className="flex items-center gap-[11px]">
          <Chip className="h-9 w-9 border-transparent bg-purple-500">
            <Compass className="h-[18px] w-[18px] text-white" />
          </Chip>
          <div>
            <h3 className="font-display text-[18px] font-semibold leading-[1.05] tracking-[-0.01em]">Strategy</h3>
            <div className="mt-[3px] text-[10.5px] font-semibold tracking-[0.03em] text-purple-500">First implementation track</div>
          </div>
        </div>
        <div className="mt-3.5 flex flex-wrap gap-[6px]">
          {steps.map(([sn, label]) => (
            <span key={sn} className="flex items-center gap-[6px] rounded-pill border border-purple-tint-16 bg-purple-tint-06 px-2.5 py-1.5 text-[11.5px] font-medium text-neutral-800">
              <span className="text-[9px] font-bold tracking-[0.06em] text-purple-500">{sn}</span>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ghost tracks */}
      {ghosts.map(({ name, Icon }) => (
        <div key={name} className={`reveal mt-3.5 bg-neutral-50 p-[18px] ${CARD}`}>
          <div className="flex items-center gap-[11px]">
            <Chip className="h-9 w-9">
              <Icon className="h-[18px] w-[18px] text-neutral-700" />
            </Chip>
            <div>
              <h3 className="font-display text-[18px] font-semibold leading-[1.05] tracking-[-0.01em]">{name}</h3>
              <div className="mt-[3px] text-[10.5px] font-semibold tracking-[0.03em] text-neutral-500">Follows once validated</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-[9px] text-[12px] font-medium text-neutral-700">
            <Copy className="h-[15px] w-[15px] flex-none text-lavender-500" strokeWidth={1.9} />
            Same phased model — its own discovery → integration path.
          </div>
        </div>
      ))}

      {/* closing notes */}
      {notes.map(({ Icon, title, body }) => (
        <div key={title} className={`reveal mt-3.5 flex items-start gap-[13px] px-[18px] py-4 ${CARD}`}>
          <Chip className="h-9 w-9">
            <Icon className="h-[17px] w-[17px] text-purple-500" />
          </Chip>
          <div>
            <h5 className="mb-1 mt-px font-display text-[15px] font-semibold tracking-[-0.01em]">{title}</h5>
            <p className="text-[12.5px] leading-[1.42] text-neutral-700">{body}</p>
          </div>
        </div>
      ))}
    </Section>
  );
}
