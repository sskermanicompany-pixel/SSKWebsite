"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { Lightbox } from "@/components/lightbox";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { GalleryImage } from "@/lib/gallery";

type ProjectsProps = {
  images: GalleryImage[];
};

export function Projects({ images = [] }: ProjectsProps) {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const featured = images.slice(0, 3);

  const lightboxImages = useMemo(
    () =>
      featured.map((image, index) => ({
        src: image.src,
        alt: `${t.gallery.alt} ${index + 1}`,
      })),
    [featured, t.gallery.alt],
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((image, index) => {
            const copy = t.projects.items[index] ?? t.projects.items[0];
            return (
              <li key={image.src} className="group">
                <button
                  type="button"
                  className="relative block aspect-[4/3] w-full overflow-hidden border border-line bg-navy text-start"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`${t.gallery.view}: ${copy.title}`}
                >
                  <Image
                    src={image.src}
                    alt={lightboxImages[index]?.alt ?? t.gallery.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/20" />
                </button>
                <p className="eyebrow mt-5 text-xs font-medium text-accent">
                  {copy.category}
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">
                  {copy.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {copy.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
      {selectedIndex !== null ? (
        <Lightbox
          images={lightboxImages}
          index={selectedIndex}
          closeLabel={t.gallery.close}
          prevLabel={t.gallery.prev}
          nextLabel={t.gallery.next}
          onClose={() => setSelectedIndex(null)}
          onIndexChange={setSelectedIndex}
        />
      ) : null}
    </section>
  );
}
