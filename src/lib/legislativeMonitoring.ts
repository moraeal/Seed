import type { AuthSession } from "../auth";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export type LegislativeReviewState = "collected" | "queued" | "analyzing" | "review" | "published" | "held" | "excluded" | "error";

export type LegislativeAnalysis = {
  title_en?: string;
  official_rationale_en?: string;
  summary_ko?: string;
  summary_en?: string;
  changes_ko?: string[];
  changes_en?: string[];
  positive_effects_ko?: string[];
  positive_effects_en?: string[];
  risks_ko?: string[];
  risks_en?: string[];
  citizen_impact_ko?: string[];
  citizen_impact_en?: string[];
  business_impact_ko?: string[];
  business_impact_en?: string[];
  authority_shift_ko?: string[];
  authority_shift_en?: string[];
  watch_points_ko?: string[];
  watch_points_en?: string[];
  evidence_gaps_ko?: string[];
  evidence_gaps_en?: string[];
  confidence?: "low" | "medium" | "high";
};

export type LegislativeBill = {
  bill_id: string;
  bill_no: string | null;
  assembly_age: number;
  slug: string;
  title: string;
  proposer: string | null;
  representative_proposer: string | null;
  co_proposers: string[];
  proposer_kind: string | null;
  proposed_date: string | null;
  committee: string | null;
  bill_kind: string | null;
  source_status: string | null;
  processing_result: string | null;
  official_summary: string | null;
  proposal_reason: string | null;
  main_content: string | null;
  detail_url: string | null;
  full_text_url: string | null;
  importance_score: number;
  importance_level: "unrated" | "low" | "medium" | "high" | "critical";
  review_state: LegislativeReviewState;
  analysis: LegislativeAnalysis;
  analysis_model: string | null;
  analysis_generated_at: string | null;
  analysis_error: string | null;
  published_at: string | null;
  current_stage: string;
  is_featured: boolean;
  featured_order: number | null;
  featured_reason_ko: string | null;
  featured_reason_en: string | null;
  observation_keywords: string[];
  public_summary_ko: string | null;
  public_summary_en: string | null;
  seed_view_ko: string | null;
  seed_view_en: string | null;
  related_content: LegislativeRelatedContent[];
  allow_bookmark: boolean;
  notification_status: "disabled" | "available" | "active";
  important_change_status: "none" | "draft" | "approved";
  important_change_note_ko: string | null;
  important_change_note_en: string | null;
  editorial_updated_at: string | null;
  source_checked_at: string;
  last_source_update: string | null;
  created_at: string;
  updated_at: string;
};

export type LegislativeRelatedContent = {
  title: string;
  url: string;
  category?: string;
};

export type LegislativeEditorialPatch = {
  current_stage: string;
  is_featured: boolean;
  featured_order: number | null;
  featured_reason_ko: string | null;
  featured_reason_en: string | null;
  observation_keywords: string[];
  public_summary_ko: string | null;
  public_summary_en: string | null;
  seed_view_ko: string | null;
  seed_view_en: string | null;
  allow_bookmark: boolean;
  notification_status: "disabled" | "available" | "active";
};

export type LegislativeBillEvent = {
  id: string;
  bill_id: string;
  event_key: string;
  event_type: string;
  event_date: string | null;
  title: string;
  description: string | null;
  source_url: string | null;
  created_at: string;
};

export type LegislativeSyncRun = {
  id: string;
  started_at: string;
  finished_at: string | null;
  status: "running" | "success" | "partial" | "error";
  fetched_count: number;
  inserted_count: number;
  queued_count: number;
  error_message: string | null;
};

const headers = (session?: AuthSession | null) => ({
  apikey: supabaseKey,
  Authorization: `Bearer ${session?.access_token || supabaseKey}`,
  "Content-Type": "application/json",
});

async function readResponse<T>(response: Response): Promise<T> {
  if (!response.ok) throw new Error(`Legislative monitoring request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export async function getPublishedLegislativeBills(limit = 100) {
  const fields = "bill_id,bill_no,assembly_age,slug,title,proposer,representative_proposer,co_proposers,proposer_kind,proposed_date,committee,bill_kind,source_status,processing_result,official_summary,proposal_reason,main_content,detail_url,full_text_url,importance_score,importance_level,review_state,analysis,analysis_model,analysis_generated_at,analysis_error,published_at,current_stage,is_featured,featured_order,featured_reason_ko,featured_reason_en,observation_keywords,public_summary_ko,public_summary_en,seed_view_ko,seed_view_en,related_content,allow_bookmark,notification_status,important_change_status,important_change_note_ko,important_change_note_en,editorial_updated_at,source_checked_at,last_source_update,created_at,updated_at";
  const response = await fetch(`${supabaseUrl}/rest/v1/legislative_bills?select=${fields}&order=proposed_date.desc.nullslast,published_at.desc&limit=${limit}`, { headers: headers() });
  return readResponse<LegislativeBill[]>(response);
}

export async function getLegislativeBillBySlug(slug: string, session?: AuthSession | null) {
  const response = await fetch(`${supabaseUrl}/rest/v1/legislative_bills?slug=eq.${encodeURIComponent(slug)}&select=*&limit=1`, { headers: headers(session) });
  const rows = await readResponse<LegislativeBill[]>(response);
  return rows[0] ?? null;
}

export async function getLegislativeBillEvents(billId: string, session?: AuthSession | null) {
  const response = await fetch(`${supabaseUrl}/rest/v1/legislative_bill_events?bill_id=eq.${encodeURIComponent(billId)}&select=id,bill_id,event_key,event_type,event_date,title,description,source_url,created_at&order=event_date.desc.nullslast,created_at.desc`, { headers: headers(session) });
  return readResponse<LegislativeBillEvent[]>(response);
}

export async function getLegislativeAdminData(session: AuthSession) {
  const [billsResponse, runsResponse] = await Promise.all([
    fetch(`${supabaseUrl}/rest/v1/legislative_bills?select=*&order=proposed_date.desc.nullslast,importance_score.desc&limit=300`, { headers: headers(session) }),
    fetch(`${supabaseUrl}/rest/v1/legislative_sync_runs?select=id,started_at,finished_at,status,fetched_count,inserted_count,queued_count,error_message&order=started_at.desc&limit=10`, { headers: headers(session) }),
  ]);
  return {
    bills: await readResponse<LegislativeBill[]>(billsResponse),
    runs: await readResponse<LegislativeSyncRun[]>(runsResponse),
  };
}

export async function setLegislativeReviewState(session: AuthSession, billId: string, reviewState: LegislativeReviewState) {
  const publishedAt = reviewState === "published" ? new Date().toISOString() : null;
  const response = await fetch(`${supabaseUrl}/rest/v1/legislative_bills?bill_id=eq.${encodeURIComponent(billId)}`, {
    method: "PATCH",
    headers: { ...headers(session), Prefer: "return=representation" },
    body: JSON.stringify({ review_state: reviewState, published_at: publishedAt, updated_at: new Date().toISOString() }),
  });
  const rows = await readResponse<LegislativeBill[]>(response);
  return rows[0];
}

export async function updateLegislativeEditorial(session: AuthSession, billId: string, patch: LegislativeEditorialPatch) {
  const response = await fetch(`${supabaseUrl}/rest/v1/legislative_bills?bill_id=eq.${encodeURIComponent(billId)}`, {
    method: "PATCH",
    headers: { ...headers(session), Prefer: "return=representation" },
    body: JSON.stringify({ ...patch, editorial_updated_at: new Date().toISOString(), updated_at: new Date().toISOString() }),
  });
  const rows = await readResponse<LegislativeBill[]>(response);
  return rows[0];
}
