import type { ReactNode } from "react";

/* ── Phone-width document shell ──────────────────────────────────────── */
export function Doc({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-[440px] overflow-hidden bg-neutral-25 shadow-[0_0_60px_rgba(11,15,25,0.10)]">
      {children}
    </div>
  );
}

/* ── Sticky top bar ──────────────────────────────────────────────────── */
export function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-neutral-200 bg-[rgba(252,252,253,0.86)] px-5 py-3.5 backdrop-blur-[14px] backdrop-saturate-[1.8]">
      <div className="flex items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="Yuvabe" className="block h-[22px] w-auto" />
        <span className="border-l border-neutral-200 pl-2.5 text-[11px] font-medium tracking-[0.02em] text-neutral-500">
          for Chlorophyll
        </span>
      </div>
      <span className="whitespace-nowrap rounded-pill border border-purple-tint-22 bg-purple-tint-09 px-[9px] py-[5px] text-[9.5px] font-semibold uppercase tracking-[0.12em] text-purple-500">
        Draft · review
      </span>
    </header>
  );
}

/* ── Section scaffold ────────────────────────────────────────────────── */
export function Section({
  id,
  night = false,
  first = false,
  children,
}: {
  id: string;
  night?: boolean;
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-[24px] px-5 pt-[34px] pb-9 ${
        first ? "" : "border-t border-neutral-100"
      } ${night ? "bg-night text-neutral-25" : ""}`}
    >
      {children}
    </section>
  );
}

/* ── Section header (eyebrow + number, title, support) ───────────────── */
export function SectionHeader({
  num,
  eyebrow,
  title,
  night = false,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  night?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <span
          className={`font-display text-[11px] font-semibold tracking-[0.12em] ${
            night ? "text-lavender-200" : "text-purple-500"
          }`}
        >
          {num}
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
            night ? "text-lavender-200" : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-3 font-display text-[27px] font-semibold leading-[1.08] tracking-[-0.025em] ${
          night ? "text-neutral-25" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 text-[15px] leading-[1.45] ${
          night ? "text-white/75" : "text-neutral-700"
        }`}
      >
        {children}
      </p>
    </>
  );
}

/* Highlighted inline phrase inside support copy. */
export function Hl({
  children,
  night = false,
}: {
  children: ReactNode;
  night?: boolean;
}) {
  return (
    <span className={`font-medium ${night ? "text-lavender-200" : "text-purple-500"}`}>
      {children}
    </span>
  );
}

/* ── Round icon chip ─────────────────────────────────────────────────── */
export function Chip({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`grid flex-none place-items-center rounded-pill border border-neutral-200 bg-white ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="border-t border-neutral-100 px-5 pt-[26px] pb-[104px] text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo.png" alt="Yuvabe Studios" className="inline-block h-6 opacity-90" />
      <p className="mt-3 text-[11px] leading-[1.5] text-neutral-500">
        Yuvabe Studios × Chlorophyll
        <br />
        AI transformation direction — draft for review
      </p>
    </footer>
  );
}
