import Image from "next/image";
import { stats } from "@/data/content";
import { GlowButton } from "./ui";

export default function Hero() {
  return (
    <section id="about" className="wrap">
      <div className="mt-12 flex flex-col items-center gap-12 lg:mt-[88px] lg:flex-row lg:items-start lg:justify-between lg:gap-6">
        <div className="max-w-[555px] text-center lg:pt-[28px] lg:text-start">
          <h1 className="text-[34px] font-medium leading-[54px] text-ink md:text-[50px] md:leading-[70px]">
            هر چیزی که بخواهید، آسان با <span className="font-bold">LaslesVPN</span>
          </h1>
          <p className="mt-5 text-[16px] leading-[30px] text-body">
            شبکه‌ای برای همهٔ نیازهای شما، ساده و لذت‌بخش با{" "}
            <span className="font-medium">LaslesVPN</span>؛ امکانات جذاب ما را کشف کنید.
          </p>
          <GlowButton className="mt-[50px]">شروع کنید</GlowButton>
        </div>

        <Image
          src="/images/hero-illustration.svg"
          alt="کاربری با هدفون در حال کار با لپ‌تاپ"
          width={612}
          height={383}
          priority
          className="h-auto w-full max-w-[612px] shrink-0 lg:w-[48%] xl:-me-[67px] xl:w-[612px]"
        />
      </div>

      <Stats />
    </section>
  );
}

function Stats() {
  return (
    <div className="relative isolate mt-16 lg:mt-[104px]">
      <div aria-hidden className="card-glow inset-x-[3%] top-[52px] h-[189px]" />
      <ul className="grid rounded-[10px] bg-white py-6 md:h-[200px] md:grid-cols-[366fr_430fr_344fr] md:py-0">
        {stats.map((stat, i) => (
          <li
            key={stat.label}
            className={`flex items-center gap-[37px] px-8 py-6 md:py-0 ${
              i === 1 ? "md:ps-[11%] xl:ps-[113px]" : "md:ps-[10%] xl:ps-[91px]"
            } ${
              i > 0
                ? "border-t-2 border-divider md:border-t-0 md:border-s-2 md:[border-image:linear-gradient(transparent_37px,var(--color-divider)_37px,var(--color-divider)_163px,transparent_163px)_1]"
                : ""
            }`}
          >
            <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-brand-soft">
              <Image src={stat.icon} alt="" width={24} height={24} />
            </span>
            <span className="flex flex-col">
              <strong dir="ltr" className="text-end text-[25px] font-bold leading-[30px] text-ink">
                {stat.value}
              </strong>
              <span className="mt-[5px] text-[20px] leading-[30px] text-body">{stat.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
