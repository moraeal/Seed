import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, ENGLISH_SITE_NAME, getSeoRoute, SITE_NAME } from "../seo";

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element!.setAttribute(name, value));
}

export default function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const route = getSeoRoute(location.pathname);
    const title = route?.title ?? `페이지를 찾을 수 없습니다 | ${SITE_NAME}`;
    const description = route?.description ?? "씨드시민파트너스 홈페이지입니다.";
    const url = canonicalUrl(route?.path ?? "/");
    const language = route?.language ?? "ko";
    const siteName = language === "en" ? ENGLISH_SITE_NAME : SITE_NAME;

    document.title = title;
    document.documentElement.lang = language;
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: route ? "index, follow, max-image-preview:large" : "noindex, follow" });
    setMeta('meta[property="og:type"]', { property: "og:type", content: route?.type ?? "website" });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteName });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((element) => element.remove());
    if (route?.path === "/" || route?.path === "/en") {
      [["ko", canonicalUrl("/")], ["en", canonicalUrl("/en")], ["x-default", canonicalUrl("/")]].forEach(([hreflang, href]) => {
        const alternate = document.createElement("link");
        alternate.rel = "alternate";
        alternate.hreflang = hreflang;
        alternate.href = href;
        document.head.appendChild(alternate);
      });
    }
  }, [location.pathname]);

  return null;
}
