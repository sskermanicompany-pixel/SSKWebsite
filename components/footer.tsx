import { Logo } from "@/components/logo";
import { contact, navItems, site, socialLinks } from "@/lib/site";

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
            <li>{contact.phone.label}</li>
            <li>{contact.email.label}</li>
            <li>{contact.address.label}</li>
            <li>{contact.location.label}</li>
          </ul>
          <p className="mt-6 text-xs tracking-[0.2em] text-accent uppercase">
            Social
          </p>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-paper/80 transition-colors hover:text-accent"
                  aria-label={`${link.label} profile placeholder`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p>Placeholder contact and client details pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
