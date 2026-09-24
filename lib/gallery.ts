import { readdirSync } from "node:fs";
import path from "node:path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

export type GalleryImage = {
  src: string;
  filename: string;
};

export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  return readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((filename) => ({
      filename,
      src: `/images/gallery/${filename}`,
    }));
}
