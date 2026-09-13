import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ARTICLE_ARCHIVE_PAGE_SIZE = 10;
export const RECENT_ARTICLE_COUNT = 5;

export type ArticleArchiveItem = {
  key: string;
  to: string;
  title: string;
  summary: string;
  date: string;
};

type ArticleArchiveProps = {
  items: ArticleArchiveItem[];
  ko: boolean;
};

export default function ArticleArchive({ items, ko }: ArticleArchiveProps) {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(items.length / ARTICLE_ARCHIVE_PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [items.length, ko]);

  if (items.length === 0) return null;

  const start = (page - 1) * ARTICLE_ARCHIVE_PAGE_SIZE;
  const pageItems = items.slice(start, start + ARTICLE_ARCHIVE_PAGE_SIZE);
  const firstColumnLength = Math.ceil(pageItems.length / 2);
  const pageColumns = [pageItems.slice(0, firstColumnLength), pageItems.slice(firstColumnLength)];

  const movePage = (nextPage: number) => {
    setPage(nextPage);
    window.requestAnimationFrame(() => {
      document.getElementById("article-archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="article-archive" className="mt-11 scroll-mt-24" aria-labelledby="article-archive-title">
      <div className="flex items-end justify-between gap-4 border-b-2 border-navy pb-3">
        <div>
          <span className="section-kicker">ARCHIVE</span>
          <h2 id="article-archive-title" className="mt-1.5 text-2xl font-extrabold text-navy">
            {ko ? "지난 기사" : "Earlier articles"}
          </h2>
        </div>
        <p className="text-xs font-semibold text-charcoal/45">
          {ko ? `총 ${items.length}건` : `${items.length} articles`}
        </p>
      </div>

      <div className="mt-4 grid gap-x-8 md:grid-cols-2">
        {pageColumns.map((column, columnIndex) => (
          <div key={columnIndex} className={column.length ? "border-t border-green-deep/15" : ""}>
            {column.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className="group block border-b border-green-deep/15 px-1 py-4 transition-colors hover:bg-green-pale/55 sm:px-2"
              >
                <time className="text-[11px] font-semibold tracking-wide text-charcoal/40">
                  {item.date.replace(/-/g, ".")}
                </time>
                <h3 className="editorial-title mt-1 line-clamp-2 text-[1.05rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[0.82rem] leading-5 text-charcoal/55 sm:text-sm sm:leading-6">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <nav className="mt-7 flex items-center justify-center gap-1.5" aria-label={ko ? "지난 기사 페이지" : "Archive pages"}>
          <button
            type="button"
            onClick={() => movePage(page - 1)}
            disabled={page === 1}
            className="grid size-10 place-items-center border border-green-deep/20 text-green-deep transition hover:bg-green-pale disabled:cursor-not-allowed disabled:opacity-30"
            aria-label={ko ? "이전 페이지" : "Previous page"}
          >
            <ChevronLeft size={17} />
          </button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => movePage(pageNumber)}
              aria-current={pageNumber === page ? "page" : undefined}
              className={`size-10 border text-sm font-extrabold transition ${pageNumber === page ? "border-green-deep bg-green-deep text-white" : "border-green-deep/20 text-green-deep hover:bg-green-pale"}`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            onClick={() => movePage(page + 1)}
            disabled={page === pageCount}
            className="grid size-10 place-items-center border border-green-deep/20 text-green-deep transition hover:bg-green-pale disabled:cursor-not-allowed disabled:opacity-30"
            aria-label={ko ? "다음 페이지" : "Next page"}
          >
            <ChevronRight size={17} />
          </button>
        </nav>
      )}
    </section>
  );
}
