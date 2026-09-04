export type CorrectionStatus = "open" | "reviewing" | "accepted" | "rejected" | "resolved";

export type CorrectionRecord = {
  id: string;
  post_slug: string;
  nickname: string;
  target_excerpt: string;
  description: string;
  evidence_url: string | null;
  status: CorrectionStatus;
  resolution_note: string | null;
  created_at: string;
  reviewed_at: string | null;
};

const url = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export const correctionsReady = Boolean(url && key);

const publicHeaders: Record<string, string> = {
  apikey: key || "",
  "Content-Type": "application/json",
};

if (key?.startsWith("eyJ")) publicHeaders.Authorization = `Bearer ${key}`;

const selectFields = "id,post_slug,nickname,target_excerpt,description,evidence_url,status,resolution_note,created_at,reviewed_at";

export async function loadCorrections(postSlug: string): Promise<CorrectionRecord[]> {
  if (!correctionsReady) return [];
  const response = await fetch(`${url}/rest/v1/content_corrections?post_slug=eq.${encodeURIComponent(postSlug)}&is_visible=eq.true&select=${selectFields}&order=created_at.desc`, { headers: publicHeaders });
  if (!response.ok) throw new Error("Could not load correction reports.");
  return response.json();
}

export async function createCorrection(input: {
  postSlug: string;
  nickname: string;
  targetExcerpt: string;
  description: string;
  evidenceUrl?: string;
  accessToken?: string;
  userId?: string;
}) {
  if (!correctionsReady) throw new Error("사실 확인 제보 저장소가 아직 연결되지 않았습니다.");
  if (!input.accessToken || !input.userId) throw new Error("이메일 인증회원만 사실 확인을 요청할 수 있습니다.");

  const response = await fetch(`${url}/rest/v1/content_corrections`, {
    method: "POST",
    headers: {
      apikey: key || "",
      Authorization: `Bearer ${input.accessToken}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      post_slug: input.postSlug,
      user_id: input.userId,
      nickname: input.nickname,
      target_excerpt: input.targetExcerpt,
      description: input.description,
      evidence_url: input.evidenceUrl || null,
      status: "open",
      is_visible: true,
    }),
  });

  if (!response.ok) {
    let message = "사실 확인 요청을 등록하지 못했습니다. 잠시 후 다시 시도해주세요.";
    try {
      const data = await response.json();
      if (response.status === 401 || response.status === 403) message = "로그인 상태와 이메일 인증 여부를 확인해주세요.";
      else if (data?.message) message = data.message;
    } catch {
      // 기본 안내문을 사용합니다.
    }
    throw new Error(message);
  }
}

