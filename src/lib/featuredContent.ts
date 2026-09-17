import type { AuthSession } from "../auth";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";
const SLOT = "primary";

const headers = (token?: string) => ({
  apikey: supabaseKey,
  Authorization: `Bearer ${token || supabaseKey}`,
  "Content-Type": "application/json",
});

export async function getFeaturedContentPath(): Promise<string | null> {
  const response = await fetch(`${supabaseUrl}/rest/v1/homepage_featured_content?slot=eq.${SLOT}&select=content_path&limit=1`, {
    headers: headers(),
  });
  if (!response.ok) throw new Error(`Could not load featured content (${response.status})`);
  const rows = await response.json() as { content_path?: string }[];
  return rows[0]?.content_path?.trim() || null;
}

export async function setFeaturedContentPath(session: AuthSession, path: string): Promise<string> {
  if (!/^\/(columns|news|briefings|monitoring|seed-language)\/[a-z0-9][a-z0-9-]*$/.test(path)) {
    throw new Error("Invalid featured content path");
  }
  const response = await fetch(`${supabaseUrl}/rest/v1/homepage_featured_content?on_conflict=slot`, {
    method: "POST",
    headers: {
      ...headers(session.access_token),
      Prefer: "resolution=merge-duplicates,return=representation",
    },
    body: JSON.stringify({ slot: SLOT, content_path: path, updated_at: new Date().toISOString() }),
  });
  if (!response.ok) throw new Error(`Could not update featured content (${response.status})`);
  const rows = await response.json() as { content_path: string }[];
  return rows[0]?.content_path ?? path;
}
