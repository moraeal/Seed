import { Fragment } from "react";

export default function TaxSourceText({ text, sources }: { text: string; sources: { url: string }[] }) {
  return <>{text.split(/(\[\d+\])/g).map((part, index) => {
    const number = part.match(/^\[(\d+)\]$/)?.[1];
    const source = number ? sources[Number(number) - 1] : undefined;
    return source ? <sup key={index} className="ml-0.5 text-[10px] font-normal text-charcoal/45"><a href={source.url} target="_blank" rel="noreferrer" aria-label={`Source ${number}`}>[{number}]</a></sup> : <Fragment key={index}>{part}</Fragment>;
  })}</>;
}
