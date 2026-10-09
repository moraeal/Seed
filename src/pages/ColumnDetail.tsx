import { ArticleText, ArticleSources } from "../components/ArticleCitations";
import { createArticleCitations } from "../lib/articleCitations";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ArticleContinuation from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import ColumnEmbeddedFigure from "../components/ColumnEmbeddedFigure";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import SourceDocumentPanel from "../components/SourceDocumentPanel";
import PspdReformComparison from "../components/PspdReformComparison";
import { getColumn, isHotIssueColumn, publicInterestColumnSlugs } from "../data/columns";
import { localizeColumn } from "../data/localizedContent";
import { getArticleReadingPath } from "../data/articleReadingPaths";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
const imageKey = (src: string) => imageSrc(src).replace(/#.*$/, "").replace(/\?.*$/, "");

export default function ColumnDetail() {
  const { slug = "" } = useParams();
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const fontPreview = slug === "robak-sejong-taxpayer-rights-2026" && searchParams.get("font") === "chosun" && language === "ko";
  const [newspaperFont, setNewspaperFont] = useState(true);
  const [gothicTitle, setGothicTitle] = useState(true);
  const [onlineStyle, setOnlineStyle] = useState(true);
  const [onlineFontStatus, setOnlineFontStatus] = useState<"loading" | "ready" | "error">("loading");
  const [titleFontStatus, setTitleFontStatus] = useState<"loading" | "ready" | "error">("loading");
  const [fontStatus, setFontStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!fontPreview) return;
    let active = true;
    const font = new FontFace("SeedChosunPreview", `url("${import.meta.env.BASE_URL}fonts/chosun-preview/ChosunIlboMyeongjo.woff") format("woff")`, { style: "normal", weight: "400", display: "swap" });
    const titleFont = new FontFace("SeedChosunGothicPreview", 'url("https://cdn.jsdelivr.net/gh/fontbee/font@main/CHOSUN/ChosunKg.woff") format("woff")', { style: "normal", weight: "400", display: "swap" });
    const onlineFont = new FontFace("SeedChosunOnlineTitle", 'url("https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-kr@5.2.8/files/noto-sans-kr-korean-700-normal.woff2") format("woff2")', { style: "normal", weight: "700", display: "swap" });
    setOnlineFontStatus("loading");
    onlineFont.load().then((loaded) => {
      if (!active) return;
      document.fonts.add(loaded);
      setOnlineFontStatus("ready");
    }).catch(() => { if (active) setOnlineFontStatus("error"); });
    setTitleFontStatus("loading");
    titleFont.load().then((loaded) => {
      if (!active) return;
      document.fonts.add(loaded);
      setTitleFontStatus("ready");
    }).catch(() => { if (active) setTitleFontStatus("error"); });
    setFontStatus("loading");
    font.load().then((loaded) => {
      if (!active) return;
      document.fonts.add(loaded);
      setFontStatus("ready");
    }).catch((error) => { if (active) { console.warn("Chosun preview font could not load:", error); setFontStatus("error"); } });
    return () => { active = false; document.fonts.delete(font); document.fonts.delete(titleFont); document.fonts.delete(onlineFont); };
  }, [fontPreview]);
  const ko = language === "ko";
  const originalColumn = getColumn(slug);
  const column = originalColumn ? localizeColumn(originalColumn, language) : undefined;

  if (!column) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "글을 찾을 수 없습니다." : "Article not found."}</h1><Link to="/columns" className="button-primary mt-7">{ko ? "칼럼 목록" : "Columns"}</Link></div>;

  const citations = createArticleCitations(column.sources, column, language);
  const isLongRead = column.readMinutes >= 8;
  const hotIssue = isHotIssueColumn(column.slug);
  const publicInterest = publicInterestColumnSlugs.has(column.slug);
  const readingPath = getArticleReadingPath("column", column.slug, language);

  const seenImages = new Set(column.displayHero === false ? [] : [imageKey(column.heroImage.src)]);
  const bodyImages = [
    ...(column.displayInlineImage === false ? [] : [{ ...column.inlineImage, afterSection: 3 }]),
    ...(column.additionalImages ?? []),
  ].filter((image) => {
    const key = imageKey(image.src);
    if (seenImages.has(key)) return false;
    seenImages.add(key);
    return true;
  });

  const referenceVideoSection = column.referenceVideo && <section className={`article-section ${isLongRead ? "article-section-long" : ""}`} aria-labelledby="reference-video-title">
    <span className="section-kicker">{ko ? "참고 영상" : "REFERENCE VIDEO"}</span>
    <h2 id="reference-video-title" className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">{column.referenceVideo.title}</h2>
    <p className="mt-3 text-sm leading-6 text-charcoal/60 sm:text-[15px]">{column.referenceVideo.description}</p>
    <InteractiveFigure src={column.referenceVideo.thumbnailSrc} alt={column.referenceVideo.thumbnailAlt} caption={column.referenceVideo.vertical ? "" : column.referenceVideo.description} credit={column.referenceVideo.credit} sourceUrl={`https://www.youtube.com/${column.referenceVideo.vertical ? "shorts/" : "watch?v="}${column.referenceVideo.youtubeId}`} youtubeId={column.referenceVideo.youtubeId} figureClassName={`mt-5 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)] ${column.referenceVideo.vertical ? "mx-auto max-w-[24rem]" : ""}`} imageClassName={column.referenceVideo.vertical ? "aspect-[9/16] w-full object-cover" : "aspect-video w-full object-cover"} videoClassName={column.referenceVideo.vertical ? "aspect-[9/16]" : "aspect-video"} captionClassName={column.referenceVideo.vertical ? "flex flex-col border-t border-green-deep/10 px-4 py-3 text-xs leading-5" : undefined} captionCreditClassName={column.referenceVideo.vertical ? "text-left text-xs font-semibold text-green-deep/75" : undefined} />
  </section>;

  return <article className={`bg-paper ${fontPreview && !onlineStyle && gothicTitle && titleFontStatus === "ready" ? "chosun-gothic-preview" : ""} ${fontPreview && onlineStyle ? "chosun-online-preview" : ""} ${fontPreview && onlineStyle && onlineFontStatus === "ready" ? "chosun-online-title" : ""}`}>
    {fontPreview && <style>{`.chosun-font-preview .article-copy { font-family: "SeedChosunPreview", serif; font-weight: 400; color: #000000; } .chosun-gothic-preview :is(.article-detail-title, .article-section-title) { font-family: "SeedChosunGothicPreview", sans-serif; font-weight: 400; }
      .chosun-online-title :is(.article-detail-title, .article-section-title) { font-family: "SeedChosunOnlineTitle", "Noto Sans KR", sans-serif; font-weight: 700; }
      .chosun-online-preview .article-detail-title { font-size: 2.375rem; line-height: 1.4; letter-spacing: -.5px; }
      .chosun-online-preview .article-content-frame { max-width: 712px; }
      .chosun-online-preview .article-section-title { font-size: 1.5rem; line-height: 1.4; letter-spacing: -.5px; }
      .reading-surface .chosun-online-preview .article-copy { font-size: var(--reading-font-size, 1.125rem); line-height: 1.74 !important; letter-spacing: -.5px; margin-top: 0; margin-bottom: 24px; word-break: break-all; }
      .chosun-online-preview .chosun-font-preview .article-copy { color: #222; -webkit-text-stroke: .2px #222; }
      .chosun-online-preview .chosun-font-preview .article-copy :is(a, strong, b) { -webkit-text-stroke: 0; }
      @media (max-width: 689px) { .chosun-online-preview .article-detail-title { font-size: 1.5rem; line-height: 1.42; } .chosun-online-preview .article-section-title { font-size: 1.25rem; line-height: 1.45; } }
    `}</style>}
    <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
      <div className="container-page max-w-5xl">{hotIssue && <Link to="/news" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "핫이슈 목록" : "Hot Issues"}</Link>}{publicInterest && <Link to="/monitoring/public-interest" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "공익감시 목록" : "Public-Interest Watch"}</Link>}<div className="pt-3">{fontPreview && <div className="mb-5 flex flex-wrap items-center gap-3 border-b border-green-deep/20 pb-4">
        <span className="text-sm font-bold">기사 글꼴·간격 비교</span>
        <button type="button" aria-pressed={!gothicTitle && !onlineStyle} onClick={() => { setGothicTitle(false); setOnlineStyle(false); setNewspaperFont(false); }} className={`rounded border px-4 py-2 text-sm ${!gothicTitle && !onlineStyle ? "border-green-deep bg-green-deep text-white" : "border-green-deep/25 bg-white"}`}>씨앗 기본 스타일</button>
        <button type="button" aria-pressed={gothicTitle && !onlineStyle} onClick={() => { setGothicTitle(true); setOnlineStyle(false); setNewspaperFont(true); }} className={`rounded border px-4 py-2 text-sm ${gothicTitle && !onlineStyle ? "border-green-deep bg-green-deep text-white" : "border-green-deep/25 bg-white"}`}>앞선 시험 스타일</button>
        <button type="button" aria-pressed={onlineStyle} onClick={() => { setOnlineStyle(true); setNewspaperFont(true); }} className={`rounded border px-4 py-2 text-sm ${onlineStyle ? "border-green-deep bg-green-deep text-white" : "border-green-deep/25 bg-white"}`}>조선일보 온라인 스타일</button>
        <span role="status" className="w-full text-sm text-charcoal/70">{onlineStyle ? (onlineFontStatus === "loading" ? "온라인판 제목 글꼴을 불러오고 있습니다." : onlineFontStatus === "error" ? "온라인판 제목 글꼴을 불러오지 못했습니다. 기존 글꼴로 표시합니다." : "제목: Noto Sans KR 굵은체 · 본문: 명조 18px, 줄 간격 1.74, 자간 −0.5px, 획 보정 0.2px. 제목은 씨앗의 남색을 유지합니다.") : titleFontStatus === "loading" ? "제목 글꼴을 불러오고 있습니다." : titleFontStatus === "error" ? "제목 글꼴을 불러오지 못했습니다. 기존 제목으로 표시합니다." : gothicTitle ? "제목·중간제목: 조선굵은고딕. 본문 글꼴은 아래에서 별도로 비교할 수 있습니다." : "기존 제목으로 보고 있습니다. 본문 글꼴은 아래에서 별도로 비교할 수 있습니다."}</span>
      </div>}<h1 className="article-detail-title">{column.title}</h1>{column.slug === "real-estate-supervisor-citizens-accounts" && <p className="mt-4 text-sm leading-7 text-charcoal/80 sm:text-base">
        {ko ? "이 글은 김현정 의원이 2026년 9월 23일 재발의한 「부동산감독원 설치 및 운영에 관한 법률안」(의안번호 2221573)에 대한 논평입니다. " : "This commentary examines Rep. Kim Hyun-jung's revised Real Estate Supervisory Agency Bill, introduced on September 23, 2026 (bill no. 2221573). "}
        <Link to="/monitoring/legislation/bill-2221573/" className="font-semibold text-green-deep underline underline-offset-4">{ko ? "법안과 쟁점 보기" : "Bill and key issues"}</Link>
        <span className="mx-2 text-charcoal/35" aria-hidden="true">·</span>
        <a href="https://v.daum.net/v/20260923210127048" target="_blank" rel="noreferrer" className="font-semibold text-green-deep underline underline-offset-4">{ko ? "9월 23일 관련 보도 보기(아이뉴스24)" : "September 23 report (iNews24)"}</a>
      </p>}{column.summary && <p className="article-summary"><ArticleText text={column.summary} citations={citations}/></p>}</div><div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">{hotIssue && <span className="font-extrabold text-green-deep">{ko ? "핫이슈 · 쟁점 칼럼" : "HOT ISSUE · COMMENTARY"}</span>}<div className="group relative"><button type="button" aria-describedby={column.authorBio ? "column-author-bio" : undefined} className="font-extrabold text-green-deep underline decoration-green-deep/25 underline-offset-4 outline-none transition hover:text-navy focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">{column.author}</button>{column.authorBio && <div id="column-author-bio" role="tooltip" className="invisible absolute left-0 top-full z-30 mt-2 w-[min(22rem,calc(100vw-2rem))] translate-y-1 border border-green-deep/15 bg-white p-4 text-left text-sm font-normal leading-6 text-charcoal/70 opacity-0 shadow-[0_16px_45px_rgba(15,36,56,.18)] transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"><strong className="block text-sm font-extrabold text-navy">{column.author}</strong><span className="mt-1.5 block">{column.authorBio}</span></div>}</div><time>{column.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${column.readMinutes}분` : `${column.readMinutes} min read`}</span>{column.sourceDocument && <a href="#source-document" className="flex items-center gap-1 font-bold text-green-deep hover:underline"><FileText size={14}/>{ko ? "성명서 원문 대조" : "Compare source"}</a>}<ShareButton title={`${column.title} - ${column.subtitle}`} text={column.summary} className="ml-auto" /></div></div>
    </header>

    <div className="article-content-frame py-8 sm:py-12">
      {column.slug === "film-imagination-history-distortion-ryoma-2026" && <section className="mb-10" aria-labelledby="hero-history-short-title">
        <h2 id="hero-history-short-title" className="mb-4 text-xl font-extrabold text-navy sm:text-2xl">{ko ? "영웅 만들기와 죽이기" : "Making and Unmaking Heroes"}</h2>
        <div className="mx-auto aspect-[9/16] w-full max-w-[24rem] overflow-hidden bg-black shadow-[0_12px_34px_rgba(23,76,58,.08)]">
          <iframe src="https://www.youtube-nocookie.com/embed/LSkd1bO9DM8?rel=0" title={ko ? "일본은 영웅을 만들고, 우리는 두 번 죽이나? — 씨앗의 소리 쇼츠" : "Japan Makes Heroes. Do We Kill Ours Twice? — SEED VOICE Short in Korean"} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
        <p className="mt-3 text-center text-sm"><a href="https://youtube.com/shorts/LSkd1bO9DM8" target="_blank" rel="noreferrer" className="font-semibold text-green-deep underline decoration-green-deep/30 underline-offset-4">{ko ? "유튜브에서 보기" : "Watch on YouTube"}</a></p>
      </section>}

      {column.displayHero !== false && <InteractiveFigure src={column.heroImage.src} alt={column.heroImage.alt} caption={column.heroImage.caption} credit={column.heroImage.credit} sourceUrl={column.heroImage.sourceUrl} figureClassName="overflow-hidden bg-white shadow-[0_12px_34px_rgba(23,76,58,.08)]" imageClassName="aspect-[16/9] w-full object-cover" />}

      {column.sourceDocument && <SourceDocumentPanel document={column.sourceDocument} ko={ko} />}
      {column.slug === "pspd-prosecution-reform-state-power-watch-2026" && <PspdReformComparison ko={ko} />}

      <div className={`reading-column mt-10 ${fontPreview && newspaperFont && fontStatus === "ready" ? "chosun-font-preview" : ""}`}>
        {fontPreview && <div className="mb-8 flex flex-wrap items-center gap-3 border-y border-green-deep/20 py-4">
          <span className="text-sm font-bold">본문 글꼴 비교</span>
          <button type="button" aria-pressed={!newspaperFont} onClick={() => setNewspaperFont(false)} className={`rounded border px-4 py-2 text-sm ${!newspaperFont ? "border-green-deep bg-green-deep text-white" : "border-green-deep/25 bg-white"}`}>기존 글꼴</button>
          <button type="button" aria-pressed={newspaperFont} onClick={() => setNewspaperFont(true)} className={`rounded border px-4 py-2 text-sm ${newspaperFont ? "border-green-deep bg-green-deep text-white" : "border-green-deep/25 bg-white"}`}>조선일보 명조체</button>
          <span role="status" className="w-full text-sm text-charcoal/70">{fontStatus === "loading" ? "신문 글꼴을 불러오고 있습니다. 처음에는 잠시 걸릴 수 있습니다." : fontStatus === "error" ? "신문 글꼴을 불러오지 못했습니다. 새로고침해 주세요." : newspaperFont ? (onlineStyle ? "온라인판 설정의 조선일보 명조체로 읽고 있습니다. 본문 색상 #222와 획 보정을 함께 적용했습니다." : "조선일보 명조체로 읽고 있습니다.") : "기존 글꼴로 읽고 있습니다."}</span>
        </div>}
        {column.sections.map((section, index) => <Fragment key={`${index}-${section.title}`}><section className={index === 0 ? "" : `article-section ${isLongRead ? "article-section-long" : ""}`}>
          {section.title && <h2 className="article-section-title">{section.title}</h2>}
          {section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 28)}`} className={column.presentation === "poem" ? "mt-6 whitespace-pre-line font-serif text-[17px] leading-[2] text-charcoal/85 sm:text-xl sm:leading-[2]" : `article-copy ${isLongRead ? "article-copy-long" : ""}`}><ArticleText text={paragraph} citations={citations}/></p>)}
          {section.quote && <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl">{section.quote.map((line, lineIndex) => <span key={`${lineIndex}-${line}`} className="block"><ArticleText text={line} citations={citations}/></span>)}</blockquote>}
          {bodyImages.filter((image) => image.afterSection === index).map((image) => <InteractiveFigure key={imageKey(image.src)} src={image.src} alt={image.alt} caption={image.caption} credit={image.credit} sourceUrl={image.sourceUrl} figureClassName="my-12 overflow-hidden bg-white shadow-[0_12px_34px_rgba(23,76,58,.08)]" imageClassName={"contain" in image && image.contain ? "block h-auto w-full" : "aspect-[16/10] w-full object-cover"} />)}
          {column.embeddedFigures?.filter((figure) => figure.afterSection === index).map((figure) => <ColumnEmbeddedFigure key={`${figure.kind}-${index}`} figure={figure} ko={ko} />)}
        </section>{column.referenceVideo?.afterSection === index && referenceVideoSection}</Fragment>)}
        {column.referenceVideo && column.referenceVideo.afterSection === undefined && referenceVideoSection}
        <ArticleSources citations={citations} note={column.sourceNote}/>
        <ContentAccountability postSlug={column.slug} publishedDate={column.date} />
        <CommentSection postSlug={column.slug} />
        <ArticleContinuation {...readingPath} />
      </div>
    </div>
  </article>;
}

