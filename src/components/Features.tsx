import Image from "next/image";
import { features } from "@/data/content";

export default function Features() {
  return (
    <section
      id="features"
      className="wrap mt-16 flex flex-col items-center gap-10 lg:mt-[95px] lg:flex-row lg:items-start lg:gap-8"
    >
      <Image
        src="/images/features-illustration.svg"
        alt="کاربری خوشحال با هدفون و لپ‌تاپ"
        width={509}
        height={415}
        className="h-auto w-full max-w-[509px] shrink-0 lg:w-[45%] xl:ms-[35px] xl:w-[509px]"
      />

      <div className="w-full max-w-[428px] lg:ms-auto lg:pt-[55px]">
        <h2 className="max-w-[383px] text-[28px] font-medium leading-[44px] text-ink md:text-[35px] md:leading-[50px]">
          هرچه از یک وی‌پی‌ان می‌خواهید
        </h2>
        <p className="mt-5 text-[16px] leading-[30px] text-body">
          امکانات کاربردی ما کمک می‌کنند با خیال راحت‌تر و سرعت بیشتری از اینترنت استفاده کنید.
        </p>
        <ul className="mt-5 flex flex-col gap-[15px]">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-[10px] text-[14px] leading-[30px] text-body">
              <Image src="/images/icon-check-circle.svg" alt="" width={24} height={24} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
