import type { Metadata } from "next";
import localFont from "next/font/local";
import { brand } from "@/data/content";
import "./globals.css";

// Vazirmatn (Farsi digits), self-hosted under the SIL Open Font License — see src/fonts/vazirmatn/OFL.txt.
const vazirmatn = localFont({
  variable: "--font-vazirmatn",
  display: "swap",
  src: [
    { path: "../fonts/vazirmatn/Vazirmatn-FD-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/vazirmatn/Vazirmatn-FD-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/vazirmatn/Vazirmatn-FD-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: `${brand} | اینترنتی امن و بی‌دردسر`,
  description: `با ${brand}، ساده و امن به اینترنتی که می‌خواهید دسترسی داشته باشید.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>{children}</body>
    </html>
  );
}
