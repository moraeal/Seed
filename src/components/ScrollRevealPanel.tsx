import { ChevronDown } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  kicker: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  accent?: "green" | "gold" | "navy" | "soft";
  children: ReactNode;
};

const accentClasses = {
  green: "border-green-deep",
  gold: "border-gold",
  navy: "border-navy",
  soft: "border-green-mid",
};

export default function ScrollRevealPanel({ kicker, title, description, link, linkLabel, accent = "green", children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || open) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [open]);

  return (
    <section ref={ref} className={`border-t-2 ${accentClasses[accent]} bg-paper`} aria-expanded={open}>
      <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <span className="section-kicker">{kicker}</span>
          <h2 className="editorial-title mt-2 text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-charcoal/55">{description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <Link to={link} className="text-link text-sm">{linkLabel}</Link>
          <ChevronDown className={`text-green-deep transition duration-700 ${open ? "rotate-180" : ""}`} size={20} aria-hidden="true" />
        </div>
      </div>

      <div className={`grid transition-[grid-template-rows,opacity] duration-700 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className={`pb-10 transition-transform duration-700 ease-out ${open ? "translate-y-0" : "translate-y-5"}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
