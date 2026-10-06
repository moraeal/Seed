import { Fragment } from "react";

export default function TaxSourceText({ text, sources }: { text: string; sources: { url: string }[] }) {
  return <>{text.split(/(\[[^\]]+\]\((?:https?:\/\/|\/)[^\s)]+\)|\[\d+\])/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="text-green-deep underline decoration-green-deep/30 underline-offset-4 hover:decoration-green-deep" {...(link[2].startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{link[1]}</a>;
    const number = part.match(/^\[(\d+)\]$/)?.[1];
    const source = number ? sources[Number(number) - 1] : undefined;
    return source ? <sup key={index} className="ml-0.5 text-[10px] font-normal text-charcoal/45"><a href={source.url} target="_blank" rel="noreferrer" aria-label={`Source ${number}`}>[{number}]</a></sup> : <Fragment key={index}>{part}</Fragment>;
  })}</>;
}
