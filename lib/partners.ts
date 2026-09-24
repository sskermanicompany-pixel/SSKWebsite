import { readdirSync } from "node:fs";
import path from "node:path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|svg)$/i;

export type PartnerLogo = {
  src: string;
  filename: string;
  alt: string;
};

function labelFromFilename(filename: string) {
  return filename
    .replace(IMAGE_EXT, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

export function getPartnerLogos(): PartnerLogo[] {
  const dir = path.join(process.cwd(), "public", "images", "clients");

  try {
    return readdirSync(dir)
      .filter((file) => IMAGE_EXT.test(file))
      .sort((a, b) => a.localeCompare(b))
      .map((filename) => ({
        filename,
        src: `/images/clients/${filename}`,
        alt: labelFromFilename(filename),
      }));
  } catch {
    return [];
  }
}
