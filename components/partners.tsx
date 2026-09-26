"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { Partner } from "@/data/partners";

const LOGO_WIDTH = 176;
const LOGO_HEIGHT = 112;
const LOGO_SIZES = "(min-width: 768px) 176px, (min-width: 640px) 160px, 128px";

const cardClass =
  "flex h-20 w-32 shrink-0 items-center justify-center p-3 sm:h-24 sm:w-40 md:h-28 md:w-44";

const linkClass = `${cardClass} rounded-sm transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none hover:scale-105 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`;

type PartnersProps = {
  partners: Partner[];
};

export function Partners({ partners }: PartnersProps) {
  const { t } = useLanguage();

  if (partners.length === 0) {
    return null;
  }

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
      <div className="partners-marquee mt-14">
        {splitIntoRows(partners).map((row, index) => (
          <LogoRow
            key={index}
            logos={row}
            motion={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}

function splitIntoRows(partners: Partner[], rowCount = 2) {
  const size = Math.ceil(partners.length / rowCount);

  return Array.from({ length: rowCount }, (_, index) =>
    partners.slice(index * size, (index + 1) * size),
  ).filter((row) => row.length > 0);
}

function LogoRow({
  logos,
  motion,
}: {
  logos: Partner[];
  motion: "left" | "right";
}) {
  return (
    <div className="partners-marquee-row" data-motion={motion}>
      <div className="partners-track" dir="ltr">
        <LogoList logos={logos} />
        <LogoList logos={logos} duplicate />
      </div>
    </div>
  );
}

function LogoList({
  logos,
  duplicate = false,
}: {
  logos: Partner[];
  duplicate?: boolean;
}) {
  return (
    <ul
      className="partners-logo-list"
      role="list"
      aria-hidden={duplicate || undefined}
      data-duplicate={duplicate || undefined}
    >
      {logos.map((partner) => (
        <li key={partner.logo} className="flex shrink-0 items-center">
          <PartnerLogo partner={partner} duplicate={duplicate} />
        </li>
      ))}
    </ul>
  );
}

function PartnerLogo({
  partner,
  duplicate,
}: {
  partner: Partner;
  duplicate: boolean;
}) {
  const logo = (
    <Image
      src={partner.logo}
      alt={duplicate ? "" : partner.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      sizes={LOGO_SIZES}
      className="h-full w-full object-contain"
    />
  );

  if (!partner.website) {
    return <span className={cardClass}>{logo}</span>;
  }

  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      className={linkClass}
    >
      {logo}
    </a>
  );
}
