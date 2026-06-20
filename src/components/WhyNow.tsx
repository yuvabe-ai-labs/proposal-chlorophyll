import { Section, SectionHeader, Hl } from "./ui";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

const stats: { figure: string; unit: string; note: string; href?: string }[] = [
  { figure: "27", unit: "years", note: "of strategic & creative work" },
  { figure: "400", unit: "brands", note: "shaped across categories" },
  { figure: "4", unit: "proprietary methods", note: "anthrop™ · wholon™ · ideantity™ · litmosi™", href: "#s3" },
];

export function WhyNow() {
  return (
    <Section id="s1" first>
      <SectionHeader num="01" eyebrow="Context" title="Making 27 years of strategy easier to reach.">
        chlorophyll&apos;s strategic and creative knowledge lives in people, workshops, decks, templates, and proprietary
        methods. There&apos;s a real opportunity to make that knowledge <Hl>easier to access, apply, and reuse</Hl> — with
        strategist judgment kept at the center.
      </SectionHeader>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map(({ figure, unit, note, href }) => {
          const body = (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[34px] font-semibold leading-none tracking-[-0.02em] text-neutral-900">
                  {figure}
                </span>
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-purple-500">{unit}</span>
              </div>
              <div className="mt-2 text-body leading-[1.4] text-neutral-600">{note}</div>
              {href && (
                <span className="mt-3 inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-purple-500">
                More
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              )}
            </>
          );
          return href ? (
            <a
              key={unit}
              href={href}
              className={`reveal group flex flex-col px-[18px] py-5 transition-colors hover:border-purple-tint-40 ${CARD}`}
            >
              {body}
            </a>
          ) : (
            <div key={unit} className={`reveal flex flex-col px-[18px] py-5 ${CARD}`}>
              {body}
            </div>
          );
        })}
      </div>

      <p className="reveal mt-6 text-body leading-[1.5] text-neutral-700 md:text-[15px]">
        The aim isn&apos;t to replace how chlorophyll thinks — it&apos;s to make that thinking{" "}
        <Hl>easier to access, apply, teach, and scale</Hl> across strategy, and later marketing and creative work.
      </p>
    </Section>
  );
}
