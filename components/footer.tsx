import { Logo } from "@/components/logo";
import { contact, navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-6 text-paper/65">
            {site.description}
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-accent uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
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
          <p className="text-xs tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href={contact.phone.href} className="transition-colors hover:text-accent">
                {contact.phone.label}
              </a>
            </li>
            <li>
              <a href={contact.email.href} className="transition-colors hover:text-accent">
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
                {contact.location.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p>Foundry solutions by SSK.</p>
        </div>
      </div>
    </footer>
  );
}
