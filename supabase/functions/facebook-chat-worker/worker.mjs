const PAGE = "1438854115971733";
const JOBS = "seed_facebook_chat_jobs";
const json = (value, status = 200) => new Response(JSON.stringify(value), {
  status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
});

export function validJob(job) {
  if (!job || job.approved !== true || !["check", "create", "update", "delete"].includes(job.action)) return false;
  if (["create", "update"].includes(job.action) &&
      (typeof job.message !== "string" || !job.message.trim() || job.message.length > 10000)) return false;
  if (["update", "delete"].includes(job.action) &&
      (typeof job.post_id !== "string" || !/^1438854115971733_[0-9]+$/.test(job.post_id))) return false;
  if (job.link != null) {
    try { if (job.action !== "create" || new URL(job.link).protocol !== "https:") return false; }
    catch { return false; }
  }
  return true;
}

export function createHandler({ env, fetchImpl = fetch, cryptoImpl = crypto }) {
  const db = async (path, options = {}) => {
    const response = await fetchImpl(`${env.SUPABASE_URL}/rest/v1/${path}`, {
      ...options,
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("database_request_failed");
    return response.status === 204 ? null : response.json();
  };
  const finish = (id, status, result) => db(`${JOBS}?id=eq.${id}&status=eq.processing`, {
    method: "PATCH", body: JSON.stringify({ status, result, finished_at: new Date().toISOString() }),
    headers: { Prefer: "return=minimal" },
  });

  return async (req) => {
    if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
    if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) return json({ error: "server_configuration_missing" }, 503);
    let job;
    let graphStarted = false;
    try {
      const auth = req.headers.get("authorization") || "";
      if (!/^Bearer [a-f0-9]{64}$/.test(auth)) return json({ error: "unauthorized" }, 401);
      const hash = [...new Uint8Array(await cryptoImpl.subtle.digest("SHA-256", new TextEncoder().encode(auth.slice(7))))]
        .map((byte) => byte.toString(16).padStart(2, "0")).join("");
      const [config] = await db("seed_facebook_chat_auth?id=eq.dispatcher&select=token_hash&limit=1");
      if (!config || config.token_hash !== hash) return json({ error: "unauthorized" }, 401);

      const text = await req.text();
      if (text.length > 1000) return json({ error: "request_too_large" }, 413);
      let body;
      try { body = JSON.parse(text); } catch { return json({ error: "invalid_json" }, 400); }
      if (!body || typeof body.job_id !== "string" || !/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/.test(body.job_id))
        return json({ error: "invalid_job_id" }, 400);

      const claimed = await db(`${JOBS}?id=eq.${body.job_id}&status=eq.pending&select=id,action,message,post_id,link,approved`, {
        method: "PATCH", body: JSON.stringify({ status: "processing", started_at: new Date().toISOString() }),
        headers: { Prefer: "return=representation" },
      });
      job = claimed[0];
      if (!job) return json({ ok: true, skipped: true });
      if (!validJob(job)) {
        await finish(job.id, "failed", { error: "invalid_or_unapproved_job" });
        return json({ ok: false, error: "invalid_or_unapproved_job" }, 400);
      }
      const token = (env.FACEBOOK_PAGE_ACCESS_TOKEN || "").trim();
      if (env.FACEBOOK_PAGE_ID !== PAGE || !/^[A-Za-z0-9_-]+$/.test(token)) {
        await finish(job.id, "failed", { error: "facebook_configuration_invalid" });
        return json({ ok: false, error: "facebook_configuration_invalid" }, 503);
      }

      const path = job.action === "check" ? PAGE : job.action === "create" ? `${PAGE}/feed` : job.post_id;
      const url = new URL(`https://graph.facebook.com/v25.0/${path}`);
      if (job.action === "check") url.searchParams.set("fields", "id,name");
      const params = new URLSearchParams();
      if (["create", "update"].includes(job.action)) params.set("message", job.message);
      if (job.action === "create" && job.link) params.set("link", job.link);
      graphStarted = true;
      const response = await fetchImpl(url, {
        method: job.action === "check" ? "GET" : job.action === "delete" ? "DELETE" : "POST",
        headers: { Authorization: `Bearer ${token}` },
        ...(["create", "update"].includes(job.action) ? { body: params } : {}),
        signal: AbortSignal.timeout(20000),
      });
      let data;
      try { data = await response.json(); } catch { throw new Error("unknown_graph_result"); }
      if (!response.ok || data.error) {
        const result = {
          error: data.error?.code === 190 ? "facebook_token_expired_or_invalid" : "facebook_api_error",
          code: data.error?.code ?? null, subcode: data.error?.error_subcode ?? null,
        };
        // A gateway/5xx failure can occur after Facebook has applied a write.
        await finish(job.id, response.status >= 500 ? "uncertain" : "failed", result);
        return json({ ok: false, ...result }, 502);
      }
      let result;
      if (job.action === "check") {
        if (data.id !== PAGE) throw new Error("unknown_graph_result");
        result = { ok: true, page_id: data.id, name: data.name };
      } else if (job.action === "create") {
        if (typeof data.id !== "string" || !/^1438854115971733_[0-9]+$/.test(data.id)) throw new Error("unknown_graph_result");
        result = { ok: true, action: job.action, post_id: data.id };
      } else {
        if (data.success !== true) throw new Error("unknown_graph_result");
        result = { ok: true, action: job.action, post_id: job.post_id };
      }
      await finish(job.id, "succeeded", result);
      return json(result);
    } catch {
      if (job) {
        try { await finish(job.id, graphStarted ? "uncertain" : "failed", { error: "request_failed_check_before_retry" }); }
        catch { /* Leave processing visible for operator reconciliation. Never retry a write. */ }
      }
      return json({ ok: false, error: "request_failed_check_before_retry" }, 502);
    }
  };
}
