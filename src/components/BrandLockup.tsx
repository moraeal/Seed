type BrandLockupProps = {
  tone: "header" | "footer";
};

export default function BrandLockup({ tone }: BrandLockupProps) {
  const footer = tone === "footer";
  const symbolSrc = footer
    ? "images/brand/seed-civic-partners-logo-animated-circle-clean.gif"
    : "images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png";

  return (
    <span className="flex items-center gap-3" aria-label="씨드시민파트너스 · SEED Civic Journal">
      <span
        className={`relative block shrink-0 overflow-hidden rounded-full ${footer ? "size-[43px]" : "size-12 bg-white"}`}
        aria-hidden="true"
      >
        <img
          src={`${import.meta.env.BASE_URL}${symbolSrc}`}
          alt=""
          className={footer
            ? "absolute left-0 top-0 h-[43px] w-auto max-w-none"
            : "absolute -left-0.5 -top-0.5 size-[52px] max-w-none"}
        />
      </span>
      <span className={`flex min-w-0 items-center ${footer ? "gap-3" : "gap-2.5 sm:gap-3"}`}>
        <span className={`whitespace-nowrap font-extrabold tracking-[-.04em] ${footer ? "text-lg text-white sm:text-xl" : "text-[17px] text-green-deep sm:text-xl"}`}>
          씨드시민파트너스
        </span>
        <span className={`h-7 w-px shrink-0 ${footer ? "bg-white/25" : "bg-green-deep/25"}`} aria-hidden="true" />
        <span className={`whitespace-nowrap font-bold tracking-[.08em] ${footer ? "text-[9px] text-gold-light sm:text-[10px]" : "text-[8px] text-charcoal/55 sm:text-[10px]"}`}>
          SEED CIVIC JOURNAL
        </span>
      </span>
    </span>
  );
}
