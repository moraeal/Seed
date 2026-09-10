import type { AuthSession } from "../auth";
import { getTurnstileToken } from "./turnstile";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

const VISITOR_STORAGE_KEY = "seed-analytics-visitor-v1";
const SESSION_STORAGE_KEY = "seed-analytics-session-v1";
const VISITOR_TTL_MS = 90 * 24 * 60 * 60 * 1000;
const SESSION_TTL_MS = 30 * 60 * 1000;

type Campaign = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
};

type VisitorRecord = { id: string; expiresAt: number };
type SessionRecord = Campaign & { id: string; lastSeenAt: number; entryPath: string };
export type AnalyticsEvent = "engaged_30s" | "scroll_50" | "scroll_90" | "share_click" | "newsletter_signup";
let memoryVisitor: VisitorRecord | null = null;
let memorySession: SessionRecord | null = null;
let analyticsExcluded = false;

export function setAnalyticsOwnerExclusion(excluded: boolean) {
  analyticsExcluded = excluded;
}

const rpcHeaders = (token?: string) => ({
  apikey: supabaseKey,
  Authorization: `Bearer ${token || supabaseKey}`,
  "Content-Type": "application/json",
});

async function callRpc<T>(name: string, body: Record<string, unknown>, token?: string): Promise<T> {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: rpcHeaders(token),
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`RPC ${name} failed (${response.status})`);
  if (response.status === 204) return undefined as T;
  const responseText = await response.text();
  return (responseText ? JSON.parse(responseText) : undefined) as T;
}

function safeUuid() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
        const random = Math.floor(Math.random() * 16);
        return (character === "x" ? random : (random & 0x3) | 0x8).toString(16);
      });
}

export function normalizeAnalyticsPath(path: string) {
  const normalized = `/${path}`.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  return normalized || "/";
}

function readCampaign(): Campaign {
  const params = new URLSearchParams(window.location.search);
  const read = (name: string) => params.get(name)?.trim().slice(0, 120) || null;
  return {
    source: read("utm_source"),
    medium: read("utm_medium"),
    campaign: read("utm_campaign"),
    content: read("utm_content"),
  };
}

function getVisitorId() {
  const now = Date.now();
  try {
    const stored = JSON.parse(localStorage.getItem(VISITOR_STORAGE_KEY) || "null") as VisitorRecord | null;
    if (stored?.id && stored.expiresAt > now) return stored.id;
    const next = { id: safeUuid(), expiresAt: now + VISITOR_TTL_MS };
    localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(next));
    return next.id;
  } catch {
    if (!memoryVisitor || memoryVisitor.expiresAt <= now) {
      memoryVisitor = { id: safeUuid(), expiresAt: now + VISITOR_TTL_MS };
    }
    return memoryVisitor.id;
  }
}

function getSession(path: string) {
  const now = Date.now();
  try {
    const stored = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || "null") as SessionRecord | null;
    if (stored?.id && now - stored.lastSeenAt < SESSION_TTL_MS) {
      const refreshed = { ...stored, lastSeenAt: now };
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(refreshed));
      return refreshed;
    }
    const next: SessionRecord = { id: safeUuid(), lastSeenAt: now, entryPath: path, ...readCampaign() };
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(next));
    return next;
  } catch {
    if (!memorySession || now - memorySession.lastSeenAt >= SESSION_TTL_MS) {
      memorySession = { id: safeUuid(), lastSeenAt: now, entryPath: path, ...readCampaign() };
    } else {
      memorySession.lastSeenAt = now;
    }
    return memorySession;
  }
}

function analyticsContext(path: string) {
  const pagePath = normalizeAnalyticsPath(path);
  const session = getSession(pagePath);
  return { pagePath, visitorId: getVisitorId(), session };
}

function referrerHost() {
  try {
    return document.referrer ? new URL(document.referrer).hostname : null;
  } catch {
    return null;
  }
}

export async function subscribeToNewsletter(email: string, language: "ko" | "en", sourcePath: string) {
  let captchaToken: string | null = null;
  try {
    captchaToken = await getTurnstileToken("newsletter");
  } catch {
    throw new Error(language === "ko"
      ? "보안 확인에 실패했습니다. 잠시 후 다시 시도해주세요."
      : "Security verification failed. Please try again.");
  }

  if (!captchaToken) {
    await callRpc<void>("subscribe_newsletter", { p_email: email, p_language: language, p_source_path: sourcePath });
  } else {
    const response = await fetch(`${supabaseUrl}/functions/v1/newsletter-turnstile`, {
      method: "POST",
      headers: rpcHeaders(),
      body: JSON.stringify({ token: captchaToken, email, language, sourcePath }),
    });
    if (!response.ok) throw new Error(`Newsletter verification failed (${response.status})`);
  }

  void recordAnalyticsEvent("newsletter_signup", sourcePath, language).catch(() => {
    // Conversion measurement must never change the signup result.
  });
}

export async function recordContentView(path: string, language: "ko" | "en") {
  if (analyticsExcluded) return;
  const { pagePath, visitorId, session } = analyticsContext(path);
  await callRpc<void>("record_content_view_v2", {
    p_path: pagePath,
    p_language: language,
    p_referrer_host: referrerHost(),
    p_visitor_id: visitorId,
    p_session_id: session.id,
    p_entry_path: session.entryPath,
    p_utm_source: session.source,
    p_utm_medium: session.medium,
    p_utm_campaign: session.campaign,
    p_utm_content: session.content,
  });
}

export async function recordAnalyticsEvent(eventType: AnalyticsEvent, path: string, language: "ko" | "en") {
  if (analyticsExcluded) return;
  const { pagePath, visitorId, session } = analyticsContext(path);
  await callRpc<void>("record_content_event", {
    p_event_type: eventType,
    p_path: pagePath,
    p_language: language,
    p_visitor_id: visitorId,
    p_session_id: session.id,
  });
}

export function beginContentEngagement(path: string, language: "ko" | "en") {
  const sent = new Set<AnalyticsEvent>();
  let visibleSeconds = 0;

  const send = (event: AnalyticsEvent) => {
    if (sent.has(event)) return;
    sent.add(event);
    void recordAnalyticsEvent(event, path, language).catch(() => {
      sent.delete(event);
    });
  };

  const timer = window.setInterval(() => {
    if (document.visibilityState !== "visible") return;
    visibleSeconds += 1;
    if (visibleSeconds >= 30) send("engaged_30s");
  }, 1000);

  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const progress = window.scrollY / scrollable;
    if (progress >= 0.5) send("scroll_50");
    if (progress >= 0.9) send("scroll_90");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return () => {
    window.clearInterval(timer);
    window.removeEventListener("scroll", onScroll);
  };
}

export type EngagementSummary = {
  metric: "active_subscribers" | "all_page_views" | "page_views_today" | "page_views_7d" | "page_views_30d" | "member_count" | "unique_visitors_30d" | "returning_visitors_30d" | "engaged_sessions_30d";
  value: number;
};
export type DailyViewStat = { view_date: string; views: number; visitors: number };
export type ContentViewStat = { page_path: string; views: number; unique_visitors: number; engaged_sessions: number; last_viewed_at: string };
export type TrafficSourceStat = { source: string; medium: string; campaign: string; views: number; visitors: number };
export type FunnelStat = { stage: "page_view" | AnalyticsEvent; total: number };
export type NewsletterSubscriber = { email: string; language: "ko" | "en"; source_path: string; status: "active" | "unsubscribed"; consented_at: string };
export type MemberRegistration = {
  user_id: string;
  email: string;
  nickname: string;
  phone: string | null;
  content_subscription_consent: boolean;
  social_preferences: string[];
  created_at: string;
  email_confirmed_at: string | null;
};

export async function getEngagementData(session: AuthSession) {
  const token = session.access_token;
  const [summary, dailyViews, views, traffic, funnel, members, subscribers] = await Promise.all([
    callRpc<EngagementSummary[]>("get_engagement_summary", {}, token),
    callRpc<DailyViewStat[]>("get_daily_view_stats", {}, token),
    callRpc<ContentViewStat[]>("get_content_view_stats", {}, token),
    callRpc<TrafficSourceStat[]>("get_traffic_source_stats", {}, token),
    callRpc<FunnelStat[]>("get_engagement_funnel", {}, token),
    callRpc<MemberRegistration[]>("get_member_registrations", {}, token),
    callRpc<NewsletterSubscriber[]>("get_newsletter_subscribers", {}, token),
  ]);
  return { summary, dailyViews, views, traffic, funnel, members, subscribers };
}
