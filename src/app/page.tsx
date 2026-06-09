import { Doc, TopBar, Footer } from "@/components/ui";
import { NavRail } from "@/components/NavRail";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <Doc>
        <TopBar />
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Footer />
      </Doc>
      <NavRail />
    </main>
  );
}
