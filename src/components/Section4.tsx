import { Section, SectionHeader, Hl } from "./ui";

/**
 * "How it works" (s5). Shows the chlorophyll Organizational Intelligence System
 * diagram as a framed exhibit on the dark slide, with a caption.
 *
 * Image lives at: public/assets/arch-dia.png
 */
export function Section4() {
  return (
    <Section id="s8" night>
      <SectionHeader num="08" eyebrow="How it works" title="From knowledge to strategy intelligence." night>
        A structured AI knowledge platform that <Hl night>supports the strategist</Hl> — it does not replace them.
      </SectionHeader>

      <figure className="reveal mx-auto mt-6 w-full max-w-4xl md:mt-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/arch-dia.png"
            alt="chlorophyll Organizational Intelligence System: inputs — chlorophyll IP, knowledge assets, and external intelligence — feed the AI Knowledge Platform (knowledge, reasoning, and orchestration layers), which builds strategic memory and strategic cognition, routed through a human strategist to client outcomes."
            className="h-auto w-full rounded-xl"
          />
        </div>
        <figcaption className="mx-auto mt-5 max-w-2xl text-center text-body leading-[1.55] text-white/65">
          chlorophyll&apos;s inputs flow through the AI knowledge platform into strategic memory and cognition — always
          routed through a human strategist before reaching client outcomes.
        </figcaption>
      </figure>
    </Section>
  );
}
