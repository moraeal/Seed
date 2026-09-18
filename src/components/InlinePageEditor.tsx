import { Check, History, Pencil, Save, Undo2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import {
  loadPageTextDraft,
  loadPageTextRevisions,
  loadPublishedPageText,
  normalizeEditorPagePath,
  pageTextMapKey,
  PageTextKey,
  PageTextRevision,
  publishPageText,
  PublishedPageText,
  savePageTextDraft,
} from "../lib/pageTextOverrides";

type Selection = {
  key: PageTextKey;
  originalText: string;
  publishedText: string;
};

const editableTags = new Set(["A", "B", "BUTTON", "BLOCKQUOTE", "EM", "FIGCAPTION", "H1", "H2", "H3", "H4", "H5", "H6", "LABEL", "LI", "P", "SMALL", "SPAN", "STRONG", "TD", "TH"]);

function directTextNodes(element: Element) {
  return Array.from(element.childNodes).filter((node): node is Text => node.nodeType === Node.TEXT_NODE && Boolean((node as Text).data.trim()));
}

function elementPath(root: Element, element: Element) {
  const parts: number[] = [];
  let current: Element | null = element;
  while (current && current !== root) {
    const parent: Element | null = current.parentElement;
    if (!parent) return null;
    parts.unshift(Array.from(parent.children).indexOf(current));
    current = parent;
  }
  return current === root && parts.length ? parts.join(".") : null;
}

function resolveElement(root: Element, path: string) {
  let current: Element | undefined = root;
  for (const part of path.split(".")) {
    current = current?.children.item(Number(part)) || undefined;
    if (!current) return null;
  }
  return current;
}

function editableElement(target: EventTarget | null, root: Element) {
  let current = target instanceof Element ? target : null;
  if (current?.closest("[data-inline-editor-ignore], input, textarea, select, option, script, style, svg, [contenteditable='true']")) return null;
  while (current && current !== root) {
    if (editableTags.has(current.tagName) && directTextNodes(current).length) return current;
    current = current.parentElement;
  }
  return null;
}

function clickedTextNodeIndex(event: MouseEvent, element: Element) {
  const nodes = directTextNodes(element);
  const caretPosition = document.caretPositionFromPoint?.(event.clientX, event.clientY);
  let clickedNode = caretPosition?.offsetNode;
  if (!clickedNode) {
    const legacyDocument = document as Document & { caretRangeFromPoint?: (x: number, y: number) => Range | null };
    clickedNode = legacyDocument.caretRangeFromPoint?.(event.clientX, event.clientY)?.startContainer;
  }
  const index = clickedNode ? nodes.indexOf(clickedNode as Text) : -1;
  return index >= 0 ? index : 0;
}

function formatRevisionDate(value: string, locale: "ko" | "en") {
  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function InlinePageEditor() {
  const location = useLocation();
  const { language } = useLanguage();
  const { session, user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [draftText, setDraftText] = useState("");
  const [revisions, setRevisions] = useState<PageTextRevision[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const overrides = useRef(new Map<string, PublishedPageText>());
  const selectionRequest = useRef(0);
  const pagePath = normalizeEditorPagePath(location.pathname);
  const isOwner = user?.app_metadata?.seed_role === "owner";
  const ko = language === "ko";

  const applyOverrides = useCallback(() => {
    const root = document.querySelector("main");
    if (!root) return;
    overrides.current.forEach((record) => {
      const element = resolveElement(root, record.element_path);
      const node = element ? directTextNodes(element)[record.text_node_index] : null;
      if (node && node.data !== record.published_text) node.data = record.published_text;
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    overrides.current = new Map();
    setSelection(null);
    setNotice("");

    loadPublishedPageText(pagePath, language, controller.signal)
      .then((rows) => {
        overrides.current = new Map(rows.map((row) => [pageTextMapKey(row.element_path, row.text_node_index), row]));
        applyOverrides();
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Published page text could not be loaded:", error);
      });

    const root = document.querySelector("main");
    if (!root) return () => controller.abort();
    let queued = false;
    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        applyOverrides();
      });
    });
    observer.observe(root, { childList: true, subtree: true });
    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, [applyOverrides, language, pagePath]);

  useEffect(() => {
    if (!isOwner && editing) setEditing(false);
  }, [editing, isOwner]);

  useEffect(() => {
    if (!editing || !isOwner) {
      document.body.classList.remove("seed-inline-editing");
      document.querySelectorAll("[data-seed-editable]").forEach((element) => element.removeAttribute("data-seed-editable"));
      return;
    }

    document.body.classList.add("seed-inline-editing");
    const root = document.querySelector("main");
    if (!root) return;

    const hover = (event: Event) => {
      document.querySelectorAll("[data-seed-editable]").forEach((element) => element.removeAttribute("data-seed-editable"));
      editableElement(event.target, root)?.setAttribute("data-seed-editable", "true");
    };
    const leave = (event: Event) => {
      const element = editableElement(event.target, root);
      element?.removeAttribute("data-seed-editable");
    };
    const choose = (event: Event) => {
      const element = editableElement(event.target, root);
      if (!element) return;
      const path = elementPath(root, element);
      const nodes = directTextNodes(element);
      const nodeIndex = clickedTextNodeIndex(event as MouseEvent, element);
      const node = nodes[nodeIndex];
      if (!path || !node) return;
      event.preventDefault();
      event.stopPropagation();

      const record = overrides.current.get(pageTextMapKey(path, nodeIndex));
      const nextSelection: Selection = {
        key: { pagePath, locale: language, elementPath: path, textNodeIndex: nodeIndex },
        originalText: record?.original_text || node.data,
        publishedText: record?.published_text || node.data,
      };
      setSelection(nextSelection);
      setDraftText(nextSelection.publishedText);
      setRevisions([]);
      setNotice("");

      if (!session?.access_token) return;
      const requestId = ++selectionRequest.current;
      Promise.all([
        loadPageTextDraft(nextSelection.key, session.access_token),
        loadPageTextRevisions(nextSelection.key, session.access_token),
      ]).then(([draft, history]) => {
        if (selectionRequest.current !== requestId) return;
        if (draft) setDraftText(draft.draft_text);
        setRevisions(history);
      }).catch((error) => {
        if (selectionRequest.current !== requestId) return;
        setNotice(error instanceof Error ? error.message : (ko ? "편집 정보를 불러오지 못했습니다." : "Could not load editing data."));
      });
    };

    root.addEventListener("pointerover", hover, true);
    root.addEventListener("pointerout", leave, true);
    root.addEventListener("click", choose, true);
    return () => {
      document.body.classList.remove("seed-inline-editing");
      document.querySelectorAll("[data-seed-editable]").forEach((element) => element.removeAttribute("data-seed-editable"));
      root.removeEventListener("pointerover", hover, true);
      root.removeEventListener("pointerout", leave, true);
      root.removeEventListener("click", choose, true);
    };
  }, [editing, isOwner, ko, language, pagePath, session?.access_token]);

  useEffect(() => {
    if (!selection) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !busy) setSelection(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [busy, selection]);

  if (!isOwner || !session?.access_token || !user) return null;

  const saveDraft = async () => {
    if (!selection || !draftText.trim()) return setNotice(ko ? "빈 문장은 저장할 수 없습니다." : "Empty text cannot be saved.");
    setBusy(true);
    setNotice("");
    try {
      await savePageTextDraft(selection.key, selection.originalText, draftText, user.id, session.access_token);
      setNotice(ko ? "임시저장했습니다. 공개 화면은 아직 바뀌지 않았습니다." : "Draft saved. The public page has not changed yet.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "임시저장하지 못했습니다." : "Could not save the draft."));
    } finally {
      setBusy(false);
    }
  };

  const publish = async () => {
    if (!selection || !draftText.trim()) return setNotice(ko ? "빈 문장은 공개할 수 없습니다." : "Empty text cannot be published.");
    setBusy(true);
    setNotice("");
    try {
      const record = await publishPageText(selection.key, selection.originalText, draftText, user.id, session.access_token);
      overrides.current.set(pageTextMapKey(record.element_path, record.text_node_index), record);
      applyOverrides();
      const history = await loadPageTextRevisions(selection.key, session.access_token);
      setRevisions(history);
      setSelection({ ...selection, publishedText: record.published_text });
      setNotice(ko ? "저장하고 공개했습니다. 방문자 화면에 즉시 반영됩니다." : "Saved and published. The public page is updated immediately.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "수정한 문장을 공개하지 못했습니다." : "Could not publish the edited text."));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div data-inline-editor-ignore>
      {editing && (
        <div className="fixed bottom-20 left-4 z-[80] max-w-[calc(100vw-2rem)] rounded-lg border border-green-deep/20 bg-navy px-4 py-3 text-sm font-bold text-white shadow-2xl sm:left-6">
          {ko ? "고칠 문장 위에 마우스를 올리고 클릭하세요." : "Point to a sentence and click to edit it."}
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setEditing((value) => !value);
          setSelection(null);
          setNotice("");
        }}
        className={`fixed bottom-5 right-5 z-[90] inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-extrabold shadow-2xl transition ${editing ? "bg-gold text-navy hover:bg-[#d8bd78]" : "bg-green-deep text-white hover:bg-green-mid"}`}
        aria-pressed={editing}
      >
        {editing ? <Check size={18}/> : <Pencil size={18}/>}
        {editing ? (ko ? "편집 종료" : "Finish editing") : (ko ? "페이지 편집" : "Edit page")}
      </button>

      {selection && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-navy/45" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget && !busy) setSelection(null);
        }}>
          <section className="h-full w-full max-w-xl overflow-y-auto bg-paper p-5 shadow-2xl sm:p-7" role="dialog" aria-modal="true" aria-labelledby="inline-editor-title">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="section-kicker">SEED EDITOR</span>
                <h2 id="inline-editor-title" className="mt-2 text-2xl font-extrabold text-navy">{ko ? "문장 바로 수정" : "Edit page text"}</h2>
                <p className="mt-2 text-xs leading-5 text-charcoal/50">{pagePath} · {language.toUpperCase()}</p>
              </div>
              <button type="button" onClick={() => !busy && setSelection(null)} className="grid size-10 shrink-0 place-items-center rounded-full border border-green-deep/15 text-green-deep hover:bg-green-pale" aria-label={ko ? "편집창 닫기" : "Close editor"}><X size={19}/></button>
            </div>

            <div className="mt-7 rounded-lg border border-green-deep/10 bg-white p-4">
              <p className="text-xs font-extrabold text-charcoal/45">{ko ? "처음 게시된 문장" : "Original text"}</p>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-charcoal/65">{selection.originalText}</p>
            </div>

            <label className="field mt-5">
              <span>{ko ? "수정할 문장" : "Edited text"}</span>
              <textarea rows={9} maxLength={20000} value={draftText} onChange={(event) => { setDraftText(event.target.value); setNotice(""); }} autoFocus />
              <small className="font-normal text-charcoal/45">{draftText.length.toLocaleString()} / 20,000</small>
            </label>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={() => void saveDraft()} disabled={busy || !draftText.trim()} className="button-secondary justify-center disabled:cursor-not-allowed disabled:opacity-45"><Save size={17}/>{ko ? "임시저장" : "Save draft"}</button>
              <button type="button" onClick={() => void publish()} disabled={busy || !draftText.trim()} className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-45"><Check size={17}/>{busy ? (ko ? "처리 중" : "Working") : (ko ? "저장 후 공개" : "Save & publish")}</button>
            </div>

            {notice && <p className="mt-4 rounded-lg bg-gold/12 px-4 py-3 text-sm font-bold leading-6 text-charcoal/75" role="status">{notice}</p>}

            <div className="mt-8 border-t border-green-deep/12 pt-6">
              <div className="flex items-center gap-2 text-sm font-extrabold text-navy"><History size={17}/>{ko ? "이전 문장 복구" : "Restore an earlier version"}</div>
              <p className="mt-2 text-xs leading-5 text-charcoal/50">{ko ? "복구할 문장을 선택한 뒤 ‘저장 후 공개’를 누르면 됩니다." : "Select a version, then choose Save & publish."}</p>
              <div className="mt-4 grid gap-2">
                {revisions.length ? revisions.map((revision) => (
                  <button key={revision.id} type="button" onClick={() => { setDraftText(revision.revision_text); setNotice(ko ? "이전 문장을 편집창에 불러왔습니다." : "The earlier text is ready to publish."); }} className="rounded-lg border border-green-deep/12 bg-white p-3 text-left transition hover:border-green-mid hover:bg-green-pale/40">
                    <span className="flex items-center gap-2 text-[11px] font-bold text-green-deep"><Undo2 size={13}/>{formatRevisionDate(revision.changed_at, language)}</span>
                    <span className="mt-1.5 block line-clamp-3 whitespace-pre-wrap text-sm leading-6 text-charcoal/65">{revision.revision_text}</span>
                  </button>
                )) : <p className="rounded-lg bg-white px-4 py-5 text-sm text-charcoal/45">{ko ? "아직 이전 수정 기록이 없습니다." : "There is no earlier revision yet."}</p>}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
