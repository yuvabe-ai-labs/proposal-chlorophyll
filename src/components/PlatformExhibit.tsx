import type { ComponentType } from "react";

/**
 * "Signature platform exhibit" used on the Quilt (s8) and KittyKat (s9) slides.
 *
 * A light, diagrammatic panel — a faint `.bg-grid` blueprint field plus a soft
 * purple core glow — that frames each Yuvabe platform as a *core engine* with
 * its capabilities orbiting it, under the transformation the proposal names
 * ("X intelligence → Strategy intelligence").
 *
 *   Desktop: a true radial. Capabilities sit around the core, joined by faint
 *            SVG spokes (non-scaling stroke, so a stretched viewBox keeps the
 *            line weight crisp).
 *   Mobile:  the radial would collapse in the phone column, so it falls back to
 *            a stacked core + 2-column node grid carrying the same content.
 */

type Icon = ComponentType<{ className?: string; strokeWidth?: number }>;
export type Capability = { label: string; Icon: Icon };

/* Node placements as % of the square stage, clockwise from the top. Side and
   bottom nodes are insét enough that their (wider-than-node) labels never clip
   against the panel edge. */
const POS = [
  { x: 50, y: 11 },
  { x: 16, y: 41 },
  { x: 84, y: 41 },
  { x: 29, y: 85 },
  { x: 71, y: 85 },
] as const;

function Core({ name, label, Icon }: { name: string; label: string; Icon: Icon }) {
  return (
    <div className="grid h-[124px] w-[124px] place-items-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-center shadow-[0_12px_34px_rgba(88,41,199,0.4)] ring-1 ring-white/25">
      <div className="px-2">
        <Icon className="mx-auto h-5 w-5 text-white/90" strokeWidth={1.8} />
        <div className="mt-1 font-display text-[15px] font-semibold tracking-[-0.01em] text-white">{name}</div>
        <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-lavender-200">{label}</div>
      </div>
    </div>
  );
}

/* A floating capability node (desktop radial). */
function Node({ label, Icon }: Capability) {
  return (
    <div className="relative flex w-[96px] flex-col items-center gap-2 text-center">
      {/* Soft frosted halo — lifts the icon + label off the blueprint grid. */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[104px] w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-md"
      />
      <Icon className="h-[30px] w-[30px] flex-none text-purple-500" strokeWidth={1.7} />
      <span className="text-[12.5px] font-medium leading-[1.25] text-neutral-700">{label}</span>
    </div>
  );
}

/* A capability card (mobile stacked grid). */
function NodeCard({ label, Icon }: Capability) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3 py-2.5">
      <Icon className="h-[22px] w-[22px] flex-none text-purple-500" strokeWidth={1.7} />
      <span className="text-[12.5px] font-medium leading-[1.25] text-neutral-700">{label}</span>
    </div>
  );
}

export function PlatformExhibit({
  name,
  label,
  shift,
  capabilities,
  CoreIcon,
}: {
  name: string;
  label: string;
  shift: readonly [string, string];
  capabilities: Capability[];
  CoreIcon: Icon;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-25 shadow-[0_4px_14px_rgba(11,15,25,0.05)]">
      {/* Transformation kicker */}
      <figcaption className="flex items-center justify-center gap-2.5 border-b border-neutral-200 bg-white/40 px-5 py-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">{shift[0]}</span>
        <span aria-hidden className="text-[13px] text-neutral-300">→</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-purple-500">{shift[1]}</span>
      </figcaption>

      {/* Desktop: radial orbit */}
      <div className="bg-grid relative mx-auto hidden aspect-square w-full max-w-[460px] p-6 sm:block">
        {/* Soft purple glow behind the core */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,41,199,0.13),transparent_68%)]"
        />

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {POS.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke="rgb(88 41 199)"
              strokeOpacity="0.3"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="0.1 4"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Core name={name} label={label} Icon={CoreIcon} />
        </div>

        {capabilities.slice(0, POS.length).map((c, i) => (
          <div
            key={c.label}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%` }}
          >
            <Node {...c} />
          </div>
        ))}
      </div>

      {/* Mobile: stacked core + node grid */}
      <div className="bg-grid px-5 py-6 sm:hidden">
        <div className="flex justify-center">
          <Core name={name} label={label} Icon={CoreIcon} />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {capabilities.map((c) => (
            <NodeCard key={c.label} {...c} />
          ))}
        </div>
      </div>
    </figure>
  );
}
