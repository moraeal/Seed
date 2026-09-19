import type { AuthSession } from "../auth";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export type ArticleDraftStatus = "draft" | "submitted" | "changes_requested" | "approved" | "published";
export type ArticleDraftType = "column" | "briefing" | "civic_language" | "monitoring" | "other";

export type ArticleDraft = {
  id: string;
  author_id: string;
  title: string;
  content_type: ArticleDraftType;
  source_text: string;
  editor_notes: string;
  ai_instructions: string;
  status: ArticleDraftStatus;
  attachment_name: string | null;
  attachment_type: string | null;
  attachment_path: string | null;
  created_at: string;
  updated_at: string;
  submitted_at: string | null;
};

const headers = (session: AuthSession, extra: Record<string, string> = {}) => ({
  apikey: supabaseKey,
  Authorization: `Bearer ${session.access_token}`,
  ...extra,
});

async function readError(response: Response, fallback: string) {
  try {
    const payload = await response.json();
    return payload.message || payload.error_description || payload.error || fallback;
  } catch {
    return fallback;
  }
}

export async function listArticleDrafts(session: AuthSession) {
  const response = await fetch(`${supabaseUrl}/rest/v1/article_drafts?select=*&order=updated_at.desc`, {
    headers: headers(session),
  });
  if (!response.ok) throw new Error(await readError(response, "원고 목록을 불러오지 못했습니다."));
  return response.json() as Promise<ArticleDraft[]>;
}

export async function saveArticleDraft(
  session: AuthSession,
  draft: Pick<ArticleDraft, "id" | "author_id" | "title" | "content_type" | "source_text" | "editor_notes" | "ai_instructions" | "status" | "attachment_name" | "attachment_type" | "attachment_path">,
) {
  const response = await fetch(`${supabaseUrl}/rest/v1/article_drafts?on_conflict=id`, {
    method: "POST",
    headers: headers(session, {
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=representation",
    }),
    body: JSON.stringify(draft),
  });
  if (!response.ok) throw new Error(await readError(response, "원고를 저장하지 못했습니다."));
  const rows = await response.json() as ArticleDraft[];
  return rows[0];
}

function safeFileName(name: string) {
  const extension = name.includes(".") ? `.${name.split(".").pop()?.replace(/[^a-zA-Z0-9]/g, "").slice(0, 12)}` : "";
  const stem = name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9가-힣_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80) || "source";
  return `${stem}${extension}`;
}

export async function uploadDraftAttachment(session: AuthSession, userId: string, draftId: string, file: File) {
  const filePath = `${userId}/${draftId}/${Date.now()}-${safeFileName(file.name)}`;
  const response = await fetch(`${supabaseUrl}/storage/v1/object/author-drafts/${encodeURIComponent(filePath).replace(/%2F/g, "/")}`, {
    method: "POST",
    headers: headers(session, {
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false",
    }),
    body: file,
  });
  if (!response.ok) throw new Error(await readError(response, "첨부파일을 올리지 못했습니다."));
  return { path: filePath, name: file.name, type: file.type || "application/octet-stream" };
}
