"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";
import { contact } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-3 xl:flex xl:gap-5"
          aria-label={t.nav.primary}
        >
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <LanguageToggle />
          <a
            href={contact.phone.href}
            className="inline-flex border border-navy bg-navy px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-accent hover:bg-accent"
          >
            {t.cta.call}
          </a>
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-navy"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? t.nav.close : t.nav.open}
            </span>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper xl:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5 sm:px-8"
            aria-label={t.nav.mobile}
          >
            {t.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contact.phone.href}
              className="mt-3 inline-flex items-center justify-center border border-navy bg-navy px-4 py-3 text-sm font-medium text-paper"
              onClick={() => setOpen(false)}
            >
              {t.cta.call}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
