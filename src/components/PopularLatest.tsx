import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { columns } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsNewestFirst } from "../data/news";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";

type PublicTopContent = { page_path: string; views: number };
type DisplayItem = { path: string; title: string; category: string; date?: string; views?: number };

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

function categoryFromPath(path: string, ko: boolean) {
  if (path.startsWith("/news/")) return ko ? "오늘의 뉴스" : "NEWS";
  if (path.startsWith("/briefings/")) return ko ? "씨앗브리핑" : "BRIEFING";
  if (path.startsWith("/columns/")) return ko ? "씨앗의 소리" : "VOICE";
  if (path.startsWith("/seed-language/")) return ko ? "씨앗언어" : "SEED LANGUAGE";
  return ko ? "콘텐츠" : "CONTENT";
}

export default function PopularLatest() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [popular, setPopular] = useState<PublicTopContent[]>([]);

  const titleMap = useMemo(() => {
    const entries = new Map<string, string>();
    getNewsNewestFirst().forEach((item) => {
      const localized = localizeNewsArticle(item, language);
      entries.set(`/news/${localized.slug}`, localized.title);
    });
    getAllBriefingsNewestFirst().forEach((item) => {
      const localized = localizeBriefing(item, language);
      entries.set(`/briefings/${localized.slug}`, localized.title);
    });
    columns.forEach((item) => {
      const localized = localizeColumn(item, language);
      entries.set(`/columns/${localized.slug}`, localized.title);
    });
    [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo].forEach((item) => {
      const localized = getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language);
      if (localized) entries.set(`/seed-language/${localized.slug}`, localized.title);
    });
    return entries;
  }, [language]);

  const latest = useMemo<DisplayItem[]>(() => {
    const items: DisplayItem[] = [];
    getNewsNewestFirst().slice(0, 5).forEach((item) => {
      const localized = localizeNewsArticle(item, language);
      items.push({ path: `/news/${localized.slug}`, title: localized.title, category: ko ? "오늘의 뉴스" : "NEWS", date: localized.date });
    });
    return items;
  }, [language, ko]);

  useEffect(() => {
    let active = true;
    fetch(`${supabaseUrl}/rest/v1/rpc/get_public_top_content`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      body: "{}",
    })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(String(response.status))))
      .then((rows: PublicTopContent[]) => { if (active) setPopular(rows); })
      .catch(() => { if (active) setPopular([]); });
    return () => { active = false; };
  }, []);

  const popularItems = popular
    .map<DisplayItem | null>((item) => {
      const title = titleMap.get(item.page_path);
      return title ? { path: item.page_path, title, category: categoryFromPath(item.page_path, ko), views: Number(item.views) } : null;
    })
    .filter((item): item is DisplayItem => Boolean(item));

  return (
    <section className="py-9 sm:py-12" aria-labelledby="popular-latest-title">
      <div className="container-page">
        <div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2.5 sm:gap-4 sm:pb-3">
          <div>
            <p className="section-kicker">READERS & LATEST</p>
            <h2 id="popular-latest-title" className="editorial-title mt-1 text-[1.45rem] font-bold text-navy sm:mt-1.5 sm:text-3xl">{ko ? "많이 읽은 글 / 최신 글" : "Most read / Latest"}</h2>
          </div>
          <Link to="/search" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "검색하기" : "Search"}<ArrowRight size={14}/></Link>
        </div>

        <div className="grid gap-7 pt-4 sm:gap-10 sm:pt-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex items-end justify-between gap-3 sm:gap-4"><h3 className="editorial-title text-[1.08rem] font-bold text-navy sm:text-2xl">{ko ? "최근 30일 많이 읽은 글" : "Most read · 30 days"}</h3><span className="text-[10px] font-semibold text-charcoal/40 sm:text-[11px]">{ko ? "실제 조회 기준" : "Actual views"}</span></div>
            <div className="mt-2.5 divide-y divide-green-deep/12 border-y border-green-deep/15 sm:mt-3">
              {popularItems.length > 0 ? popularItems.map((item, index) => (
                <Link key={item.path} to={item.path} className="group grid grid-cols-[1.6rem_1fr_auto] gap-2.5 py-3 sm:grid-cols-[2rem_1fr_auto] sm:gap-4 sm:py-4">
                  <span className="text-xs font-black text-green-deep/55 sm:text-sm">{String(index + 1).padStart(2, "0")}</span>
                  <div><p className="text-[9px] font-black tracking-[.12em] text-green-deep sm:text-[10px]">{item.category}</p><h4 className="editorial-title mt-0.5 break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:mt-1 sm:text-lg">{item.title}</h4></div>
                  <span className="self-center text-[11px] font-bold tabular-nums text-charcoal/45 sm:text-xs">{item.views?.toLocaleString()}{ko ? "회" : ""}</span>
                </Link>
              )) : <p className="py-5 text-[13px] text-charcoal/45 sm:py-6 sm:text-sm">{ko ? "조회 데이터를 불러오는 중입니다." : "Loading readership data."}</p>}
            </div>
          </div>

          <div>
            <h3 className="editorial-title text-[1.08rem] font-bold text-navy sm:text-2xl">{ko ? "최신 글" : "Latest"}</h3>
            <div className="mt-2.5 divide-y divide-green-deep/12 border-y border-green-deep/15 sm:mt-3">
              {latest.map((item) => (
                <Link key={item.path} to={item.path} className="group grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 py-3 sm:grid-cols-[6.5rem_1fr_auto] sm:items-center sm:gap-4 sm:py-4">
                  <time className="text-[11px] text-charcoal/40 sm:text-xs">{item.date?.replace(/-/g, ".")}</time>
                  <h4 className="editorial-title break-keep text-[1rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">{item.title}</h4>
                  <span className="col-start-2 text-[9px] font-black tracking-[.1em] text-green-deep sm:col-auto sm:text-[10px]">{item.category}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
