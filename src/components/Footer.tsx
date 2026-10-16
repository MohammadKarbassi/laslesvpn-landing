import Image from "next/image";
import { brand, footerColumns, socials } from "@/data/content";
import { GlowButton, Logo } from "./ui";

export default function Footer() {
  return (
    <footer
      id="help"
      className="mt-16 bg-[linear-gradient(to_bottom,transparent_117px,var(--color-surface)_117px)] lg:mt-[65px]"
    >
      <div className="wrap">
        <Subscribe />

        <div className="flex flex-col gap-12 pt-16 pb-16 lg:flex-row lg:justify-between lg:gap-8 lg:pb-[100px]">
          <div className="max-w-[340px]">
            <Logo />
            <p className="mt-5 text-[16px] leading-[30px] text-body">
              <span className="font-medium">{brand}</span> یک شبکهٔ خصوصی مجازی امن با امکانات
              کاربردی برای اتصال راحت‌تر به اینترنت است.
            </p>
            <ul className="mt-[30px] flex gap-5" aria-label="شبکه‌های اجتماعی">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="block rounded-full shadow-[0_13px_18px_rgba(17,19,35,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <Image src={s.src} alt="" width={34} height={34} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-[29px] text-[16px] leading-[30px] text-muted">
              ©۲۰۲۰ وی‌پی‌ان <span className="font-medium">بدون مرز</span>
            </p>
          </div>

          <nav
            aria-label="پیوندهای پانویس"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-12 xl:grid-cols-[200px_249px_auto] xl:gap-0"
          >
            {footerColumns.map((col) => (
              <div key={col.title} className="pt-[3px]">
                <h3 className="text-[18px] font-medium leading-[30px] text-ink">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-[10px]">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[16px] leading-[30px] text-body transition-colors hover:text-brand">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Subscribe() {
  return (
    <div className="relative isolate">
      <div aria-hidden className="card-glow inset-x-[3%] top-[17px] h-[250px]" />
      <div className="flex flex-col items-center gap-8 rounded-[10px] bg-white px-6 py-10 text-center md:flex-row md:justify-between md:px-[70px] md:text-start lg:h-[233px] lg:py-0">
        <div className="max-w-[410px]">
          <h2 className="text-[26px] font-medium leading-[40px] text-balance text-ink md:text-[35px] md:leading-[50px]">
            عضو شوید و خبرهای تازه را بگیرید
          </h2>
          <p className="mt-4 text-[16px] leading-[30px] text-body">از امکانات و پیشنهادهای تازه باخبر شوید.</p>
        </div>
        <GlowButton className="shrink-0">عضویت</GlowButton>
      </div>
    </div>
  );
}
