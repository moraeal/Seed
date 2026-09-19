import { ArrowLeft, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import type { ArticleDraftType } from "../lib/authorPortal";

const typeLabel: Record<ArticleDraftType, string> = {
  column: "칼럼",
  briefing: "브리핑",
  civic_language: "시민언어",
  monitoring: "시민감시",
  other: "필자 기고",
};

function ArticleBody({ body }: { body: string }) {
  const blocks = body.replace(/\r\n/g, "\n").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  return <div className="mx-auto max-w-[760px] text-[1.05rem] leading-[2] text-charcoal/85">
    {blocks.map((block, index) => {
      if (/^#{1,3}\s+/.test(block)) return <h2 key={index} className="editorial-title mb-4 mt-12 text-2xl font-bold leading-snug text-navy">{block.replace(/^#{1,3}\s+/, "")}</h2>;
      const lines = block.split("\n");
      if (lines.every((line) => /^[-*]\s+/.test(line))) return <ul key={index} className="my-7 list-disc space-y-2 pl-6">{lines.map((line, lineIndex) => <li key={lineIndex}>{line.replace(/^[-*]\s+/, "")}</li>)}</ul>;
      return <p key={index} className="my-7 whitespace-pre-line">{block}</p>;
    })}
  </div>;
}

type Props = {
  title: string;
  subtitle?: string;
  summary?: string;
  byline?: string;
  contentType: ArticleDraftType;
  body: string;
  heroImageUrl?: string;
  publishedAt?: string | null;
  preview?: boolean;
  backTo?: string;
};

export default function ContributionArticle({ title, subtitle, summary, byline, contentType, body, heroImageUrl, publishedAt, preview, backTo }: Props) {
  const minutes = Math.max(1, Math.ceil(body.replace(/\s/g, "").length / 500));
  const date = publishedAt ? new Date(publishedAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" }) : "게시 전 미리보기";
  const image = heroImageUrl || `${import.meta.env.BASE_URL}images/brand/editorial-image-fallback.svg`;

  return <article className="bg-paper pb-16">
    {preview && <div className="border-b border-amber-300 bg-amber-50"><div className="container-page flex flex-wrap items-center justify-between gap-3 py-3 text-sm"><strong className="text-amber-900">비공개 미리보기 · 마지막으로 저장된 내용입니다.</strong>{backTo && <Link to={backTo} className="inline-flex items-center gap-1.5 font-bold text-green-deep"><ArrowLeft size={15}/>편집 화면으로</Link>}</div></div>}
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page max-w-5xl py-10 text-center sm:py-16">
        <span className="section-kicker">WRITER CONTRIBUTION · {typeLabel[contentType]}</span>
        <h1 className="editorial-title mx-auto mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-navy sm:text-5xl">{title || "제목 없는 원고"}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-charcoal/65">{subtitle}</p>}
        <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-green-deep/10 pt-5 text-xs text-charcoal/50"><span className="font-bold text-green-deep">{byline || "필자"}</span><time>{date}</time><span className="inline-flex items-center gap-1"><Clock3 size={13}/>{minutes}분 읽기</span></div>
      </div>
    </header>
    <div className="container-page max-w-6xl py-8 sm:py-12">
      <SafeImage src={image} alt={`${title || "기사"} 대표 이미지`} className="mx-auto aspect-[16/8] w-full max-w-5xl bg-green-pale object-cover" referrerPolicy="no-referrer"/>
      {summary && <p className="editorial-title mx-auto mt-10 max-w-[760px] border-y border-green-deep/15 py-6 text-xl font-semibold leading-9 text-navy">{summary}</p>}
      <ArticleBody body={body || "아직 작성된 본문이 없습니다."}/>
    </div>
  </article>;
}
