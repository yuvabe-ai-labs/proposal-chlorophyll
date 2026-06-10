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
    <Section id="s2">
      <SectionHeader num="02" eyebrow="Framing" title="Three areas, two lenses.">
        Chlorophyll&apos;s workflows can be explored across three independent areas — each evaluated through the{" "}
        <Hl>same two lenses</Hl>.
      </SectionHeader>

      <div className="mt-5 flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-4">
        {buckets.map(({ name, area, Icon, selected, items }) => (
          <div
            key={name}
            className={`reveal flex h-full flex-col ${CARD} ${
              selected
                ? "p-5 border-purple-tint-40 shadow-[0_8px_22px_rgba(88,41,199,0.10)]"
                : "p-4"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <Chip className={selected ? "h-10 w-10" : "h-9 w-9"}>
                <Icon
                  className={
                    selected
                      ? "h-[19px] w-[19px] text-purple-500"
                      : "h-[17px] w-[17px] text-neutral-700"
                  }
                />
              </Chip>
              {selected ? (
                <span className="flex-none rounded-pill bg-purple-500 px-[9px] py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white">
                  Starting
                </span>
              ) : (
                <span className="flex-none rounded-pill bg-neutral-100 px-[9px] py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-neutral-500 ring-1 ring-inset ring-neutral-200/70">
                  After Strategy
                </span>
              )}
            </div>
            <h3
              className={`mt-3.5 font-display font-semibold leading-[1.12] tracking-[-0.01em] ${
                selected ? "text-[19px]" : "text-[17px]"
              }`}
            >
              {name}
            </h3>
            <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{area}</div>
            <ul
              className={`flex flex-wrap gap-[7px] border-t border-neutral-100 ${
                selected ? "pt-3.5" : "pt-3"
              } mt-5 lg:mt-auto`}
            >
              {items.map((it) => (
                <li
                  key={it}
                  className={`rounded-pill leading-[1.2] ${
                    selected
                      ? "px-2.5 py-1.5 text-[12.5px] border border-lavender-tint-26 bg-lavender-tint-12 text-neutral-800"
                      : "px-2.5 py-1 text-[12px] border border-neutral-100 bg-neutral-50 text-neutral-700"
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
      <div className="mt-3.5 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3">
        <div className={`reveal flex items-start gap-3.5 px-[18px] py-4 ${CARD}`}>
          <Chip className="h-[38px] w-[38px]">
            <Improve className="h-[19px] w-[19px] text-neutral-700" />
          </Chip>
          <div>
            <div className="font-display text-[17px] font-semibold tracking-[-0.01em]">Improve</div>
            <div className="mt-[3px] text-body leading-[1.34] text-neutral-700">
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
            <div className="mt-[3px] text-body leading-[1.34] text-neutral-700">
              Create new ways of working using Chlorophyll&apos;s knowledge, cases, and AI.
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mt-3.5 flex items-start gap-[13px] rounded-xl border border-neutral-200 bg-neutral-50 px-[18px] py-4">
        <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-pill bg-purple-500">
          <Flag className="h-4 w-4 text-white" strokeWidth={1.75} />
        </span>
        <p className="text-body leading-[1.42] text-neutral-700">
          For the first engagement, <b className="font-semibold text-neutral-900">Strategy is the selected starting bucket.</b> Marketing and Creative can follow the same phased model later.
        </p>
      </div>
    </Section>
  );
}
