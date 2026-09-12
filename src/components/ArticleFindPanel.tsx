import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

type ArticleFindPanelProps = {
  open: boolean;
  onClose: () => void;
  language: "ko" | "en";
};

const RESULT_HIGHLIGHT = "seed-article-find-results";
const CURRENT_HIGHLIGHT = "seed-article-find-current";

function getHighlightApi() {
  const css = CSS as typeof CSS & { highlights?: Map<string, unknown> & { set: (name: string, value: unknown) => void; delete: (name: string) => void } };
  const HighlightCtor = (window as typeof window & { Highlight?: new (...ranges: Range[]) => unknown }).Highlight;
  return { registry: css.highlights, HighlightCtor };
}

function clearHighlights() {
  const { registry } = getHighlightApi();
  registry?.delete(RESULT_HIGHLIGHT);
  registry?.delete(CURRENT_HIGHLIGHT);
}

function collectRanges(root: HTMLElement, query: string) {
  const ranges: Range[] = [];
  const needle = query.toLocaleLowerCase();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.textContent?.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, noscript, input, textarea, button, svg, [data-find-ignore]")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.textContent ?? "";
    const haystack = text.toLocaleLowerCase();
    let from = 0;
    while (from <= haystack.length - needle.length) {
      const at = haystack.indexOf(needle, from);
      if (at === -1) break;
      const range = document.createRange();
      range.setStart(node, at);
      range.setEnd(node, at + query.length);
      ranges.push(range);
      from = at + Math.max(query.length, 1);
    }
  }
  return ranges;
}

export default function ArticleFindPanel({ open, onClose, language }: ArticleFindPanelProps) {
  const [query, setQuery] = useState("");
  const [ranges, setRanges] = useState<Range[]>([]);
  const [current, setCurrent] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const ko = language === "ko";

  const paint = useCallback((nextRanges: Range[], nextCurrent: number) => {
    clearHighlights();
    const { registry, HighlightCtor } = getHighlightApi();
    if (!registry || !HighlightCtor || nextRanges.length === 0) return;
    registry.set(RESULT_HIGHLIGHT, new HighlightCtor(...nextRanges));
    if (nextCurrent >= 0 && nextRanges[nextCurrent]) {
      registry.set(CURRENT_HIGHLIGHT, new HighlightCtor(nextRanges[nextCurrent]));
    }
  }, []);

  const goTo = useCallback((index: number, nextRanges = ranges) => {
    if (nextRanges.length === 0) return;
    const normalized = (index + nextRanges.length) % nextRanges.length;
    setCurrent(normalized);
    paint(nextRanges, normalized);
    const box = nextRanges[normalized].getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + box.top - 150, behavior: "smooth" });
  }, [paint, ranges]);

  const runSearch = useCallback((value: string) => {
    const trimmed = value.trim();
    clearHighlights();
    if (!trimmed) {
      setRanges([]);
      setCurrent(-1);
      return;
    }
    const root = document.querySelector("main") as HTMLElement | null;
    if (!root) return;
    const nextRanges = collectRanges(root, trimmed);
    setRanges(nextRanges);
    if (nextRanges.length) {
      setCurrent(0);
      paint(nextRanges, 0);
      requestAnimationFrame(() => {
        const box = nextRanges[0].getBoundingClientRect();
        window.scrollTo({ top: window.scrollY + box.top - 150, behavior: "smooth" });
      });
    } else {
      setCurrent(-1);
    }
  }, [paint]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim() && ranges.length > 0) goTo(current + 1);
    else runSearch(query);
  };

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Enter" && document.activeElement === inputRef.current && ranges.length > 0) {
        event.preventDefault();
        goTo(event.shiftKey ? current - 1 : current + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [current, goTo, onClose, open, ranges.length]);

  useEffect(() => {
    if (open) return;
    clearHighlights();
    setQuery("");
    setRanges([]);
    setCurrent(-1);
  }, [open]);

  useEffect(() => () => clearHighlights(), []);

  if (!open) return null;

  return (
    <>
      <style>{`
        ::highlight(${RESULT_HIGHLIGHT}) { background: #fde68a; color: inherit; }
        ::highlight(${CURRENT_HIGHLIGHT}) { background: #f59e0b; color: #111827; }
      `}</style>
      <div className="fixed left-1/2 top-[78px] z-[70] w-[min(94vw,520px)] -translate-x-1/2 rounded-xl border border-green-deep/15 bg-white p-2.5 shadow-[0_14px_34px_rgba(17,43,37,.18)] md:left-auto md:right-5 md:translate-x-0" role="search" aria-label={ko ? "이 글에서 찾기" : "Find in this article"}>
        <form onSubmit={submit} className="flex items-center gap-1.5">
          <Search size={17} className="ml-1 shrink-0 text-green-deep" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              setQuery(value);
              runSearch(value);
            }}
            placeholder={ko ? "이 글에서 찾기" : "Find in this article"}
            className="min-w-0 flex-1 rounded-md border-0 bg-transparent px-2 py-2 text-sm font-medium text-charcoal outline-none placeholder:text-charcoal/40"
            aria-label={ko ? "찾을 단어" : "Search term"}
          />
          <span className="min-w-[52px] text-center text-xs font-bold tabular-nums text-charcoal/55" aria-live="polite">
            {query.trim() ? (ranges.length ? `${current + 1} / ${ranges.length}` : `0 / 0`) : ""}
          </span>
          <button type="button" onClick={() => goTo(current - 1)} disabled={!ranges.length} className="grid size-8 place-items-center rounded-md text-green-deep hover:bg-green-pale disabled:opacity-25" aria-label={ko ? "이전 결과" : "Previous result"}><ChevronUp size={17} /></button>
          <button type="button" onClick={() => goTo(current + 1)} disabled={!ranges.length} className="grid size-8 place-items-center rounded-md text-green-deep hover:bg-green-pale disabled:opacity-25" aria-label={ko ? "다음 결과" : "Next result"}><ChevronDown size={17} /></button>
          <button type="button" onClick={onClose} className="grid size-8 place-items-center rounded-md text-charcoal/55 hover:bg-green-pale hover:text-green-deep" aria-label={ko ? "찾기 닫기" : "Close find"}><X size={17} /></button>
        </form>
      </div>
    </>
  );
}
