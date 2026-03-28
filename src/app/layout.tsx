import type { Metadata } from "next";
import "@/styles/globals.css";
import { organizationJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/jsonLd";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://exeiv.com"),

  title: {
    default: "EXEIV — Production-Grade Web Platforms in 30 Days | Custom Software & SaaS",
    template: "%s | EXEIV",
  },
  description:
    "Get a high-converting web platform built in 30 days — or you don't pay. EXEIV engineers production-grade websites, SaaS platforms & custom software for ambitious founders, agencies & companies worldwide.",
  keywords: [
    "web design agency",
    "SaaS development",
    "Next.js agency",
    "UI UX design",
    "custom software development",
    "web platform development",
    "high-converting website",
    "production-grade web app",
    "full-stack development agency",
    "startup web development",
    "agency website design",
    "SaaS platform builder",
    "30 day website delivery",
    "risk free web development",
  ],
  authors: [
    { name: "Aryan Thakur", url: "https://exeiv.com" },
    { name: "Navansh Mishra", url: "https://exeiv.com" },
  ],
  creator: "EXEIV",
  publisher: "EXEIV",

  alternates: {
    canonical: "https://exeiv.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://exeiv.com",
    siteName: "EXEIV",
    title: "EXEIV — Production-Grade Web Platforms in 30 Days",
    description:
      "High-converting websites & custom software — delivered in 30 days or you don't pay. Built by engineers, not template-pushers.",
  },

  twitter: {
    card: "summary_large_image",
    title: "EXEIV — Production-Grade Web Platforms in 30 Days",
    description:
      "High-converting websites & custom software — delivered in 30 days or you don't pay.",
    creator: "@exeiv",
  },

  category: "technology",
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body>
        {/* Fixed decorative grid background — sits behind all content */}
        <div className="grid-bg" aria-hidden="true" />

        <main>{children}</main>
      </body>
    </html>
  );
}
