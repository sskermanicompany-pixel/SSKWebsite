"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-5 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-charcoal transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden border border-navy bg-navy px-4 py-2 text-sm tracking-wide text-paper transition-colors hover:border-accent hover:bg-accent lg:inline-flex"
        >
          Contact Us
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5 sm:px-8"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-base text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center border border-navy bg-navy px-4 py-3 text-sm text-paper"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
