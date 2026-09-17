import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const ASSEMBLY_BASE = "https://open.assembly.go.kr/portal/openapi";
const MEMBER_BILLS_ENDPOINT = "nzmimeepazxkubdpn";
const ALL_BILLS_ENDPOINT = "TVBPMBILL11";
const ASSEMBLY_AGE = 22;
const ANALYSIS_MODEL = "gpt-5.6-luna";
const ANALYSIS_THRESHOLD = 60;

type Json = Record<string, unknown>;

type NormalizedBill = {
  bill_id: string;
  bill_no: string | null;
  assembly_age: number;
  slug: string;
  title: string;
  proposer: string | null;
  representative_proposer: string | null;
  co_proposers: string[];
  proposer_kind: string | null;
  proposed_date: string | null;
  committee: string | null;
  bill_kind: string | null;
  source_status: string | null;
  processing_result: string | null;
  official_summary: string | null;
  proposal_reason: string | null;
  main_content: string | null;
  detail_url: string | null;
  full_text_url: string | null;
  source_payload: Json;
  source_hash: string;
  importance_score: number;
  importance_level: "low" | "medium" | "high" | "critical";
  review_state: "collected" | "queued";
  published_at: string | null;
  source_checked_at: string;
  last_source_update: string;
  updated_at: string;
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function clean(value: unknown): string | null {
  if (value === null || value === undefined) return null;
  const normalized = String(value).replace(/\s+/g, " ").trim();
  return normalized || null;
}

function first(row: Json, keys: string[]): string | null {
  for (const key of keys) {
    const value = clean(row[key]);
    if (value) return value;
  }
  return null;
}

function parseDate(value: string | null): string | null {
  if (!value) return null;
  const digits = value.replace(/[^0-9]/g, "");
  if (digits.length < 8) return null;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
}

function koreaDate(offsetDays = 0): string {
  const now = new Date(Date.now() + 9 * 60 * 60 * 1000 + offsetDays * 86_400_000);
  return now.toISOString().slice(0, 10);
}

function rowsFromAssembly(payload: unknown, endpoint: string): Json[] {
  if (!payload || typeof payload !== "object") return [];
  const root = payload as Json;
  const sections = root[endpoint];
  if (!Array.isArray(sections)) return [];
  return sections.flatMap((section) => {
    if (!section || typeof section !== "object") return [];
    const rows = (section as Json).row;
    return Array.isArray(rows) ? rows.filter((row): row is Json => Boolean(row && typeof row === "object")) : [];
  });
}

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function importance(title: string, body: string) {
  const text = `${title} ${body}`;
  const critical = ["헌법", "정부조직", "국회법", "공직선거", "형법", "형사소송", "검찰청", "국가재정", "조세특례", "방송법"];
  const high = ["과징금", "벌금", "처벌", "징벌", "규제", "부담금", "세금", "조세", "기업", "플랫폼", "노동", "최저임금", "부동산", "주택", "농지", "표현", "언론", "집회", "개인정보", "인공지능", "원자력", "전력", "국가채무", "보조금", "시민단체"];
  const medium = ["지원", "육성", "진흥", "기금", "공공기관", "위원회", "허가", "인가", "신고", "의무", "권한"];
  let score = 15;
  score += critical.filter((word) => text.includes(word)).length * 24;
  score += high.filter((word) => text.includes(word)).length * 12;
  score += medium.filter((word) => text.includes(word)).length * 5;
  score = Math.min(100, score);
  const level = score >= 85 ? "critical" : score >= 60 ? "high" : score >= 35 ? "medium" : "low";
  return { score, level } as const;
}

function slugFor(billNo: string | null, billId: string) {
  const stable = (billNo || billId).toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-|-$/g, "");
  return `bill-${stable || crypto.randomUUID().slice(0, 12)}`;
}

async function normalizeBill(row: Json): Promise<NormalizedBill | null> {
  const billId = first(row, ["BILL_ID", "bill_id", "BILLID"]);
  const title = first(row, ["BILL_NAME", "BILL_NM", "bill_name", "bill_nm"]);
  if (!billId || !title) return null;
  const billNo = first(row, ["BILL_NO", "bill_no"]);
  const proposedDate = parseDate(first(row, ["PROPOSE_DT", "RCP_DT", "propose_dt", "rcp_dt"]));
  const representative = first(row, ["RST_PROPOSER", "REPRESENTATIVE_PROPOSER", "rst_proposer"]);
  const coProposersRaw = first(row, ["PUBL_PROPOSER", "CO_PROPOSERS", "publ_proposer"]);
  const officialSummary = first(row, ["SUMMARY", "BILL_SUMMARY", "summary"]);
  const proposalReason = first(row, ["PROPOSE_REASON", "PROPOSAL_REASON", "propose_reason"]);
  const mainContent = first(row, ["MAJOR_CONTENT", "MAIN_CONTENT", "major_content"]);
  const combined = [officialSummary, proposalReason, mainContent].filter(Boolean).join(" ");
  const rated = importance(title, combined);
  const now = new Date().toISOString();
  return {
    bill_id: billId,
    bill_no: billNo,
    assembly_age: Number(first(row, ["AGE", "age"]) || ASSEMBLY_AGE),
    slug: slugFor(billNo, billId),
    title,
    proposer: first(row, ["PROPOSER", "proposer"]),
    representative_proposer: representative,
    co_proposers: coProposersRaw ? coProposersRaw.split(",").map((name) => name.trim()).filter(Boolean) : [],
    proposer_kind: first(row, ["PROPOSER_KIND", "PROPOSER_GUBUN", "proposer_kind"]),
    proposed_date: proposedDate,
    committee: first(row, ["CURR_COMMITTEE", "COMMITTEE", "COMMITTEE_NM", "committee"]),
    bill_kind: first(row, ["BILL_KIND", "BILL_GUBUN", "bill_kind"]),
    source_status: first(row, ["PROC_STAGE_CD", "PROC_STAGE", "STATUS", "proc_stage"]),
    processing_result: first(row, ["PROC_RESULT", "PROC_RESULT_CD", "proc_result"]),
    official_summary: officialSummary,
    proposal_reason: proposalReason,
    main_content: mainContent,
    detail_url: first(row, ["DETAIL_LINK", "LINK_URL", "DETAIL_URL", "detail_link"]),
    full_text_url: first(row, ["BILL_URL", "PDF_URL", "FILE_LINK", "bill_url"]),
    source_payload: row,
    source_hash: await sha256(JSON.stringify(row)),
    importance_score: rated.score,
    importance_level: rated.level,
    review_state: rated.score >= ANALYSIS_THRESHOLD ? "queued" : "collected",
    published_at: null,
    source_checked_at: now,
    last_source_update: now,
    updated_at: now,
  };
}

function secretKey() {
  const current = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (current) {
    try {
      return String(JSON.parse(current).default || "");
    } catch {
      // Fall through to the legacy key while the project migrates.
    }
  }
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
}

function adminHeaders(prefer?: string) {
  const key = secretKey();
  const headers: Record<string, string> = { apikey: key, "Content-Type": "application/json" };
  if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;
  if (prefer) headers.Prefer = prefer;
  return headers;
}

async function rest(path: string, init: RequestInit = {}) {
  const base = (Deno.env.get("SUPABASE_URL") || "").replace(/\/$/, "");
  return fetch(`${base}/rest/v1/${path}`, {
    ...init,
    headers: { ...adminHeaders(), ...(init.headers || {}) },
  });
}

async function verifyCronToken(candidate: string | null) {
  if (!candidate) return false;
  const response = await rest("rpc/verify_legislative_cron_token", {
    method: "POST",
    body: JSON.stringify({ candidate }),
  });
  if (!response.ok) return false;
  return Boolean(await response.json());
}

async function fetchAssembly(endpoint: string, date: string) {
  const key = Deno.env.get("ASSEMBLY_OPEN_API_KEY");
  if (!key) throw new Error("ASSEMBLY_OPEN_API_KEY is not configured");
  const params = new URLSearchParams({
    KEY: key,
    Type: "json",
    pIndex: "1",
    pSize: "1000",
    AGE: String(ASSEMBLY_AGE),
    PROPOSE_DT: date.replaceAll("-", ""),
  });
  const response = await fetch(`${ASSEMBLY_BASE}/${endpoint}?${params.toString()}`);
  if (!response.ok) throw new Error(`${endpoint} returned HTTP ${response.status}`);
  const payload = await response.json();
  return rowsFromAssembly(payload, endpoint);
}

async function fetchBillSummary(billNo: string) {
  const key = Deno.env.get("ASSEMBLY_OPEN_API_KEY");
  if (!key) throw new Error("ASSEMBLY_OPEN_API_KEY is not configured");
  const params = new URLSearchParams({ KEY: key, Type: "json", pIndex: "1", pSize: "5", BILL_NO: billNo });
  const response = await fetch(`${ASSEMBLY_BASE}/BPMBILLSUMMARY?${params.toString()}`);
  if (!response.ok) throw new Error(`BPMBILLSUMMARY returned HTTP ${response.status}`);
  return rowsFromAssembly(await response.json(), "BPMBILLSUMMARY")[0] || null;
}

function analysisSchema() {
  const stringArray = { type: "array", items: { type: "string" } };
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      title_en: { type: "string" },
      official_rationale_en: { type: "string" },
      summary_ko: { type: "string" }, summary_en: { type: "string" },
      changes_ko: stringArray, changes_en: stringArray,
      positive_effects_ko: stringArray, positive_effects_en: stringArray,
      risks_ko: stringArray, risks_en: stringArray,
      citizen_impact_ko: stringArray, citizen_impact_en: stringArray,
      business_impact_ko: stringArray, business_impact_en: stringArray,
      authority_shift_ko: stringArray, authority_shift_en: stringArray,
      watch_points_ko: stringArray, watch_points_en: stringArray,
      evidence_gaps_ko: stringArray, evidence_gaps_en: stringArray,
      confidence: { type: "string", enum: ["low", "medium", "high"] },
    },
    required: ["title_en", "official_rationale_en", "summary_ko", "summary_en", "changes_ko", "changes_en", "positive_effects_ko", "positive_effects_en", "risks_ko", "risks_en", "citizen_impact_ko", "citizen_impact_en", "business_impact_ko", "business_impact_en", "authority_shift_ko", "authority_shift_en", "watch_points_ko", "watch_points_en", "evidence_gaps_ko", "evidence_gaps_en", "confidence"],
  };
}

async function analyzeBill(bill: NormalizedBill) {
  const apiKey = Deno.env.get("OPENAI_API_KEY");
  if (!apiKey) return null;
  const evidence = {
    title: bill.title,
    bill_no: bill.bill_no,
    proposed_date: bill.proposed_date,
    proposer: bill.proposer,
    representative_proposer: bill.representative_proposer,
    committee: bill.committee,
    official_summary: bill.official_summary,
    proposal_reason: bill.proposal_reason,
    main_content: bill.main_content,
  };
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: ANALYSIS_MODEL,
      store: false,
      reasoning: { effort: "low" },
      input: [
        {
          role: "system",
          content: "You analyze Korean legislation for SEED VOICE, an independent civic journal. Use only the supplied official record. Separate confirmed provisions from likely effects. Never invent costs, legal effects, stakeholders, or political motives. If evidence is missing, place the limitation in evidence_gaps. Examine citizen choice and rights, business and market burdens, transfers of authority, enforcement powers, fiscal exposure, and unintended effects. title_en must be a faithful, natural English bill title. official_rationale_en must concisely translate the official rationale and principal provisions, without adding analysis, and should stay under 350 English words. Keep every array concise with 2 to 4 items unless the evidence supports fewer. Write concise Korean and polished English for international readers. Do not recommend partisan support or opposition.",
        },
        { role: "user", content: JSON.stringify(evidence) },
      ],
      text: { format: { type: "json_schema", name: "legislative_analysis", strict: true, schema: analysisSchema() } },
      max_output_tokens: 5000,
    }),
  });
  if (!response.ok) throw new Error(`OpenAI analysis returned HTTP ${response.status}`);
  const payload = await response.json() as Json;
  const output = Array.isArray(payload.output) ? payload.output : [];
  const text = output.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const content = (item as Json).content;
    if (!Array.isArray(content)) return [];
    return content.map((part) => part && typeof part === "object" ? clean((part as Json).text) : null).filter(Boolean);
  }).join("");
  if (!text) throw new Error("OpenAI analysis did not return structured text");
  return JSON.parse(text);
}

async function upsertBills(bills: NormalizedBill[]) {
  if (!bills.length) return [] as NormalizedBill[];
  const existing = new Map<string, { review_state: string; published_at: string | null; official_summary: string | null }>();
  for (let index = 0; index < bills.length; index += 100) {
    const ids = bills.slice(index, index + 100).map((bill) => bill.bill_id);
    const filter = encodeURIComponent(`(${ids.join(",")})`);
    const lookup = await rest(`legislative_bills?bill_id=in.${filter}&select=bill_id,review_state,published_at,official_summary`);
    if (!lookup.ok) throw new Error(`Existing bill lookup failed: ${lookup.status}`);
    for (const row of await lookup.json() as { bill_id: string; review_state: string; published_at: string | null; official_summary: string | null }[]) existing.set(row.bill_id, row);
  }
  const enriched: NormalizedBill[] = [];
  for (let index = 0; index < bills.length; index += 10) {
    const batch = await Promise.all(bills.slice(index, index + 10).map(async (bill) => {
      const current = existing.get(bill.bill_id);
      let officialSummary = bill.official_summary || current?.official_summary || null;
      if (!officialSummary && bill.bill_no) {
        try {
          const detail = await fetchBillSummary(bill.bill_no);
          officialSummary = detail ? first(detail, ["SUMMARY", "summary"]) : null;
        } catch {
          // Keep the list record; the next run can retry missing summary data.
        }
      }
      const rated = importance(bill.title, [officialSummary, bill.proposal_reason, bill.main_content].filter(Boolean).join(" "));
      return { ...bill, official_summary: officialSummary, importance_score: rated.score, importance_level: rated.level, review_state: rated.score >= ANALYSIS_THRESHOLD ? "queued" as const : "collected" as const };
    }));
    enriched.push(...batch);
  }
  const editorialStates = new Set(["review", "published", "held", "excluded", "error"]);
  const safeBills = enriched.map((bill) => {
    const current = existing.get(bill.bill_id);
    if (!current || !editorialStates.has(current.review_state)) return bill;
    return { ...bill, review_state: current.review_state, published_at: current.published_at };
  });
  const response = await rest("legislative_bills?on_conflict=bill_id", {
    method: "POST",
    headers: adminHeaders("resolution=merge-duplicates,return=representation"),
    body: JSON.stringify(safeBills),
  });
  if (!response.ok) throw new Error(`Bill upsert failed: ${response.status} ${await response.text()}`);
  return await response.json() as NormalizedBill[];
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  if (!(await verifyCronToken(req.headers.get("x-seed-cron-token")))) return json({ error: "unauthorized" }, 401);

  let body: { days?: number; analyze?: boolean; analysisLimit?: number } = {};
  try { body = await req.json(); } catch { /* Empty body uses safe defaults. */ }
  const days = Math.max(1, Math.min(14, Number(body.days || 3)));
  const shouldAnalyze = body.analyze !== false;
  const analysisLimit = Math.max(1, Math.min(12, Number(body.analysisLimit || 6)));
  const startedAt = new Date().toISOString();
  let runId = "";

  try {
    const runResponse = await rest("legislative_sync_runs", {
      method: "POST",
      headers: adminHeaders("return=representation"),
      body: JSON.stringify({ endpoint: `${MEMBER_BILLS_ENDPOINT},${ALL_BILLS_ENDPOINT}`, metadata: { days, shouldAnalyze } }),
    });
    if (runResponse.ok) runId = String((await runResponse.json())?.[0]?.id || "");

    const collected = new Map<string, Json>();
    const warnings: string[] = [];
    for (let offset = 0; offset < days; offset += 1) {
      const date = koreaDate(-offset);
      for (const endpoint of [MEMBER_BILLS_ENDPOINT, ALL_BILLS_ENDPOINT]) {
        try {
          const rows = await fetchAssembly(endpoint, date);
          for (const row of rows) {
            const rowDate = parseDate(first(row, ["PROPOSE_DT", "RCP_DT", "propose_dt", "rcp_dt"]));
            if (rowDate && rowDate !== date) continue;
            const id = first(row, ["BILL_ID", "bill_id", "BILLID"]);
            if (id) collected.set(id, { ...(collected.get(id) || {}), ...row });
          }
        } catch (error) {
          warnings.push(`${endpoint}/${date}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }

    const normalized = (await Promise.all([...collected.values()].map(normalizeBill))).filter((bill): bill is NormalizedBill => Boolean(bill));
    const saved = await upsertBills(normalized);
    const openaiConfigured = Boolean(Deno.env.get("OPENAI_API_KEY"));
    let analyzed = 0;
    const analysisErrors: string[] = [];
    for (const bill of saved.filter((item) => item.review_state === "queued" && item.importance_score >= ANALYSIS_THRESHOLD).slice(0, analysisLimit)) {
      if (!shouldAnalyze) break;
      try {
        const analysis = await analyzeBill(bill);
        if (!analysis) break;
        const response = await rest(`legislative_bills?bill_id=eq.${encodeURIComponent(bill.bill_id)}`, {
          method: "PATCH",
          headers: adminHeaders("return=minimal"),
          body: JSON.stringify({ analysis, analysis_model: ANALYSIS_MODEL, analysis_generated_at: new Date().toISOString(), review_state: "review", analysis_error: null, updated_at: new Date().toISOString() }),
        });
        if (!response.ok) throw new Error(`analysis save returned HTTP ${response.status}`);
        analyzed += 1;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        analysisErrors.push(`${bill.bill_id}: ${message}`);
        await rest(`legislative_bills?bill_id=eq.${encodeURIComponent(bill.bill_id)}`, {
          method: "PATCH",
          headers: adminHeaders("return=minimal"),
          body: JSON.stringify({ review_state: "error", analysis_error: message, updated_at: new Date().toISOString() }),
        });
      }
    }

    const status = warnings.length || analysisErrors.length ? "partial" : "success";
    if (runId) await rest(`legislative_sync_runs?id=eq.${runId}`, {
      method: "PATCH",
      headers: adminHeaders("return=minimal"),
      body: JSON.stringify({ finished_at: new Date().toISOString(), status, fetched_count: collected.size, inserted_count: saved.length, queued_count: saved.filter((bill) => bill.importance_score >= ANALYSIS_THRESHOLD).length, metadata: { days, analysisLimit, openaiConfigured, analyzed, warnings, analysisErrors, startedAt } }),
    });
    return json({ ok: true, status, fetched: collected.size, saved: saved.length, openaiConfigured, analyzed, warnings, analysisErrors });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (runId) await rest(`legislative_sync_runs?id=eq.${runId}`, {
      method: "PATCH",
      headers: adminHeaders("return=minimal"),
      body: JSON.stringify({ finished_at: new Date().toISOString(), status: "error", error_message: message }),
    });
    return json({ ok: false, error: message }, 500);
  }
});
