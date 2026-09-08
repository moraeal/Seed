import { useEffect, useState, type ImgHTMLAttributes } from "react";

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const environmentHero = "images/seed-language/environment-shared-condition-hero.webp";
const environmentHeroVersion = "20260908-3";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^(?:https?:|data:|blob:)/i.test(src)) return src;
  const normalized = src.replace(/^\//, "");
  const versioned = normalized === environmentHero ? `${normalized}?v=${environmentHeroVersion}` : normalized;
  if (versioned.startsWith(import.meta.env.BASE_URL)) return versioned;
  return `${import.meta.env.BASE_URL}${versioned}`;
};

const defaultFallback = `${import.meta.env.BASE_URL}images/brand/editorial-image-fallback.svg`;

export default function SafeImage({ src, fallbackSrc = defaultFallback, onError, loading = "lazy", decoding = "async", ...props }: SafeImageProps) {
  const primarySrc = resolveImageSrc(src);
  const resolvedFallback = resolveImageSrc(fallbackSrc);
  const [currentSrc, setCurrentSrc] = useState(primarySrc || resolvedFallback);

  useEffect(() => {
    setCurrentSrc(primarySrc || resolvedFallback);
  }, [primarySrc, resolvedFallback]);

  return (
    <img
      {...props}
      src={currentSrc}
      loading={loading}
      decoding={decoding}
      onError={(event) => {
        onError?.(event);
        if (currentSrc !== resolvedFallback) setCurrentSrc(resolvedFallback);
      }}
    />
  );
}