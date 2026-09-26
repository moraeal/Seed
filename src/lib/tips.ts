import { getTurnstileToken } from "./turnstile";

const url = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

export type TipInput = {
  category: string;
  title: string;
  description: string;
  evidenceUrl: string;
  name: string;
  email: string;
};

export async function submitTip(input: TipInput): Promise<void> {
  const token = await getTurnstileToken("tip");
  if (!token) throw new Error("security_unavailable");

  const response = await fetch(`${url}/functions/v1/submit-tip`, {
    method: "POST",
    headers: { apikey: key, "Content-Type": "application/json" },
    body: JSON.stringify({ ...input, token }),
  });
  if (!response.ok) throw new Error(response.status === 429 ? "rate_limited" : "submission_failed");
}
