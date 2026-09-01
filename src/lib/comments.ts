import { seedComments } from "../data/seedComments";

export type CommentRecord = {
  id: string;
  post_slug: string;
  nickname: string;
  body: string;
  created_at: string;
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

const headers: Record<string, string> = {
  apikey: key || "",
  "Content-Type": "application/json",
};

if (key?.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;

const selectFields = "id,post_slug,nickname,body,created_at";
const continuationPattern = /^\[\[continue:([^|]+)\|([^|]*)\|([^\]]*)\]\]\n?/;

const newestFirst = (comments: CommentRecord[]) => [...comments].sort(
  (a, b) => b.created_at.localeCompare(a.created_at),
);

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
    const response = await fetch(`${url}/rest/v1/comments?post_slug=eq.${encodeURIComponent(postSlug)}&is_visible=eq.true&select=${selectFields}&order=created_at.desc`, { headers });
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
      const response = await fetch(`${url}/rest/v1/comments?is_visible=eq.true&select=${selectFields}&order=created_at.desc&limit=${safeLimit}`, { headers });
      if (response.ok) submittedComments = await response.json();
    } catch {
      submittedComments = [];
    }
  }

  return newestFirst([...submittedComments, ...seedComments]).slice(0, safeLimit);
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
