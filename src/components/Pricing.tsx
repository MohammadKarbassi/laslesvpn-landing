"use client";

import Image from "next/image";
import { useState } from "react";
import { plans } from "@/data/content";
import { GlowButton, OutlineButton, SectionHeading } from "./ui";

export default function Pricing() {
  const [selected, setSelected] = useState("premium");

  return (
    <section id="pricing" className="wrap pt-16 lg:pt-[81px]">
      <SectionHeading
        title="طرح مناسب خود را انتخاب کنید"
        text="طرحی را انتخاب کنید که با نیازتان هماهنگ است و با خیال راحت آنلاین بمانید."
      />

      <ul className="mx-auto mt-[60px] grid max-w-[1090px] justify-center gap-[50px] md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-[50px]">
        {plans.map((plan) => {
          const active = plan.id === selected;
          return (
            <li
              key={plan.id}
              className={`flex w-full max-w-[330px] flex-col items-center rounded-[10px] border-2 bg-white pt-[79px] pb-[50px] transition-colors duration-200 lg:min-h-[760px] ${
                active ? "border-brand" : "border-line"
              }`}
            >
              <Image src={plan.image} alt="" width={146} height={166} className="h-[166px] w-[146px]" />
              <h3 className="mt-[30px] text-[18px] font-medium leading-[30px] text-ink">{plan.name}</h3>

              <ul className="mt-[30px] flex w-full flex-col gap-[10px] ps-[70px] pe-6">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-5 text-[14px] leading-[30px] text-body">
                    <Image src="/images/icon-check.svg" alt="" width={24} height={24} />
                    {perk}
                  </li>
                ))}
              </ul>

              <p className="mt-16 text-[25px] leading-[30px] text-ink lg:mt-auto">
                <span className="font-medium">{plan.price}</span>
                {plan.period && <span className="text-body"> {plan.period}</span>}
              </p>

              <div className="mt-5 h-[45px]">
                {active ? (
                  <GlowButton size="pill" aria-pressed>
                    انتخاب
                  </GlowButton>
                ) : (
                  <OutlineButton aria-pressed={false} onClick={() => setSelected(plan.id)}>
                    انتخاب
                  </OutlineButton>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
