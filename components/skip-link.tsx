"use client";

import { useLanguage } from "@/components/language-provider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-paper start-4"
    >
      {t.skipToContent}
    </a>
  );
}
