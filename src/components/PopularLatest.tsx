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
type DisplayItem = { path: string; title: string; date?: string; views?: number };
type PopularStatus = "loading" | "success" | "error";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export default function PopularLatest() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const [popular, setPopular] = useState<PublicTopContent[]>([]);
  const [popularStatus, setPopularStatus] = useState<PopularStatus>("loading");

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

    getNewsNewestFirst().forEach((item) => {
      const localized = localizeNewsArticle(item, language);
      items.push({ path: `/news/${localized.slug}`, title: localized.title, date: localized.date });
    });

    getAllBriefingsNewestFirst().forEach((item) => {
      const localized = localizeBriefing(item, language);
      items.push({ path: `/briefings/${localized.slug}`, title: localized.title, date: localized.date });
    });

    columns.forEach((item) => {
      const localized = localizeColumn(item, language);
      items.push({ path: `/columns/${localized.slug}`, title: localized.title, date: localized.date });
    });

    [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo].forEach((item) => {
      const localized = getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language);
      if (!localized || localized.listingEligible === false || localized.readMinutes >= 12) return;
      items.push({ path: `/seed-language/${localized.slug}`, title: localized.title, date: localized.date });
    });

    return items
      .filter((item) => Boolean(item.date))
      .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
      .slice(0, 5);
  }, [language]);

  useEffect(() => {
    let active = true;
    setPopularStatus("loading");
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
      .then((rows: PublicTopContent[]) => {
        if (!active) return;
        setPopular(rows);
        setPopularStatus("success");
      })
      .catch(() => {
        if (!active) return;
        setPopular([]);
        setPopularStatus("error");
      });
    return () => { active = false; };
  }, []);

  const popularItems = popular
    .map<DisplayItem | null>((item) => {
      const title = titleMap.get(item.page_path);
      return title ? { path: item.page_path, title, views: Number(item.views) } : null;
    })
    .filter((item): item is DisplayItem => Boolean(item))
    .slice(0, 5);

  const popularEmptyMessage = popularStatus === "loading"
    ? (ko ? "조회 데이터를 불러오는 중입니다." : "Loading readership data.")
    : popularStatus === "error"
      ? (ko ? "조회 데이터를 불러오지 못했습니다." : "Readership data is temporarily unavailable.")
      : (ko ? "최근 30일 조회 데이터가 아직 없습니다." : "No readership data is available for the last 30 days yet.");

  return (
    <section className="py-6 sm:py-8" aria-labelledby="popular-latest-title">
      <div className="container-page">
        <div className="flex items-end justify-between gap-3 border-b-[3px] border-navy pb-2 sm:gap-4">
          <div>
            <p className="section-kicker">READERS & LATEST</p>
            <h2 id="popular-latest-title" className="editorial-title mt-1 text-[1.35rem] font-bold text-navy sm:text-2xl">{ko ? "많이 읽은 글 / 최신 글" : "Most read / Latest"}</h2>
          </div>
          <Link to="/search" className="text-link shrink-0 text-xs sm:text-sm">{ko ? "검색하기" : "Search"}<ArrowRight size={14}/></Link>
        </div>

        <div className="grid gap-5 pt-3 sm:pt-4 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="flex items-center justify-between border-b border-green-deep/20 pb-1.5">
              <h3 className="text-sm font-extrabold text-navy sm:text-base">{ko ? "많이 읽은 글" : "Most read"}</h3>
              <span className="text-[10px] text-charcoal/40">{ko ? "최근 30일" : "30 days"}</span>
            </div>
            <div className="divide-y divide-green-deep/10">
              {popularItems.length > 0 ? popularItems.map((item, index) => (
                <Link key={item.path} to={item.path} className="group grid grid-cols-[1.5rem_minmax(0,1fr)_auto] items-center gap-2 py-2 sm:grid-cols-[1.7rem_minmax(0,1fr)_auto] sm:gap-2.5 sm:py-2.5">
                  <span className="text-[11px] font-bold tabular-nums text-charcoal/38 sm:text-xs">{index + 1}</span>
                  <h4 className="min-w-0 truncate text-[13px] font-semibold leading-5 text-navy transition group-hover:text-green-mid sm:text-sm">{item.title}</h4>
                  <span className="text-[10px] tabular-nums text-charcoal/40 sm:text-[11px]">{item.views?.toLocaleString()}{ko ? "회" : ""}</span>
                </Link>
              )) : <p className="py-4 text-[12px] text-charcoal/45 sm:text-[13px]" role="status">{popularEmptyMessage}</p>}
            </div>
          </div>

          <div>
            <div className="border-b border-green-deep/20 pb-1.5">
              <h3 className="text-sm font-extrabold text-navy sm:text-base">{ko ? "최신 글" : "Latest"}</h3>
            </div>
            <div className="divide-y divide-green-deep/10">
              {latest.map((item) => (
                <Link key={item.path} to={item.path} className="group grid grid-cols-[5.2rem_minmax(0,1fr)] items-center gap-2 py-2 sm:grid-cols-[5.8rem_minmax(0,1fr)] sm:gap-2.5 sm:py-2.5">
                  <time className="text-[10px] tabular-nums text-charcoal/40 sm:text-[11px]">{item.date?.replace(/-/g, ".")}</time>
                  <h4 className="min-w-0 truncate text-[13px] font-semibold leading-5 text-navy transition group-hover:text-green-mid sm:text-sm">{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
