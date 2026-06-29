import { MAGAZINE_URL } from "../data/homeData";

export default function Forum() {
  return (
    <section className="h-[calc(100dvh-72px)] min-h-[560px] bg-white">
      <iframe
        src={MAGAZINE_URL}
        title="전인미답 매거진"
        className="h-full w-full border-0"
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
