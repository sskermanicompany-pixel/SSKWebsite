"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  defaultLocale,
  dictionaries,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

const STORAGE_KEY = "ssk-locale";
const LOCALE_CHANGE_EVENT = "ssk-locale-change";

type LanguageContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribeToLocaleChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, onChange);
  };
}

function getStoredLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fa" ? stored : defaultLocale;
}

function applyDocumentLocale(locale: Locale) {
  const dir = locale === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const storedLocale = useSyncExternalStore(
    subscribeToLocaleChanges,
    getStoredLocale,
    () => defaultLocale,
  );
  const pathname = usePathname();
  const routeLocale = /^\/(fa|en)(?:\/|$)/.exec(pathname)?.[1] as
    | Locale
    | undefined;
  const locale = routeLocale ?? storedLocale;

  useEffect(() => {
    applyDocumentLocale(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
    applyDocumentLocale(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === "fa" ? "rtl" : "ltr",
      t: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
