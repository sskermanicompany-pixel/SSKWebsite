import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/images/logo/SSK-FA.png"
        alt="SSK"
        width={132}
        height={44}
        className={`h-10 w-[7.5rem] object-contain object-left ${inverted ? "brightness-0 invert" : ""}`}
        priority
      />
    </Link>
  );
}
