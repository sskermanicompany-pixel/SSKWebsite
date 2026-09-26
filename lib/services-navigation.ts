import type { Locale } from "@/lib/i18n";

export type ServiceNavigationItem = {
  slug: string;
  label: Record<Locale, string>;
  description: Record<Locale, string>;
  children?: ServiceNavigationItem[];
};

export const serviceNavigation: ServiceNavigationItem[] = [
  {
    slug: "machinery",
    label: { fa: "ماشین سازی", en: "Machinery Manufacturing" },
    description: {
      fa: "طراحی و ساخت تجهیزات تخصصی برای آماده‌سازی ماسه و تولید ماهیچه در خطوط ریخته‌گری.",
      en: "Specialist machinery for sand preparation and core production in foundry operations.",
    },
    children: [
      {
        slug: "core-shooting",
        label: {
          fa: "دستگاه ماهیچه گیری (شوت ماهیچه)",
          en: "Core Shooting Machine",
        },
        description: {
          fa: "دستگاه‌های شوت ماهیچه برای تولید ماهیچه‌های ریخته‌گری در پیکربندی‌های هات باکس و کلد باکس.",
          en: "Core shooting equipment for foundry core production in hot-box and cold-box configurations.",
        },
        children: [
          {
            slug: "hot-box",
            label: { fa: "الف. هات باکس", en: "A. Hot Box" },
            description: {
              fa: "پیکربندی هات باکس برای تولید ماهیچه با فرایند پخت گرم.",
              en: "Hot-box configurations for core production using a heated curing process.",
            },
            children: [
              {
                slug: "horizontal",
                label: { fa: "الف ۱. افقی", en: "A1. Horizontal" },
                description: {
                  fa: "چیدمان افقی هات باکس برای تولید ماهیچه متناسب با نیاز خط ریخته‌گری.",
                  en: "Horizontal hot-box layout configured for the foundry's core production requirements.",
                },
              },
              {
                slug: "general",
                label: { fa: "الف ۲. عمومی", en: "A2. General" },
                description: {
                  fa: "گزینه عمومی هات باکس برای کاربردهای متنوع تولید ماهیچه.",
                  en: "General hot-box configuration for a range of core-making applications.",
                },
              },
            ],
          },
          {
            slug: "cold-box",
            label: { fa: "ب. کلد باکس", en: "B. Cold Box" },
            description: {
              fa: "پیکربندی کلد باکس برای تولید ماهیچه با فرایند پخت سرد و گازدهی.",
              en: "Cold-box configurations for core production using a cold curing and gassing process.",
            },
            children: [
              {
                slug: "horizontal",
                label: { fa: "ب ۱. افقی", en: "B1. Horizontal" },
                description: {
                  fa: "چیدمان افقی کلد باکس برای تولید پایدار ماهیچه در فرایند ریخته‌گری.",
                  en: "Horizontal cold-box layout for consistent core production in foundry processes.",
                },
                children: [
                  {
                    slug: "h-16",
                    label: { fa: "H-16", en: "H-16" },
                    description: {
                      fa: "مدل افقی H-16 از دستگاه کلد باکس برای نیازهای تولید ماهیچه.",
                      en: "The H-16 horizontal cold-box model for core production requirements.",
                    },
                  },
                  {
                    slug: "h-35",
                    label: { fa: "H-35", en: "H-35" },
                    description: {
                      fa: "مدل افقی H-35 از دستگاه کلد باکس برای تولید ماهیچه در مقیاس صنعتی.",
                      en: "The H-35 horizontal cold-box model for industrial core production.",
                    },
                  },
                  {
                    slug: "custom",
                    label: { fa: "سفارشی", en: "Custom" },
                    description: {
                      fa: "طراحی سفارشی کلد باکس افقی بر اساس مشخصات و ظرفیت موردنیاز مشتری.",
                      en: "A custom horizontal cold-box machine designed to the required specifications and capacity.",
                    },
                  },
                ],
              },
              {
                slug: "vertical",
                label: { fa: "ب ۲. عمودی", en: "B2. Vertical" },
                description: {
                  fa: "چیدمان عمودی کلد باکس برای پاسخ به نیازهای مشخص تولید و فضای کارخانه.",
                  en: "Vertical cold-box layout adapted to specific production and plant-floor requirements.",
                },
                children: [
                  {
                    slug: "25-15",
                    label: { fa: "25-15", en: "25-15" },
                    description: {
                      fa: "مدل عمودی 25-15 از دستگاه کلد باکس برای تولید ماهیچه.",
                      en: "The 25-15 vertical cold-box model for foundry core production.",
                    },
                  },
                  {
                    slug: "25-40",
                    label: { fa: "25-40", en: "25-40" },
                    description: {
                      fa: "مدل عمودی 25-40 از دستگاه کلد باکس برای تولید ماهیچه.",
                      en: "The 25-40 vertical cold-box model for foundry core production.",
                    },
                  },
                  {
                    slug: "custom",
                    label: { fa: "سفارشی", en: "Custom" },
                    description: {
                      fa: "طراحی سفارشی کلد باکس عمودی متناسب با فضای خط و مشخصات تولید.",
                      en: "A custom vertical cold-box machine tailored to production and floor-space requirements.",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        slug: "runner-breaker",
        label: { fa: "دستگاه راهگاه شکن", en: "Runner Breaker Machine" },
        description: {
          fa: "تجهیزات راهگاه‌شکن برای جداسازی راهگاه از قطعات ریخته‌گری پس از انجماد.",
          en: "Runner breaker equipment for separating casting runners after solidification.",
        },
      },
      {
        slug: "bonded-sand-production",
        label: { fa: "تولید ماسه چسب دار", en: "Bonded Sand Production" },
        description: {
          fa: "راهکارهای تولید ماسه چسب‌دار برای آماده‌سازی مواد قالب‌گیری در ریخته‌گری.",
          en: "Solutions for producing bonded sand used in foundry moulding processes.",
        },
      },
    ],
  },
  {
    slug: "mold-making",
    label: { fa: "قالب سازی", en: "Mold Making" },
    description: {
      fa: "ساخت جعبه ماهیچه، مدل ریخته‌گری و قالب دایکاست بر اساس مشخصات قطعه.",
      en: "Manufacture of core boxes, casting patterns, and die-casting molds to part specifications.",
    },
    children: [
      {
        slug: "core-box",
        label: { fa: "جعبه ماهیچه", en: "Core Box" },
        description: {
          fa: "ساخت جعبه ماهیچه دقیق برای تولید ماهیچه‌های موردنیاز قطعات ریخته‌گری.",
          en: "Precision core boxes for producing cores required by foundry castings.",
        },
      },
      {
        slug: "casting-pattern",
        label: { fa: "مدل ریخته گری", en: "Casting Pattern" },
        description: {
          fa: "ساخت مدل ریخته‌گری متناسب با هندسه قطعه و الزامات فرایند تولید.",
          en: "Casting patterns made to match component geometry and production requirements.",
        },
      },
      {
        slug: "die-casting-mold",
        label: { fa: "قالب دایکاست", en: "Die-Casting Mold" },
        description: {
          fa: "ساخت قالب دایکاست بر اساس مشخصات قطعه و الزامات ریخته‌گری تحت فشار.",
          en: "Die-casting molds manufactured to component specifications and pressure-casting requirements.",
        },
      },
    ],
  },
];

export type ServicePageEntry = {
  item: ServiceNavigationItem;
  segments: string[];
  ancestors: ServiceNavigationItem[];
};

export function getServicePageEntries(): ServicePageEntry[] {
  const entries: ServicePageEntry[] = [];

  function visit(
    items: ServiceNavigationItem[],
    parentSegments: string[],
    ancestors: ServiceNavigationItem[],
  ) {
    for (const item of items) {
      const segments = [...parentSegments, item.slug];
      entries.push({ item, segments, ancestors });
      if (item.children) {
        visit(item.children, segments, [...ancestors, item]);
      }
    }
  }

  visit(serviceNavigation, [], []);
  return entries;
}

export function getServicePage(segments: string[]) {
  return getServicePageEntries().find(
    (entry) => entry.segments.join("/") === segments.join("/"),
  );
}

export function getServiceHref(locale: Locale, segments: string[]) {
  return `/${locale}/services/${segments.join("/")}`;
}
