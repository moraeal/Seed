import { useLanguage } from "../i18n";

type FigureCaptionProps = {
  caption: string;
  credit: string;
  sourceUrl?: string;
  className?: string;
  creditClassName?: string;
};

const isSeedCredit = (credit: string) =>
  /씨앗의 소리|SEED VOICE|씨드뉴스|오늘의뉴스/i.test(credit);

const isAiCredit = (credit: string) => /\bAI\b|인공지능/i.test(credit);

const displayCredit = (credit: string, ko: boolean, sourceUrl?: string) => {
  if (isAiCredit(credit) && !sourceUrl) return ko ? "© 씨앗의 소리" : "© SEED VOICE";
  if (!isSeedCredit(credit)) return credit;
  return "© 2026 씨앗의 소리";
};

export default function FigureCaption({ caption, credit, sourceUrl, className, creditClassName }: FigureCaptionProps) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const label = displayCredit(credit, ko, sourceUrl);
  const aiImage = isAiCredit(credit) && !sourceUrl;
  const captionHasAiLabel = /\\bAI\\b|인공지능/i.test(caption);
  const captionText = aiImage && !captionHasAiLabel
    ? `${caption.trim()}${caption.trim() ? " · " : ""}${ko ? "AI 이미지" : "AI image"}`
    : caption;
  const creditClass = creditClassName ?? "shrink-0 self-end text-right text-xs font-semibold text-green-deep/75 sm:self-auto";

  return (
    <figcaption className={className ?? "flex flex-col gap-1 border-t border-green-deep/10 px-5 py-4 text-[13px] leading-6 text-charcoal/60 sm:flex-row sm:items-start sm:justify-between sm:gap-6"}>
      <span className="min-w-0 flex-1">{captionText}</span>
      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className={`${creditClass} underline decoration-current/40 underline-offset-4`}
        >
          {label}
        </a>
      ) : (
        <span className={creditClass}>{label}</span>
      )}
    </figcaption>
  );
}
