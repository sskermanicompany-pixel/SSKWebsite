export const site = {
  name: "SSK",
  logos: {
    fa: "/images/logo/SSK-FA.png",
    en: "/images/logo/SSK-EN.png",
  },
} as const;

export function getSiteLogo(locale: keyof typeof site.logos) {
  return site.logos[locale];
}

export function getSiteUrl() {
  const url = process.env.SITE_URL?.replace(/\/$/, "");
  if (url) {
    return url;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const contact = {
  phone: {
    label: "09214149469",
    href: "tel:09214149469",
  },
  email: {
    label: "sskermani@gmail.com",
    href: "mailto:sskermani@gmail.com",
  },
  location: {
    href: "https://maps.app.goo.gl/oupkcFeZDfYTZr2y5",
  },
} as const;
