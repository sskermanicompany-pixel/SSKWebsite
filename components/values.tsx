import { Container } from "@/components/container";
import {
  IconInnovation,
  IconPrecision,
  IconQuality,
  IconReliability,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { values } from "@/lib/site";

const icons = [
  IconPrecision,
  IconQuality,
  IconReliability,
  IconInnovation,
];

export function Values() {
  return (
    <section
      id="values"
      className="scroll-mt-24 bg-navy py-24 text-paper md:py-32"
      aria-labelledby="values-heading"
    >
      <Container>
        <SectionHeading
          id="values-heading"
          invert
          eyebrow="Why SSK"
          title="Four principles, applied with care."
          description="These values frame how SSK intends to work. Supporting copy is placeholder until official language is confirmed."
        />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = icons[index];
            return (
              <li key={value.title} className="border-t border-paper/15 pt-6">
                <span className="inline-flex text-accent">
                  <Icon />
                </span>
                <h3 className="mt-5 font-display text-2xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-paper/70">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
