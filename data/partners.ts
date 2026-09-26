export type Partner = {
  name: string;
  logo: string;
  website: string;
};

/**
 * Logos listed here drive the partners section on the landing page.
 * The order below is the order the logos appear in: the list is split into
 * two scrolling rows, the first half moving right to left, the second half
 * moving left to right.
 *
 * Editing guide (no component changes needed):
 * - `name`   : shown as the logo `alt` text. Replace the placeholder labels
 *              with the real company name when it is known.
 * - `logo`   : path of an existing file inside `public/images/clients`.
 * - `website`: leave empty to keep the logo non-clickable, or paste the full
 *              URL (e.g. `https://example.com`) to make the whole logo card
 *              open that site in a new tab.
 */
export const partners: Partner[] = [
  {
    name: "Dana Ravesh",
    logo: "/images/clients/DanaRavesh.png",
    website: "",
  },
  {
    name: "IKCO",
    logo: "/images/clients/IKCO.png",
    website: "https://example.com",
  },
  {
    name: "image (1)",
    logo: "/images/clients/image (1).png",
    website: "",
  },
  {
    name: "image (11)",
    logo: "/images/clients/image (11).png",
    website: "",
  },
  {
    name: "image (12)",
    logo: "/images/clients/image (12).png",
    website: "",
  },
  {
    name: "image (13)",
    logo: "/images/clients/image (13).png",
    website: "",
  },
  {
    name: "image (14)",
    logo: "/images/clients/image (14).png",
    website: "",
  },
  {
    name: "image (15)",
    logo: "/images/clients/image (15).png",
    website: "",
  },
  {
    name: "image (16)",
    logo: "/images/clients/image (16).png",
    website: "",
  },
  {
    name: "image (17)",
    logo: "/images/clients/image (17).png",
    website: "",
  },
  {
    name: "image (2)",
    logo: "/images/clients/image (2).png",
    website: "",
  },
  {
    name: "image (4)",
    logo: "/images/clients/image (4).png",
    website: "",
  },
  {
    name: "image (5)",
    logo: "/images/clients/image (5).png",
    website: "",
  },
  {
    name: "image (6)",
    logo: "/images/clients/image (6).png",
    website: "",
  },
  {
    name: "image (7)",
    logo: "/images/clients/image (7).png",
    website: "",
  },
  {
    name: "image (8)",
    logo: "/images/clients/image (8).png",
    website: "",
  },
  {
    name: "image (9)",
    logo: "/images/clients/image (9).png",
    website: "",
  },
  {
    name: "image",
    logo: "/images/clients/image.png",
    website: "",
  },
  {
    name: "payazobekave",
    logo: "/images/clients/payazobekave.png",
    website: "",
  },
  {
    name: "آتراپات",
    logo: "/images/clients/آتراپات-معرفی-تمام-کسب-و-کارهای-ایران.jpg",
    website: "",
  },
];
