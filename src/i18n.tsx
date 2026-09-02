import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export type Language = "ko" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>(() => {
    if (/^\/en(?:\/|$)/.test(window.location.pathname)) return "en";
    const saved = window.localStorage.getItem("seed-language");
    return saved === "en" ? "en" : "ko";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    if (/^\/en(?:\/|$)/.test(location.pathname)) setLanguageState("en");
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "ko";
    window.localStorage.setItem("seed-language", language);
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
