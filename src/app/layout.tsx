import type { Metadata } from "next";
import { Montserrat, Roboto_Condensed, Geist } from "next/font/google";
import "@/app/globals.css";
import { serviceJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// ─── Fonts ───────────────────────────────────────────────────────────────────
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://solution.exeiv.com"),

  title:
    "Free Business Bottleneck Audit | EXEIV — Custom Software for Non-Tech Founders",
  description:
    "Book a free 30-minute audit call with EXEIV. We map where your business is leaking money due to bad tech — and give you a real plan. No pitch. No invoice.",
  keywords: [
    "custom software for founders",
    "business software development",
    "non-tech founder tech partner",
    "custom SaaS development",
    "web application development agency",
    "business automation software",
    "startup software development",
  ],
  authors: [
    { name: "Aryan Thakur", url: "https://exeiv.com" },
    { name: "Navansh Mishra", url: "https://exeiv.com" },
  ],
  creator: "EXEIV",
  publisher: "EXEIV",

  alternates: {
    canonical: "https://solution.exeiv.com",
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
    url: "https://solution.exeiv.com",
    siteName: "EXEIV",
    title: "Free Business Bottleneck Audit | EXEIV",
    description:
      "Walk away with a Tech Stack Audit and Revenue Leak Map — free, before we ever talk about a project.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EXEIV Free Bottleneck Audit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Business Bottleneck Audit | EXEIV",
    description:
      "Custom software partner for non-tech founders. Book your free audit.",
    images: ["/og-image.png"],
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
    <html
      lang="en"
      className={cn(montserrat.variable, robotoCondensed.variable, "font-sans", geist.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD structured data for rich snippets */}
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
        <main>{children}</main>
      </body>
    </html>
  );
}
