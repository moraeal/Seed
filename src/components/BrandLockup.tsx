type BrandLockupProps = {
  tone: "header" | "footer";
};

export default function BrandLockup({ tone }: BrandLockupProps) {
  const footer = tone === "footer";
  const symbolSrc = footer
    ? "images/brand/seed-sprout-color-leaves-reverse-transparent-hd.png"
    : "images/brand/seed-civic-partners-logo-animated.gif";

  return (
    <span className="flex items-center gap-3" aria-label="씨드시민파트너스 · Seed Civic Partners">
      <span
        className={`relative block size-12 shrink-0 overflow-hidden rounded-full ${footer ? "bg-white ring-1 ring-white/20" : "bg-ivory ring-1 ring-green-deep/10"}`}
        aria-hidden="true"
      >
        <img
          src={`${import.meta.env.BASE_URL}${symbolSrc}`}
          alt=""
          className={footer
            ? "absolute -left-0.5 -top-0.5 size-[52px] max-w-none"
            : "absolute left-0 top-0 h-12 w-auto max-w-none"}
        />
      </span>
      <svg viewBox="0 0 158 46" role="img" aria-hidden="true" className="h-[46px] w-[158px] shrink-0 overflow-visible">
        <text
          x="0"
          y="21"
          textLength="158"
          lengthAdjust="spacingAndGlyphs"
          fill={footer ? "#FFFFFF" : "#174C3A"}
          fontFamily="Pretendard, 'Noto Sans KR', Arial, sans-serif"
          fontSize="19"
          fontWeight="800"
        >
          씨드시민파트너스
        </text>
        <text
          x="0"
          y="41"
          textLength="158"
          lengthAdjust="spacing"
          fill={footer ? "#E8C967" : "#656B68"}
          fontFamily="Pretendard, 'Noto Sans KR', Arial, sans-serif"
          fontSize="8.7"
          fontWeight="700"
        >
          Seed Civic Partners
        </text>
      </svg>
    </span>
  );
}
