import { CSSProperties, ReactNode, useState } from "react";
import { useLanguage } from "../i18n";

const STORAGE_KEY = "seed-reading-size-v1";
const SIZES = [18, 20, 22] as const;

export default function ReadingTools({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [size, setSize] = useState<number>(() => {
    try {
      const saved = Number(localStorage.getItem(STORAGE_KEY));
      return SIZES.some((value) => value === saved) ? saved : 18;
    } catch { return 18; }
  });
  function chooseSize(value: number) {
    setSize(value);
    try { localStorage.setItem(STORAGE_KEY, String(value)); } catch { /* Keep controls usable without storage. */ }
  }

  return (
    <div className="reading-surface" style={{ "--reading-font-size": `${size / 16}rem` } as CSSProperties}>
      <div className="container-page reading-tools" role="group" aria-label={ko ? "본문 글자 크기" : "Article text size"}>
        <span>{ko ? "글자 크기" : "Text size"}</span>
        {SIZES.map((value, index) => <button key={value} type="button" aria-pressed={size === value} onClick={() => chooseSize(value)}>
          {ko ? ["기본", "크게", "더 크게"][index] : ["Default", "Large", "Larger"][index]}
        </button>)}
      </div>
      {children}
    </div>
  );
}
