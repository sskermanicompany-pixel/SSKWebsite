"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Gallery &amp; work samples."
          description="Selected images from SSK’s available gallery, showing foundry equipment and working environments."
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title} className="group">
              <button
                type="button"
                className="relative block aspect-[4/3] w-full overflow-hidden border border-line bg-navy text-left"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <p className="mt-5 text-xs tracking-[0.18em] text-accent uppercase">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-2xl text-navy">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative h-[min(78vh,42rem)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button
              type="button"
              className="absolute right-0 top-0 border border-paper/30 bg-navy/80 px-4 py-2 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
              onClick={() => setSelectedProject(null)}
              aria-label="Close image preview"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
