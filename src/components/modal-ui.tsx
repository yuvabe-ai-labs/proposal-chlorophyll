import type { ReactNode } from "react";
import { CircleCheck } from "./icons";

/**
 * Shared hierarchy primitives for DeepDive modal bodies. One vocabulary so every
 * deep-dive reads the same way, top to bottom:
 *   title (in DeepDive) → Lede → Label → prose → Defs / List / Chips
 */

/* The editorial "drop" right under the modal title — larger, lighter, airy. */
export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="text-[17px] leading-[1.6] text-neutral-600 md:text-[20px] md:leading-[1.55] [&_strong]:font-semibold [&_strong]:text-neutral-900">
      {children}
    </p>
  );
}

/* Purple eyebrow that headers a group. */
export function Label({ children }: { children: ReactNode }) {
  return <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-500">{children}</div>;
}

/* Quieter sub-label used inside a group (e.g. "It combines"). */
export function MicroLabel({ children }: { children: ReactNode }) {
  return <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-400">{children}</div>;
}

/* A grouped block. `divided` adds a hairline + breathing room above it. */
export function Group({
  label,
  divided = false,
  children,
}: {
  label?: string;
  divided?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={divided ? "border-t border-neutral-100 pt-7 md:pt-9" : ""}>
      {label && <Label>{label}</Label>}
      <div className={label ? "mt-4" : ""}>{children}</div>
    </section>
  );
}

/* Body prose paragraph at the modal's base size. */
export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-body leading-[1.6] text-neutral-700 md:text-[15px]">{children}</p>;
}

/* Bulleted list. `check` = purple checks (benefits), `dot` = neutral dots (items). */
export function List({ items, variant = "dot" }: { items: readonly string[]; variant?: "dot" | "check" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-body leading-[1.45] text-neutral-800">
          {variant === "check" ? (
            <CircleCheck className="mt-[3px] h-4 w-4 flex-none text-purple-500" strokeWidth={2} />
          ) : (
            <span className="mt-[9px] h-[5px] w-[5px] flex-none rounded-full bg-neutral-300" />
          )}
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* Definition rows: bold term + description, clearly separated. The term sits
   in its own quiet column so the eye can scan terms down the left edge; the
   description carries enough contrast to read as the primary content. */
export function Defs({ rows }: { rows: { term: string; desc: ReactNode; highlight?: boolean }[] }) {
  return (
    <dl className="divide-y divide-neutral-200/70">
      {rows.map((r, i) => (
        <div
          key={`${r.term}-${i}`}
          className={`grid gap-1 py-4 first:pt-1 sm:grid-cols-[160px_1fr] sm:gap-8 sm:py-[18px] ${
            r.highlight ? "-mx-3 rounded-lg bg-purple-tint-06 px-3 !pt-4 sm:!pt-[18px]" : ""
          }`}
        >
          <dt className="font-display text-[14.5px] font-semibold tracking-[-0.005em] text-neutral-900">{r.term}</dt>
          <dd className="max-w-[58ch] text-body leading-[1.6] text-neutral-700">{r.desc}</dd>
        </div>
      ))}
    </dl>
  );
}

/* Pill tags. */
export function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-pill border border-neutral-200/70 bg-neutral-50 px-3 py-1.5 text-[12.5px] leading-[1.2] text-neutral-700"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
