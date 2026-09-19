import type { AuthSession } from "../auth";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export type ArticleDraftStatus = "draft" | "submitted" | "in_review" | "changes_requested" | "approved" | "published";
export type ArticleDraftType = "column" | "briefing" | "civic_language" | "monitoring" | "other";

export type ArticleDraft = {
  id: string;
  author_id: string;
  title: string;
  content_type: ArticleDraftType;
  source_text: string;
  editor_notes: string;
  ai_instructions: string;
  edited_text: string;
  editor_feedback: string;
  page_subtitle: string;
  page_summary: string;
  page_byline: string;
  page_slug: string | null;
  page_hero_image_url: string;
  status: ArticleDraftStatus;
  attachment_name: string | null;
  attachment_type: string | null;
  attachment_path: string | null;
  created_at: string;
  updated_at: string;
  submitted_at: string | null;
  reviewer_id: string | null;
  reviewed_at: string | null;
  published_at: string | null;
};

export type PublishedContribution = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  byline: string;
  content_type: ArticleDraftType;
  body: string;
  hero_image_url: string;
  published_at: string;
  updated_at: string;
};

export type PublishedContributionListItem = Omit<PublishedContribution, "id" | "body" | "updated_at">;

const headers = (session: AuthSession, extra: Record<string, string> = {}) => ({
  apikey: supabaseKey,
  Authorization: `Bearer ${session.access_token}`,
  ...extra,
});

const publicHeaders = (extra: Record<string, string> = {}) => ({
  apikey: supabaseKey,
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

export async function getArticleDraft(session: AuthSession, draftId: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/article_drafts?id=eq.${encodeURIComponent(draftId)}&select=*&limit=1`, {
    headers: headers(session),
  });
  if (!response.ok) throw new Error(await readError(response, "원고를 불러오지 못했습니다."));
  const rows = await response.json() as ArticleDraft[];
  if (!rows[0]) throw new Error("원고를 찾지 못했거나 열람 권한이 없습니다.");
  return rows[0];
}

export async function saveArticleDraft(
  session: AuthSession,
  draft: Pick<ArticleDraft, "id" | "author_id" | "title" | "content_type" | "source_text" | "editor_notes" | "ai_instructions" | "page_subtitle" | "page_summary" | "page_byline" | "status" | "attachment_name" | "attachment_type" | "attachment_path">,
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

export async function updateArticleDraftReview(
  session: AuthSession,
  draftId: string,
  updates: Pick<ArticleDraft, "title" | "content_type" | "edited_text" | "editor_feedback" | "page_subtitle" | "page_summary" | "page_byline" | "page_slug" | "page_hero_image_url" | "status">,
) {
  const response = await fetch(`${supabaseUrl}/rest/v1/article_drafts?id=eq.${encodeURIComponent(draftId)}&select=*`, {
    method: "PATCH",
    headers: headers(session, {
      "Content-Type": "application/json",
      Prefer: "return=representation",
    }),
    body: JSON.stringify(updates),
  });
  if (!response.ok) throw new Error(await readError(response, "편집 검토 내용을 저장하지 못했습니다."));
  const rows = await response.json() as ArticleDraft[];
  if (!rows[0]) throw new Error("원고를 찾지 못했거나 수정 권한이 없습니다.");
  return rows[0];
}

export async function getPublishedContribution(slug: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/get_published_contribution`, {
    method: "POST",
    headers: publicHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ requested_slug: slug }),
  });
  if (!response.ok) throw new Error(await readError(response, "게시된 기사를 불러오지 못했습니다."));
  const rows = await response.json() as PublishedContribution[];
  if (!rows[0]) throw new Error("게시된 기사를 찾을 수 없습니다.");
  return rows[0];
}

export async function listPublishedContributions() {
  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/list_published_contributions`, {
    method: "POST",
    headers: publicHeaders({ "Content-Type": "application/json" }),
    body: "{}",
  });
  if (!response.ok) throw new Error(await readError(response, "필자 기사 목록을 불러오지 못했습니다."));
  return response.json() as Promise<PublishedContributionListItem[]>;
}

export async function downloadDraftAttachment(session: AuthSession, draft: ArticleDraft) {
  if (!draft.attachment_path) throw new Error("첨부파일이 없습니다.");
  const encodedPath = encodeURIComponent(draft.attachment_path).replace(/%2F/g, "/");
  const response = await fetch(`${supabaseUrl}/storage/v1/object/authenticated/author-drafts/${encodedPath}`, {
    headers: headers(session),
  });
  if (!response.ok) throw new Error(await readError(response, "첨부파일을 내려받지 못했습니다."));
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = draft.attachment_name || "원고-첨부파일";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
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
