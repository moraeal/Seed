import { Download, ExternalLink, FileText } from "lucide-react";
import type { SeedColumn } from "../data/columns";

const assetSrc = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function SourceDocumentPanel({ document, ko }: { document: NonNullable<SeedColumn["sourceDocument"]>; ko: boolean }) {
  const pdfUrl = assetSrc(document.pdfPath);

  return <aside id="source-document" className="mt-8 scroll-mt-24 overflow-hidden border border-green-deep/15 bg-white shadow-[0_16px_45px_rgba(23,76,58,.07)]" aria-labelledby="source-document-title">
    <div className="border-b border-green-deep/10 bg-green-pale/45 px-5 py-5 sm:px-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <span className="section-kicker flex items-center gap-2"><FileText size={15}/>{ko ? "원문 대조자료" : "SOURCE DOCUMENT"}</span>
          <h2 id="source-document-title" className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{document.title}</h2>
          <p className="mt-2 text-sm leading-6 text-charcoal/65">{document.description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a href={pdfUrl} target="_blank" rel="noreferrer" className="button-secondary min-h-9 px-3 py-2 text-xs"><ExternalLink size={15}/>{ko ? "새 창에서 보기" : "Open PDF"}</a>
          <a href={pdfUrl} download className="button-primary min-h-9 px-3 py-2 text-xs"><Download size={15}/>{ko ? "PDF 내려받기" : "Download"}</a>
        </div>
      </div>
    </div>
    <details className="group">
      <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-green-deep marker:hidden sm:px-7">
        <span className="group-open:hidden">{ko ? `성명서 원문 ${document.pageImages.length}쪽 펼쳐 보기` : `Show all ${document.pageImages.length} pages`}</span>
        <span className="hidden group-open:inline">{ko ? "성명서 원문 접기" : "Hide source document"}</span>
      </summary>
      <div className="grid gap-5 border-t border-green-deep/10 bg-charcoal/[.025] p-4 sm:p-6 lg:grid-cols-2">
        {document.pageImages.map((page, index) => <figure key={page} className="overflow-hidden border border-charcoal/10 bg-white shadow-sm">
          <img src={assetSrc(page)} alt={ko ? `경실련 농지전수조사 성명서 원문 ${index + 1}쪽` : `Page ${index + 1} of CCEJ's farmland survey statement`} className="block h-auto w-full" loading="lazy" />
          <figcaption className="border-t border-charcoal/10 px-4 py-2 text-center text-xs text-charcoal/50">{ko ? `${index + 1}쪽` : `Page ${index + 1}`}</figcaption>
        </figure>)}
      </div>
    </details>
  </aside>;
}
