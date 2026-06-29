/// <reference types="vite/client" />

import { ArrowRight, Heart, MessageCircle, Newspaper } from "lucide-react";

type Issue = {
  kicker: string;
  title: string;
  description: string;
  accent: string;
  articles: string[][];
  heroImage?: string;
  heroPosition?: string;
  heroAlt?: string;
};

const bannerOffsets = {
  top: "0%",
  middle: "-100%",
  bottom: "-200%",
};

export default function IssueSection({ issue, index }: { issue: Issue; index: number }) {
  const heroPosition =
    issue.heroPosition && issue.heroPosition in bannerOffsets
      ? (issue.heroPosition as keyof typeof bannerOffsets)
      : "top";

  return (
    <section className={`section-band ${index % 2 ? "bg-[#F4F5F2]" : "bg-paper"}`}>
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="section-kicker">{issue.kicker}</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy">{issue.title}</h2>
          <p className="mt-5 text-sm leading-7 text-charcoal/70">{issue.description}</p>
        </div>

        {issue.heroImage && (
          <div className="relative mt-6 aspect-[2/1] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-soft sm:aspect-[8/3] lg:aspect-[1536/330]">
            <img
              src={
                issue.heroImage.startsWith("http")
                  ? issue.heroImage
                  : `${import.meta.env.BASE_URL}${issue.heroImage}`
              }
              alt={issue.heroAlt ?? `${issue.title} 대표 이미지`}
              className="absolute left-1/2 h-[300%] w-auto max-w-none -translate-x-1/2"
              style={{ top: bannerOffsets[heroPosition] }}
              loading="lazy"
            />
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {issue.articles.map((article, articleIndex) => (
            <article key={article[1]} className="content-card grid grid-cols-[76px_1fr] gap-4">
              <div
                className="grid min-h-28 place-items-center rounded-md"
                style={{ background: issue.accent }}
              >
                <Newspaper size={27} className="text-green-deep/60" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold text-green-mid">{article[0]}</span>
                <h3 className="mt-1.5 text-[15px] font-extrabold leading-6 text-navy">{article[1]}</h3>
                <p className="mt-2 text-xs leading-5 text-charcoal/60">{article[2]}</p>
                <div className="mt-3 flex gap-3 text-[10px] text-charcoal/40">
                  <span>씨앗편집단</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={11} />
                    {18 + articleIndex * 7}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={11} />
                    {42 + articleIndex * 11}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#"
          className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-green-deep"
        >
          이 이슈 더 보기 <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
