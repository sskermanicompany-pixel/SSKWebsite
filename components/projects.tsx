import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export function Projects() {
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
          title="Selected work samples."
          description="Placeholder studies only. Real project names, photography, and outcomes will replace this content when available."
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-line bg-navy">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, transparent 48%, #9a7348 48.5%, #9a7348 51.5%, transparent 52%)",
                  }}
                />
                <p className="absolute inset-0 flex items-center justify-center font-display text-5xl text-paper/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
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
    </section>
  );
}
