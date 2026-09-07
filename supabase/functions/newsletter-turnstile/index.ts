import "jsr:@supabase/functions-js/edge-runtime.d.ts";

type TurnstileOutcome = {
  success?: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const allowedOrigins = new Set([
  "https://seedvoice.kr",
  "https://www.seedvoice.kr",
  "https://moraeal.github.io",
]);

function corsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = allowedOrigins.has(origin) ? origin : "https://seedvoice.kr";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

function json(req: Request, body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(req), "Content-Type": "application/json" },
  });
}

function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders(req) });
  if (req.method !== "POST") return json(req, { error: "method_not_allowed" }, 405);

  const origin = req.headers.get("origin");
  if (origin && !allowedOrigins.has(origin)) return json(req, { error: "origin_not_allowed" }, 403);

  const secret = (Deno.env.get("TURNSTILE_SECRET_KEY") || "").trim();
  if (!secret) return json(req, { error: "turnstile_not_configured" }, 503);

  let payload: { token?: string; email?: string; language?: string; sourcePath?: string };
  try {
    payload = await req.json();
  } catch {
    return json(req, { error: "invalid_json" }, 400);
  }

  const token = (payload.token || "").trim();
  const email = (payload.email || "").trim();
  const language = payload.language === "en" ? "en" : "ko";
  const sourcePath = (payload.sourcePath || "/").slice(0, 300);

  if (!token || !email) return json(req, { error: "missing_fields" }, 400);

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  const ip = clientIp(req);
  if (ip) form.append("remoteip", ip);

  let verification: Response;
  try {
    verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
  } catch {
    return json(req, { error: "verification_unavailable" }, 502);
  }

  if (!verification.ok) return json(req, { error: "verification_unavailable" }, 502);

  const outcome = await verification.json() as TurnstileOutcome;
  if (!outcome.success) return json(req, { error: "verification_failed" }, 403);
  if (outcome.action && outcome.action !== "newsletter") return json(req, { error: "action_mismatch" }, 403);
  if (outcome.hostname && !["seedvoice.kr", "www.seedvoice.kr", "moraeal.github.io"].includes(outcome.hostname)) {
    return json(req, { error: "hostname_mismatch" }, 403);
  }

  const supabaseUrl = (Deno.env.get("SUPABASE_URL") || "").replace(/\/$/, "");
  const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  if (!supabaseUrl || !serviceRole) return json(req, { error: "server_not_configured" }, 503);

  const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/subscribe_newsletter`, {
    method: "POST",
    headers: {
      apikey: serviceRole,
      Authorization: `Bearer ${serviceRole}`,
      "Content-Type": "application/json",
      ...(ip ? { "X-Forwarded-For": ip } : {}),
    },
    body: JSON.stringify({
      p_email: email,
      p_language: language,
      p_source_path: sourcePath.startsWith("/") ? sourcePath : "/",
    }),
  });

  if (!rpc.ok) {
    const detail = await rpc.text();
    return json(req, { error: "subscription_failed", detail: detail.slice(0, 200) }, rpc.status === 429 ? 429 : 400);
  }

  return new Response(null, { status: 204, headers: corsHeaders(req) });
});
