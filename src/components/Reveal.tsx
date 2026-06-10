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
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
