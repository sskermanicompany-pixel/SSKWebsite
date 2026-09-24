"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { useLanguage } from "@/components/language-provider";
import { contact } from "@/lib/site";
import type { GalleryImage } from "@/lib/gallery";

type HeroProps = {
  image?: GalleryImage;
};

export function Hero({ image }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-navy text-paper"
      aria-labelledby="hero-heading"
    >
      {image ? (
        <Image
          src={image.src}
          alt={t.gallery.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
          loading="eager"
        />
      ) : null}
      <div className="absolute inset-0 bg-navy/75" />
      <Container className="relative grid min-h-[34rem] items-center py-24 md:min-h-[40rem] md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up text-xs font-medium text-accent">
            {t.hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up-delay mt-5 font-display text-4xl leading-[1.2] tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {t.hero.title}
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-8 text-pretty text-paper/80 sm:text-lg">
            {t.hero.description}
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent-hover hover:text-paper"
            >
              {t.cta.contact}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
            >
              {t.cta.viewWork}
            </a>
            <a
              href={contact.phone.href}
              className="inline-flex items-center justify-center border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
              dir="ltr"
            >
              {contact.phone.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
