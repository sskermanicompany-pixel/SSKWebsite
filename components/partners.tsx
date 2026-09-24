"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { PartnerLogo } from "@/lib/partners";

type PartnersProps = {
  logos: PartnerLogo[];
};

export function Partners({ logos }: PartnersProps) {
  const { t, dir } = useLanguage();

  if (logos.length === 0) {
    return null;
  }

  const sequence = [...logos, ...logos];

  return (
    <section
      id="partners"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="partners-heading"
    >
      <Container>
        <SectionHeading
          id="partners-heading"
          eyebrow={t.partners.eyebrow}
          title={t.partners.title}
          description={t.partners.description}
        />
      </Container>
      <div
        className="partners-marquee mt-14"
        data-direction={dir}
      >
        <div className="partners-track">
          <LogoRow logos={sequence} />
          <LogoRow logos={sequence} decorative />
        </div>
      </div>
    </section>
  );
}

function LogoRow({
  logos,
  decorative = false,
}: {
  logos: PartnerLogo[];
  decorative?: boolean;
}) {
  return (
    <ul
      className="flex items-center"
      aria-hidden={decorative || undefined}
    >
      {logos.map((logo, index) => (
        <li
          key={`${logo.src}-${index}-${decorative ? "copy" : "main"}`}
          className="flex h-24 shrink-0 items-center justify-center px-8 sm:h-28 sm:px-12"
        >
          <Image
            src={logo.src}
            alt={decorative ? "" : logo.alt}
            width={220}
            height={88}
            className="h-12 w-auto max-w-[10rem] object-contain sm:h-14 sm:max-w-[12rem]"
          />
        </li>
      ))}
    </ul>
  );
}
