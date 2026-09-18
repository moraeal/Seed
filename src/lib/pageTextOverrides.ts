export type PageTextLocale = "ko" | "en";

export type PageTextKey = {
  pagePath: string;
  locale: PageTextLocale;
  elementPath: string;
  textNodeIndex: number;
};

export type PublishedPageText = {
  id: string;
  page_path: string;
  locale: PageTextLocale;
  element_path: string;
  text_node_index: number;
  original_text: string;
  published_text: string;
  updated_at: string;
};

export type PageTextDraft = {
  id: string;
  original_text: string;
  draft_text: string;
  updated_at: string;
};

export type PageTextRevision = {
  id: number;
  revision_text: string;
  operation: "initial" | "update" | "delete";
  changed_at: string;
};

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";

const headers = (accessToken?: string, prefer?: string) => ({
  apikey: supabaseKey,
  "Content-Type": "application/json",
  ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  ...(prefer ? { Prefer: prefer } : {}),
});

async function responseError(response: Response, fallback: string) {
  try {
    const body = await response.json();
    return body.message || body.error_description || body.error || fallback;
  } catch {
    return fallback;
  }
}

function targetQuery(key: PageTextKey) {
  const params = new URLSearchParams({
    page_path: `eq.${key.pagePath}`,
    locale: `eq.${key.locale}`,
    element_path: `eq.${key.elementPath}`,
    text_node_index: `eq.${key.textNodeIndex}`,
  });
  return params.toString();
}

export function normalizeEditorPagePath(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

export function pageTextMapKey(elementPath: string, textNodeIndex: number) {
  return `${elementPath}:${textNodeIndex}`;
}

export async function loadPublishedPageText(pagePath: string, locale: PageTextLocale, signal?: AbortSignal) {
  const params = new URLSearchParams({
    page_path: `eq.${pagePath}`,
    locale: `eq.${locale}`,
    select: "id,page_path,locale,element_path,text_node_index,original_text,published_text,updated_at",
    order: "updated_at.asc",
  });
  const response = await fetch(`${supabaseUrl}/rest/v1/page_text_overrides?${params}`, {
    headers: headers(),
    signal,
  });
  if (!response.ok) throw new Error(await responseError(response, "공개 문장 수정본을 불러오지 못했습니다."));
  return response.json() as Promise<PublishedPageText[]>;
}

export async function loadPageTextDraft(key: PageTextKey, accessToken: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/page_text_drafts?${targetQuery(key)}&select=id,original_text,draft_text,updated_at&limit=1`, {
    headers: headers(accessToken),
  });
  if (!response.ok) throw new Error(await responseError(response, "임시저장한 문장을 불러오지 못했습니다."));
  const rows = await response.json() as PageTextDraft[];
  return rows[0] || null;
}

export async function loadPageTextRevisions(key: PageTextKey, accessToken: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/page_text_revisions?${targetQuery(key)}&select=id,revision_text,operation,changed_at&order=changed_at.desc&limit=20`, {
    headers: headers(accessToken),
  });
  if (!response.ok) throw new Error(await responseError(response, "수정 기록을 불러오지 못했습니다."));
  return response.json() as Promise<PageTextRevision[]>;
}

async function existingId(table: "page_text_overrides" | "page_text_drafts", key: PageTextKey, accessToken: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}?${targetQuery(key)}&select=id&limit=1`, {
    headers: headers(accessToken),
  });
  if (!response.ok) throw new Error(await responseError(response, "기존 편집 내용을 확인하지 못했습니다."));
  const rows = await response.json() as { id: string }[];
  return rows[0]?.id || null;
}

export async function savePageTextDraft(key: PageTextKey, originalText: string, draftText: string, userId: string, accessToken: string) {
  const id = await existingId("page_text_drafts", key, accessToken);
  const body = JSON.stringify({
    ...(id ? {} : {
      page_path: key.pagePath,
      locale: key.locale,
      element_path: key.elementPath,
      text_node_index: key.textNodeIndex,
    }),
    original_text: originalText,
    draft_text: draftText,
    updated_by: userId,
  });
  const response = await fetch(id
    ? `${supabaseUrl}/rest/v1/page_text_drafts?id=eq.${encodeURIComponent(id)}`
    : `${supabaseUrl}/rest/v1/page_text_drafts`, {
    method: id ? "PATCH" : "POST",
    headers: headers(accessToken, "return=representation"),
    body,
  });
  if (!response.ok) throw new Error(await responseError(response, "문장을 임시저장하지 못했습니다."));
  const rows = await response.json() as PageTextDraft[];
  return rows[0];
}

async function deleteDraft(key: PageTextKey, accessToken: string) {
  const response = await fetch(`${supabaseUrl}/rest/v1/page_text_drafts?${targetQuery(key)}`, {
    method: "DELETE",
    headers: headers(accessToken),
  });
  if (!response.ok) throw new Error(await responseError(response, "공개 후 임시저장을 정리하지 못했습니다."));
}

export async function publishPageText(key: PageTextKey, originalText: string, publishedText: string, userId: string, accessToken: string) {
  const id = await existingId("page_text_overrides", key, accessToken);
  const body = JSON.stringify({
    ...(id ? {} : {
      page_path: key.pagePath,
      locale: key.locale,
      element_path: key.elementPath,
      text_node_index: key.textNodeIndex,
      original_text: originalText,
    }),
    published_text: publishedText,
    updated_by: userId,
  });
  const response = await fetch(id
    ? `${supabaseUrl}/rest/v1/page_text_overrides?id=eq.${encodeURIComponent(id)}`
    : `${supabaseUrl}/rest/v1/page_text_overrides`, {
    method: id ? "PATCH" : "POST",
    headers: headers(accessToken, "return=representation"),
    body,
  });
  if (!response.ok) throw new Error(await responseError(response, "수정한 문장을 공개하지 못했습니다."));
  const rows = await response.json() as PublishedPageText[];
  await deleteDraft(key, accessToken);
  return rows[0];
}
