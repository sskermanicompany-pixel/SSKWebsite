"use client";

import { Logo } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { contact, site } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
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
  );
}
