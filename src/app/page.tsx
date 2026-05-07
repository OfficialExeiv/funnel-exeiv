import { Navbar } from "@/components/funnel/Navbar";
import { HeroSection } from "@/components/funnel/HeroSection";
import { PainSection } from "@/components/funnel/PainSection";
import { CaseStudiesSection } from "@/components/funnel/CaseStudiesSection";
import { TestimonialShowcase } from "@/components/funnel/TestimonialShowcase";
import { AuditOfferSection } from "@/components/funnel/AuditOfferSection";
import { HowItWorksSection } from "@/components/funnel/HowItWorksSection";
import { TeamSection } from "@/components/funnel/TeamSection";
import { FAQSection } from "@/components/funnel/FAQSection";
import { FinalCTASection } from "@/components/funnel/FinalCTASection";
import { FooterSection } from "@/components/funnel/FooterSection";
import { InitialOfferPopup } from "@/components/funnel/InitialOfferPopup";
import { StickyMobileCTA } from "@/components/funnel/StickyMobileCTA";
import { SocialProofToast } from "@/components/funnel/SocialProofToast";

/**
 * Server Component entry point.
 *
 * FUNNEL FLOW (CRO-optimised order):
 *   Navbar → Hero → Pain → Proof (Case Studies) → Social Proof (Testimonials)
 *   → Audit Offer → How It Works → Team → FAQ → Final CTA → Footer
 *
 * Conversion elements:
 *   ExitIntentPopup · StickyMobileCTA · SocialProofToast
 */
export default function Page() {
  return (
    <>
      {/* Sticky nav */}
      <Navbar />

      {/* Main funnel */}
      <main>
        <HeroSection />
        <PainSection />
        <CaseStudiesSection />
        <TestimonialShowcase />
        <AuditOfferSection />
        <HowItWorksSection />
        <TeamSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <FooterSection />

      {/* Conversion overlays (client components) */}
      <InitialOfferPopup />
      <StickyMobileCTA />
      <SocialProofToast />
    </>
  );
}
