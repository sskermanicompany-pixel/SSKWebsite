import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="#home"
      className={`group inline-flex items-baseline gap-2 tracking-tight ${
        inverted ? "text-paper" : "text-navy"
      }`}
      aria-label="SSK home"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center border text-[0.7rem] font-medium tracking-[0.18em] ${
          inverted
            ? "border-paper/30 group-hover:border-accent"
            : "border-navy/20 group-hover:border-accent"
        }`}
      >
        SSK
      </span>
      <span className="font-display text-2xl font-medium leading-none">
        SSK
      </span>
    </Link>
  );
}
