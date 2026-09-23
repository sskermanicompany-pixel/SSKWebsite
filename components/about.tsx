import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="about-heading">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-20">
        <SectionHeading
          id="about-heading"
          eyebrow="About SSK"
          title="A considered approach to professional work."
        />
        <div className="space-y-6 text-base leading-7 text-muted">
          <p>
            SSK exists to deliver work that holds up under scrutiny—planned
            with care, executed with discipline, and finished to a standard
            that earns trust. The details below are placeholders and should be
            replaced with verified company history, sector focus, and leadership
            information.
          </p>
          <p>
            Quality, precision, reliability, and innovation guide how we
            operate. We treat each engagement as a long-term relationship,
            measuring success by clarity of process as much as by the
            completed result.
          </p>
          <p className="border-l border-accent pl-5 text-charcoal">
            Placeholder statement: SSK partners with clients who value
            craftsmanship, accountability, and quiet excellence.
          </p>
        </div>
      </Container>
    </section>
  );
}
