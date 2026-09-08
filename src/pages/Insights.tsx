import { BarChart3, ChevronRight, ExternalLink, Mail, RefreshCw, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { ContentViewStat, DailyViewStat, EngagementSummary, getEngagementData, MemberRegistration, NewsletterSubscriber, ReferrerStat } from "../lib/engagement";

type Section = "dashboard" | "content" | "traffic" | "subscribers" | "members";

const navItems: { key: Section; ko: string; en: string; path: string }[] = [
  { key: "dashboard", ko: "종합 대시보드", en: "Dashboard", path: "/insights" },
  { key: "content", ko: "콘텐츠 통계", en: "Content", path: "/insights/content" },
  { key: "traffic", ko: "유입 분석", en: "Traffic", path: "/insights/traffic" },
  { key: "subscribers", ko: "이메일 구독자", en: "Subscribers", path: "/insights/subscribers" },
  { key: "members", ko: "회원 관리", en: "Members", path: "/insights/members" },
];

function sectionFromPath(path: string): Section {
  if (path.endsWith("/content")) return "content";
  if (path.endsWith("/traffic")) return "traffic";
  if (path.endsWith("/subscribers")) return "subscribers";
  if (path.endsWith("/members")) return "members";
  return "dashboard";
}

function categoryLabel(path: string, ko: boolean) {
  if (path.startsWith("/news/")) return ko ? "오늘의 뉴스" : "News";
  if (path.startsWith("/briefings/")) return ko ? "씨앗브리핑" : "Briefing";
  if (path.startsWith("/columns/")) return ko ? "씨앗의 소리" : "Voice";
  if (path.startsWith("/seed-language/")) return ko ? "씨앗언어" : "Seed Language";
  return ko ? "기타" : "Other";
}

export default function Insights() {
  const { pathname } = useLocation();
  const section = sectionFromPath(pathname);
  const { session, user, loading: authLoading } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const [summary, setSummary] = useState<EngagementSummary[]>([]);
  const [dailyViews, setDailyViews] = useState<DailyViewStat[]>([]);
  const [views, setViews] = useState<ContentViewStat[]>([]);
  const [referrers, setReferrers] = useState<ReferrerStat[]>([]);
  const [members, setMembers] = useState<MemberRegistration[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);
  const [contentCategory, setContentCategory] = useState("all");
  const authorized = user?.app_metadata?.seed_role === "owner";

  const refresh = async () => {
    if (!session || !authorized) return;
    setLoading(true);
    setError("");
    try {
      const data = await getEngagementData(session);
      setSummary(data.summary);
      setDailyViews(data.dailyViews);
      setViews(data.views);
      setReferrers(data.referrers);
      setMembers(data.members);
      setSubscribers(data.subscribers);
      setLastUpdatedAt(new Date());
    } catch {
      setError(ko ? "통계 자료를 불러오지 못했습니다." : "Could not load analytics data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void refresh(); }, [session?.access_token, authorized]);
  useEffect(() => {
    if (!session || !authorized) return;
    const timer = window.setInterval(() => { void refresh(); }, 30_000);
    return () => window.clearInterval(timer);
  }, [session?.access_token, authorized]);

  const totals = useMemo(() => Object.fromEntries(summary.map((item) => [item.metric, Number(item.value)])), [summary]);
  const maxDailyViews = useMemo(() => Math.max(1, ...dailyViews.map((item) => Number(item.views))), [dailyViews]);
  const filteredViews = useMemo(() => contentCategory === "all" ? views : views.filter((item) => categoryLabel(item.page_path, true) === contentCategory), [views, contentCategory]);
  const topViews = views.slice(0, 5);
  const formatDate = (value: string) => new Intl.DateTimeFormat(ko ? "ko-KR" : "en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  const formatChartDate = (value: string) => new Intl.DateTimeFormat(ko ? "ko-KR" : "en-US", { month: "numeric", day: "numeric", weekday: "short", timeZone: "Asia/Seoul" }).format(new Date(`${value}T00:00:00+09:00`));

  if (authLoading) return <div className="container-page py-24 text-center text-sm text-charcoal/50">{ko ? "계정을 확인하는 중입니다." : "Checking your account…"}</div>;
  if (!user) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">{ko ? "운영 통계" : "Insights"}</h1><p className="mt-4 text-charcoal/60">{ko ? "대표 계정으로 로그인해야 확인할 수 있습니다." : "Sign in with the owner account to continue."}</p><Link to="/account?returnTo=/insights" className="button-primary mt-7">{ko ? "로그인" : "Sign in"}</Link></div>;
  if (!authorized) return <div className="container-page min-h-[60vh] py-24 text-center"><h1 className="editorial-title text-4xl font-bold text-navy">{ko ? "접근할 수 없습니다" : "Access denied"}</h1><p className="mt-4 text-charcoal/60">{ko ? "운영자 전용 페이지입니다." : "This page is for the site owner only."}</p></div>;

  const pageTitle = navItems.find((item) => item.key === section);

  return (
    <section className="min-h-[70vh] bg-ivory py-10 sm:py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-navy pb-5">
          <div><p className="section-kicker">PRIVATE ANALYTICS</p><h1 className="editorial-title mt-2 text-4xl font-bold text-navy">{ko ? pageTitle?.ko : pageTitle?.en}</h1><p className="mt-3 text-sm text-charcoal/55">{ko ? "사이트 유입, 콘텐츠 소비, 구독과 회원 현황을 분리해 확인합니다." : "Review traffic, content consumption, subscriptions and members separately."}</p></div>
          <div className="text-right"><button type="button" onClick={() => void refresh()} className="button-secondary" disabled={loading}><RefreshCw className={loading ? "animate-spin" : ""} size={15}/>{ko ? "새로고침" : "Refresh"}</button><p className="mt-2 text-[11px] font-semibold text-charcoal/40">{ko ? "30초마다 자동 업데이트" : "Auto-updates every 30 seconds"}{lastUpdatedAt ? ` · ${lastUpdatedAt.toLocaleTimeString(ko ? "ko-KR" : "en-US")}` : ""}</p></div>
        </div>

        <nav className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label={ko ? "통계 메뉴" : "Analytics navigation"}>{navItems.map((item) => <Link key={item.key} to={item.path} className={`whitespace-nowrap border px-4 py-2 text-sm font-bold transition-colors ${section === item.key ? "border-green-deep bg-green-deep text-white" : "border-green-deep/15 bg-white text-green-deep hover:border-green-mid"}`}>{ko ? item.ko : item.en}</Link>)}</nav>
        {error && <p className="mt-5 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">{error}</p>}

        {section === "dashboard" && <>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {[
              [ko ? "오늘 조회" : "Today", totals.page_views_today || 0],
              [ko ? "최근 7일" : "7 days", totals.page_views_7d || 0],
              [ko ? "최근 30일" : "30 days", totals.page_views_30d || 0],
              [ko ? "활성 구독자" : "Subscribers", totals.active_subscribers || 0],
              [ko ? "회원" : "Members", totals.member_count || members.length],
            ].map(([label, value]) => <article key={String(label)} className="border border-green-deep/15 bg-white p-5"><p className="text-xs font-bold text-charcoal/45">{label}</p><p className="editorial-title mt-2 text-3xl font-bold text-navy">{Number(value).toLocaleString()}</p></article>)}
          </div>
          <section className="mt-7 border border-green-deep/15 bg-white p-5 sm:p-7"><div className="flex flex-wrap items-end justify-between gap-2"><div><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "최근 7일 조회 추이" : "Views over the last 7 days"}</h2><p className="mt-1 text-xs text-charcoal/45">{ko ? "한국 시간 기준 · 오늘 포함" : "Korea time · including today"}</p></div><Link to="/insights/content" className="inline-flex items-center gap-1 text-sm font-bold text-green-deep">{ko ? "콘텐츠별 보기" : "View content"}<ChevronRight size={15}/></Link></div><div className="mt-7 grid h-52 grid-cols-7 items-end gap-2 border-b border-green-deep/20 px-1 sm:gap-4">{dailyViews.map((item) => { const count = Number(item.views); return <div key={item.view_date} className="flex h-full min-w-0 flex-col items-center justify-end"><span className="mb-2 text-xs font-bold text-navy">{count.toLocaleString()}</span><div className="w-full max-w-12 bg-green-mid" style={{ height: `${Math.max(count > 0 ? 8 : 2, (count / maxDailyViews) * 140)}px` }}/><span className="mt-2 whitespace-nowrap text-[10px] font-semibold text-charcoal/55 sm:text-xs">{formatChartDate(item.view_date)}</span></div>; })}</div></section>
          <div className="mt-7 grid gap-6 xl:grid-cols-2"><section className="border border-green-deep/15 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "상위 콘텐츠" : "Top content"}</h2><Link to="/insights/content" className="text-xs font-bold text-green-deep">{ko ? "전체 보기" : "All"}</Link></div><div className="mt-4 divide-y divide-green-deep/10">{topViews.map((item) => <div key={item.page_path} className="flex items-center justify-between gap-4 py-3"><div className="min-w-0"><p className="truncate text-sm font-bold text-navy">{item.page_path}</p><p className="mt-1 text-[11px] text-charcoal/40">{categoryLabel(item.page_path, ko)}</p></div><span className="text-sm font-bold text-green-deep">{Number(item.views).toLocaleString()}</span></div>)}</div></section><section className="border border-green-deep/15 bg-white p-5 sm:p-6"><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "관리 바로가기" : "Management"}</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{navItems.slice(1).map((item) => <Link key={item.key} to={item.path} className="flex items-center justify-between border border-green-deep/10 p-4 text-sm font-bold text-navy hover:border-green-mid"><span>{ko ? item.ko : item.en}</span><ChevronRight size={16} className="text-green-mid"/></Link>)}</div></section></div>
          <div className="mt-6 border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900"><strong>{ko ? "현재 측정 범위" : "Current measurement"}</strong> · {ko ? "현재는 페이지 조회와 유입 도메인을 익명 집계합니다. 순방문자, 재방문율, 체류시간, 완독률은 방문자 식별을 최소화하는 방식으로 별도 계측을 설계한 뒤 추가하는 것이 안전합니다." : "The site currently aggregates page views and referrer domains anonymously. Unique visitors, return rate, dwell time and completion rate should be added with privacy-preserving measurement."}</div>
        </>}

        {section === "content" && <section className="mt-7"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "콘텐츠별 조회" : "Views by content"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "메뉴별로 펼쳐 보며 콘텐츠 성과를 비교합니다." : "Filter by section to compare content performance."}</p></div><div className="flex flex-wrap gap-2">{["all", "씨앗의 소리", "오늘의 뉴스", "씨앗브리핑", "씨앗언어", "기타"].map((cat) => <button key={cat} type="button" onClick={() => setContentCategory(cat)} className={`border px-3 py-2 text-xs font-bold ${contentCategory === cat ? "border-green-deep bg-green-deep text-white" : "border-green-deep/15 bg-white text-green-deep"}`}>{cat === "all" ? (ko ? "전체" : "All") : cat}</button>)}</div></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "메뉴" : "Section"}</th><th className="px-4 py-3">{ko ? "콘텐츠 경로" : "Content path"}</th><th className="px-4 py-3 text-right">{ko ? "조회" : "Views"}</th><th className="px-4 py-3">{ko ? "최근 조회" : "Last viewed"}</th></tr></thead><tbody>{filteredViews.map((item) => <tr key={item.page_path} className="border-t border-green-deep/10"><td className="whitespace-nowrap px-4 py-3 text-xs font-bold text-green-deep">{categoryLabel(item.page_path, ko)}</td><td className="px-4 py-3"><Link to={item.page_path} className="inline-flex items-center gap-1 font-semibold text-navy hover:underline">{item.page_path}<ExternalLink size={12}/></Link></td><td className="px-4 py-3 text-right font-bold text-navy">{Number(item.views).toLocaleString()}</td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/50">{formatDate(item.last_viewed_at)}</td></tr>)}</tbody></table></div></section>}

        {section === "traffic" && <section className="mt-7"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "최근 30일 유입 경로" : "Traffic sources · 30 days"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "검색, SNS, 외부 링크, 직접 방문을 referrer 도메인 기준으로 집계합니다." : "Traffic is grouped by referrer domain."}</p></div><div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]"><div className="overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "유입 도메인" : "Source"}</th><th className="px-4 py-3 text-right">{ko ? "조회" : "Views"}</th></tr></thead><tbody>{referrers.map((item) => <tr key={item.referrer_host} className="border-t border-green-deep/10"><td className="px-4 py-3 font-semibold text-navy">{item.referrer_host === "direct" ? (ko ? "직접 방문 / 출처 없음" : "Direct / unknown") : item.referrer_host}</td><td className="px-4 py-3 text-right font-bold text-green-deep">{Number(item.views).toLocaleString()}</td></tr>)}</tbody></table></div><div className="border border-green-deep/15 bg-white p-5"><BarChart3 className="text-green-mid" size={22}/><h3 className="editorial-title mt-4 text-xl font-bold text-navy">{ko ? "해석 기준" : "How to read"}</h3><p className="mt-3 text-sm leading-6 text-charcoal/60">{ko ? "직접 방문에는 주소 직접 입력, 북마크, 일부 앱·메신저처럼 referrer를 전달하지 않는 유입이 함께 포함됩니다. 따라서 이 수치는 정확한 개인 식별이 아니라 유입 채널의 방향을 보는 용도로 사용하는 것이 적절합니다." : "Direct traffic includes typed URLs, bookmarks and apps that do not pass referrer data. Use this as channel-level directional data, not user identification."}</p></div></div></section>}

        {section === "subscribers" && <section className="mt-7"><div className="flex items-end justify-between gap-4"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "이메일 구독자 명단" : "Email subscribers"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "회원 명단과 분리된 뉴스레터 수신 동의자 목록입니다." : "Newsletter consent list, separate from site membership."}</p></div><span className="inline-flex items-center gap-2 text-sm font-bold text-green-deep"><Mail size={16}/>{subscribers.length.toLocaleString()}{ko ? "명" : ""}</span></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "이메일" : "Email"}</th><th className="px-4 py-3">{ko ? "상태" : "Status"}</th><th className="px-4 py-3">{ko ? "가입 경로" : "Source"}</th><th className="px-4 py-3">{ko ? "신청일" : "Subscribed"}</th></tr></thead><tbody>{subscribers.map((item) => <tr key={item.email} className="border-t border-green-deep/10"><td className="px-4 py-3 font-semibold text-navy">{item.email}<p className="mt-1 text-[11px] text-charcoal/35">{item.language.toUpperCase()}</p></td><td className="px-4 py-3"><span className={`text-xs font-bold ${item.status === "active" ? "text-green-deep" : "text-charcoal/40"}`}>{item.status === "active" ? (ko ? "활성" : "Active") : (ko ? "해지" : "Unsubscribed")}</span></td><td className="px-4 py-3 text-xs text-charcoal/55">{item.source_path}</td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/55">{formatDate(item.consented_at)}</td></tr>)}</tbody></table></div></section>}

        {section === "members" && <section className="mt-7"><div className="flex items-end justify-between gap-4"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "회원 관리" : "Members"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "회원 인증과 콘텐츠 수신 동의 상태를 확인합니다." : "Review member verification and subscription consent."}</p></div><span className="inline-flex items-center gap-2 text-sm font-bold text-green-deep"><Users size={16}/>{members.length.toLocaleString()}{ko ? "명" : ""}</span></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "회원" : "Member"}</th><th className="px-4 py-3">{ko ? "연락처" : "Contact"}</th><th className="px-4 py-3">{ko ? "이메일 인증" : "Verification"}</th><th className="px-4 py-3">{ko ? "콘텐츠 수신" : "Content"}</th><th className="px-4 py-3">{ko ? "가입일" : "Joined"}</th></tr></thead><tbody>{members.map((item) => <tr key={item.user_id} className="border-t border-green-deep/10"><td className="px-4 py-3 font-bold text-navy">{item.nickname}</td><td className="px-4 py-3 text-xs text-charcoal/55">{item.email}{item.phone && <p className="mt-1">{item.phone}</p>}</td><td className="px-4 py-3"><span className={`text-xs font-bold ${item.email_confirmed_at ? "text-green-deep" : "text-amber-700"}`}>{item.email_confirmed_at ? (ko ? "인증 완료" : "Verified") : (ko ? "미인증" : "Unverified")}</span></td><td className="px-4 py-3 text-xs font-bold text-charcoal/55">{item.content_subscription_consent ? (ko ? "이메일 수신" : "Email") : (ko ? "미동의" : "No consent")}{item.social_preferences.length > 0 && <p className="mt-1 font-normal">{item.social_preferences.join(" · ")}</p>}</td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/55">{formatDate(item.created_at)}</td></tr>)}</tbody></table></div></section>}
      </div>
    </section>
  );
}
