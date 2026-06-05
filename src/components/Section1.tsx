import { Chip, Hl, Section, SectionHeader } from "./ui";
import { Compass, Send, Palette, Improve, Sparkle, Flag } from "./icons";

const CARD = "rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)]";

const buckets = [
  {
    name: "Strategy",
    area: "Area 01",
    Icon: Compass,
    selected: true,
    items: ["Workshops & templates", "Brand core", "Brand territory", "Internal algorithms", "Past cases"],
  },
  {
    name: "Marketing",
    area: "Area 02",
    Icon: Send,
    selected: false,
    items: ["Campaign planning", "Messaging themes", "Content calendars", "Channel narratives", "Reporting"],
  },
  {
    name: "Creative / Asset Creation",
    area: "Area 03",
    Icon: Palette,
    selected: false,
    items: ["On-brand routes", "Campaign narratives", "Copy families", "Visual territories", "Deck-ready concepts"],
  },
];

export function Section1() {
  return (
    <Section id="s1" first>
      <SectionHeader num="01" eyebrow="AI Transformation · Framing" title="Three areas, two lenses.">
        Chlorophyll&apos;s workflows can be explored across three independent areas — each evaluated through the{" "}
        <Hl>same two lenses</Hl>.
      </SectionHeader>

      <div className="mt-5 flex flex-col gap-3">
        {buckets.map(({ name, area, Icon, selected, items }) => (
          <div
            key={name}
            className={`reveal relative p-5 ${CARD} ${
              selected ? "border-purple-tint-40 shadow-[0_8px_22px_rgba(88,41,199,0.10)]" : ""
            }`}
          >
            {selected && (
              <span className="absolute right-[18px] top-[18px] rounded-pill bg-purple-500 px-[9px] py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white">
                Starting
              </span>
            )}
            <div className="flex items-center gap-3">
              <Chip className="h-10 w-10">
                <Icon className={`h-[19px] w-[19px] ${selected ? "text-purple-500" : "text-neutral-700"}`} />
              </Chip>
              <div>
                <h3 className="font-display text-[19px] font-semibold leading-[1.1] tracking-[-0.01em]">{name}</h3>
                <div className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{area}</div>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-[7px] border-t border-neutral-100 pt-3.5">
              {items.map((it) => (
                <li
                  key={it}
                  className={`rounded-pill px-2.5 py-1.5 text-[12.5px] leading-[1.2] ${
                    selected
                      ? "border border-lavender-tint-26 bg-lavender-tint-12 text-neutral-800"
                      : "border border-neutral-100 bg-neutral-50 text-neutral-700"
                  }`}
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
        Each evaluated through two lenses
      </div>
      <div className="mt-3.5 flex flex-col gap-3">
        <div className={`reveal flex items-start gap-3.5 px-[18px] py-4 ${CARD}`}>
          <Chip className="h-[38px] w-[38px]">
            <Improve className="h-[19px] w-[19px] text-neutral-700" />
          </Chip>
          <div>
            <div className="font-display text-[17px] font-semibold tracking-[-0.01em]">Improve</div>
            <div className="mt-[3px] text-[13px] leading-[1.34] text-neutral-700">
              Make existing workflows faster, clearer, and more efficient.
            </div>
          </div>
        </div>
        <div className={`reveal flex items-start gap-3.5 px-[18px] py-4 ${CARD}`}>
          <Chip className="h-[38px] w-[38px]">
            <Sparkle className="h-[19px] w-[19px] text-neutral-700" />
          </Chip>
          <div>
            <div className="font-display text-[17px] font-semibold tracking-[-0.01em]">Reinvent</div>
            <div className="mt-[3px] text-[13px] leading-[1.34] text-neutral-700">
              Create new ways of working using Chlorophyll&apos;s knowledge, cases, and AI.
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mt-3.5 flex items-start gap-[13px] rounded-xl border border-neutral-200 bg-neutral-50 px-[18px] py-4">
        <Chip className="h-[34px] w-[34px] border-transparent bg-purple-500">
          <Flag className="h-4 w-4 text-white" strokeWidth={1.75} />
        </Chip>
        <p className="text-[12.5px] leading-[1.42] text-neutral-700">
          For the first engagement, <b className="font-semibold text-neutral-900">Strategy is the selected starting bucket.</b> Marketing and Creative can follow the same phased model later.
        </p>
      </div>
    </Section>
  );
}
