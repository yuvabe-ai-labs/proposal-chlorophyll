"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "s1", n: "1", label: "Framing" },
  { id: "s2", n: "2", label: "Roadmap" },
  { id: "s3", n: "3", label: "Launch" },
  { id: "s4", n: "4", label: "Tech" },
  { id: "s5", n: "5", label: "Scale" },
] as const;

/**
 * Persistent, floating section navigator. Fixed to the bottom-center of the
 * viewport (thumb-reachable on a phone), it both shows the active section and
 * lets you jump between sections. The active item expands into a labeled pill.
 *
 * It is purely a navigation aid — it never gates content visibility.
 */
export function ProgressDots() {
  const [active, setActive] = useState<string>("s1");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      // Bias detection toward the upper-middle so the active item flips as a
      // section's heading scrolls into reading position.
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] left-1/2 z-[60] -translate-x-1/2"
    >
      <div className="flex items-center gap-1.5 rounded-pill border border-neutral-200/70 bg-[rgba(252,252,253,0.82)] p-1.5 shadow-[0_8px_30px_rgba(11,15,25,0.18)] backdrop-blur-[16px] backdrop-saturate-[1.8]">
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`${s.n}. ${s.label}`}
              aria-current={on ? "true" : undefined}
              className={`grid h-11 select-none place-items-center rounded-pill text-[14px] font-semibold transition-all duration-300 ease-out ${
                on
                  ? "bg-purple-500 px-4 text-white ring-1 ring-inset ring-white/20 shadow-[0_4px_12px_rgba(88,41,199,0.30)]"
                  : "w-11 bg-neutral-100 text-neutral-600 ring-1 ring-inset ring-neutral-300/70 active:scale-90 active:bg-neutral-200 md:hover:bg-neutral-200"
              }`}
            >
              {on ? (
                <span className="flex items-center gap-1.5">
                  <span>{s.n}</span>
                  <span className="text-[12px] font-medium tracking-[0.01em]">{s.label}</span>
                </span>
              ) : (
                s.n
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
