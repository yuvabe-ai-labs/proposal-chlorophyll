"use client";

import { useEffect, useState } from "react";

const IDS = ["s1", "s2", "s3", "s4", "s5"] as const;

/**
 * Sticky section indicator. Purely decorative — it only highlights the active
 * dot via IntersectionObserver and never gates content visibility.
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
      { threshold: 0.5 }
    );
    for (const id of IDS) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="sections"
      className="sticky top-[51px] z-[49] flex justify-center gap-1.5 border-b border-neutral-100 bg-[rgba(252,252,253,0.86)] pt-2.5 pb-[9px] backdrop-blur-[14px] backdrop-saturate-[1.8]"
    >
      {IDS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Go to section ${id.slice(1)}`}
          className={`h-1 w-[22px] rounded-full transition-colors duration-300 ${
            active === id ? "bg-purple-500" : "bg-neutral-200"
          }`}
        />
      ))}
    </nav>
  );
}
