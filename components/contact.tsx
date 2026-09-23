import { Container } from "@/components/container";
import { IconMail, IconPhone } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contact } from "@/lib/site";

export function Contact() {
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
            eyebrow="Contact"
            title="Connect with SSK."
            description="Speak with SSK about foundry and casting requirements, machine manufacturing, or material supply."
          />
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="tracking-[0.16em] text-accent uppercase">Phone</dt>
              <dd className="mt-1 text-base text-navy">
                <a href={contact.phone.href} className="transition-colors hover:text-accent">
                  {contact.phone.label}
                </a>
              </dd>
              <dd className="text-muted">{contact.phone.note}</dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] text-accent uppercase">Email</dt>
              <dd className="mt-1 text-base text-navy">
                <a href={contact.email.href} className="transition-colors hover:text-accent">
                  {contact.email.label}
                </a>
              </dd>
              <dd className="text-muted">{contact.email.note}</dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] text-accent uppercase">Location</dt>
              <dd className="mt-1 text-base text-navy">
                <a
                  href={contact.location.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {contact.location.label}
                </a>
              </dd>
              <dd className="text-muted">{contact.location.note}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.location.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-navy px-5 py-3 text-sm text-paper transition-colors hover:bg-accent hover:text-navy"
            >
              View Location
            </a>
            <a
              href={contact.phone.href}
              className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 text-sm text-navy transition-colors hover:border-accent hover:text-accent"
            >
              <IconPhone />
              Phone
            </a>
            <a
              href={contact.email.href}
              className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 text-sm text-navy transition-colors hover:border-accent hover:text-accent"
            >
              <IconMail />
              Email
            </a>
          </div>
        </div>
        <div
          className="relative min-h-80 overflow-hidden border border-line bg-paper"
          aria-label="SSK location map link"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, #dcd6cc 1px, transparent 1px), linear-gradient(to bottom, #dcd6cc 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-8 border border-navy/10" />
          <div className="relative flex h-full min-h-80 flex-col items-center justify-center px-6 text-center">
            <p className="text-xs tracking-[0.22em] text-accent uppercase">
              Location
            </p>
            <p className="mt-3 font-display text-3xl text-navy">
              SSK location
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Open the supplied Google Maps link to view the SSK location.
            </p>
            <a
              href={contact.location.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex border border-navy px-5 py-3 text-sm text-navy transition-colors hover:bg-navy hover:text-paper"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
