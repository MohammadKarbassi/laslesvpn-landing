import Image from "next/image";
import type { ComponentProps } from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-[10px] ${className}`} aria-label="صفحهٔ اصلی LaslesVPN">
      <Image src="/images/logo-mark.svg" alt="" width={35} height={37} priority />
      <span dir="ltr" className="text-[20px] leading-[24px] text-ink">
        <span className="font-medium">Lasles</span>
        <span className="font-bold">VPN</span>
      </span>
    </a>
  );
}

/** Solid red button with the blurred red glow Figma places underneath it. */
export function GlowButton({
  children,
  className = "",
  size = "lg",
  ...props
}: ComponentProps<"button"> & { size?: "lg" | "pill" }) {
  const shape =
    size === "lg"
      ? "h-[60px] w-[250px] rounded-[10px]"
      : "h-[45px] w-[178px] rounded-[50px]";
  const glow =
    size === "lg"
      ? "left-[19px] top-[25px] h-[60px] w-[212px] rounded-[10px]"
      : "left-[25px] top-[17px] h-[45px] w-[127px] rounded-[60px]";
  return (
    <button
      type="button"
      className={`group relative isolate inline-flex items-center justify-center text-[16px] font-bold leading-[25px] text-white ${shape} ${className}`}
      {...props}
    >
      <span
        aria-hidden
        className={`absolute -z-10 bg-brand/35 blur-[27px] transition-opacity duration-200 group-hover:opacity-80 ${glow}`}
      />
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 bg-brand transition-colors duration-200 group-hover:bg-[#e22d2d] ${shape}`}
      />
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "", ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`inline-flex h-[45px] w-[178px] items-center justify-center rounded-[50px] border-2 border-brand text-[16px] font-bold leading-[19px] text-brand transition-colors duration-200 hover:bg-brand hover:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SectionHeading({
  title,
  text,
  className = "",
}: {
  title: React.ReactNode;
  text: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <h2 className="mx-auto text-[28px] font-medium leading-[40px] text-ink md:text-[35px] md:leading-[50px]">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-[555px] text-[16px] leading-[30px] text-body">{text}</p>
    </div>
  );
}
