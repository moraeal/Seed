import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const allowedOrigins = new Set(["https://seedvoice.kr", "https://www.seedvoice.kr", "https://moraeal.github.io"]);
const categories = new Set(["생활 속 문제", "공공기관·예산", "법·정책", "기업·시장", "기사 제안", "기타"]);

function headers(req: Request) {
  const origin = req.headers.get("origin") || "";
  return { "Access-Control-Allow-Origin": allowedOrigins.has(origin) ? origin : "https://seedvoice.kr", "Access-Control-Allow-Headers": "authorization, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS", Vary: "Origin" };
}
function respond(req: Request, error: string, status: number) {
  return new Response(JSON.stringify({ error }), { status, headers: { ...headers(req), "Content-Type": "application/json" } });
}
function text(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max + 1) : ""; }

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: headers(req) });
  if (req.method !== "POST") return respond(req, "method_not_allowed", 405);
  if (!allowedOrigins.has(req.headers.get("origin") || "")) return respond(req, "origin_not_allowed", 403);
  if (Number(req.headers.get("content-length") || 0) > 15000) return respond(req, "too_large", 413);

  const secret = Deno.env.get("TURNSTILE_SECRET_KEY") || "";
  const supabaseUrl = (Deno.env.get("SUPABASE_URL") || "").replace(/\/$/, "");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  if (!secret || !supabaseUrl || !serviceKey) return respond(req, "not_configured", 503);

  let payload: Record<string, unknown>;
  try { payload = await req.json(); } catch { return respond(req, "invalid_json", 400); }
  const category = text(payload.category, 40);
  const title = text(payload.title, 160);
  const description = text(payload.description, 5000);
  const evidenceUrl = text(payload.evidenceUrl, 500);
  const name = text(payload.name, 80);
  const email = text(payload.email, 254);
  const token = text(payload.token, 2048);
  if (!categories.has(category) || title.length < 3 || title.length > 160 || description.length < 20 || description.length > 5000 || name.length > 80 || email.length > 254 || evidenceUrl.length > 500 || !token) return respond(req, "invalid_fields", 400);
  if (evidenceUrl && !/^https?:\/\//i.test(evidenceUrl)) return respond(req, "invalid_url", 400);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respond(req, "invalid_email", 400);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
  const form = new FormData(); form.append("secret", secret); form.append("response", token);
  if (ip) form.append("remoteip", ip);
  let result: { success?: boolean; action?: string; hostname?: string };
  try {
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
    if (!verification.ok) return respond(req, "verification_unavailable", 502);
    result = await verification.json();
  } catch { return respond(req, "verification_unavailable", 502); }
  if (!result.success || result.action !== "tip" || !["seedvoice.kr", "www.seedvoice.kr", "moraeal.github.io"].includes(result.hostname || "")) return respond(req, "verification_failed", 403);

  const apiHeaders = { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, "Content-Type": "application/json" };
  let ipHash: string | null = null;
  if (ip) {
    const bytes = new TextEncoder().encode(`${secret}:${ip}`);
    ipHash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))).map(b => b.toString(16).padStart(2, "0")).join("");
    const since = encodeURIComponent(new Date(Date.now() - 60 * 60 * 1000).toISOString());
    const recent = await fetch(`${supabaseUrl}/rest/v1/reader_tips?ip_hash=eq.${ipHash}&created_at=gte.${since}&select=id&limit=5`, { headers: apiHeaders });
    if (!recent.ok) return respond(req, "storage_unavailable", 503);
    if (((await recent.json()) as unknown[]).length >= 5) return respond(req, "rate_limited", 429);
  }

  const stored = await fetch(`${supabaseUrl}/rest/v1/reader_tips`, {
    method: "POST", headers: apiHeaders,
    body: JSON.stringify({ category, title, description, evidence_url: evidenceUrl || null, name: name || null, email: email || null, source_path: "/about", ip_hash: ipHash }),
  });
  if (!stored.ok) return respond(req, "storage_unavailable", 503);
  return new Response(null, { status: 204, headers: headers(req) });
});
