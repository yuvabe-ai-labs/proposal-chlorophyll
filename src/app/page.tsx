import { Doc, TopBar, Footer } from "@/components/ui";
import { ProgressDots } from "@/components/ProgressDots";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <TopBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </Doc>
      <ProgressDots />
    </main>
  );
}
