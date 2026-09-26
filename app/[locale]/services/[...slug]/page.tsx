import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceHref,
  getServicePage,
  getServicePageEntries,
} from "@/lib/services-navigation";
import { locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string; slug: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServicePageEntries().map(({ segments }) => ({
      locale,
      slug: segments,
    })),
  );
}

function getLocalizedService(localeValue: string, segments: string[]) {
  if (!locales.includes(localeValue as Locale)) notFound();
  const locale = localeValue as Locale;
  const entry = getServicePage(segments);
  if (!entry) notFound();
  return { locale, entry };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeValue, slug } = await params;
  const { locale, entry } = getLocalizedService(localeValue, slug);
  const title = entry.item.label[locale];
  const description = entry.item.description[locale];
  const canonical = getServiceHref(locale, entry.segments);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fa: getServiceHref("fa", entry.segments),
        en: getServiceHref("en", entry.segments),
      },
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      url: canonical,
      siteName: site.name,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { locale: localeValue, slug } = await params;
  const { locale, entry } = getLocalizedService(localeValue, slug);
  const trail = [...entry.ancestors, entry.item];
  const trailSegments: string[][] = [];
  trail.reduce<string[]>((segments, item) => {
    const next = [...segments, item.slug];
    trailSegments.push(next);
    return next;
  }, []);
  const children = entry.item.children ?? [];

  return (
    <main
      id="main"
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="border-b border-line bg-background"
    >
      <section className="mx-auto min-h-[60vh] max-w-6xl px-6 py-16 sm:px-8 md:py-24">
        <nav aria-label={locale === "fa" ? "مسیر صفحه" : "Breadcrumb"}>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <li>
              <Link className="transition-colors hover:text-accent" href="/#services">
                {locale === "fa" ? "خدمات" : "Services"}
              </Link>
            </li>
            {trail.map((item, index) => (
              <li key={trailSegments[index].join("/")} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {index === trail.length - 1 ? (
                  <span aria-current="page" className="text-charcoal">
                    {item.label[locale]}
                  </span>
                ) : (
                  <Link
                    className="transition-colors hover:text-accent"
                    href={getServiceHref(locale, trailSegments[index])}
                  >
                    {item.label[locale]}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <header className="mt-12 max-w-3xl">
          <p className="eyebrow text-xs font-medium text-accent">
            {locale === "fa" ? "خدمات و محصولات" : "Services and Products"}
          </p>
          <h1 className="mt-4 font-display text-3xl text-navy md:text-4xl">
            {entry.item.label[locale]}
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            {entry.item.description[locale]}
          </p>
        </header>
        {children.length ? (
          <section className="mt-14 border-t border-line pt-8" aria-label={entry.item.label[locale]}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {children.map((child) => (
                <li key={child.slug} className="border-b border-line">
                  <a
                    className="block py-5 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    href={getServiceHref(locale, [...entry.segments, child.slug])}
                  >
                    <h2 className="font-display text-xl text-navy">
                      {child.label[locale]}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {child.description[locale]}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </section>
    </main>
  );
}
