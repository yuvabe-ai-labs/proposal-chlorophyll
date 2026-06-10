import { Fragment } from "react";

/**
 * The three-domain comparison matrix (s8). Shows the same intelligence
 * architecture across Quilt / KittyKat / Chlorophyll, with the Chlorophyll
 * column (`target`) highlighted as the one still to build.
 *
 *   Desktop / tablet: a true 4-column table; the Chlorophyll column reads as a
 *                     vertical purple band running the height of the matrix.
 *   Mobile:           the table would overflow the phone column, so each
 *                     dimension becomes a card with the three platform values
 *                     stacked, Chlorophyll emphasised.
 */

type Col = { name: string; domain: string; state: string; target?: boolean };
type Row = { dim: string; values: readonly string[] };

const GRID = "grid-cols-[120px_repeat(3,minmax(0,1fr))]";

function StateBadge({ state, target }: { state: string; target?: boolean }) {
  return (
    <span
      className={`whitespace-nowrap rounded-pill px-[7px] py-[2px] text-[8px] font-bold uppercase tracking-[0.08em] ${
        target ? "bg-purple-500 text-white" : "bg-neutral-100 text-neutral-500"
      }`}
    >
      {state}
    </span>
  );
}

export function ComparisonMatrix({ columns, rows }: { columns: readonly Col[]; rows: readonly Row[] }) {
  return (
    <>
      {/* Desktop / tablet: table */}
      <div className="hidden overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(11,15,25,0.05)] md:block">
        <div className={`grid ${GRID}`}>
          {/* Header row */}
          <div className="bg-neutral-50/60" />
          {columns.map((c) => (
            <div key={c.name} className={`border-l border-neutral-100 px-4 py-3.5 ${c.target ? "bg-purple-tint-09" : ""}`}>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span
                  className={`font-display text-[15px] font-semibold tracking-[-0.01em] ${
                    c.target ? "text-purple-600" : "text-neutral-900"
                  }`}
                >
                  {c.name}
                </span>
                <StateBadge state={c.state} target={c.target} />
              </div>
              <div className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-neutral-500">{c.domain}</div>
            </div>
          ))}

          {/* Body rows */}
          {rows.map((r) => (
            <Fragment key={r.dim}>
              <div className="border-t border-neutral-200 bg-neutral-50/60 px-4 py-3.5 text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-neutral-500">
                {r.dim}
              </div>
              {r.values.map((v, j) => {
                const target = columns[j]?.target;
                return (
                  <div
                    key={j}
                    className={`border-l border-t border-neutral-100 px-4 py-3.5 text-[12.5px] font-medium leading-[1.42] ${
                      target ? "bg-purple-tint-06 text-neutral-900" : "text-neutral-700"
                    }`}
                  >
                    {v}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile: per-dimension cards */}
      <div className="space-y-3 md:hidden">
        {rows.map((r) => (
          <div key={r.dim} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_2px_8px_rgba(11,15,25,0.04)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-purple-500">{r.dim}</div>
            <dl className="mt-2.5 space-y-1.5">
              {columns.map((c, j) => (
                <div
                  key={c.name}
                  className={`flex gap-2.5 rounded-lg px-2.5 py-2 ${c.target ? "bg-purple-tint-06" : ""}`}
                >
                  <dt
                    className={`w-[58px] flex-none text-[10.5px] font-semibold leading-[1.3] ${
                      c.target ? "text-purple-600" : "text-neutral-400"
                    }`}
                  >
                    {c.name}
                  </dt>
                  <dd
                    className={`text-body leading-[1.35] ${
                      c.target ? "text-neutral-900" : "text-neutral-700"
                    }`}
                  >
                    {r.values[j]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}
