import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <Link
      href="#home"
      className={`group inline-flex items-center ${
        inverted ? "rounded-sm bg-paper px-2 py-1" : ""
      }`}
      aria-label={`${site.name} home`}
    >
      <Image
        src={site.logo}
        alt={site.name}
        width={200}
        height={80}
        className="h-11 w-auto max-w-[10.5rem] object-contain sm:h-12 sm:max-w-[12rem]"
        priority
      />
    </Link>
  );
}
