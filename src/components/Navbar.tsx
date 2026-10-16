"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { Logo } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <header className="wrap relative z-20 pt-6 lg:pt-[50px]">
      <div className="flex h-[45px] items-center">
        <Logo />

        <nav className="ms-auto hidden lg:ms-[90px] lg:block xl:ms-[157px]" aria-label="منوی اصلی">
          <ul className="flex gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[16px] leading-[19px] text-body transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ms-auto hidden items-center gap-[30px] lg:flex">
          <a href="#" className="text-[16px] font-medium leading-[19px] text-ink hover:text-brand">
            ورود
          </a>
          <a
            href="#"
            className="flex h-[45px] w-[150px] items-center justify-center rounded-[50px] border border-brand-alt text-[16px] font-medium leading-[19px] text-brand-alt transition-colors hover:bg-brand-alt hover:text-white"
          >
            ثبت‌نام
          </a>
        </div>

        <button
          type="button"
          className="ms-auto flex h-11 w-11 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full mt-3 origin-top rounded-[10px] bg-white p-6 shadow-[0_20px_60px_rgba(13,16,37,0.12)] transition duration-200 lg:hidden ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-[16px] leading-[19px] text-body hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-6 border-t border-divider pt-6">
          <a href="#" className="text-[16px] font-medium text-ink">
            ورود
          </a>
          <a
            href="#"
            className="flex h-[45px] w-[150px] items-center justify-center rounded-[50px] border border-brand-alt text-[16px] font-medium text-brand-alt"
          >
            ثبت‌نام
          </a>
        </div>
      </div>
    </header>
  );
}
