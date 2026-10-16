"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "./ui";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  // Wraps around so both arrows always stay active, as in the design.
  const go = (i: number) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="overflow-x-clip pt-24 lg:pt-[124px]">
      <div className="wrap">
        <SectionHeading
          className="max-w-[448px]"
          title="انتخاب هزاران کاربر راضی"
          text="ببینید کاربران ما دربارهٔ تجربه‌شان از امکانات و کیفیت سرویس چه می‌گویند."
        />

        <div className="mt-[60px] [--card:min(400px,calc(100vw-32px))] [--gap:24px] md:[--gap:50px]">
          <ul
            className="flex gap-[var(--gap)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(calc(${index} * (var(--card) + var(--gap))))` }}
          >
            {testimonials.map((t, i) => {
              const active = i === index;
              return (
                <li key={t.name} className="relative isolate w-[var(--card)] shrink-0">
                  {active && <div aria-hidden className="card-glow inset-x-[41px] top-0 h-[301px]" />}
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={active}
                    className={`block h-full min-h-[230px] w-full rounded-[10px] border-2 bg-white p-[28px] text-start transition-colors duration-300 ${
                      active ? "border-brand" : "border-line hover:border-brand/40"
                    }`}
                  >
                    <div className="flex items-start">
                      <Image
                        src={t.avatar}
                        alt=""
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px] shrink-0 rounded-full"
                      />
                      <div className="ms-5 mt-[3px]">
                        <p className="text-[18px] font-medium leading-[26px] text-ink">{t.name}</p>
                        <p className="text-[14px] leading-[20px] text-body">{t.location}</p>
                      </div>
                      <p className="ms-auto mt-[13px] flex items-center gap-[10px] text-[16px] leading-[20px] text-ink">
                        {t.rating}
                        <Image src="/images/icon-star.svg" alt="" width={16} height={16} />
                      </p>
                    </div>
                    <p className="mt-5 text-[16px] leading-[30px] text-ink">{t.quote}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-[60px] flex items-center justify-between">
          <div className="flex items-center gap-[15px]" role="tablist" aria-label="نظر کاربران">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`نظر ${i + 1}`}
                onClick={() => go(i)}
                className={`h-[15px] rounded-full transition-all duration-300 ${
                  i === index ? "w-[45px] bg-brand" : "w-[15px] bg-dot hover:bg-brand/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-5">
            <ArrowButton direction="prev" onClick={() => go(index - 1)} />
            <ArrowButton direction="next" onClick={() => go(index + 1)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const next = direction === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={next ? "نظر بعدی" : "نظر قبلی"}
      className={`flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-brand transition duration-200 ${
        next
          ? "bg-brand text-white shadow-[0_14px_44px_rgba(14,20,34,0.08)] hover:bg-[#e22d2d]"
          : "text-brand hover:bg-brand-soft"
      }`}
    >
      {/* RTL: "next" moves toward the left edge, so it points left. */}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" className={next ? "-scale-x-100" : ""} aria-hidden>
        <path d="M6.25 13.75H21.075L16.5375 8.3a1.25 1.25 0 1 1 1.925-1.6l6.25 7.5c.04.06.08.12.11.19.06.14.13.27.13.61s-.07.47-.13.61a1.2 1.2 0 0 1-.11.19l-6.25 7.5a1.25 1.25 0 0 1-1.925-1.6l4.54-5.45H6.25a1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    </button>
  );
}
