type BrandLockupProps = {
  tone: "header" | "footer";
};

export default function BrandLockup({ tone }: BrandLockupProps) {
  const footer = tone === "footer";
  const symbolSrc = footer
    ? "images/brand/seed-civic-partners-logo-animated-circle-clean.gif"
    : "images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png";

  return (
    <span className="flex items-center gap-3" aria-label="씨앗의 소리 · SEED VOICE">
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
      <span className={`flex min-w-0 ${footer ? "items-center gap-3 text-lg sm:text-xl" : "flex-col items-start gap-0.5 text-[11px] leading-none sm:text-base"}`}>
        <span className={`whitespace-nowrap font-extrabold tracking-[-.04em] ${footer ? "text-white" : "text-green-deep"}`}>
          씨앗의 소리
        </span>
        {footer && <span className="h-7 w-px shrink-0 bg-white/25" aria-hidden="true" />}
        <span className={`whitespace-nowrap font-bold tracking-[-.02em] ${footer ? "text-white/55" : "text-charcoal/45"}`}>
          SEED VOICE
        </span>
      </span>
    </span>
  );
}
