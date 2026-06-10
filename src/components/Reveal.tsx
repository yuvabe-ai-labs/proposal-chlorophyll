"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, Lock } from "./icons";

/**
 * Inline expand/collapse disclosure. Replaces the drawer for content that can
 * be revealed in place — keeps the presenter on the slide. Height animates via
 * the CSS grid-rows 0fr→1fr trick (no JS measurement); collapses gracefully
 * under reduced-motion since it's a plain transition.
 */
export function Reveal({
  label,
  labelOpen,
  children,
  locked = false,
  triggerClassName,
}: {
  label: string;
  labelOpen?: string;
  children: ReactNode;
  locked?: boolean;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={
          triggerClassName ??
          "inline-flex items-center gap-1.5 text-[13px] font-semibold text-purple-500 transition-colors hover:text-purple-600"
        }
      >
        {locked && <Lock className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.9} />}
        {open ? labelOpen ?? "Show less" : label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>

      {/* Height eases on its own curve; the content fades + rises slightly a
          beat behind it, so the panel settles in rather than snapping open. */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`pt-4 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              open ? "translate-y-0 opacity-100 delay-100" : "-translate-y-1 opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
