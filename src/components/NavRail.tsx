"use client";

import { useEffect, useState } from "react";

/**
 * Section navigator. Tracks the active section via IntersectionObserver and
 * lets you jump between sections. Purely a navigation aid — never gates content.
 *
 * Responsive form:
 *   - desktop → fixed vertical rail on the right, labels revealed on active/hover
 *   - mobile  → floating bottom pill of numbered dots
 */
const SECTIONS = [
  { id: "s1", n: "1", label: "Today" },
  { id: "s2", n: "2", label: "Framing" },
  { id: "s3", n: "3", label: "Your IP" },
  { id: "s4", n: "4", label: "To first launch" },
  { id: "s5", n: "5", label: "All five phases" },
  { id: "s6", n: "6", label: "Discovery" },
  { id: "s7", n: "7", label: "What Discovery delivers" },
  { id: "s8", n: "8", label: "How it works" },
  { id: "s9", n: "9", label: "What we bring" },
  { id: "s10", n: "10", label: "Why Yuvabe" },
  { id: "s11", n: "11", label: "Working together" },
  { id: "s12", n: "A1", label: "Appendix · Quilt" },
  { id: "s13", n: "A2", label: "Appendix · KittyKat" },
] as const;

export function NavRail() {
  const [active, setActive] = useState<string>("s1");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      // Bias detection toward the upper-middle so the active item flips as a
      // section scrolls into reading position.
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  // Keyboard slide navigation: Right/Down → next, Left/Up → previous.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const forward = e.key === "ArrowDown" || e.key === "ArrowRight";
      const back = e.key === "ArrowUp" || e.key === "ArrowLeft";
      if (!forward && !back) return;

      // Don't hijack arrows while a deep-dive drawer is open or focus is in a field.
      if (document.querySelector("dialog[open]")) return;
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;

      const idx = SECTIONS.findIndex((s) => s.id === active);
      const nextIdx = forward
        ? Math.min(idx + 1, SECTIONS.length - 1)
        : Math.max(idx - 1, 0);
      if (nextIdx === idx) return;

      e.preventDefault();
      document.getElementById(SECTIONS[nextIdx].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      {/* Desktop: vertical right rail */}
      <nav
        aria-label="Sections"
        className="fixed right-6 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-1 lg:flex"
      >
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={on ? "true" : undefined}
              className={`flex origin-right items-center justify-end gap-2.5 rounded-pill py-1.5 pl-3 pr-1 text-[12.5px] transition-all duration-300 ease-out ${
                on
                  ? "scale-[1.06] font-semibold text-neutral-900"
                  : "opacity-90 font-medium text-neutral-400 hover:text-neutral-600"
              }`}
            >
              <span className="whitespace-nowrap">{s.label}</span>
              <span
                className={`h-1.5 w-1.5 flex-none rounded-full transition-all ${
                  on ? "scale-125 bg-purple-500" : "bg-neutral-300"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Mobile: floating bottom pill of numbered dots */}
      <nav
        aria-label="Sections"
        className="fixed bottom-[calc(14px+env(safe-area-inset-bottom))] left-1/2 z-[60] -translate-x-1/2 lg:hidden"
      >
        <div className="flex items-center gap-1 rounded-pill border border-neutral-200/70 bg-[rgba(252,252,253,0.85)] p-1.5 shadow-[0_8px_30px_rgba(11,15,25,0.18)] backdrop-blur-[16px] backdrop-saturate-[1.8]">
          {SECTIONS.map((s) => {
            const on = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-label={`${s.n}. ${s.label}`}
                aria-current={on ? "true" : undefined}
                className={`grid h-8 w-8 place-items-center rounded-pill text-[12px] font-semibold transition-all ${
                  on ? "bg-purple-500 text-white" : "text-neutral-500 active:bg-neutral-100"
                }`}
              >
                {s.n}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
