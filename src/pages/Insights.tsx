import { BarChart3, ChevronDown, Mail, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { ContentViewStat, DailyViewStat, EngagementSummary, getEngagementData, NewsletterSubscriber } from "../lib/engagement";

const OWNER_EMAIL = "seedcivicpartners@gmail.com";

export default function Insights() {
  const { session, user, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const [summary, setSummary] = useState<EngagementSummary[]>([]);
  const [dailyViews, setDailyViews] = useState<DailyViewStat[]>([]);
  const [views, setViews] = useState<ContentViewStat[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDailyViews, setShowDailyViews] = useState(false);
  const authorized = user?.email?.toLowerCase() === OWNER_EMAIL;

  const refresh = async () => {
    if (!session || !authorized) return;
    setLoading(true);
    setError("");
    try {
      const data = await getEngagementData(session);
      setSummary(data.summary);
      setDailyViews(data.dailyViews);
      setViews(data.views);
      setSubscribers(data.subscribers);
    } catch {
      setError(ko ? "통계 자료를 불러오지 못했습니다." : "Could not load analytics data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void refresh(); }, [session?.access_token, authorized]);

  const totals = useMemo(() => Object.fromEntries(summary.map((item) => [item.metric, Number(item.value)])), [summary]);
  const maxDailyViews = useMemo(() => Math.max(1, ...dailyViews.map((item) => Number(item.views))), [dailyViews]);
  const formatDate = (value: string) => new Intl.DateTimeFormat(ko ? "ko-KR" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  const formatChartDate = (value: string) => new Intl.DateTimeFormat(ko ? "ko-KR" : "en-US", { month: "numeric", day: "numeric", weekday: "short", timeZone: "Asia/Seoul" }).format(new Date(`${value}T00:00:00+09:00`));

  if (authLoading) return <div className="container-page py-24 text-center text-sm text-charcoal/50">{ko ? "계정을 확인하는 중입니다." : "Checking your account…"}</div>;
  if (!user) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">{ko ? "운영 통계" : "Insights"}</h1><p className="mt-4 text-charcoal/60">{ko ? "대표 계정으로 로그인해야 확인할 수 있습니다." : "Sign in with the owner account to continue."}</p><Link to="/account?returnTo=/insights" className="button-primary mt-7">{ko ? "로그인" : "Sign in"}</Link></div>;
  if (!authorized) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">{ko ? "접근할 수 없습니다" : "Access denied"}</h1><p className="mt-4 text-charcoal/60">{ko ? "운영자 전용 페이지입니다." : "This page is for the site owner only."}</p></div>;

  return (
    <section className="min-h-[70vh] bg-ivory py-12 sm:py-16">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-navy pb-5"><div><p className="section-kicker">PRIVATE DASHBOARD</p><h1 className="editorial-title mt-2 text-4xl font-bold text-navy">{ko ? "구독·콘텐츠 통계" : "Subscriptions & content"}</h1><p className="mt-3 text-sm text-charcoal/55">{ko ? "광고 쿠키나 방문자 개인정보 없이 페이지 조회와 구독 신청을 집계합니다." : "Page views and subscription requests, without ad cookies or visitor identity tracking."}</p></div><button type="button" onClick={() => void refresh()} className="button-secondary" disabled={loading}><RefreshCw size={15}/>{ko ? "새로고침" : "Refresh"}</button></div>
        {error && <p className="mt-5 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">{error}</p>}
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <article className="border border-green-deep/15 bg-white p-5"><Mail className="text-green-mid" size={20}/><p className="mt-4 text-xs font-bold text-charcoal/45">{ko ? "활성 구독" : "Active subscribers"}</p><p className="editorial-title mt-1 text-3xl font-bold text-navy">{(totals.active_subscribers || 0).toLocaleString()}</p></article>
          <button type="button" className="group border border-green-deep/15 bg-white p-5 text-left transition-colors hover:border-green-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid focus-visible:ring-offset-2" onClick={() => setShowDailyViews((current) => !current)} aria-expanded={showDailyViews} aria-controls="daily-view-trend"><span className="flex items-start justify-between"><BarChart3 className="text-green-mid" size={20}/><ChevronDown className={`text-green-mid transition-transform ${showDailyViews ? "rotate-180" : ""}`} size={20}/></span><span className="mt-4 block text-xs font-bold text-charcoal/45">{ko ? "최근 7일 조회" : "Views · 7 days"}</span><span className="editorial-title mt-1 block text-3xl font-bold text-navy">{(totals.page_views_7d || 0).toLocaleString()}</span><span className="mt-2 block text-xs font-semibold text-green-deep/65 group-hover:text-green-deep">{ko ? "클릭하여 일별 추이 보기" : "Click to view daily trend"}</span></button>
          <article className="border border-green-deep/15 bg-white p-5"><BarChart3 className="text-green-mid" size={20}/><p className="mt-4 text-xs font-bold text-charcoal/45">{ko ? "전체 조회" : "All page views"}</p><p className="editorial-title mt-1 text-3xl font-bold text-navy">{(totals.all_page_views || 0).toLocaleString()}</p></article>
        </div>
        {showDailyViews && <section id="daily-view-trend" className="mt-4 border border-green-deep/15 bg-white p-5 sm:p-7" aria-labelledby="daily-view-trend-title"><div className="flex flex-wrap items-end justify-between gap-2"><div><h2 id="daily-view-trend-title" className="editorial-title text-xl font-bold text-navy">{ko ? "최근 7일 일별 조회 추이" : "Daily views over the last 7 days"}</h2><p className="mt-1 text-xs text-charcoal/45">{ko ? "한국 시간 기준 · 오늘 포함" : "Korea time · including today"}</p></div><p className="text-sm font-bold text-green-deep">{ko ? `합계 ${(totals.page_views_7d || 0).toLocaleString()}회` : `${(totals.page_views_7d || 0).toLocaleString()} total`}</p></div><div className="mt-7 grid h-52 grid-cols-7 items-end gap-2 border-b border-green-deep/20 px-1 sm:gap-4" role="img" aria-label={ko ? "최근 7일의 일별 페이지 조회 막대그래프" : "Bar chart of daily page views over the last 7 days"}>{dailyViews.map((item) => { const count = Number(item.views); return <div key={item.view_date} className="flex h-full min-w-0 flex-col items-center justify-end"><span className="mb-2 text-xs font-bold text-navy">{count.toLocaleString()}</span><div className="w-full max-w-12 bg-green-mid transition-[height] duration-300" style={{ height: `${Math.max(count > 0 ? 8 : 2, (count / maxDailyViews) * 140)}px` }} title={`${formatChartDate(item.view_date)}: ${count.toLocaleString()}`}/><span className="mt-2 whitespace-nowrap text-[10px] font-semibold text-charcoal/55 sm:text-xs">{formatChartDate(item.view_date)}</span></div>; })}</div>{!loading && dailyViews.length === 0 && <p className="py-10 text-center text-sm text-charcoal/45">{ko ? "일별 조회 기록이 없습니다." : "No daily view history yet."}</p>}</section>}
        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          <section><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "콘텐츠별 조회" : "Views by content"}</h2><div className="mt-4 overflow-x-auto border-t-2 border-navy"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "경로" : "Path"}</th><th className="px-4 py-3 text-right">{ko ? "조회" : "Views"}</th></tr></thead><tbody>{views.map((item) => <tr key={item.page_path} className="border-t border-green-deep/10"><td className="px-4 py-3"><Link to={item.page_path} className="font-semibold text-green-deep hover:underline">{item.page_path}</Link><p className="mt-1 text-[11px] text-charcoal/35">{formatDate(item.last_viewed_at)}</p></td><td className="px-4 py-3 text-right font-bold text-navy">{Number(item.views).toLocaleString()}</td></tr>)}</tbody></table>{!loading && views.length === 0 && <p className="px-4 py-8 text-center text-sm text-charcoal/45">{ko ? "아직 조회 기록이 없습니다." : "No page views yet."}</p>}</div></section>
          <section><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "이메일 구독 명단" : "Email subscribers"}</h2><div className="mt-4 overflow-x-auto border-t-2 border-navy"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "이메일" : "Email"}</th><th className="px-4 py-3">{ko ? "신청일" : "Subscribed"}</th></tr></thead><tbody>{subscribers.map((item) => <tr key={item.email} className="border-t border-green-deep/10"><td className="px-4 py-3 font-semibold text-navy">{item.email}<p className="mt-1 text-[11px] font-normal text-charcoal/35">{item.language.toUpperCase()} · {item.source_path}</p></td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/55">{formatDate(item.consented_at)}</td></tr>)}</tbody></table>{!loading && subscribers.length === 0 && <p className="px-4 py-8 text-center text-sm text-charcoal/45">{ko ? "아직 구독 신청이 없습니다." : "No subscription requests yet."}</p>}</div></section>
        </div>
      </div>
    </section>
  );
}
