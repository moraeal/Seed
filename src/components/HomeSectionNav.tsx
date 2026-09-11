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

  const activeItem = labels.find((item) => item.kicker === active) ?? labels[0];
  const activeIndex = labels.findIndex((item) => item.kicker === active);

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

        const threshold = 190;
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
    const headerOffset = window.innerWidth >= 1280 ? 150 : 92;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <div
      className={`overflow-hidden border-b border-green-deep/8 bg-ivory/88 backdrop-blur-md transition-[max-height,opacity] duration-300 ${visible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}
      aria-hidden={!visible}
    >
      <nav className="container-page flex min-h-8 items-center justify-between gap-4 py-1" aria-label={ko ? "메인 섹션 위치 안내" : "Home section position"}>
        <button
          type="button"
          onClick={() => goTo(activeItem.kicker)}
          className="min-w-0 truncate text-left text-[10px] font-extrabold tracking-[.04em] text-green-deep sm:text-[11px]"
          aria-label={ko ? `${activeItem.label} 섹션으로 이동` : `Go to ${activeItem.label}`}
        >
          <span className="mr-2 text-charcoal/35">{ko ? "현재" : "NOW"}</span>
          {activeItem.label}
        </button>

        <div className="flex shrink-0 items-center gap-2" role="list" aria-label={ko ? "섹션 위치" : "Section position"}>
          {labels.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.kicker}
                type="button"
                onClick={() => goTo(item.kicker)}
                className={`h-1.5 rounded-full transition-all duration-200 ${isActive ? "w-6 bg-green-deep" : "w-1.5 bg-charcoal/20 hover:bg-green-deep/45"}`}
                aria-current={isActive ? "true" : undefined}
                aria-label={item.label}
                title={item.label}
              />
            );
          })}
        </div>
      </nav>
    </div>
  );
}
