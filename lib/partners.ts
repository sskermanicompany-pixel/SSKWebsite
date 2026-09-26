import { readdirSync } from "node:fs";
import path from "node:path";
import { partners, type Partner } from "@/data/partners";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|svg)$/i;

function labelFromFilename(filename: string) {
  return filename
    .replace(IMAGE_EXT, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

function unlistedPartners(): Partner[] {
  const dir = path.join(process.cwd(), "public", "images", "clients");
  const listed = new Set(partners.map((partner) => partner.logo));

  try {
    return readdirSync(dir)
      .filter((file) => IMAGE_EXT.test(file))
      .sort((a, b) => a.localeCompare(b))
      .map((filename) => `/images/clients/${filename}`)
      .filter((src) => !listed.has(src))
      .map((src) => ({
        name: labelFromFilename(path.basename(src)),
        logo: src,
        website: "",
      }));
  } catch {
    return [];
  }
}

export function getPartners(): Partner[] {
  return [...partners, ...unlistedPartners()];
}
