import { Fragment } from "react";
import { Link } from "react-router-dom";
import { citationLinkPattern, citationTokenPattern, isExternalCitationUrl, resolveCitationToken, type ArticleCitations } from "../lib/articleCitations";

export function CitationReference({ number, citations }: { number: number; citations: ArticleCitations }) {
  const source = citations.sources[number - 1];
  if (!source) return null;
  return <sup className="article-citation"><a href={`#article-source-${number}`} aria-label={`${citations.language === "ko" ? "출처" : "Source"} ${number}: ${source.label}`} title={source.label} role="doc-noteref">[{number}]</a></sup>;
}

export function ArticleText({ text, citations }: { text: string; citations: ArticleCitations }) {
  const tokens = Array.from(text.matchAll(citationTokenPattern));
  let cursor = 0;
  const output = [];
  for (const match of tokens) {
    const index = match.index!;
    output.push(text.slice(cursor, index));
    const token = match[0];
    const link = token.match(citationLinkPattern);
    const source = resolveCitationToken(token, citations);
    if (link && !isExternalCitationUrl(link[2]) && !/^\d+$/.test(link[1])) {
      output.push(<Link key={index} to={link[2]} className="font-semibold text-green-deep underline decoration-green-deep/35 underline-offset-4 hover:decoration-green-deep">{link[1]}</Link>);
    } else if (source) {
      const tail = text.slice(index + token.length).replace(citationTokenPattern, "").trim();
      const sourceOnlyTail = !tail || /^[\s.,;:·，。]+$/.test(tail);
      const prefix = text.slice(0, index).replace(citationTokenPattern, "").trimEnd();
      const detachedSourceLabel = sourceOnlyTail && (!prefix || /[.!?。]$/.test(prefix) || /(?:출처|참고|자료|sources?):\s*$/i.test(prefix));
      output.push(<Fragment key={index}>{link && !/^\d+$/.test(link[1]) && !detachedSourceLabel ? link[1] : null}<CitationReference number={source.number} citations={citations}/></Fragment>);
    } else output.push(token);
    cursor = index + token.length;
  }
  output.push(text.slice(cursor));
  return <>{output}</>;
}

export function ArticleSources({ citations, note }: { citations: ArticleCitations; note?: string }) {
  if (!citations.sources.length && !note) return null;
  return <aside className="article-sources" aria-labelledby="article-sources-title" role="doc-endnotes">
    <h2 id="article-sources-title">{citations.language === "ko" ? "출처" : "Sources"}</h2>
    {note && <p className="article-source-note"><ArticleText text={note} citations={citations}/></p>}
    <ol>{citations.sources.map((source) => <li id={`article-source-${source.number}`} key={source.url} role="doc-endnote">
      <span className="article-source-number">[{source.number}]</span>
      <div><a href={source.url} {...(isExternalCitationUrl(source.url) ? { target: "_blank", rel: "noreferrer" } : {})}>{source.label}</a>{source.note && <p>{source.note}</p>}</div>
    </li>)}</ol>
  </aside>;
}
