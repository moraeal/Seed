import type { AuthSession } from "../auth";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export type TaxWatchDecision = "notice_only" | "commentary_draft" | "ignored" | "error";

export type TaxWatchSettings = {
  enabled: boolean;
  commentary_threshold: number;
  last_checked_at: string | null;
};

export type TaxWatchItem = {
  id: string;
  issue_key: string;
  source_title: string;
  source_url: string;
  source_name: string;
  source_kind: "official" | "media";
  published_at: string | null;
  checked_at: string;
  issue_title_ko: string;
  summary_ko: string;
  relevance_score: number;
  editorial_decision: TaxWatchDecision;
  relevance_reason_ko: string;
  topics: string[];
  evidence_gaps_ko: string[];
  article_draft_id: string | null;
  processing_error: string | null;
};

export type TaxWatchRun = {
  id: string;
  started_at: string;
  finished_at: string | null;
  status: "running" | "success" | "partial" | "error";
  fetched_count: number;
  new_count: number;
  notice_count: number;
  commentary_count: number;
  ignored_count: number;
  error_message: string | null;
};

const headers = (session: AuthSession, prefer?: string) => ({
  apikey: supabaseKey,
  Authorization: `Bearer ${session.access_token}`,
  "Content-Type": "application/json",
  ...(prefer ? { Prefer: prefer } : {}),
});

async function readResponse<T>(response: Response): Promise<T> {
  if (!response.ok) throw new Error(`Tax-watch request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export async function getTaxWatchAdminData(session: AuthSession) {
  const [settingsResponse, itemsResponse, runsResponse] = await Promise.all([
    fetch(`${supabaseUrl}/rest/v1/tax_watch_settings?singleton=eq.true&select=enabled,commentary_threshold,last_checked_at&limit=1`, { headers: headers(session) }),
    fetch(`${supabaseUrl}/rest/v1/tax_watch_items?select=id,issue_key,source_title,source_url,source_name,source_kind,published_at,checked_at,issue_title_ko,summary_ko,relevance_score,editorial_decision,relevance_reason_ko,topics,evidence_gaps_ko,article_draft_id,processing_error&order=checked_at.desc,relevance_score.desc&limit=300`, { headers: headers(session) }),
    fetch(`${supabaseUrl}/rest/v1/tax_watch_sync_runs?select=id,started_at,finished_at,status,fetched_count,new_count,notice_count,commentary_count,ignored_count,error_message&order=started_at.desc&limit=20`, { headers: headers(session) }),
  ]);
  const settings = await readResponse<TaxWatchSettings[]>(settingsResponse);
  return {
    settings: settings[0] ?? null,
    items: await readResponse<TaxWatchItem[]>(itemsResponse),
    runs: await readResponse<TaxWatchRun[]>(runsResponse),
  };
}

export async function updateTaxWatchSettings(session: AuthSession, patch: Pick<TaxWatchSettings, "enabled" | "commentary_threshold">) {
  const response = await fetch(`${supabaseUrl}/rest/v1/tax_watch_settings?singleton=eq.true`, {
    method: "PATCH",
    headers: headers(session, "return=representation"),
    body: JSON.stringify({ ...patch, updated_at: new Date().toISOString() }),
  });
  const rows = await readResponse<TaxWatchSettings[]>(response);
  return rows[0];
}
