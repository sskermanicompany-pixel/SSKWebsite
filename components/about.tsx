import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="about-heading">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-20">
        <SectionHeading
          id="about-heading"
          eyebrow="About SSK"
          title="Practical solutions for foundry production."
        />
        <div className="space-y-6 text-base leading-7 text-muted">
          <p>
            SSK serves foundries and casting companies with focused products
            and services for mold, pattern, material, and core production
            requirements.
          </p>
          <p>
            Our offering includes mold making and pattern making, foundry raw
            material supply, and the manufacture of core shooter machines.
          </p>
          <p className="border-l border-accent pl-5 text-charcoal">
            Every SSK-manufactured machine is provided with a 6-month company
            warranty.
          </p>
        </div>
      </Container>
    </section>
  );
}
