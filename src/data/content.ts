export const brand = "وی‌پی‌ان بدون مرز";

export const navLinks = [
  { label: "درباره ما", href: "#about" },
  { label: "امکانات", href: "#features" },
  { label: "تعرفه‌ها", href: "#pricing" },
  { label: "نظر کاربران", href: "#testimonials" },
  { label: "راهنما", href: "#help" },
];

export const stats = [
  { value: "90+", label: "کاربر", icon: "/images/icon-user.svg" },
  { value: "30+", label: "موقعیت", icon: "/images/icon-location.svg" },
  { value: "50+", label: "سرور", icon: "/images/icon-server.svg" },
];

export const features = [
  "محافظت قدرتمند آنلاین",
  "دسترسی آزاد به اینترنت",
  "اتصال پرسرعت",
  "استفاده بدون محدودیت زمانی",
];

export type Plan = {
  id: string;
  name: string;
  image: string;
  price: string;
  period?: string;
  perks: string[];
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "طرح رایگان",
    image: "/images/plan-free.svg",
    price: "رایگان",
    perks: [
      "پهنای باند نامحدود",
      "اتصال رمزگذاری‌شده",
      "بدون ذخیرهٔ لاگ ترافیک",
      "قابل استفاده در همهٔ دستگاه‌ها",
    ],
  },
  {
    id: "standard",
    name: "طرح پایه",
    image: "/images/plan-standard.svg",
    price: "۵۰۰ هزار تومان",
    period: "/ ماه",
    perks: [
      "پهنای باند نامحدود",
      "اتصال رمزگذاری‌شده",
      "گزارش کامل مصرف ترافیک",
      "قابل استفاده در همهٔ دستگاه‌ها",
      "اتصال از سراسر دنیا",
    ],
  },
  {
    id: "premium",
    name: "طرح حرفه‌ای",
    image: "/images/plan-premium.svg",
    price: "۱ میلیون تومان",
    period: "/ ماه",
    perks: [
      "پهنای باند نامحدود",
      "اتصال رمزگذاری‌شده",
      "گزارش کامل مصرف ترافیک",
      "قابل استفاده در همهٔ دستگاه‌ها",
      "اتصال از سراسر دنیا",
      "دسترسی به امکانات جدید",
    ],
  },
];

// Visible sizes match the masked logos in Figma.
export const sponsors = [
  { name: "Netflix", src: "/images/sponsor-netflix.png", width: 190, height: 60 },
  { name: "Reddit", src: "/images/sponsor-reddit.png", width: 156, height: 51 },
  { name: "Amazon", src: "/images/sponsor-amazon.png", width: 190, height: 60 },
  { name: "Discord", src: "/images/sponsor-discord.png", width: 187, height: 60 },
  { name: "Spotify", src: "/images/sponsor-spotify.png", width: 171, height: 51 },
];

export const testimonials = [
  {
    name: "ویژ رابرت",
    location: "ورشو، لهستان",
    rating: "4.5",
    avatar: "/images/avatar-viezh.png",
    quote:
      `«واقعاً از این وی‌پی‌ان راضی‌ام. بهتر از چیزی بود که انتظار داشتم و تا امروز هیچ مشکلی نداشته‌ام. ${brand} انتخاب همیشگی من است.»`,
  },
  {
    name: "یسیکا کریستی",
    location: "شانشی، چین",
    rating: "4.5",
    avatar: "/images/avatar-yessica.png",
    quote:
      "«چون زیاد سفر می‌کنم، اتصال سریع برایم خیلی مهم است. خوشبختانه هرجا باشم، به‌راحتی وصل می‌شوم.»",
  },
  {
    name: "کیم یانگ جو",
    location: "سئول، کرهٔ جنوبی",
    rating: "4.5",
    avatar: "/images/avatar-kim.png",
    quote:
      "«کسب‌وکار من به یک شبکهٔ خصوصی مجازی امن نیاز دارد و این سرویس دقیقاً همان چیزی است که می‌خواستم.»",
  },
];

export const socials = [
  { name: "Facebook", src: "/images/social-facebook.svg", href: "#" },
  { name: "Twitter", src: "/images/social-twitter.svg", href: "#" },
  { name: "Instagram", src: "/images/social-instagram.svg", href: "#" },
];

export const footerColumns = [
  {
    title: "محصول",
    links: ["دانلود", "تعرفه‌ها", "موقعیت‌ها", "سرورها", "کشورها", "وبلاگ"],
  },
  {
    title: "ارتباط با ما",
    links: [
      `${brand} چیست؟`,
      "سؤالات متداول",
      "آموزش‌ها",
      "درباره ما",
      "حریم خصوصی",
      "قوانین و مقررات",
    ],
  },
  {
    title: "کسب درآمد",
    links: ["همکاری در فروش", "همکاری تجاری"],
  },
];
