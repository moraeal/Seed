type FigureCaptionProps = {
  caption: string;
  credit: string;
  sourceUrl?: string;
};

const isSeedCredit = (credit: string) =>
  /씨드시민파트너스|SEED Civic Partners|씨드뉴스/i.test(credit);

const isAiCredit = (credit: string) => /\bAI\b|인공지능/i.test(credit);

const displayCredit = (credit: string) => {
  if (!isSeedCredit(credit)) return credit;
  return isAiCredit(credit) ? "제작: 씨드시민파트너스" : "© 2026 씨드시민파트너스";
};

export default function FigureCaption({ caption, credit, sourceUrl }: FigureCaptionProps) {
  const label = displayCredit(credit);
  const creditClass = "ml-2 inline font-semibold text-green-deep/75";

  return (
    <figcaption className="border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/60">
      <span>{caption}</span>{" "}
      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className={`${creditClass} underline decoration-green-deep/30 underline-offset-4 hover:text-green-deep`}
        >
          {label}
        </a>
      ) : (
        <span className={creditClass}>{label}</span>
      )}
    </figcaption>
  );
}
