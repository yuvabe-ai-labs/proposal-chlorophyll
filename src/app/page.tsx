import { Doc, TopBar, Footer } from "@/components/ui";
import { NavRail } from "@/components/NavRail";
import { WhyNow } from "@/components/WhyNow";
import { Section1 as Framing } from "@/components/Section1";
import { SectionIP } from "@/components/SectionIP";
import { Section2 as Roadmap } from "@/components/Section2";
import { Section4 as HowItWorks } from "@/components/Section4";
import { Pieces } from "@/components/Pieces";
import { Engagement } from "@/components/Engagement";

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <TopBar />
        <WhyNow />       {/* s1 — Where Chlorophyll is today */}
        <Framing />      {/* s2 — Three areas, two lenses */}
        <SectionIP />    {/* s3 — Your IP, studied & protected */}
        <Roadmap />      {/* s4 — Phase by phase */}
        <HowItWorks />   {/* s5 — How it works */}
        <Pieces />       {/* s6 — We've built the pieces before */}
        <Engagement />   {/* s7 — How we'd start */}
        <Footer />
      </Doc>
      <NavRail />
    </main>
  );
}
