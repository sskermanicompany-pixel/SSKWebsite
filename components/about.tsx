"use client";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="about-heading">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-20">
        <SectionHeading
          id="about-heading"
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />
        <div className="space-y-6 text-base leading-8 text-muted">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="border-s border-accent ps-5 font-medium text-charcoal">
            {t.about.warranty}
          </p>
        </div>
      </Container>
    </section>
  );
}
