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
        className="m-0 w-full max-w-none bg-transparent p-0 backdrop:bg-black/45 backdrop:backdrop-blur-sm fixed inset-x-0 bottom-0 top-auto md:inset-0 md:m-auto md:h-fit md:w-[min(40rem,92vw)]"
      >
        <div className="max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white p-5 text-neutral-900 shadow-[0_-10px_40px_rgba(11,15,25,0.25)] md:max-h-[85vh] md:rounded-3xl md:p-8 md:shadow-2xl">
          <div className="mb-5 flex items-start justify-between gap-4">
            <h3 className="font-display text-[20px] font-semibold leading-[1.12] tracking-[-0.01em] text-neutral-900 md:text-[24px]">
              {title}
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="grid h-9 w-9 flex-none place-items-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
