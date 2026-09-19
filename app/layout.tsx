import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl } from "@/lib/utils";
import { siteConfig } from "@/content/site";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: "%s · Roshan",
    default:
      "Roshan · Builder, digital strategist, engineering student in Bengaluru",
  },
  description:
    "Engineering student at DSCE Bengaluru building backend and AI systems, running digital growth for businesses, and hosting on stage. Still in college. Already building for real businesses.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Roshan",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roshan",
    jobTitle: "Engineering Student",
    affiliation: {
      "@type": "Organization",
      name: "Dayananda Sagar College of Engineering",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: siteConfig.socials
      .filter((s) => s.url && s.url.length > 0)
      .map((s) => s.url),
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
