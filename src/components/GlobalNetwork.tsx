import Image from "next/image";
import { sponsors } from "@/data/content";
import { SectionHeading } from "./ui";

export default function GlobalNetwork() {
  return (
    <section className="wrap pt-24 lg:pt-[150px]">
      <SectionHeading
        className="max-w-[420px]"
        title="شبکهٔ جهانی گسترده با VPN پرسرعت"
        text={
          <>
            <span className="font-medium">LaslesVPN</span> را همه‌جا همراه داشته باشید تا جابه‌جایی
            برایتان آسان‌تر شود.
          </>
        }
      />

      <Image
        src="/images/world-map.svg"
        alt="نقشهٔ جهان با موقعیت سرورهای LaslesVPN"
        width={1060}
        height={538}
        className="mx-auto mt-16 h-auto w-full max-w-[1060px] lg:mt-[155px]"
      />

      <ul
        className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:mt-[110px] lg:flex-nowrap lg:justify-between lg:gap-0 lg:pe-[10px]"
        aria-label="همراهان ما"
      >
        {sponsors.map((s) => (
          <li key={s.name}>
            <Image
              src={s.src}
              alt={s.name}
              width={s.width}
              height={s.height}
              className="h-auto w-[110px] opacity-90 transition-opacity hover:opacity-100 sm:w-auto"
              style={{ maxWidth: s.width }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
