import { seedComments } from "../data/seedComments";

export type CommentRecord = {
  id: string;
  post_slug: string;
  nickname: string;
  body: string;
  created_at: string;
  parent_id?: string | null;
  is_siya?: boolean;
};

export type CommentContinuation = {
  commentId: string;
  nickname: string;
  excerpt: string;
};

const url = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export const commentsReady = Boolean(url && key);

const publicHeaders: Record<string, string> = {
  apikey: key || "",
  "Content-Type": "application/json",
};

if (key?.startsWith("eyJ")) publicHeaders.Authorization = `Bearer ${key}`;

const selectFields = "id,post_slug,nickname,body,created_at,parent_id,is_siya";
const continuationPattern = /^\[\[continue:([^|]+)\|([^|]*)\|([^\]]*)\]\]\n?/;

const newestFirst = (comments: CommentRecord[]) => [...comments].sort(
  (a, b) => b.created_at.localeCompare(a.created_at),
);

export function threadComments(comments: CommentRecord[]) {
  const ids = new Set(comments.map(c => c.id));
  return comments.filter(c => !c.parent_id || !ids.has(c.parent_id)).flatMap(c => [
    c, ...comments.filter(reply => reply.parent_id === c.id).sort((a,b) => a.created_at.localeCompare(b.created_at)),
  ]);
}

const safelyDecode = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export function parseCommentBody(body: string): { text: string; continuation?: CommentContinuation } {
  const match = body.match(continuationPattern);
  if (!match) return { text: body };

  return {
    text: body.replace(continuationPattern, ""),
    continuation: {
      commentId: match[1],
      nickname: safelyDecode(match[2]),
      excerpt: safelyDecode(match[3]),
    },
  };
}

export function buildContinuedCommentBody(continuation: CommentContinuation, body: string) {
  const excerpt = continuation.excerpt.replace(/\s+/g, " ").trim().slice(0, 140);
  return `[[continue:${continuation.commentId}|${encodeURIComponent(continuation.nickname)}|${encodeURIComponent(excerpt)}]]\n${body}`;
}

export async function loadComments(postSlug: string): Promise<CommentRecord[]> {
  const starterComments = seedComments.filter((comment) => comment.post_slug === postSlug);
  if (!commentsReady) return newestFirst(starterComments);

  try {
    const response = await fetch(`${url}/rest/v1/comments?post_slug=eq.${encodeURIComponent(postSlug)}&is_visible=eq.true&select=${selectFields}&order=created_at.desc`, { headers: publicHeaders });
    if (!response.ok) return newestFirst(starterComments);
    const submittedComments: CommentRecord[] = await response.json();
    return newestFirst([...submittedComments, ...starterComments]);
  } catch {
    return newestFirst(starterComments);
  }
}

export async function loadAllComments(limit = 300): Promise<CommentRecord[]> {
  const safeLimit = Math.min(Math.max(limit, 1), 500);
  let submittedComments: CommentRecord[] = [];

  if (commentsReady) {
    try {
      const response = await fetch(`${url}/rest/v1/comments?is_visible=eq.true&select=${selectFields}&order=created_at.desc&limit=${safeLimit}`, { headers: publicHeaders });
      if (response.ok) submittedComments = await response.json();
    } catch {
      submittedComments = [];
    }
  }

  return newestFirst([...submittedComments, ...seedComments]).slice(0, safeLimit);
}

export async function createComment(postSlug: string, nickname: string, body: string, accessToken?: string, userId?: string) {
  if (!commentsReady) throw new Error("댓글 저장소가 아직 연결되지 않았습니다.");
  if (!accessToken || !userId) throw new Error("댓글은 이메일 인증회원만 작성할 수 있습니다. 로그인해주세요.");

  const response = await fetch(`${url}/rest/v1/comments`, {
    method: "POST",
    headers: {
      apikey: key || "",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ post_slug: postSlug, nickname, body, user_id: userId, is_visible: true }),
  });

  if (!response.ok) {
    let message = "댓글 등록에 실패했습니다. 잠시 후 다시 시도해주세요.";
    try {
      const data = await response.json();
      if (response.status === 401 || response.status === 403) message = "로그인 세션을 다시 확인해주세요.";
      else if (data?.message?.includes("CAMPAIGN_SIGNATURE_LIMIT")) message = "CAMPAIGN_SIGNATURE_LIMIT";
      else if (data?.message) message = data.message;
    } catch {
      // 기본 안내문을 사용합니다.
    }
    throw new Error(message);
  }
}


export async function loadOwnCampaignSignatures(postSlug: string, accessToken: string, userId: string): Promise<CommentRecord[]> {
  const response = await fetch(`${url}/rest/v1/comments?post_slug=eq.${encodeURIComponent(postSlug)}&user_id=eq.${encodeURIComponent(userId)}&select=${selectFields}&order=created_at.desc`, {
    headers: { ...publicHeaders, Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok) throw new Error("SIGNATURE_LOAD_FAILED");
  return response.json();
}

export async function manageCampaignSignature(id: string, accessToken: string, userId: string, body?: string): Promise<void> {
  const response = await fetch(`${url}/rest/v1/comments?id=eq.${encodeURIComponent(id)}&user_id=eq.${encodeURIComponent(userId)}&post_slug=eq.campaign-no-more-tax-signatures&select=id`, {
    method: body === undefined ? "DELETE" : "PATCH",
    headers: { ...publicHeaders, Authorization: `Bearer ${accessToken}`, Prefer: "return=representation" },
    ...(body === undefined ? {} : { body: JSON.stringify({ body }) }),
  });
  if (!response.ok) throw new Error("SIGNATURE_WRITE_FAILED");
  const changed = await response.json();
  if (changed.length !== 1) throw new Error("SIGNATURE_NOT_FOUND");
}
