"use client";

import { Container } from "@/components/container";
import { IconMail, IconPhone } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import { contact } from "@/lib/site";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow font-medium text-accent">{t.contact.phone}</dt>
              {contact.phones.map((phone) => (
                <dd key={phone.label} className="mt-1 text-base text-navy">
                  <a
                    href={phone.href}
                    className="font-medium transition-colors hover:text-accent"
                    dir="ltr"
                  >
                    {phone.label}
                  </a>
                </dd>
              ))}
              <dd className="text-muted">{t.contact.phoneNote}</dd>
            </div>
            <div>
              <dt className="eyebrow font-medium text-accent">{t.contact.email}</dt>
              <dd className="mt-1 text-base text-navy">
                <a
                  href={contact.email.href}
                  className="font-medium transition-colors hover:text-accent"
                  dir="ltr"
                >
                  {contact.email.label}
                </a>
              </dd>
              <dd className="text-muted">{t.contact.emailNote}</dd>
            </div>
            <div>
              <dt className="eyebrow font-medium text-accent">{t.contact.location}</dt>
              <dd className="mt-1 text-base text-navy">
                <a
                  href={contact.location.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium transition-colors hover:text-accent"
                >
                  {t.contact.locationLabel}
                </a>
              </dd>
              <dd className="text-muted">{t.contact.locationNote}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.location.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-navy px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-navy"
            >
              {t.contact.viewLocation}
            </a>
            {contact.phones.map((phone) => (
              <a
                key={phone.label}
                href={phone.href}
                className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent"
              >
                <IconPhone />
                <span dir="ltr">{phone.label}</span>
              </a>
            ))}
            <a
              href={contact.email.href}
              className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent"
            >
              <IconMail />
              <span dir="ltr">{contact.email.label}</span>
            </a>
          </div>
        </div>
        <div
          className="relative min-h-80 overflow-hidden border border-line bg-paper"
        >
          <iframe
            src={contact.location.href}
            title={t.contact.mapTitle}
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </Container>
    </section>
  );
}
