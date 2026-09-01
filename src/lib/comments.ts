export type CommentRecord = {
  id: string;
  post_slug: string;
  nickname: string;
  body: string;
  created_at: string;
};

const url = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export const commentsReady = Boolean(url && key);

const headers: Record<string, string> = {
  apikey: key || "",
  "Content-Type": "application/json",
};

if (key?.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;

const selectFields = "id,post_slug,nickname,body,created_at";

export async function loadComments(postSlug: string): Promise<CommentRecord[]> {
  if (!commentsReady) return [];
  const response = await fetch(`${url}/rest/v1/comments?post_slug=eq.${encodeURIComponent(postSlug)}&is_visible=eq.true&select=${selectFields}&order=created_at.desc`, { headers });
  if (!response.ok) throw new Error("댓글을 불러오지 못했습니다.");
  return response.json();
}

export async function loadAllComments(limit = 200): Promise<CommentRecord[]> {
  if (!commentsReady) return [];
  const safeLimit = Math.min(Math.max(limit, 1), 500);
  const response = await fetch(`${url}/rest/v1/comments?is_visible=eq.true&select=${selectFields}&order=created_at.desc&limit=${safeLimit}`, { headers });
  if (!response.ok) throw new Error("공론장 댓글을 불러오지 못했습니다.");
  return response.json();
}

export async function createComment(postSlug: string, nickname: string, body: string) {
  if (!commentsReady) throw new Error("댓글 저장소가 아직 연결되지 않았습니다.");
  const response = await fetch(`${url}/rest/v1/comments`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify({ post_slug: postSlug, nickname, body }),
  });
  if (!response.ok) throw new Error("댓글 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
}
