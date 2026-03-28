import { FAQ_ITEMS } from "./constants";

/** Organization + WebSite structured data */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EXEIV",
  url: "https://exeiv.com",
  logo: "https://exeiv.com/logo.png",
  description:
    "EXEIV engineers production-grade, high-converting web platforms for ambitious founders, agencies & SaaS companies — delivered in 30 days or you don't pay.",
  foundingDate: "2024",
  founders: [
    { "@type": "Person", name: "Aryan Thakur", jobTitle: "Co-Founder & CEO" },
    { "@type": "Person", name: "Navansh Mishra", jobTitle: "Co-Founder & CTO" },
  ],
  sameAs: [
    "https://cal.com/exeiv/30min",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://cal.com/exeiv/30min",
    availableLanguage: "English",
  },
};

/** ProfessionalService structured data */
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EXEIV — Production-Grade Web Platforms",
  url: "https://exeiv.com",
  description:
    "Get a high-converting web platform built in 30 days — or you don't pay. Custom software, SaaS, and landing pages for ambitious businesses.",
  priceRange: "$$",
  areaServed: { "@type": "Place", name: "Worldwide" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Platform Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free UI Teardown & Strategy Call",
          description:
            "A 30-minute audit to identify conversion-killing design mistakes, tech stack issues, and deliver an actionable roadmap.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Production-Grade Web Platform Build",
          description:
            "Full-stack design & engineering delivered in a 30-day sprint using Next.js, Prisma, and Zod.",
        },
      },
    ],
  },
};

/** FAQ structured data — generated from the constant FAQ list */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
