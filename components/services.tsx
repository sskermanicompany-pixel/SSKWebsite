"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import {
  IconPrecision,
  IconQuality,
  IconReliability,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { GalleryImage } from "@/lib/gallery";

const icons = [IconPrecision, IconQuality, IconReliability];

type ServicesProps = {
  images: GalleryImage[];
};

export function Services({ images = [] }: ServicesProps) {
  const { t } = useLanguage();
  const machineImage = images[1] ?? images[0];

  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-line bg-paper py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />
        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index] ?? IconPrecision;
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
                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid bg-navy text-paper md:grid-cols-2">
            <div className="p-8 md:p-10">
              <p className="eyebrow text-xs font-medium text-accent">
                {t.services.machinesEyebrow}
              </p>
              <h3 className="mt-4 font-display text-3xl">
                {t.services.machinesTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-paper/70">
                {t.services.machinesDescription}
              </p>
            </div>
            {machineImage ? (
              <div className="relative min-h-56">
                <Image
                  src={machineImage.src}
                  alt={t.gallery.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
          <div className="flex items-center bg-paper p-8 md:p-10">
            <div>
              <p className="eyebrow text-xs font-medium text-accent">
                {t.services.warrantyEyebrow}
              </p>
              <p className="mt-3 font-display text-3xl text-navy">
                {t.services.warrantyTitle}
              </p>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                {t.services.warrantyDescription}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
