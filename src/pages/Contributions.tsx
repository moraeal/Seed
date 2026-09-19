import { ArrowRight, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ContributionArticle from "../components/ContributionArticle";
import { getPublishedContribution, listPublishedContributions, PublishedContribution, PublishedContributionListItem } from "../lib/authorPortal";
import { canonicalUrl } from "../seo";

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) { element = document.createElement("meta"); document.head.appendChild(element); }
  Object.entries(attributes).forEach(([name, value]) => element!.setAttribute(name, value));
}

export default function Contributions() {
  const [params] = useSearchParams();
  const slug = params.get("article") || "";
  const [article, setArticle] = useState<PublishedContribution | null>(null);
  const [items, setItems] = useState<PublishedContributionListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true); setError(""); setArticle(null);
    const request = slug ? getPublishedContribution(slug) : listPublishedContributions();
    void request.then((result) => {
      if (cancelled) return;
      if (slug) setArticle(result as PublishedContribution); else setItems(result as PublishedContributionListItem[]);
    }).catch((reason) => { if (!cancelled) setError(reason instanceof Error ? reason.message : "기사를 불러오지 못했습니다."); }).finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [slug]);

  useEffect(() => {
    if (!article) {
      if (!slug) {
        document.title = "필자 기고 | 씨앗의 소리";
        const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (canonical) canonical.href = canonicalUrl("/contributions");
      }
      return;
    }
    const title = `${article.title} | 씨앗의 소리`;
    const description = article.summary || article.subtitle || "씨앗의 소리 필자 기고입니다.";
    const url = `${canonicalUrl("/contributions")}?article=${encodeURIComponent(article.slug)}`;
    document.title = title;
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "article" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }, [article]);

  if (loading) return <div className="container-page flex min-h-[55vh] items-center justify-center gap-2 text-sm font-bold text-green-deep"><LoaderCircle className="animate-spin" size={18}/>페이지를 불러오는 중입니다.</div>;
  if (error) return <div className="container-page min-h-[55vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">필자 기고</h1><p className="mt-4 text-charcoal/60">{error}</p><Link to="/contributions" className="button-secondary mt-7">기사 목록</Link></div>;
  if (article) return <ContributionArticle title={article.title} subtitle={article.subtitle} summary={article.summary} byline={article.byline} contentType={article.content_type} body={article.body} heroImageUrl={article.hero_image_url} publishedAt={article.published_at}/>;

  return <section className="min-h-[65vh] bg-paper pb-16"><header className="border-b border-green-deep/15 bg-ivory"><div className="container-page py-10 sm:py-14"><span className="section-kicker">WRITER CONTRIBUTIONS</span><h1 className="editorial-title mt-2 text-4xl font-bold text-navy">필자 기고</h1><p className="mt-4 max-w-2xl leading-7 text-charcoal/60">씨앗의 소리 필자들이 쓰고 편집부 검토를 거쳐 게시한 글입니다.</p></div></header><div className="container-page py-8"><div className="divide-y divide-green-deep/15 border-y border-green-deep/15">{items.map((item) => <Link key={item.slug} to={`/contributions?article=${encodeURIComponent(item.slug)}`} className="group block px-4 py-7 transition-colors hover:bg-green-pale/55 sm:px-6"><span className="text-[11px] font-black tracking-[.12em] text-green-deep">{new Date(item.published_at).toLocaleDateString("ko-KR")} · {item.byline}</span><h2 className="editorial-title mt-2 text-2xl font-bold text-navy group-hover:text-green-mid">{item.title}</h2>{item.summary && <p className="mt-2 line-clamp-2 leading-7 text-charcoal/60">{item.summary}</p>}<span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-green-deep">기사 읽기<ArrowRight size={14}/></span></Link>)}{items.length === 0 && <p className="py-16 text-center text-sm text-charcoal/45">아직 게시된 필자 기고가 없습니다.</p>}</div></div></section>;
}
