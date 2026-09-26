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

const phones = [
  {
    label: "09214149469",
    href: "tel:09214149469",
  },
  {
    label: "09143015540",
    href: "tel:09143015540",
  },
];

export const contact = {
  phones,
  phone: {
    ...phones[0],
  },
  email: {
    label: "info@sskermani.ir",
    href: "mailto:info@sskermani.ir",
  },
  location: {
    href: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.70886772793096!2d46.1354366!3d38.038074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a0d0024396793%3A0xa65c64b253ca7411!2z2q_YsdmI2Ycg2YHZhtuMINmIINmF2YfZhtiv2LPbjCBTU0s!5e1!3m2!1sen!2s!4v1790422122896!5m2!1sen!2s",
  },
} as const;
