"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { IconArrowUp } from "@/components/icons";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { contact, site } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let frame = 0;

    function updateVisibility() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableDistance =
          document.documentElement.scrollHeight - window.innerHeight;
        const shouldShow =
          scrollableDistance > 0 && window.scrollY >= scrollableDistance / 2;

        setShowBackToTop((visible) =>
          visible === shouldShow ? visible : shouldShow,
        );
      });
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    updateVisibility();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <>
      <footer className="border-t border-paper/10 bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-7 text-paper/65">
            {t.meta.description}
          </p>
        </div>
        <div>
          <p className="eyebrow text-xs font-medium text-accent">
            {t.footer.navigation}
          </p>
          <ul className="mt-4 space-y-2">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-paper/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-xs font-medium text-accent">
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {contact.phones.map((phone) => (
              <li key={phone.label}>
                <a
                  href={phone.href}
                  className="transition-colors hover:text-accent"
                  dir="ltr"
                >
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.email.href}
                className="transition-colors hover:text-accent"
                dir="ltr"
              >
                {contact.email.label}
              </a>
            </li>
            <li>
              <a
                href={contact.location.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                {t.contact.locationLabel}
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <LanguageToggle inverted />
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {site.name}. {t.footer.rights}
          </p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
      </footer>
      {showBackToTop ? (
        <button
          type="button"
          aria-label={t.footer.backToTop}
          title={t.footer.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
          className="animate-fade-up fixed bottom-6 end-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-navy text-paper shadow-lg transition-[transform,background-color,color] duration-200 hover:-translate-y-1 hover:bg-accent hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <IconArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </>
  );
}
