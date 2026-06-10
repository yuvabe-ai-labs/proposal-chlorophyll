"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { X, Lock } from "./icons";

/**
 * On-demand detail overlay. Built on the native <dialog> element so we get
 * Esc-to-close, focus trapping, and an inert background for free.
 *
 * Responsive form:
 *   - mobile  → bottom sheet pinned to the bottom edge
 *   - desktop → centered modal
 *
 * Usage:
 *   <DeepDive label="Go deeper" title="Phase 1 · Discovery">…body…</DeepDive>
 * Pass `triggerClassName` to style the trigger as a button instead of the default
 * text link, and `locked` to prefix it with a lock icon (for gated content).
 */
export function DeepDive({
  label,
  title,
  children,
  triggerClassName,
  locked = false,
}: {
  label: string;
  title: string;
  children: ReactNode;
  triggerClassName?: string;
  locked?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    ref.current?.showModal();
    setOpen(true);
  };
  const close = () => ref.current?.close();

  // Lock background scroll while open (dialog inerts the background, but some
  // browsers still allow the body behind it to scroll).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={show}
        className={
          triggerClassName ??
          "inline-flex items-center gap-1.5 text-[13px] font-semibold text-purple-500 transition-colors hover:text-purple-600"
        }
      >
        {locked && <Lock className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.9} />}
        {label}
        {!triggerClassName && <span aria-hidden>→</span>}
      </button>

      <dialog
        ref={ref}
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === ref.current) close();
        }}
        className="deepdive-dialog fixed inset-y-0 left-auto right-0 m-0 h-[100dvh] max-h-none w-[min(720px,100vw)] max-w-none bg-transparent p-0 text-left font-body normal-case tracking-normal backdrop:bg-black/50 backdrop:backdrop-blur-md"
      >
        <div className="deepdive-panel flex h-full flex-col bg-white shadow-[-24px_0_70px_-10px_rgba(11,15,25,0.35)] md:rounded-l-[28px]">
          {/* Sticky header — close is always reachable while the body scrolls */}
          <div className="flex flex-none items-start justify-between gap-6 border-b border-neutral-100 px-7 pb-6 pt-7 md:px-12 md:pb-7 md:pt-10">
            <h3 className="font-display text-[26px] font-semibold leading-[1.04] tracking-[-0.025em] text-neutral-900 md:text-[36px]">
              {title}
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-10 w-10 flex-none place-items-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-100 md:h-11 md:w-11"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain px-7 pb-14 pt-8 text-[14px] leading-relaxed text-neutral-900 md:px-12 md:pb-16 md:pt-10 md:text-[15px]">
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
}
