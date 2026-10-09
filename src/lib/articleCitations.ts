/** One citation model for every article edition. Source arrays retain bare [n] meaning. */
export type CitationSourceInput = {
  url: string;
  label?: string | { ko: string; en: string };
  note?: string | { ko: string; en: string };
};
export type ArticleCitation = { number: number; url: string; label: string; note?: string };
export type ArticleCitations = {
  sources: ArticleCitation[];
  byUrl: Map<string, ArticleCitation>;
  originalSources: (ArticleCitation | undefined)[];
  language: "ko" | "en";
};
// Keep legacy Markdown links and bare numbered references readable without rewriting copy.
export const citationTokenPattern = /\[[^\]\n]+\]\((?:https?:\/\/|\/)[^\s)]+\)|\[\d+\]/g;
export const citationLinkPattern = /^\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)$/;
export const isExternalCitationUrl = (url: string) => /^https?:\/\//i.test(url);
export const citationKey = (url: string) => url.trim();

export function articleTextValues(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(articleTextValues);
  if (value && typeof value === "object") return Object.values(value).flatMap(articleTextValues);
  return [];
}

export function createArticleCitations(
  sourceInputs: readonly CitationSourceInput[] = [],
  content: unknown = [],
  language: "ko" | "en" = "ko",
  extraSources: readonly CitationSourceInput[] = [],
): ArticleCitations {
  const sources: ArticleCitation[] = [];
  const byUrl = new Map<string, ArticleCitation>();
  const localize = (text: CitationSourceInput["label"]) => typeof text === "string" ? text : text?.[language];
  const add = (input: CitationSourceInput) => {
    if (!input.url || !/^(https?:\/\/|\/)/i.test(input.url)) return undefined;
    const key = citationKey(input.url);
    const existing = byUrl.get(key);
    if (existing) return existing;
    const label = localize(input.label)?.replace(/^\s*(?:\[\d+\]|\d+[.)])\s+/, "").trim();
    const source: ArticleCitation = {
      number: sources.length + 1,
      url: input.url,
      label: label && !/^\d+$/.test(label) ? label : input.url,
      note: localize(input.note),
    };
    sources.push(source);
    byUrl.set(key, source);
    return source;
  };
  const originalSources = sourceInputs.map(add);
  extraSources.forEach(add);
  for (const text of articleTextValues(content)) {
    for (const token of text.matchAll(citationTokenPattern)) {
      const match = token[0].match(citationLinkPattern);
      if (match && isExternalCitationUrl(match[2])) add({ url: match[2], label: match[1] });
    }
  }
  return { sources, byUrl, originalSources, language };
}

export function resolveCitationToken(token: string, citations: ArticleCitations) {
  const link = token.match(citationLinkPattern);
  if (link) return citations.byUrl.get(citationKey(link[2]));
  const number = token.match(/^\[(\d+)\]$/)?.[1];
  return number ? citations.originalSources[Number(number) - 1] : undefined;
}
