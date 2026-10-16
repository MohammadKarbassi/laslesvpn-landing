export const navLinks = [
  { label: "درباره ما", href: "#about" },
  { label: "امکانات", href: "#features" },
  { label: "قیمت‌ها", href: "#pricing" },
  { label: "نظرات کاربران", href: "#testimonials" },
  { label: "راهنما", href: "#help" },
];

export const stats = [
  { value: "90+", label: "کاربر", icon: "/images/icon-user.svg" },
  { value: "30+", label: "موقعیت", icon: "/images/icon-location.svg" },
  { value: "50+", label: "سرور", icon: "/images/icon-server.svg" },
];

export const features = [
  "محافظت قدرتمند آنلاین.",
  "اینترنت بدون مرز.",
  "VPN پرسرعت",
  "بدون محدودیت زمانی.",
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
      "بدون ثبت لاگ ترافیک",
      "قابل استفاده روی همهٔ دستگاه‌ها",
    ],
  },
  {
    id: "standard",
    name: "طرح استاندارد",
    image: "/images/plan-standard.svg",
    price: "۹ دلار",
    period: "/ ماه",
    perks: [
      "پهنای باند نامحدود",
      "اتصال رمزگذاری‌شده",
      "گزارش کامل ترافیک",
      "قابل استفاده روی همهٔ دستگاه‌ها",
      "اتصال از هر جای دنیا",
    ],
  },
  {
    id: "premium",
    name: "طرح ویژه",
    image: "/images/plan-premium.svg",
    price: "۱۲ دلار",
    period: "/ ماه",
    perks: [
      "پهنای باند نامحدود",
      "اتصال رمزگذاری‌شده",
      "گزارش کامل ترافیک",
      "قابل استفاده روی همهٔ دستگاه‌ها",
      "اتصال از هر جای دنیا",
      "دریافت امکانات جدید",
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
      "«وای... از این VPN خیلی راضی‌ام؛ از انتظارم بیشتر بود و تا حالا هیچ مشکلی نداشته‌ام. LaslesVPN همیشه بهترین است.»",
  },
  {
    name: "یسیکا کریستی",
    location: "شانشی، چین",
    rating: "4.5",
    avatar: "/images/avatar-yessica.png",
    quote: "«دوستش دارم چون زیاد سفر می‌کنم و هنوز هم می‌توانم با سرعت بالا وصل شوم.»",
  },
  {
    name: "کیم یانگ جو",
    location: "سئول، کره جنوبی",
    rating: "4.5",
    avatar: "/images/avatar-kim.png",
    quote:
      "«برای کسب‌وکار من که به یک شبکهٔ خصوصی مجازی با امنیت بالا نیاز دارد، واقعاً بی‌نظیر است.»",
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
    links: ["دانلود", "قیمت‌ها", "موقعیت‌ها", "سرورها", "کشورها", "وبلاگ"],
  },
  {
    title: "ارتباط با ما",
    links: [
      "LaslesVPN چیست؟",
      "سؤالات متداول",
      "آموزش‌ها",
      "درباره ما",
      "حریم خصوصی",
      "قوانین و مقررات",
    ],
  },
  {
    title: "کسب درآمد",
    links: ["همکاری در فروش", "شریک تجاری شوید"],
  },
];
