import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getNewsArticle } from "../data/news";

export default function NewsDetail() {
  const { slug = "" } = useParams();
  const article = getNewsArticle(slug);

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">뉴스를 찾을 수 없습니다.</h1><Link to="/news" className="button-primary mt-7">뉴스 목록</Link></div>;

  const share = async () => {
    if (navigator.share) await navigator.share({ title: article.title, text: article.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert("주소를 복사했습니다."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-20">
      <div className="container-page max-w-5xl"><Link to="/news" className="text-link"><ArrowLeft size={16}/>씨드뉴스 목록</Link><div className="mt-10 border-t-2 border-navy pt-8"><span className="section-kicker">씨드뉴스 {String(article.issue).padStart(2, "0")} · {article.category}</span><h1 className="editorial-title mt-5 max-w-4xl text-4xl font-bold leading-[1.1] text-navy sm:text-6xl">{article.title}</h1><p className="mt-5 max-w-4xl text-xl font-semibold leading-9 text-charcoal/70 sm:text-2xl">{article.subtitle}</p><p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/60">{article.summary}</p></div><div className="mt-9 flex flex-wrap items-center gap-5 border-t border-green-deep/10 pt-5 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>읽는 시간 {article.readMinutes}분</span><button onClick={share} className="button-secondary ml-auto min-h-9 px-3 py-2 text-xs"><Share2 size={15}/>공유</button></div></div>
    </header>

    <div className="container-page max-w-4xl py-12 sm:py-20">
      <figure className="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]"><img src={`${import.meta.env.BASE_URL}${article.heroImage.src}`} alt={article.heroImage.alt} className="aspect-[16/9] w-full object-cover"/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{article.heroImage.caption}</span><a href={article.heroImage.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{article.heroImage.credit}</a></figcaption></figure>

      <div className="mx-auto mt-12 max-w-3xl">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-7 sm:px-8"><span className="section-kicker">오늘의 한 문장</span><p className="mt-3 font-serif text-xl font-bold leading-9 text-green-deep sm:text-2xl">{article.keySentence}</p></aside>

        {article.sections.map((section, index) => <section key={section.title} className="mt-16 border-t border-green-deep/10 pt-12">
          <span className="font-serif text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-2 text-2xl font-extrabold leading-snug text-navy sm:text-3xl">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph.slice(0, 32)} className="mt-6 text-base leading-9 text-charcoal/80 sm:text-lg">{paragraph}</p>)}
          {section.bullets && <ul className="mt-7 grid gap-3 text-base leading-8 text-charcoal/75 sm:text-lg">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"/><span>{bullet}</span></li>)}</ul>}
          {index === 2 && <figure className="my-16 overflow-hidden border border-green-deep/10 bg-white"><img src={`${import.meta.env.BASE_URL}${article.inlineImage.src}`} alt={article.inlineImage.alt} className="aspect-[16/10] w-full object-cover"/><figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:justify-between"><span>{article.inlineImage.caption}</span><a href={article.inlineImage.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4">{article.inlineImage.credit}</a></figcaption></figure>}
        </section>)}

        <section className="mt-16 border-t-2 border-navy pt-10"><span className="section-kicker">시민이 지켜볼 네 가지</span><ol className="mt-6 grid gap-4 sm:grid-cols-2">{article.watchPoints.map((point, index) => <li key={point} className="border border-green-deep/15 bg-white p-5"><span className="font-serif text-sm font-bold text-gold">0{index + 1}</span><p className="mt-2 text-sm font-semibold leading-7 text-navy">{point}</p></li>)}</ol></section>

        <aside className="mt-16 bg-green-deep px-6 py-10 text-white sm:px-10"><span className="text-xs font-bold tracking-[.22em] text-gold">SEED PERSPECTIVE</span><h2 className="mt-3 text-3xl font-extrabold">씨드의 관점</h2>{article.seedPerspective.map((paragraph) => <p key={paragraph.slice(0, 32)} className="mt-6 text-base leading-9 text-white/80 sm:text-lg">{paragraph}</p>)}</aside>

        <section className="mt-16 border-t border-green-deep/15 pt-8"><span className="section-kicker">확인한 자료</span><p className="mt-3 text-xs leading-6 text-charcoal/45">기사 작성일 기준 공개된 공식자료와 보도를 교차 확인했습니다. 이후 정책 내용은 변경될 수 있습니다.</p><ul className="mt-5 grid gap-3 text-sm leading-7 text-charcoal/65">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ul></section>
      </div>
    </div>
  </article>;
}
