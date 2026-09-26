export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export type Dictionary = (typeof dictionaries)[Locale];

export const dictionaries = {
  fa: {
    skipToContent: "رفتن به محتوا",
    brandSubtitle: "گروه فنی و مهندسی کرمانی",
    nav: {
      primary: "منوی اصلی",
      mobile: "منوی موبایل",
      open: "باز کردن منو",
      close: "بستن منو",
      items: [
        { href: "/#home", label: "خانه" },
        { href: "/#about", label: "درباره ما" },
        { href: "/#services", label: "خدمات" },
        { href: "/#partners", label: "شرکای تجاری" },
        { href: "/#projects", label: "نمونه‌کارها" },
        { href: "/#gallery", label: "گالری" },
        { href: "/blog", label: "وبلاگ" },
        { href: "/#customers", label: "مشتریان" },
        { href: "/#contact", label: "تماس" },
      ],
    },
    language: {
      label: "زبان",
      fa: "فارسی",
      en: "English",
    },
    cta: {
      call: "تماس با اس‌اس‌کی",
      contact: "تماس با ما",
      viewWork: "مشاهده نمونه‌کارها",
    },
    hero: {
      eyebrow: "راهکارهای ریخته‌گری",
      title: "تجهیزات و خدمات تخصصی برای ریخته‌گری",
      description:
        "اس‌اس‌کی ساخت قالب و مدل، تأمین مواد اولیه ریخته‌گری و ساخت دستگاه ماهیچه‌زن را برای کارخانه‌های ریخته‌گری و شرکت‌های ریخته‌گری ارائه می‌کند.",
    },
    about: {
      eyebrow: "درباره اس‌اس‌کی",
      title: "خدمات متمرکز برای تولید ریخته‌گری",
      paragraphs: [
        "مشتریان اصلی اس‌اس‌کی، کارخانه‌های ریخته‌گری و شرکت‌های ریخته‌گری هستند.",
        "خدمات و محصولات ما شامل ساخت قالب و مدل، تأمین مواد اولیه ریخته‌گری و ساخت دستگاه ماهیچه‌زن است.",
      ],
      warranty:
        "تمام دستگاه‌های ساخت اس‌اس‌کی با ضمانت ۶ ماهه شرکت ارائه می‌شوند.",
    },
    services: {
      eyebrow: "خدمات و محصولات",
      title: "خدمات تخصصی برای عملیات ریخته‌گری",
      description:
        "اس‌اس‌کی ساخت قالب و مدل، تأمین مواد اولیه ریخته‌گری و ساخت دستگاه ماهیچه‌زن را ارائه می‌کند.",
      items: [
        {
          title: "ساخت قالب و مدل",
          description:
            "ساخت قالب و مدل برای کاربردهای ریخته‌گری، متناسب با نیاز تولید.",
        },
        {
          title: "تأمین مواد اولیه ریخته‌گری",
          description:
            "تأمین مواد اولیه مورد نیاز عملیات ریخته‌گری و فرآیندهای مرتبط.",
        },
        {
          title: "ساخت دستگاه ماهیچه‌زن",
          description:
            "ساخت دستگاه ماهیچه‌زن برای تولید در ریخته‌گری، شامل مدل‌های کلد باکس و هات باکس.",
        },
      ],
      machinesEyebrow: "دستگاه ماهیچه‌زن",
      machinesTitle: "کلد باکس و هات باکس",
      machinesDescription:
        "اس‌اس‌کی دستگاه ماهیچه‌زن را در مدل‌های کلد باکس و هات باکس تولید می‌کند.",
      warrantyEyebrow: "ضمانت",
      warrantyTitle: "ضمانت ۶ ماهه شرکت",
      warrantyDescription:
        "تمام دستگاه‌های ساخت اس‌اس‌کی با ضمانت ۶ ماهه شرکت ارائه می‌شوند.",
    },
    projects: {
      eyebrow: "نمونه‌کارها",
      title: "تصاویر واقعی از محیط کار و تجهیزات",
      description:
        "نمونه‌هایی از تصاویر موجود اس‌اس‌کی، شامل دستگاه ماهیچه‌زن و فضای کار ریخته‌گری.",
      items: [
        {
          title: "تجهیزات تولید ریخته‌گری",
          category: "ساخت دستگاه",
          description: "نمایی از ساخت دستگاه ماهیچه‌زن اس‌اس‌کی.",
        },
        {
          title: "جزئیات دستگاه ماهیچه‌زن",
          category: "دستگاه ماهیچه‌زن",
          description: "تصویر تجهیزات از گالری موجود اس‌اس‌کی.",
        },
        {
          title: "فضای کار ریخته‌گری",
          category: "نمونه‌کار",
          description: "تصویر واقعی از محیط کار اس‌اس‌کی.",
        },
      ],
    },
    gallery: {
      eyebrow: "گالری",
      title: "تصاویر کارگاه و دستگاه‌ها",
      description: "گالری تصاویر موجود اس‌اس‌کی.",
      view: "مشاهده تصویر",
      close: "بستن",
      prev: "تصویر قبلی",
      next: "تصویر بعدی",
      alt: "تصویر نمونه‌کار اس‌اس‌کی",
    },
    partners: {
      eyebrow: "شرکای تجاری",
      title: "همکاری با مجموعه‌های صنعتی",
      description:
        "اس‌اس‌کی با کارخانه‌ها و مجموعه‌های ریخته‌گری همکاری می‌کند.",
    },
    blog: {
      eyebrow: "وبلاگ",
      title: "مقالات و نکات تخصصی ریخته‌گری",
      description:
        "مطالب منتشرشده اس‌اس‌کی درباره خدمات، تجهیزات و تجربه تولید.",
      empty: "هنوز مطلبی به این زبان منتشر نشده است.",
      readMore: "ادامه مطلب",
      publishedOn: "تاریخ انتشار",
      allPosts: "مشاهده همه مطالب",
      backToBlog: "بازگشت به وبلاگ",
      related: "دیگر مطالب",
    },
    admin: {
      title: "مدیریت وبلاگ",
      loginTitle: "ورود مدیر",
      password: "رمز عبور",
      login: "ورود",
      logout: "خروج",
      newPost: "مطلب جدید",
      edit: "ویرایش",
      delete: "حذف",
      save: "ذخیره",
      publish: "منتشر شود",
      unpublish: "پیش‌نویس",
      titleField: "عنوان",
      slug: "نشانی URL",
      excerpt: "خلاصه",
      content: "متن مطلب",
      language: "زبان مطلب",
      featuredImage: "تصویر شاخص",
      imageAlt: "متن جایگزین تصویر",
      publishedAt: "تاریخ انتشار",
      seoTitle: "عنوان سئو",
      seoDescription: "توضیحات متا",
      keywords: "کلمات کلیدی",
      preview: "پیش‌نمایش",
      confirmDelete: "این مطلب حذف شود؟",
      saved: "ذخیره شد",
      noPosts: "مطلبی ثبت نشده است.",
      persistenceHint:
        "روی Vercel برای ماندگاری مطالب، BLOB_READ_WRITE_TOKEN را تنظیم کنید.",
    },
    customers: {
      eyebrow: "مشتریان",
      title: "تمرکز بر نیاز ریخته‌گری",
      description:
        "مشتریان اصلی اس‌اس‌کی، کارخانه‌های ریخته‌گری و شرکت‌های ریخته‌گری هستند.",
      items: ["کارخانه‌های ریخته‌گری", "شرکت‌های ریخته‌گری"],
    },
    contact: {
      eyebrow: "تماس",
      title: "ارتباط با اس‌اس‌کی",
      description:
        "برای ساخت قالب و مدل، تأمین مواد اولیه ریخته‌گری یا ساخت دستگاه ماهیچه‌زن با SSK در ارتباط باشید.",
      phone: "تلفن",
      email: "ایمیل",
      location: "موقعیت",
      phoneNote: "تماس با اس‌اس‌کی",
      emailNote: "ایمیل اس‌اس‌کی",
      locationNote: "موقعیت اس‌اس‌کی",
      locationLabel: "مشاهده موقعیت در گوگل مپ",
      viewLocation: "مشاهده موقعیت",
      openMaps: "باز کردن در گوگل مپ",
      mapTitle: "موقعیت اس‌اس‌کی",
      mapDescription:
        "برای مشاهده موقعیت اس‌اس‌کی، لینک گوگل مپ را باز کنید.",
    },
    footer: {
      navigation: "ناوبری",
      contact: "تماس",
      rights: "تمامی حقوق محفوظ است.",
      tagline: "راهکارهای ریخته‌گری اس‌اس‌کی",
      backToTop: "بازگشت به بالای صفحه",
    },
    meta: {
      tagline: "راهکارهای ریخته‌گری با دقت صنعتی",
      description:
        "اس‌اس‌کی به کارخانه‌های ریخته‌گری و شرکت‌های ریخته‌گری، خدمات ساخت قالب و مدل، تأمین مواد اولیه ریخته‌گری و ساخت دستگاه ماهیچه‌زن ارائه می‌کند.",
    },
  },
  en: {
    skipToContent: "Skip to content",
    brandSubtitle: "Kermani Technical & Engineering Group",
    nav: {
      primary: "Primary",
      mobile: "Mobile",
      open: "Open menu",
      close: "Close menu",
      items: [
        { href: "/#home", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#services", label: "Services" },
        { href: "/#partners", label: "Partners" },
        { href: "/#projects", label: "Work Samples" },
        { href: "/#gallery", label: "Gallery" },
        { href: "/blog", label: "Blog" },
        { href: "/#customers", label: "Customers" },
        { href: "/#contact", label: "Contact" },
      ],
    },
    language: {
      label: "Language",
      fa: "فارسی",
      en: "English",
    },
    cta: {
      call: "Call SSK",
      contact: "Contact Us",
      viewWork: "View Work Samples",
    },
    hero: {
      eyebrow: "Foundry solutions",
      title: "Specialized equipment and services for foundries",
      description:
        "SSK provides mold making, pattern making, foundry raw material supply, and core shooter machine manufacturing for foundries and casting companies.",
    },
    about: {
      eyebrow: "About SSK",
      title: "Focused services for foundry production",
      paragraphs: [
        "SSK’s primary customers are foundries and casting companies.",
        "Our services and products include mold making and pattern making, foundry raw material supply, and core shooter machine manufacturing.",
      ],
      warranty:
        "All machines manufactured by SSK are provided with a 6-month company warranty.",
    },
    services: {
      eyebrow: "Services & products",
      title: "Specialized capabilities for foundry operations",
      description:
        "SSK provides mold making and pattern making, foundry raw material supply, and core shooter machine manufacturing.",
      items: [
        {
          title: "Mold Making & Pattern Making",
          description:
            "Mold and pattern making for foundry and casting applications, aligned with production requirements.",
        },
        {
          title: "Foundry Raw Material Supply",
          description:
            "Raw material supply for foundry operations and related casting workflows.",
        },
        {
          title: "Core Shooter Machine Manufacturing",
          description:
            "Manufacturing core shooter machines for foundry production, including Cold box and Hot Box models.",
        },
      ],
      machinesEyebrow: "Core shooter machines",
      machinesTitle: "Cold box and Hot Box",
      machinesDescription:
        "SSK manufactures core shooter machines in Cold box and Hot Box models.",
      warrantyEyebrow: "Warranty",
      warrantyTitle: "6-month company warranty",
      warrantyDescription:
        "All machines manufactured by SSK are provided with a 6-month company warranty.",
    },
    projects: {
      eyebrow: "Work samples",
      title: "Actual images from the workshop and equipment",
      description:
        "Selected images from SSK’s gallery, showing core shooter machines and the working environment.",
      items: [
        {
          title: "Foundry production equipment",
          category: "Machine manufacturing",
          description: "A view from SSK’s core shooter machine manufacturing work.",
        },
        {
          title: "Core shooter machine detail",
          category: "Core shooter machines",
          description: "Equipment imagery from SSK’s available work gallery.",
        },
        {
          title: "Foundry workspace",
          category: "Work sample",
          description: "An authentic SSK gallery image from the foundry environment.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Workshop and machine images",
      description: "SSK’s available image gallery.",
      view: "View image",
      close: "Close",
      prev: "Previous image",
      next: "Next image",
      alt: "SSK work sample image",
    },
    partners: {
      eyebrow: "Business partners",
      title: "Trusted industrial collaboration",
      description:
        "SSK works with foundries and industrial partners across production programs.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Foundry notes and technical articles",
      description:
        "Published SSK articles about services, equipment, and production experience.",
      empty: "No posts have been published in this language yet.",
      readMore: "Read more",
      publishedOn: "Published",
      allPosts: "View all posts",
      backToBlog: "Back to blog",
      related: "More articles",
    },
    admin: {
      title: "Blog administration",
      loginTitle: "Administrator login",
      password: "Password",
      login: "Sign in",
      logout: "Sign out",
      newPost: "New post",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      publish: "Published",
      unpublish: "Draft",
      titleField: "Title",
      slug: "URL slug",
      excerpt: "Excerpt",
      content: "Post content",
      language: "Post language",
      featuredImage: "Featured image",
      imageAlt: "Image alt text",
      publishedAt: "Publication date",
      seoTitle: "SEO title",
      seoDescription: "Meta description",
      keywords: "Keywords",
      preview: "Preview",
      confirmDelete: "Delete this post?",
      saved: "Saved",
      noPosts: "No posts yet.",
      persistenceHint:
        "On Vercel, set BLOB_READ_WRITE_TOKEN so blog posts persist after deploy.",
    },
    customers: {
      eyebrow: "Customers",
      title: "Built around foundry requirements",
      description:
        "SSK’s primary customers are foundries and casting companies.",
      items: ["Foundries", "Casting companies"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Connect with SSK",
      description:
        "Contact SSK about mold and pattern making, foundry raw material supply, or core shooter machine manufacturing.",
      phone: "Phone",
      email: "Email",
      location: "Location",
      phoneNote: "Call SSK",
      emailNote: "Email SSK",
      locationNote: "SSK location",
      locationLabel: "Open location in Google Maps",
      viewLocation: "View Location",
      openMaps: "Open in Google Maps",
      mapTitle: "SSK location",
      mapDescription: "Open the supplied Google Maps link to view the SSK location.",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
      tagline: "Foundry solutions by SSK",
      backToTop: "Back to top",
    },
    meta: {
      tagline: "Foundry solutions with industrial precision",
      description:
        "SSK serves foundries and casting companies with mold making, pattern making, foundry raw material supply, and core shooter machine manufacturing.",
    },
  },
} as const;
