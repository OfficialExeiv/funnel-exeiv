import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { serviceJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { cn } from "@/lib/utils";

// ─── Fonts ───────────────────────────────────────────────────────────────────
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
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
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-touch-icon", url: "/images/favicon/android-chrome-192x192.png" },
    ],
  },
  manifest: "/images/favicon/site.webmanifest",
};

// ─── Background Lines Component ──────────────────────────────────────────────
function BackgroundLines() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Vertical architectural lines */}
      <div className="max-w-6xl mx-auto h-full flex justify-between px-6 md:px-8">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent" 
          />
        ))}
      </div>
    </div>
  );
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(syne.variable, dmSans.variable, "font-sans")}
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
      <body className="relative min-h-screen">
        <BackgroundLines />
        {children}
      </body>
    </html>
  );
}
