import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ko" | "en";

const metadata = {
  ko: {
    title: "씨앗연대 | 자유와 책임의 시민사회 플랫폼",
    description: "씨앗연대는 시민제안, 브리핑, 시민실험, 공개기록을 통해 자유와 책임의 시민사회 인프라를 세우는 독립적 비당파 시민 플랫폼입니다.",
  },
  en: {
    title: "SEED Civic Partners | Pro-Liberty Civic Infrastructure in South Korea",
    description:
      "SEED Civic Partners is an independent and nonpartisan civic initiative building pro-liberty civic infrastructure in South Korea through citizen proposals, briefings, civic experiments, and public records.",
  },
} satisfies Record<Language, { title: string; description: string }>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getUrlLanguage(): Language | null {
  const value = new URLSearchParams(window.location.search).get("lang");
  return value === "en" || value === "ko" ? value : null;
}

function updateUrlLanguage(language: Language) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

function updateMeta(language: Language) {
  const next = metadata[language];
  document.documentElement.lang = language;
  document.title = next.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", next.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", next.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", next.description);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const fromUrl = getUrlLanguage();
    if (fromUrl) {
      window.localStorage.setItem("seed-language", fromUrl);
      return fromUrl;
    }
    const saved = window.localStorage.getItem("seed-language");
    return saved === "en" || saved === "ko" ? saved : "ko";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("seed-language", nextLanguage);
    updateUrlLanguage(nextLanguage);
  };

  useEffect(() => {
    updateMeta(language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
