import { Navbar } from "@/components/funnel/Navbar";
import { HeroSection } from "@/components/funnel/HeroSection";
import { PainSection } from "@/components/funnel/PainSection";
import { FreeOfferSection } from "@/components/funnel/FreeOfferSection";
import { HowItWorksSection } from "@/components/funnel/HowItWorksSection";
import { CaseStudiesSection } from "@/components/funnel/CaseStudiesSection";
import { TestimonialShowcase } from "@/components/funnel/TestimonialShowcase";
import { TeamSection } from "@/components/funnel/TeamSection";
import { FAQSection } from "@/components/funnel/FAQSection";
import { FinalCTASection } from "@/components/funnel/FinalCTASection";
import { FooterSection } from "@/components/funnel/FooterSection";

/**
 * Server Component entry point.
 * Composes all funnel sections in conversion-optimised order.
 *
 * FUNNEL FLOW:
 *   Navbar → Hero → Pain → Free Offer → How It Works → Case Studies
 *   → Testimonials → Team → FAQ → Final CTA → Footer
 */
export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PainSection />
      <FreeOfferSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TestimonialShowcase />
      <TeamSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </>
  );
}
