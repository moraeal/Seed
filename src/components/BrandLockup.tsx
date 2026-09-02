type BrandLockupProps = {
  tone: "header" | "footer";
};

export default function BrandLockup({ tone }: BrandLockupProps) {
  const footer = tone === "footer";
  const symbolSrc = footer
    ? "images/brand/seed-civic-partners-logo-animated-circle-clean.gif"
    : "images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png";

  return (
    <span className="flex items-center gap-3" aria-label="씨드시민파트너스 · Seed Civic Partners">
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
      {!footer && (
        <svg viewBox="0 0 180 46" role="img" aria-hidden="true" className="h-[46px] w-[180px] shrink-0 overflow-visible">
          <text
            x="0"
            y="21"
            fill="#174C3A"
            fontFamily="Pretendard, 'Noto Sans KR', Arial, sans-serif"
            fontSize="19"
            fontWeight="800"
            letterSpacing="-0.4"
          >
            씨드시민파트너스
          </text>
          <text
            x="1"
            y="41"
            fill="#656B68"
            fontFamily="Pretendard, 'Noto Sans KR', Arial, sans-serif"
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="1.45"
          >
            SEED CIVIC PARTNERS
          </text>
        </svg>
      )}
    </span>
  );
}
