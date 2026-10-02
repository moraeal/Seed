const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  Response.json(body, {
    status,
    headers: { ...cors, "Cache-Control": "no-store" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: cors });
  }
  if (req.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405);
  }

  let stage = "auth_request";
  try {
    const authorization = req.headers.get("authorization") || "";
    if (!/^Bearer \S+$/i.test(authorization)) {
      return json({ error: "unauthorized" }, 401);
    }

    const auth = await fetch(
      Deno.env.get("SUPABASE_URL") + "/auth/v1/user",
      {
        headers: {
          authorization,
          apikey: Deno.env.get("SUPABASE_ANON_KEY") || "",
        },
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!auth.ok) return json({ error: "unauthorized" }, 401);

    stage = "auth_response";
    const user = await auth.json();
    if (user.app_metadata?.seed_role !== "owner") {
      return json({ error: "owner_required" }, 403);
    }

    const pageId = Deno.env.get("FACEBOOK_PAGE_ID") || "";
    const token = (Deno.env.get("FACEBOOK_PAGE_ACCESS_TOKEN") || "").trim();
    if (pageId !== "1438854115971733" || !token) {
      return json({
        error: "facebook_secrets_missing_or_invalid",
      }, 503);
    }

    stage = "request_validation";
    if (!/^[A-Za-z0-9_-]+$/.test(token)) {
      return json({ ok: false, error: "facebook_token_format_invalid", has_whitespace: /\s/.test(token), has_non_ascii: /[^\x00-\x7F]/.test(token) }, 503);
    }
    const text = await req.text();
    if (text.length > 20000) {
      return json({ error: "request_too_large" }, 413);
    }

    let body;
    try {
      body = JSON.parse(text);
    } catch {
      return json({ error: "invalid_json" }, 400);
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ error: "invalid_request" }, 400);
    }

    const action = body.action;
    if (!["check", "create", "update", "delete"].includes(action)) {
      return json({ error: "invalid_action" }, 400);
    }
    if (action !== "check" && body.confirm !== true) {
      return json({ error: "confirmation_required" }, 400);
    }

    if (
      ["create", "update"].includes(action) &&
      (
        typeof body.message !== "string" ||
        !body.message.trim() ||
        body.message.length > 10000
      )
    ) {
      return json({ error: "message_required_max_10000" }, 400);
    }

    if (
      ["update", "delete"].includes(action) &&
      (
        typeof body.post_id !== "string" ||
        !new RegExp("^" + pageId + "_[0-9]+$").test(body.post_id)
      )
    ) {
      return json({ error: "invalid_page_post_id" }, 400);
    }

    if (action === "create" && body.link !== undefined) {
      try {
        const link = new URL(body.link);
        if (link.protocol !== "https:") throw new Error();
      } catch {
        return json({ error: "https_link_required" }, 400);
      }
    }

    const path = action === "check"
      ? pageId
      : action === "create"
      ? pageId + "/feed"
      : body.post_id;

    const url = new URL("https://graph.facebook.com/v25.0/" + path);
    if (action === "check") {
      url.searchParams.set("fields", "id,name");
    }

    const params = new URLSearchParams();
    if (action === "create" || action === "update") {
      params.set("message", body.message);
    }
    if (action === "create" && body.link) {
      params.set("link", body.link);
    }

    stage = "facebook_request";
    const result = await fetch(url, {
      method: action === "check"
        ? "GET"
        : action === "delete"
        ? "DELETE"
        : "POST",
      headers: { Authorization: "Bearer " + token },
      ...(action === "create" || action === "update"
        ? { body: params }
        : {}),
      signal: AbortSignal.timeout(20000),
    });

    stage = "facebook_response";
    const contentType = result.headers.get("content-type") || "";
    if (!contentType.includes("json")) {
      return json({ ok: false, error: "facebook_non_json_response", upstream_status: result.status, content_type: contentType.slice(0, 100) }, 502);
    }
    const data = await result.json();
    if (!result.ok || data.error) {
      return json({
        ok: false,
        error: data.error?.code === 190
          ? "facebook_token_expired_or_invalid"
          : "facebook_api_error",
        code: data.error?.code,
        subcode: data.error?.error_subcode,
      }, 502);
    }

    if (action === "check") {
      if (data.id !== pageId) {
        return json({ error: "page_mismatch" }, 502);
      }
      return json({
        ok: true,
        page_id: data.id,
        name: data.name,
      });
    }

    if (action === "create") {
      if (
        typeof data.id !== "string" ||
        !data.id.startsWith(pageId + "_")
      ) {
        return json({
          ok: false,
          error: "unexpected_facebook_result",
        }, 502);
      }
      return json({ ok: true, post_id: data.id });
    }

    if (data.success !== true) {
      return json({
        ok: false,
        error: "unexpected_facebook_result",
      }, 502);
    }

    return json({ ok: true, post_id: body.post_id, action });
  } catch (error) {
    return json({
      ok: false,
      error: "request_failed_check_before_retry",
      stage,
      error_kind: error instanceof Error ? error.name : "unknown",
      reason: error instanceof Error ? (/header|bytestring|character/i.test(error.message) ? "header_format" : /dns|resolve/i.test(error.message) ? "dns" : /certificate|tls/i.test(error.message) ? "tls" : /timeout|timed out/i.test(error.message) ? "timeout" : /connect|network|fetch|request|send/i.test(error.message) ? "network" : "other") : "unknown",
    }, 502);
  }
});