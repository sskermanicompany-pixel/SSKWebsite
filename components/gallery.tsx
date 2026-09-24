"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { Lightbox } from "@/components/lightbox";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { GalleryImage } from "@/lib/gallery";

type GalleryProps = {
  images: GalleryImage[];
};

export function Gallery({ images = [] }: GalleryProps) {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () =>
      images.map((image, index) => ({
        src: image.src,
        alt: `${t.gallery.alt} ${index + 1}`,
      })),
    [images, t.gallery.alt],
  );

  if (images.length === 0) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-line bg-background py-24 md:py-32"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <SectionHeading
          id="gallery-heading"
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          description={t.gallery.description}
        />
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <li
              key={image.src}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <button
                type="button"
                className="group relative block aspect-[4/3] w-full overflow-hidden border border-line bg-navy"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${t.gallery.view} ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={lightboxImages[index]?.alt ?? t.gallery.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 66vw, 100vw"
                      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/25" />
              </button>
            </li>
          ))}
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
