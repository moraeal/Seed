import { useEffect, useState, type ImgHTMLAttributes } from "react";

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const environmentHeroSvg = "images/seed-language/environment-shared-condition-hero.svg";
const environmentHeroWebp = "images/seed-language/environment-shared-condition-hero.webp";

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  const normalized = src.replace(/^\//, "");
  const corrected = normalized.endsWith(environmentHeroSvg) ? normalized.replace(environmentHeroSvg, environmentHeroWebp) : normalized;
  if (/^(?:https?:|data:|blob:)/i.test(src)) return src;
  if (corrected.startsWith(import.meta.env.BASE_URL)) return corrected;
  return `${import.meta.env.BASE_URL}${corrected}`;
};

const defaultFallback = `${import.meta.env.BASE_URL}images/brand/editorial-image-fallback.svg`;

export default function SafeImage({ src, fallbackSrc = defaultFallback, onError, ...props }: SafeImageProps) {
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
      onError={(event) => {
        onError?.(event);
        if (currentSrc !== resolvedFallback) setCurrentSrc(resolvedFallback);
      }}
    />
  );
}
