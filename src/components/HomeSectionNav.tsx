import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../i18n";

type SectionItem = {
  kicker: string;
  labelKo: string;
  labelEn: string;
};

const sectionItems: SectionItem[] = [
  { kicker: "TODAY'S SEED", labelKo: "오늘의 씨앗", labelEn: "Today's Seed" },
  { kicker: "STORIES THAT MATTER", labelKo: "지금 읽어야 할 이야기", labelEn: "Stories" },
  { kicker: "SEED CITIZEN BRIEFING", labelKo: "시민브리핑", labelEn: "Briefing" },
  { kicker: "THE VOICE OF SEED", labelKo: "씨앗의 소리", labelEn: "Voice" },
  { kicker: "SEED LANGUAGE", labelKo: "씨앗언어", labelEn: "Language" },
  { kicker: "READERS & LATEST", labelKo: "많이 읽은 글", labelEn: "Readers & Latest" },
];

function findSection(kicker: string) {
  return Array.from(document.querySelectorAll<HTMLElement>("section")).find((section) => {
    const marker = section.querySelector<HTMLElement>(".section-kicker");
    return marker?.textContent?.trim().toUpperCase() === kicker.toUpperCase();
  }) ?? null;
}

export default function HomeSectionNav() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(sectionItems[0].kicker);

  const labels = useMemo(() => sectionItems.map((item) => ({
    ...item,
    label: ko ? item.labelKo : item.labelEn,
  })), [ko]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > 180);

        const candidates = sectionItems
          .map((item) => ({ item, section: findSection(item.kicker) }))
          .filter((entry): entry is { item: SectionItem; section: HTMLElement } => Boolean(entry.section));

        if (!candidates.length) return;

        const threshold = 210;
        let current = candidates[0].item.kicker;
        for (const entry of candidates) {
          if (entry.section.getBoundingClientRect().top <= threshold) current = entry.item.kicker;
        }
        setActive(current);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTo = (kicker: string) => {
    const section = findSection(kicker);
    if (!section) return;
    const headerOffset = window.innerWidth >= 1280 ? 165 : 105;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <div
      className={`overflow-hidden border-b border-green-deep/12 bg-white/96 transition-[max-height,opacity] duration-300 ${visible ? "max-h-14 opacity-100" : "max-h-0 opacity-0"}`}
      aria-hidden={!visible}
    >
      <nav className="container-page flex min-h-11 items-center gap-1 overflow-x-auto py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={ko ? "메인 섹션 바로가기" : "Home section navigation"}>
        {labels.map((item) => {
          const isActive = active === item.kicker;
          return (
            <button
              key={item.kicker}
              type="button"
              onClick={() => goTo(item.kicker)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-extrabold transition sm:text-xs ${isActive ? "bg-green-deep text-white" : "text-charcoal/55 hover:bg-green-pale hover:text-green-deep"}`}
              aria-current={isActive ? "true" : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
