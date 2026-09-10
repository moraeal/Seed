import { ChevronRight, Mail, RefreshCw, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { ContentViewStat, DailyViewStat, EngagementSummary, FunnelStat, getEngagementData, MemberRegistration, NewsletterSubscriber, TrafficSourceStat } from "../lib/engagement";

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
  const [traffic, setTraffic] = useState<TrafficSourceStat[]>([]);
  const [funnel, setFunnel] = useState<FunnelStat[]>([]);
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
      setTraffic(data.traffic);
      setFunnel(data.funnel);
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
  const funnelTotals = useMemo(() => Object.fromEntries(funnel.map((item) => [item.stage, Number(item.total)])), [funnel]);
  const returnRate = totals.unique_visitors_30d ? Math.round(((totals.returning_visitors_30d || 0) / totals.unique_visitors_30d) * 100) : 0;
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
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {[
              [ko ? "오늘 조회" : "Today", totals.page_views_today || 0],
              [ko ? "최근 30일" : "30 days", totals.page_views_30d || 0],
              [ko ? "30일 순방문자" : "30-day visitors", totals.unique_visitors_30d || 0],
              [ko ? "재방문율" : "Return rate", `${returnRate}%`],
              [ko ? "활성 구독자" : "Subscribers", totals.active_subscribers || 0],
              [ko ? "회원" : "Members", totals.member_count || members.length],
            ].map(([label, value]) => <article key={String(label)} className="border border-green-deep/15 bg-white p-5"><p className="text-xs font-bold text-charcoal/45">{label}</p><p className="editorial-title mt-2 text-3xl font-bold text-navy">{typeof value === "number" ? value.toLocaleString() : value}</p></article>)}
          </div>
          <section className="mt-7 border border-green-deep/15 bg-white p-5 sm:p-7"><div className="flex flex-wrap items-end justify-between gap-2"><div><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "최근 7일 조회 추이" : "Views over the last 7 days"}</h2><p className="mt-1 text-xs text-charcoal/45">{ko ? "한국 시간 기준 · 막대 위 조회수, 아래 순방문자" : "Korea time · views above, visitors below"}</p></div><Link to="/insights/content" className="inline-flex items-center gap-1 text-sm font-bold text-green-deep">{ko ? "콘텐츠별 보기" : "View content"}<ChevronRight size={15}/></Link></div><div className="mt-7 grid h-52 grid-cols-7 items-end gap-2 border-b border-green-deep/20 px-1 sm:gap-4">{dailyViews.map((item) => { const count = Number(item.views); return <div key={item.view_date} className="flex h-full min-w-0 flex-col items-center justify-end"><span className="mb-2 text-xs font-bold text-navy">{count.toLocaleString()}</span><div className="w-full max-w-12 bg-green-mid" style={{ height: `${Math.max(count > 0 ? 8 : 2, (count / maxDailyViews) * 130)}px` }}/><span className="mt-1 text-[10px] font-bold text-green-deep">{Number(item.visitors).toLocaleString()}</span><span className="mt-1 whitespace-nowrap text-[10px] font-semibold text-charcoal/55 sm:text-xs">{formatChartDate(item.view_date)}</span></div>; })}</div></section>
          <section className="mt-7 border border-green-deep/15 bg-white p-5 sm:p-6"><div><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "최근 30일 독자 행동" : "Reader actions · 30 days"}</h2><p className="mt-1 text-xs text-charcoal/45">{ko ? "새 계측 시작 이후의 익명 행동만 포함합니다." : "Includes anonymous actions recorded after the new measurement began."}</p></div><div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">{[["page_view", ko ? "조회" : "Views"], ["engaged_30s", ko ? "30초 읽기" : "30 sec"], ["scroll_50", ko ? "50% 도달" : "50% scroll"], ["scroll_90", ko ? "90% 도달" : "90% scroll"], ["share_click", ko ? "공유" : "Shares"], ["newsletter_signup", ko ? "구독 전환" : "Signups"]].map(([stage, label]) => <div key={stage} className="border-l-2 border-green-mid bg-[#F1F2EC] px-4 py-3"><p className="text-[11px] font-bold text-charcoal/45">{label}</p><p className="mt-1 text-xl font-bold text-navy">{Number(funnelTotals[stage] || 0).toLocaleString()}</p></div>)}</div></section>
          <div className="mt-7 grid gap-6 xl:grid-cols-2"><section className="border border-green-deep/15 bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "상위 콘텐츠" : "Top content"}</h2><Link to="/insights/content" className="text-xs font-bold text-green-deep">{ko ? "전체 보기" : "All"}</Link></div><div className="mt-4 divide-y divide-green-deep/10">{topViews.map((item) => <div key={item.page_path} className="flex items-center justify-between gap-4 py-3"><div className="min-w-0"><p className="truncate text-sm font-bold text-navy">{item.page_path}</p><p className="mt-1 text-[11px] text-charcoal/40">{categoryLabel(item.page_path, ko)}</p></div><span className="text-sm font-bold text-green-deep">{Number(item.views).toLocaleString()}</span></div>)}</div></section><section className="border border-green-deep/15 bg-white p-5 sm:p-6"><h2 className="editorial-title text-xl font-bold text-navy">{ko ? "관리 바로가기" : "Management"}</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{navItems.slice(1).map((item) => <Link key={item.key} to={item.path} className="flex items-center justify-between border border-green-deep/10 p-4 text-sm font-bold text-navy hover:border-green-mid"><span>{ko ? item.ko : item.en}</span><ChevronRight size={16} className="text-green-mid"/></Link>)}</div></section></div>
          <div className="mt-6 border border-green-deep/15 bg-[#E8EFE9] px-5 py-4 text-sm leading-6 text-green-deep"><strong>{ko ? "측정 원칙" : "Measurement principle"}</strong> · {ko ? "대표 계정과 운영 화면은 집계에서 제외합니다. 개인정보·원본 IP·기기 정보는 저장하지 않고, 90일마다 바뀌는 익명 방문 식별자만 사용합니다." : "Owner traffic and private screens are excluded. No personal data, raw IP address or device data is stored; only a rotating 90-day anonymous visitor ID is used."}</div>
        </>}

        {section === "content" && <section className="mt-7"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "콘텐츠별 성과" : "Content performance"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "조회수와 새 계측 이후의 순방문·30초 읽기를 함께 비교합니다." : "Compare views with unique visitors and 30-second reads recorded under the new measurement."}</p></div><div className="flex flex-wrap gap-2">{["all", "씨앗의 소리", "오늘의 뉴스", "씨앗브리핑", "씨앗언어", "기타"].map((cat) => <button key={cat} type="button" onClick={() => setContentCategory(cat)} className={`border px-3 py-2 text-xs font-bold ${contentCategory === cat ? "border-green-deep bg-green-deep text-white" : "border-green-deep/15 bg-white text-green-deep"}`}>{cat === "all" ? (ko ? "전체" : "All") : cat}</button>)}</div></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "메뉴" : "Section"}</th><th className="px-4 py-3">{ko ? "콘텐츠 경로" : "Content path"}</th><th className="px-4 py-3 text-right">{ko ? "조회" : "Views"}</th><th className="px-4 py-3 text-right">{ko ? "순방문" : "Visitors"}</th><th className="px-4 py-3 text-right">{ko ? "30초 읽기" : "30-sec reads"}</th><th className="px-4 py-3">{ko ? "최근 조회" : "Last viewed"}</th></tr></thead><tbody>{filteredViews.map((item) => <tr key={item.page_path} className="border-t border-green-deep/10"><td className="whitespace-nowrap px-4 py-3 text-xs font-bold text-green-deep">{categoryLabel(item.page_path, ko)}</td><td className="px-4 py-3"><Link to={item.page_path} className="font-semibold text-navy hover:underline">{item.page_path}</Link></td><td className="px-4 py-3 text-right font-bold text-navy">{Number(item.views).toLocaleString()}</td><td className="px-4 py-3 text-right font-bold text-green-deep">{Number(item.unique_visitors).toLocaleString()}</td><td className="px-4 py-3 text-right font-bold text-green-deep">{Number(item.engaged_sessions).toLocaleString()}</td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/55">{formatDate(item.last_viewed_at)}</td></tr>)}</tbody></table>{!loading && filteredViews.length === 0 && <p className="px-4 py-8 text-center text-sm text-charcoal/45">{ko ? "조회 기록이 없습니다." : "No page views yet."}</p>}</div></section>}

        {section === "traffic" && <section className="mt-7"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "최근 30일 유입 경로" : "Traffic sources · 30 days"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "UTM이 있으면 캠페인을 우선 표시하고, 없으면 유입 도메인으로 구분합니다." : "Campaign tags take priority; otherwise traffic is grouped by referring domain."}</p></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "유입 경로" : "Source"}</th><th className="px-4 py-3">{ko ? "매체" : "Medium"}</th><th className="px-4 py-3">{ko ? "캠페인" : "Campaign"}</th><th className="px-4 py-3 text-right">{ko ? "조회" : "Views"}</th><th className="px-4 py-3 text-right">{ko ? "순방문" : "Visitors"}</th></tr></thead><tbody>{traffic.map((item) => <tr key={`${item.source}|${item.medium}|${item.campaign}`} className="border-t border-green-deep/10"><td className="px-4 py-3 font-semibold text-navy">{item.source === "direct" ? (ko ? "직접 방문 / 앱·메신저" : "Direct / apps") : item.source}</td><td className="px-4 py-3 text-xs text-charcoal/55">{item.medium || "—"}</td><td className="px-4 py-3 text-xs text-charcoal/55">{item.campaign || "—"}</td><td className="px-4 py-3 text-right font-bold text-green-deep">{Number(item.views).toLocaleString()}</td><td className="px-4 py-3 text-right font-bold text-green-deep">{Number(item.visitors).toLocaleString()}</td></tr>)}</tbody></table>{!loading && traffic.length === 0 && <p className="px-4 py-8 text-center text-sm text-charcoal/45">{ko ? "유입 기록이 없습니다." : "No traffic data yet."}</p>}</div></section>}

        {section === "subscribers" && <section className="mt-7"><div className="flex items-end justify-between gap-3"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "이메일 구독자" : "Email subscribers"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "회원과 분리해 뉴스레터 수신 명단을 관리합니다." : "Manage newsletter recipients separately from members."}</p></div><span className="inline-flex items-center gap-1.5 text-sm font-bold text-green-deep"><Mail size={16}/>{subscribers.filter((item) => item.status === "active").length.toLocaleString()}</span></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "이메일" : "Email"}</th><th className="px-4 py-3">{ko ? "상태" : "Status"}</th><th className="px-4 py-3">{ko ? "가입 경로" : "Source"}</th><th className="px-4 py-3">{ko ? "신청일" : "Subscribed"}</th></tr></thead><tbody>{subscribers.map((item) => <tr key={item.email} className="border-t border-green-deep/10"><td className="px-4 py-3 font-semibold text-navy">{item.email}</td><td className={`px-4 py-3 text-xs font-bold ${item.status === "active" ? "text-green-deep" : "text-charcoal/40"}`}>{item.status === "active" ? (ko ? "활성" : "Active") : (ko ? "해지" : "Unsubscribed")}</td><td className="px-4 py-3 text-xs text-charcoal/55">{item.source_path}</td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/55">{formatDate(item.consented_at)}</td></tr>)}</tbody></table>{!loading && subscribers.length === 0 && <p className="px-4 py-8 text-center text-sm text-charcoal/45">{ko ? "아직 구독 신청이 없습니다." : "No subscription requests yet."}</p>}</div></section>}

        {section === "members" && <section className="mt-7"><div className="flex items-end justify-between gap-3"><div><h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "회원 관리" : "Members"}</h2><p className="mt-1 text-sm text-charcoal/50">{ko ? "회원가입·인증·콘텐츠 수신 상태를 확인합니다." : "Review registration, verification and content subscription status."}</p></div><span className="inline-flex items-center gap-1.5 text-sm font-bold text-green-deep"><Users size={16}/>{members.length.toLocaleString()}</span></div><div className="mt-5 overflow-x-auto border-t-2 border-navy bg-white"><table className="w-full text-left text-sm"><thead className="bg-[#F1F2EC] text-xs text-charcoal/50"><tr><th className="px-4 py-3">{ko ? "회원" : "Member"}</th><th className="px-4 py-3">{ko ? "연락처" : "Contact"}</th><th className="px-4 py-3">{ko ? "이메일 인증" : "Verified"}</th><th className="px-4 py-3">{ko ? "콘텐츠 수신" : "Subscription"}</th><th className="px-4 py-3">{ko ? "가입일" : "Joined"}</th></tr></thead><tbody>{members.map((item) => <tr key={item.user_id} className="border-t border-green-deep/10"><td className="px-4 py-3 font-semibold text-navy">{item.nickname}</td><td className="px-4 py-3 text-xs text-charcoal/55"><p>{item.email}</p>{item.phone && <p className="mt-1">{item.phone}</p>}</td><td className={`px-4 py-3 text-xs font-bold ${item.email_confirmed_at ? "text-green-deep" : "text-amber-700"}`}>{item.email_confirmed_at ? (ko ? "완료" : "Verified") : (ko ? "미인증" : "Unverified")}</td><td className={`px-4 py-3 text-xs font-bold ${item.content_subscription_consent ? "text-green-deep" : "text-charcoal/35"}`}>{item.content_subscription_consent ? (ko ? "수신" : "Subscribed") : (ko ? "미수신" : "No")}</td><td className="whitespace-nowrap px-4 py-3 text-xs text-charcoal/55">{formatDate(item.created_at)}</td></tr>)}</tbody></table>{!loading && members.length === 0 && <p className="px-4 py-8 text-center text-sm text-charcoal/45">{ko ? "회원가입 기록이 없습니다." : "No registered members yet."}</p>}</div></section>}
      </div>
    </section>
  );
}
