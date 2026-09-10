import { ArrowLeft, BookOpenText, Check, ExternalLink, Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import ShareButton from "../components/ShareButton";
import { communityChestAllocation, communityChestResearch, communityChestTrend } from "../data/communityChestResearch";
import { useLanguage } from "../i18n";

const maxTrend = Math.max(...communityChestTrend.flatMap((row) => [row.raised, row.distributed, row.carried]));

export default function CommunityChestResearch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const article = communityChestResearch[language];
  const [progress, setProgress] = useState(0);
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, Math.max(0, (window.scrollY / available) * 100)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const copyClass = useMemo(() => {
    if (fontScale > 1) return "text-[18px] sm:text-[19px]";
    if (fontScale < 1) return "text-[15px] sm:text-base";
    return "text-[17px] sm:text-lg";
  }, [fontScale]);

  return (
    <article className="bg-paper pb-12 sm:pb-16">
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-green-deep/10" aria-hidden="true">
        <div className="h-full bg-gold transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page max-w-5xl py-5 sm:py-7">
          <Link to="/monitoring/community-chest-of-korea" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "사랑의열매 공익감시로 돌아가기" : "Back to the Community Chest watch record"}</Link>
          <div className="mt-4 border-t-2 border-navy pt-4 text-center">
            <span className="section-kicker">{article.eyebrow}</span>
            <h1 className="article-detail-title mt-3">{article.title}</h1>
            <p className="article-detail-subtitle">{article.subtitle}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45">
              <time>{article.date.replace(/-/g, ".")}</time>
              <span>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span>
              <span>{ko ? `팩트체크 기준일 ${article.verifiedAt}` : `Fact-check date: ${article.verifiedAt}`}</span>
              <ShareButton title={article.title} text={article.subtitle} />
            </div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-6xl py-8 sm:py-12">
        <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]">
          <img src={`${import.meta.env.BASE_URL}images/monitoring/community-chest-deep-hero.png`} alt={article.heroAlt} className="aspect-[16/9] w-full object-cover" />
          <figcaption className="border-t border-green-deep/10 px-5 py-3 text-xs leading-6 text-charcoal/50 sm:px-7">{article.heroCaption}</figcaption>
        </figure>

        <div className="mt-8 grid gap-10 lg:grid-cols-[15rem_minmax(0,46rem)] lg:justify-center lg:gap-14">
          <aside id="research-contents" className="scroll-mt-40 lg:sticky lg:top-[158px] lg:self-start">
            <div className="border-y-2 border-green-deep bg-white p-5">
              <div className="flex items-center gap-2 text-navy"><BookOpenText size={18}/><h2 className="font-extrabold">{ko ? "차례" : "Contents"}</h2></div>
              <ol className="mt-4 space-y-1">
                {article.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="group flex gap-3 py-2 text-sm leading-5 text-charcoal/60 hover:text-green-deep"><span className="font-extrabold text-gold">{String(index + 1).padStart(2, "0")}</span><span>{section.title}</span></a></li>)}
              </ol>
              <div className="mt-5 flex items-center justify-between border-t border-green-deep/10 pt-4">
                <span className="text-xs font-bold text-charcoal/50">{ko ? "글자 크기" : "Text size"}</span>
                <div className="flex gap-1">
                  <button type="button" onClick={() => setFontScale((value) => Math.max(.9, value - .1))} className="grid size-9 place-items-center border border-green-deep/15 text-green-deep hover:bg-green-pale" aria-label={ko ? "글자 작게" : "Decrease text size"}><Minus size={15}/></button>
                  <button type="button" onClick={() => setFontScale((value) => Math.min(1.1, value + .1))} className="grid size-9 place-items-center border border-green-deep/15 text-green-deep hover:bg-green-pale" aria-label={ko ? "글자 크게" : "Increase text size"}><Plus size={15}/></button>
                </div>
              </div>
              <div className="mt-4" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} aria-label={ko ? "읽기 진행률" : "Reading progress"}>
                <div className="h-1.5 overflow-hidden rounded-full bg-green-deep/10"><div className="h-full bg-green-mid" style={{ width: `${progress}%` }}/></div>
                <p className="mt-2 text-right text-[11px] font-bold text-charcoal/45">{Math.round(progress)}%</p>
              </div>
            </div>
          </aside>

          <main className="min-w-0">
            <aside className="border-l-4 border-gold bg-green-pale/60 px-6 py-6 sm:px-8">
              <span className="section-kicker">{ko ? "핵심 요약" : "EXECUTIVE SUMMARY"}</span>
              {article.summary.map((paragraph) => <p key={paragraph.slice(0, 36)} className={`mt-3 leading-[1.8] text-charcoal/80 ${copyClass}`}>{paragraph}</p>)}
            </aside>

            {article.sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-40 border-t border-green-deep/12 pt-8 first-of-type:mt-10 [&:not(:first-of-type)]:mt-12">
                <span className="text-xs font-extrabold text-gold">CHAPTER {String(index + 1).padStart(2, "0")}</span>
                <h2 className="article-section-title mt-2">{section.title}</h2>
                <p className="mt-2 text-sm font-bold leading-7 text-green-deep/75 sm:text-base">{section.deck}</p>
                {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 36)} className={`mt-4 leading-[1.82] tracking-[-.012em] text-charcoal/85 ${copyClass}`}>{paragraph}</p>)}

                {section.id === "five-years" && <TrendChart ko={ko} />}
                {section.id === "restricted" && <AllocationChart ko={ko} />}

                {section.bullets && <ul className="mt-7 grid gap-3">{section.bullets.map((item) => <li key={item} className="flex gap-3 border border-green-deep/10 bg-white p-4 text-sm leading-7 text-charcoal/75 sm:text-base"><Check className="mt-1 shrink-0 text-green-mid" size={18}/><span>{item}</span></li>)}</ul>}
                <a href="#research-contents" className="mt-5 inline-block text-xs font-bold text-green-deep underline decoration-green-deep/25 underline-offset-4">{ko ? "차례로 돌아가기" : "Back to contents"}</a>
              </section>
            ))}

            <section className="mt-12 bg-green-deep px-6 py-8 text-white sm:px-8 sm:py-10">
              <span className="text-xs font-extrabold tracking-[.2em] text-gold-light">SEED CONCLUSION</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{ko ? "공익의 주인은 시민입니다" : "Citizens Are the Owners of Public Interest"}</h2>
              {article.conclusion.map((paragraph) => <p key={paragraph.slice(0, 36)} className={`mt-4 leading-[1.82] text-white/85 ${copyClass}`}>{paragraph}</p>)}
            </section>

            <section className="mt-10 border-t-2 border-navy pt-7">
              <span className="section-kicker">{ko ? "연구 방법과 한계" : "METHOD AND LIMITS"}</span>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">{ko ? "무엇을 확인했고, 무엇을 단정하지 않았는가" : "What Was Verified—and What Was Not Claimed"}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/65 sm:text-base">{ko ? "2021~2025년 모금·배분·재무 수치는 사랑의열매 중앙회 경영공시를 기준으로 확인했습니다. 과거 사건은 공개 보도와 당시 기관 답변이 함께 확인되는 범위에서만 서술했습니다. 이월재원의 상세 구성·대기기간, 위원 선임의 실제 영향력과 소액 시민지원의 접근성은 추가 원자료가 필요한 과제로 남겨두었습니다." : "Figures for 2021–2025 were checked against the Chest's national-office disclosures. Historical incidents are described only where public reporting and the institution's response could both be identified. The detailed age and restrictions of carryovers, the practical influence of member selection, and access for micro-grant applicants remain questions requiring further primary records."}</p>
            </section>

            <section className="mt-10 border-t border-green-deep/15 pt-7">
              <h2 className="text-2xl font-extrabold text-navy">{ko ? "확인 자료" : "Sources"}</h2>
              <ol className="mt-4 divide-y divide-green-deep/10 border-y border-green-deep/10">
                {article.sources.map((source, index) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="group flex items-start gap-4 py-4 text-charcoal/70 hover:text-green-deep"><span className="font-extrabold text-gold">{String(index + 1).padStart(2, "0")}</span><span className="flex-1"><strong className="block text-sm font-extrabold text-navy group-hover:text-green-deep">{source.label}</strong><span className="mt-1 block text-xs text-charcoal/45">{source.kind}</span></span><ExternalLink className="mt-0.5 shrink-0" size={16}/></a></li>)}
              </ol>
            </section>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-y border-green-deep/15 bg-white px-5 py-5">
              <p className="text-sm font-bold text-navy">{ko ? "핵심 쟁점만 간결하게 다시 보시겠습니까?" : "Prefer the concise watch record?"}</p>
              <Link to="/monitoring/community-chest-of-korea" className="button-primary">{ko ? "5분 요약본 보기" : "Read the 5-minute summary"}</Link>
            </div>

            <ContentAccountability postSlug="research-community-chest-of-korea" publishedDate={article.date} />
            <CommentSection postSlug="research-community-chest-of-korea" />
          </main>
        </div>
      </div>
    </article>
  );
}

function TrendChart({ ko }: { ko: boolean }) {
  const series = [
    { key: "raised" as const, label: ko ? "모금" : "Raised", color: "bg-green-mid" },
    { key: "distributed" as const, label: ko ? "배분" : "Distributed", color: "bg-gold" },
    { key: "carried" as const, label: ko ? "차기이월 순자산" : "Net assets carried forward", color: "bg-navy" },
  ];
  return <figure className="my-9 border-y-2 border-green-deep bg-white px-4 py-6 sm:px-6">
    <figcaption><span className="section-kicker">DATA 01</span><h3 className="mt-2 text-xl font-extrabold text-navy">{ko ? "모금·배분·차기이월 순자산 추이" : "Fundraising, Distributions and Net Assets Carried Forward"}</h3><p className="mt-2 text-xs leading-6 text-charcoal/50">{ko ? "단위: 억 원 · 출처: 사랑의열매 경영공시" : "KRW 100 million · Source: Community Chest management disclosures"}</p></figcaption>
    <div className="mt-5 flex flex-wrap gap-4">{series.map((item) => <span key={item.key} className="flex items-center gap-2 text-xs font-bold text-charcoal/60"><span className={`size-2.5 ${item.color}`}/>{item.label}</span>)}</div>
    <div className="mt-6 space-y-5">{communityChestTrend.map((row) => <div key={row.year} className="grid grid-cols-[3rem_1fr] gap-3"><strong className="pt-1 text-sm text-navy">{row.year}</strong><div className="space-y-1.5">{series.map((item) => <div key={item.key} className="flex items-center gap-2"><div className="h-4 min-w-0 flex-1 bg-green-deep/5"><div className={`h-full ${item.color}`} style={{ width: `${(row[item.key] / maxTrend) * 100}%` }}/></div><span className="w-12 text-right text-[11px] font-bold text-charcoal/55">{row[item.key].toLocaleString()}</span></div>)}</div></div>)}</div>
  </figure>;
}

function AllocationChart({ ko }: { ko: boolean }) {
  return <figure className="my-9 border-y-2 border-green-deep bg-white px-4 py-6 sm:px-6">
    <figcaption><span className="section-kicker">DATA 02</span><h3 className="mt-2 text-xl font-extrabold text-navy">{ko ? "2025년 배분사업 구성" : "2025 Distribution Mix"}</h3><p className="mt-2 text-xs leading-6 text-charcoal/50">{ko ? "전체 9,860억 원 · 출처: 사랑의열매 경영공시" : "Total KRW 986.0 billion · Source: Community Chest management disclosures"}</p></figcaption>
    <div className="mt-6 space-y-4">{communityChestAllocation.map((item, index) => <div key={item.ko}><div className="mb-1.5 flex items-end justify-between gap-4"><strong className="text-sm text-navy">{ko ? item.ko : item.en}</strong><span className="text-xs font-bold text-charcoal/55">{item.amount.toLocaleString()} · {item.percent}%</span></div><div className="h-5 overflow-hidden bg-green-deep/5"><div className={`h-full ${index === 0 ? "bg-green-deep" : index === 1 ? "bg-gold" : "bg-green-mid/70"}`} style={{ width: `${item.percent}%` }}/></div></div>)}</div>
  </figure>;
}
