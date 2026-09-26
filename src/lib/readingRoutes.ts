export function isReadingPage(pathname: string) {
  const path = pathname.replace(/\/$/, "");
  if (/^\/(news|briefings|columns|seed-language)\/[^/]+(?:\/(commentary|b-corp))?$/.test(path)) {
    return !path.startsWith("/news/issues/") && path !== "/seed-language/why-civic-language";
  }
  if (/^\/monitoring\/legislation\/(?:commentary\/)?[^/]+$/.test(path)) return true;
  if (/^\/monitoring\/tax\/(?:commentary\/)?[^/]+$/.test(path)) return true;
  return /^\/monitoring\/[^/]+$/.test(path)
    && !["/monitoring/public-interest", "/monitoring/legislation", "/monitoring/tax"].includes(path);
}
