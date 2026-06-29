import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import DictionaryCard from "../components/DictionaryCard";
import SectionTitle from "../components/SectionTitle";
import { dictionary } from "../data/dictionary";

export default function CivicDictionary() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return dictionary;
    return dictionary.filter((entry) =>
      [entry.word, entry.oldImage, entry.seedDefinition, entry.civicMeaning, entry.category]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [query]);

  return (
    <section className="section-band">
      <div className="container-page">
        <SectionTitle
          eyebrow="Civic Dictionary"
          title="빼앗긴 시민언어 사전"
          description="힘을 잃은 시민언어를 삶의 언어로 되찾고, 공론장에서 다시 사용할 수 있게 정리합니다."
        />
        <label className="mt-8 flex max-w-xl items-center gap-3 rounded-lg border border-green-deep/15 bg-paper px-4 py-3 shadow-soft">
          <Search size={19} className="text-green-deep" aria-hidden />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="단어, 분야, 설명 검색"
            className="w-full bg-transparent text-base outline-none placeholder:text-charcoal/45"
          />
        </label>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((entry) => (
            <DictionaryCard key={entry.word} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
