"use client";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type KeyboardEvent as ReactKeyboardEvent,
  type SetStateAction,
} from "react";
import { IconClose, IconMenu } from "@/components/icons";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";
import {
  getServiceHref,
  serviceNavigation,
  type ServiceNavigationItem,
} from "@/lib/services-navigation";
import { contact } from "@/lib/site";

type ServiceTreeProps = {
  items: ServiceNavigationItem[];
  locale: "fa" | "en";
  mobile: boolean;
  openPath: string[];
  setOpenPath: Dispatch<SetStateAction<string[]>>;
  path?: string[];
};

function ServiceTree({
  items,
  locale,
  mobile,
  openPath,
  setOpenPath,
  path = [],
}: ServiceTreeProps) {
  return (
    <ul className={path.length ? "ms-4 border-s border-line ps-3" : ""}>
      {items.map((item) => {
        const itemPath = [...path, item.slug];
        const key = itemPath.join("/");
        const submenuId = `service-submenu-${mobile ? "mobile" : "desktop"}-${locale}-${key.replaceAll("/", "-")}`;
        const expanded =
          openPath.length >= itemPath.length &&
          itemPath.every((segment, index) => openPath[index] === segment);
        const hasChildren = Boolean(item.children?.length);

        return (
          <li
            key={key}
            className="min-w-0"
            onMouseEnter={() => {
              if (!mobile && hasChildren) setOpenPath(itemPath);
            }}
            onMouseLeave={() => {
              if (!mobile && hasChildren) {
                setOpenPath((current) => current.slice(0, itemPath.length - 1));
              }
            }}
          >
            <div className="flex min-w-0 items-center gap-2">
              <a
                href={getServiceHref(locale, itemPath)}
                className={`min-w-0 flex-1 py-2 text-start text-sm font-medium text-charcoal transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${mobile ? "break-words" : "truncate"}`}
              >
                {item.label[locale]}
              </a>
              {hasChildren ? (
                <button
                  type="button"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`${expanded ? (locale === "fa" ? "بستن" : "Collapse") : (locale === "fa" ? "باز کردن" : "Expand")} ${item.label[locale]}`}
                  aria-expanded={expanded}
                  aria-controls={submenuId}
                  onClick={() =>
                    setOpenPath(expanded ? itemPath.slice(0, -1) : itemPath)
                  }
                >
                  <span className="inline-block h-2 w-2 rotate-45 border-b border-e border-current" />
                </button>
              ) : null}
            </div>
            {hasChildren ? (
              <div
                id={submenuId}
                inert={!expanded}
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-150 ease-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <ServiceTree
                    items={item.children!}
                    locale={locale}
                    mobile={mobile}
                    openPath={openPath}
                    setOpenPath={setOpenPath}
                    path={itemPath}
                  />
                </div>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function NavigationList({
  mobile,
  onNavigate,
}: {
  mobile: boolean;
  onNavigate?: () => void;
}) {
  const { locale, t } = useLanguage();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openPath, setOpenPath] = useState<string[]>([]);
  const servicesToggleRef = useRef<HTMLButtonElement>(null);
  const servicesItem = t.nav.items.find((item) => item.href === "/#services");
  const servicesMenuId = `services-menu-${mobile ? "mobile" : "desktop"}`;

  function handleKeyDown(event: ReactKeyboardEvent<HTMLLIElement>) {
    if (event.key === "Escape" && servicesOpen) {
      event.preventDefault();
      event.stopPropagation();
      setServicesOpen(false);
      setOpenPath([]);
      servicesToggleRef.current?.focus();
    }
  }

  return (
    <ul
      className={
        mobile ? "flex flex-col gap-1" : "flex items-center gap-3 xl:gap-5"
      }
    >
      {t.nav.items.map((item) =>
        item.href === "/#services" && servicesItem ? (
          <li
            key={item.href}
            className="relative"
            onMouseEnter={() => {
              if (!mobile) setServicesOpen(true);
            }}
            onMouseLeave={() => {
              if (!mobile) {
                setServicesOpen(false);
                setOpenPath([]);
              }
            }}
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center gap-1">
              <a
                href={item.href}
                className={`${mobile ? "py-3 text-base text-navy" : "text-sm text-charcoal"} font-medium transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
                onClick={onNavigate}
              >
                {item.label}
              </a>
              <button
                ref={servicesToggleRef}
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`${servicesOpen ? (locale === "fa" ? "بستن" : "Collapse") : (locale === "fa" ? "باز کردن" : "Expand")} ${item.label}`}
                aria-expanded={servicesOpen}
                aria-controls={servicesMenuId}
                onClick={() => setServicesOpen((value) => !value)}
              >
                <span
                  className={`inline-block h-2 w-2 border-b border-e border-current transition-transform ${servicesOpen ? "rotate-45" : "-rotate-45"}`}
                />
              </button>
            </div>
            <div
              id={servicesMenuId}
              inert={!servicesOpen}
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-150 ease-out ${servicesOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"} ${mobile ? "ms-3" : "absolute start-0 top-full z-50 max-h-[calc(100dvh-5rem)] w-[min(24rem,calc(100vw-2rem))]"}`}
            >
              <div
                className={`min-h-0 ${mobile ? "overflow-hidden border-s border-line ps-3" : "overflow-y-auto border border-line bg-paper p-3 shadow-lg"}`}
              >
                <ServiceTree
                  items={serviceNavigation}
                  locale={locale}
                  mobile={mobile}
                  openPath={openPath}
                  setOpenPath={setOpenPath}
                />
              </div>
            </div>
          </li>
        ) : (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${mobile ? "block py-3 text-base text-navy" : "text-sm text-charcoal"} font-medium transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          </li>
        ),
      )}
    </ul>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
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
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <Logo />
        <nav className="hidden xl:block" aria-label={t.nav.primary}>
          <NavigationList mobile={false} />
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
            ref={menuButtonRef}
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
            className="mx-auto max-h-[calc(100dvh-4.5rem)] max-w-6xl overflow-y-auto px-6 py-5 sm:px-8"
            aria-label={t.nav.mobile}
          >
            <NavigationList mobile onNavigate={() => setOpen(false)} />
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
