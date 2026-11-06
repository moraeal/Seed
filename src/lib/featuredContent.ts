import type { AuthSession } from "../auth";
import type { FeaturedHistoryEntry } from "../data/featuredHistory";

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

type EarlyFeaturedResult = { response?: Response; error?: unknown };
type EarlyFeaturedWindow = Window & { __seedFeaturedRequest?: { url: string; promise: Promise<EarlyFeaturedResult> } };
let featuredRequest: Promise<string | null> | undefined;

export function getFeaturedContentPath(): Promise<string | null> {
  // React StrictMode can mount the homepage twice. Both mounts must use the
  // same early request, rather than triggering a second network round trip.
  if (featuredRequest) return featuredRequest;
  const url = `${supabaseUrl}/rest/v1/homepage_featured_content?slot=eq.${SLOT}&select=content_path&limit=1`;
  const earlyWindow = typeof window === "undefined" ? undefined : window as EarlyFeaturedWindow;
  const early = earlyWindow?.__seedFeaturedRequest;
  if (earlyWindow && early) delete earlyWindow.__seedFeaturedRequest;
  const request = async () => {
    let response: Response;
    if (early?.url === url) {
      const result = await early.promise;
      if (!result.response) throw result.error || new Error("Could not load featured content");
      response = result.response;
    } else {
      response = await fetch(url, { headers: headers(), signal: AbortSignal.timeout(10000), cache: "no-store" });
    }
    if (!response.ok) throw new Error(`Could not load featured content (${response.status})`);
    const rows = await response.json() as { content_path?: string }[];
    return rows[0]?.content_path?.trim() || null;
  };
  featuredRequest = request().finally(() => { featuredRequest = undefined; });
  return featuredRequest;
}

export async function getFeaturedContentHistory(): Promise<FeaturedHistoryEntry[]> {
  const history: FeaturedHistoryEntry[] = [];
  const pageSize = 1000;
  for (let offset = 0; ; offset += pageSize) {
    const response = await fetch(`${supabaseUrl}/rest/v1/homepage_featured_history?select=content_path,featured_at&order=featured_at.desc,content_path.asc&limit=${pageSize}&offset=${offset}`, { headers: headers(), signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error(`Could not load feature history (${response.status})`);
    const rows = await response.json() as FeaturedHistoryEntry[];
    history.push(...rows);
    if (rows.length < pageSize) return history;
  }
}

export async function setFeaturedContentPath(session: AuthSession, path: string): Promise<string> {
  if (!/^\/(?:(?:columns|news|briefings|seed-language)|monitoring(?:\/(?:legislation|tax)(?:\/commentary)?)?)\/[a-z0-9][a-z0-9-]*$/.test(path)) {
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
