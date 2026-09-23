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
          title="Focused capabilities for casting operations."
          description="SSK combines production services, foundry material supply, and purpose-built core shooter machines for industrial use."
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
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-[1fr_1.4fr]">
            <div className="bg-navy p-8 text-paper md:p-10">
              <p className="text-xs tracking-[0.2em] text-accent uppercase">
                Core shooter machines
              </p>
              <h3 className="mt-4 font-display text-3xl">Gold Box &amp; Hot Box</h3>
              <p className="mt-4 text-sm leading-6 text-paper/70">
                SSK manufactures core shooter machines in Gold Box and Hot Box
                configurations.
              </p>
            </div>
            <div className="flex items-center bg-paper p-8 md:p-10">
              <div>
                <p className="text-xs tracking-[0.2em] text-accent uppercase">
                  Warranty
                </p>
                <p className="mt-3 font-display text-3xl text-navy">
                  6-month company warranty
                </p>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                  All machines manufactured by SSK are provided with a 6-month
                  company warranty.
                </p>
              </div>
            </div>
          </div>
        </ul>
      </Container>
    </section>
  );
}
