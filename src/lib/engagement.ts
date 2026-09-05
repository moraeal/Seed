import type { AuthSession } from "../auth";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

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

export async function subscribeToNewsletter(email: string, language: "ko" | "en", sourcePath: string) {
  await callRpc<void>("subscribe_newsletter", { p_email: email, p_language: language, p_source_path: sourcePath });
}

export async function recordContentView(path: string, language: "ko" | "en") {
  let referrerHost: string | null = null;
  try {
    if (document.referrer) referrerHost = new URL(document.referrer).hostname;
  } catch {
    referrerHost = null;
  }
  await callRpc<void>("record_content_view", { p_path: path, p_language: language, p_referrer_host: referrerHost });
}

export type EngagementSummary = { metric: "active_subscribers" | "all_page_views" | "page_views_7d"; value: number };
export type DailyViewStat = { view_date: string; views: number };
export type ContentViewStat = { page_path: string; views: number; last_viewed_at: string };
export type NewsletterSubscriber = { email: string; language: "ko" | "en"; source_path: string; status: "active" | "unsubscribed"; consented_at: string };

export async function getEngagementData(session: AuthSession) {
  const token = session.access_token;
  const [summary, dailyViews, views, subscribers] = await Promise.all([
    callRpc<EngagementSummary[]>("get_engagement_summary", {}, token),
    callRpc<DailyViewStat[]>("get_daily_view_stats", {}, token),
    callRpc<ContentViewStat[]>("get_content_view_stats", {}, token),
    callRpc<NewsletterSubscriber[]>("get_newsletter_subscribers", {}, token),
  ]);
  return { summary, dailyViews, views, subscribers };
}
