export const site = {
  name: "SSK",
  tagline: "Foundry solutions with precision.",
  description:
    "SSK serves foundries and casting companies with mold making, pattern making, foundry raw materials, and core shooter machine manufacturing.",
};
export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#customers", label: "Customers" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Mold Making & Pattern Making",
    description:
      "Mold and pattern making for foundry and casting applications, with careful attention to production requirements.",
  },
  {
    title: "Foundry Raw Material Supply",
    description:
      "Raw material supply for foundry operations and casting workflows.",
  },
  {
    title: "Core Shooter Machine Manufacturing",
    description:
      "Manufacturing core shooter machines for foundry production, including Gold Box and Hot Box models.",
  },
] as const;

export const projects = [
  {
    title: "Foundry production equipment",
    category: "Machine manufacturing",
    description:
      "A view from SSK’s core shooter machine manufacturing work.",
    image: "/images/gallery/IMG_20230625_155959.jpg",
    alt: "SSK foundry production equipment",
  },
  {
    title: "Core shooter machine detail",
    category: "Core shooter machines",
    description:
      "Equipment imagery from SSK’s available work gallery.",
    image: "/images/gallery/IMG_20230625_160057.jpg",
    alt: "SSK core shooter machine detail",
  },
  {
    title: "Foundry workspace",
    category: "Work samples",
    description:
      "An authentic SSK gallery image from the foundry environment.",
    image: "/images/gallery/IMG_20230625_163355.jpg",
    alt: "SSK foundry workspace",
  },
] as const;

export const customers = ["Foundries", "Casting companies"] as const;

export const values = [
  {
    title: "Precision",
    description:
      "Careful planning and exacting standards at every stage of delivery.",
  },
  {
    title: "Quality",
    description:
      "Materials, methods, and outcomes held to a consistently high bar.",
  },
  {
    title: "Reliability",
    description:
      "Commitments met with clarity, accountability, and follow-through.",
  },
  {
    title: "Innovation",
    description:
      "Measured improvement—new ideas applied only where they strengthen the result.",
  },
] as const;

export const contact = {
  phone: {
    label: "09214149469",
    href: "tel:09214149469",
    note: "Call SSK",
  },
  email: {
    label: "sskermani@gmail.com",
    href: "mailto:sskermani@gmail.com",
    note: "Email SSK",
  },
  location: {
    label: "Open location in Google Maps",
    href: "https://maps.app.goo.gl/oupkcFeZDfYTZr2y5",
    note: "SSK location",
  },
};
