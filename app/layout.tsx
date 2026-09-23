import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "SSK",
    "corporate",
    "precision",
    "quality",
    "reliability",
    "innovation",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
