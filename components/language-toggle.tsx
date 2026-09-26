"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/components/language-provider";

type LanguageToggleProps = {
  inverted?: boolean;
};

export function LanguageToggle({ inverted = false }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const border = inverted ? "border-paper/30" : "border-line";
  const active = inverted ? "bg-paper text-navy" : "bg-navy text-paper";
  const idle = inverted
    ? "bg-transparent text-paper/80 hover:text-accent"
    : "bg-paper text-charcoal hover:text-accent";

  function changeLocale(nextLocale: "fa" | "en") {
    setLocale(nextLocale);
    if (/^\/(fa|en)(?:\/|$)/.test(pathname)) {
      router.push(pathname.replace(/^\/(fa|en)(?=\/|$)/, `/${nextLocale}`));
    }
  }

  return (
    <div
      className={`inline-flex overflow-hidden border text-xs font-medium ${border}`}
      role="group"
      aria-label={t.language.label}
    >
      <button
        type="button"
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "fa" ? active : idle
        }`}
        onClick={() => changeLocale("fa")}
        aria-pressed={locale === "fa"}
      >
        {t.language.fa}
      </button>
      <button
        type="button"
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en" ? active : idle
        }`}
        onClick={() => changeLocale("en")}
        aria-pressed={locale === "en"}
      >
        {t.language.en}
      </button>
    </div>
  );
}
