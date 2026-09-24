"use client";

import { useEffect } from "react";
import Image from "next/image";
import { IconClose } from "@/components/icons";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({
  images,
  index,
  closeLabel,
  prevLabel,
  nextLabel,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const image = images[index];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, index, onClose, onIndexChange]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/92 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <div
        className="relative h-[min(82vh,44rem)] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
        <button
          type="button"
          className="absolute top-0 inline-flex items-center gap-2 border border-paper/30 bg-navy/80 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent end-0"
          onClick={onClose}
          aria-label={closeLabel}
        >
          <IconClose className="h-4 w-4" />
          {closeLabel}
        </button>
        {hasMultiple ? (
          <>
            <button
              type="button"
              className="absolute top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-paper/30 bg-navy/80 text-paper transition-colors hover:border-accent hover:text-accent start-0"
              onClick={() =>
                onIndexChange((index - 1 + images.length) % images.length)
              }
              aria-label={prevLabel}
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-paper/30 bg-navy/80 text-paper transition-colors hover:border-accent hover:text-accent end-0"
              onClick={() => onIndexChange((index + 1) % images.length)}
              aria-label={nextLabel}
            >
              ›
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
