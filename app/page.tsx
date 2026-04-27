import { SiteNav } from "@/components/site-nav";
import { HeroDecision } from "@/components/hero-decision";
import { TheProblem } from "@/components/the-problem";
import { TheReframe } from "@/components/the-reframe";
import { OlympusOS } from "@/components/olympus-os";
import { Protocols } from "@/components/protocols";
import { Specialisms } from "@/components/specialisms";
import { IntelligenceDashboard } from "@/components/intelligence-dashboard";
import { ProofSection } from "@/components/proof-section";
import { CtaFinal } from "@/components/cta-final";
import { StickyCTABar } from "@/components/sticky-cta-bar";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <StickyCTABar />
      <SiteNav />
      <main>
        <HeroDecision />
        <TheProblem />
        <TheReframe />
        <OlympusOS />
        <Protocols />
        <Specialisms />
        <IntelligenceDashboard />
        <ProofSection />
        <CtaFinal />
      </main>
      <SiteFooter />
    </>
  );
}
