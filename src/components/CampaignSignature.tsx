import { useEffect, useRef } from "react";
import "./CampaignSignature.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import { noMoreTaxLanding } from "../data/noMoreTaxLanding";
import { useLanguage } from "../i18n";

const petitionUrl = "https://seedvoice.mycafe24.com/nmt/";
const declarationPath = "/columns/no-more-tax-increases-civic-declaration-2026";

export default function CampaignSignature() {
  const { language } = useLanguage();
  const { hash } = useLocation();
  const ko = language === "ko";
  const campaign = noMoreTaxLanding[language];

  const frameRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const origin = new URL(petitionUrl).origin;
    function onLayout(event: MessageEvent) {
      if (!frame || event.source !== frame.contentWindow || event.origin !== origin) return;
      const data = event.data;
      if (data?.type !== "nmt:layout" || !Number.isFinite(data.height) || data.height < 1 || data.height > 100000) return;
      frame.style.height = (Math.ceil(data.height) + 2) + "px";
      if (Number.isFinite(data.scrollTo) && data.scrollTo >= 0 && data.scrollTo <= data.height) {
        const top = window.scrollY + frame.getBoundingClientRect().top + data.scrollTo;
        window.scrollTo({ top: top - parseFloat(getComputedStyle(frame).scrollMarginTop || "0") });
      }
    }
    window.addEventListener("message", onLayout);
    return () => window.removeEventListener("message", onLayout);
  }, []);

  // The petition's “campaign original” link returns to this route inside the frame.
  if (window.self !== window.top && hash === "#campaign-signature") {
    return <Navigate to={declarationPath} replace />;
  }

  return (
    <section id="campaign-signature" className="petition-page min-w-0 scroll-mt-52" aria-labelledby="campaign-signature-title">
      <h1 id="campaign-signature-title" className="sr-only">{campaign.heading}</h1>
      <iframe
        ref={frameRef}
        id="campaign-signature-form"
        title={ko ? "노모어택스 시민 서명운동" : "No More Tax citizen petition (in Korean)"}
        src={hash === "#campaign-signature-form" ? petitionUrl + "#campaign-sign-form" : petitionUrl}
        className="petition-frame block w-full scroll-mt-52 border border-green-deep/15 bg-white"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-presentation"
        allow="fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <details className="mt-4 border-y border-green-deep/20 py-4">
        <summary className="cursor-pointer font-bold text-green-deep">
          {ko ? "서명운동 안내와 관련 자료" : "Campaign information and related reading"}
        </summary>
        <p className="mt-3 leading-7">{campaign.introduction}</p>
        {campaign.faq.map((item) => (
          <div key={item.question} className="mt-4">
            <h2 className="font-bold text-navy">{item.question}</h2>
            <p className="mt-1 leading-7">{item.answer}</p>
            <Link to={item.href} className="font-bold text-green-deep underline underline-offset-4">{item.linkLabel}</Link>
          </div>
        ))}
      </details>
    </section>
  );
}
