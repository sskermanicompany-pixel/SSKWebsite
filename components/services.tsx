import { Container } from "@/components/container";
import {
  IconInnovation,
  IconPrecision,
  IconQuality,
  IconReliability,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site";

const icons = [
  IconPrecision,
  IconQuality,
  IconReliability,
  IconInnovation,
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-line bg-paper py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Capabilities, presented as placeholders."
          description="These blocks stand in for SSK’s actual services. Titles and descriptions should be replaced with approved offerings."
        />
        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <li
                key={service.title}
                className="bg-paper p-8 transition-colors hover:bg-background md:p-10"
              >
                <span className="inline-flex text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
