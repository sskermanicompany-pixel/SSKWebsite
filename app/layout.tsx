import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { SkipLink } from "@/components/skip-link";
import { dictionaries } from "@/lib/i18n";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const fa = dictionaries.fa;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${site.name} | ${fa.meta.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: fa.meta.description,
  applicationName: site.name,
  keywords: [
    "SSK",
    "ریخته‌گری",
    "دستگاه ماهیچه‌زن",
    "ساخت قالب",
    "foundry",
    "core shooter",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${fa.meta.tagline}`,
    description: fa.meta.description,
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${site.name} | ${fa.meta.tagline}`,
    description: fa.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <LanguageProvider>
          <SkipLink />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
