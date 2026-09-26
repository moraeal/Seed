import { useState } from "react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

type Props = {
  to: string;
  imageSrc: string;
  imageAlt: string;
  animate?: boolean;
  ko: boolean;
};

export default function FeaturedStoryMedia({ to, imageSrc, imageAlt, animate, ko }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={to} className="relative block aspect-[16/8.55] overflow-hidden bg-green-deep sm:aspect-[16/7.65]" aria-label={ko ? "기사 읽기" : "Read article"}>
      <SafeImage
        src={imageSrc}
        alt={imageAlt}
        loading="eager"
        fetchPriority="high"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover ${animate && loaded ? "featured-story-zoom" : ""}`}
      />
    </Link>
  );
}
