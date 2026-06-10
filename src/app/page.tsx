import { Doc, TopBar, Footer } from "@/components/ui";
import { NavRail } from "@/components/NavRail";
import { WhyNow } from "@/components/WhyNow";
import { Section1 as Framing } from "@/components/Section1";
import { SectionIP } from "@/components/SectionIP";
import { RoadmapPath, RoadmapFull } from "@/components/Section2";
import { DiscoveryProcess, DiscoveryOutcome } from "@/components/Discovery";
import { Section4 as HowItWorks } from "@/components/Section4";
import { PiecesIntro, PiecesCompare, PieceQuilt, PieceKittyKat } from "@/components/Pieces";
import { Engagement } from "@/components/Engagement";

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <TopBar />
        <WhyNow />       {/* s1 — Where Chlorophyll is today */}
        <Framing />      {/* s2 — Three areas, two lenses */}
        <SectionIP />    {/* s3 — Your IP, studied & protected */}
        <RoadmapPath />  {/* s4 — The path to first launch (Phases 1–3) */}
        <RoadmapFull />  {/* s5 — The full engagement (all five phases) */}
        <DiscoveryProcess /> {/* s6 — Phase 1: how Discovery works */}
        <DiscoveryOutcome /> {/* s7 — Phase 1: what Discovery gives you */}
        <HowItWorks />     {/* s8 — How it works */}
        <PiecesIntro />    {/* s9 — We've built the pieces before */}
        <PiecesCompare />  {/* s10 — Why Yuvabe: the three-domain matrix */}
        <Engagement />     {/* s11 — How we'd work together */}
        {/* Appendix — platform deep dives */}
        <PieceQuilt />     {/* A1 — Quilt in detail (s12) */}
        <PieceKittyKat />  {/* A2 — KittyKat in detail (s13) */}
        <Footer />
      </Doc>
      <NavRail />
    </main>
  );
}
