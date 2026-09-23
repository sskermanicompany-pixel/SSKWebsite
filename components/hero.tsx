import { Container } from "@/components/container";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-navy text-paper"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full border border-paper/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-16 bottom-[-4rem] h-64 w-64 border border-accent/30"
        aria-hidden="true"
      />
      <Container className="relative grid min-h-[34rem] items-center py-24 md:min-h-[40rem] md:py-32">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-accent uppercase">
            Foundry solutions
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up-delay mt-5 font-display text-4xl leading-[1.12] font-medium tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Built for foundries.
            <br />
            Made with precision.
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-7 text-pretty text-paper/75 sm:text-lg">
            SSK provides mold making, pattern making, foundry raw materials,
            and core shooter machine manufacturing for foundries and casting
            companies.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm tracking-wide text-navy transition-colors hover:bg-accent-hover hover:text-paper"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-paper/25 px-6 py-3 text-sm tracking-wide text-paper transition-colors hover:border-accent hover:text-accent"
            >
              View Work Samples
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
