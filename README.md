# LaslesVPN — لندینگ فارسی

پیاده‌سازی لندینگ پیج [LaslesVPN](https://www.figma.com/file/BoqqmjENPbNsDTQfoZ14CF) از فایل Community فیگما، به‌صورت فارسی و راست‌به‌چپ (RTL) با فونت متن‌باز Vazirmatn. پروژه بک‌اند ندارد و کاملاً استاتیک است.

## تکنولوژی‌ها

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- فونت متن‌باز Vazirmatn (نسخهٔ اعداد فارسی، مجوز OFL) به‌صورت self-hosted در `src/fonts/vazirmatn` و از طریق `next/font/local`
- تمام تصاویر و آیکون‌ها مستقیماً از فیگما (REST API) خروجی گرفته شده‌اند (`public/images`)

## اجرا

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
npm run lint
```

## ساختار

```
src/app/            layout (RTL، فونت) و صفحهٔ اصلی
src/components/     Navbar، Hero (+آمار)، Features، Pricing، GlobalNetwork، Testimonials، Footer (+Subscribe)
src/data/content.ts متن‌های فارسی و داده‌های هر بخش
public/images/      تصاویر خروجی‌گرفته از فیگما
scripts/            اسکریپت‌های خواندن طراحی و خروجی گرفتن از فیگما
design/             رندر مرجع فریم دسکتاپ (reference.png) و مشخصات استخراج‌شده (spec.txt)
```

## به‌روزرسانی تصاویر از فیگما (اختیاری)

یک Personal access token با دسترسی File content: Read بسازید و در `.env.local` بگذارید:

```bash
echo "FIGMA_TOKEN=..." > .env.local
node --env-file=.env.local scripts/figma-export.mjs
```

---

**English:** Persian (RTL) implementation of the LaslesVPN Figma community landing page, built with Next.js 15, React 19, Tailwind CSS 4 and the open-source Vazirmatn font. Desktop (1440px) follows the Figma frame's spacing, colors and type scale; tablet and mobile layouts are responsive. All images were exported from Figma via the REST API. No backend.

Design credit: "FREEBIES – Landingpage LaslesVPN" on Figma Community.
