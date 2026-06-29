import AdBanner from "../components/AdBanner";
import DailyContentGrid from "../components/DailyContentGrid";
import DonationBanner from "../components/DonationBanner";
import HeroSlider from "../components/HeroSlider";
import InterestIssueForm from "../components/InterestIssueForm";
import IssueSection from "../components/IssueSection";
import SeedCitizen from "../components/SeedCitizen";
import TopTabs from "../components/TopTabs";
import TrendingProposals from "../components/TrendingProposals";
import { issueSections } from "../data/homeData";

export default function Home() {
  return <>
    <section className="bg-ivory py-8 sm:py-11"><div className="container-page"><div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end"><div><p className="text-xs font-extrabold tracking-[0.15em] text-green-mid">CITIZENSHIP IN ACTION</p><h2 className="mt-2 text-xl font-extrabold text-navy sm:text-2xl">시민의 작은 질문이 자유의 토양을 바꿉니다.</h2></div><p className="max-w-xl text-sm leading-6 text-charcoal/60">생활 속 문제를 시민의 언어로 묻고, 함께 토론하며, 작은 실험으로 바꾸는 자유시민 플랫폼입니다.</p></div><div className="grid gap-5 lg:grid-cols-[1.55fr_0.8fr]"><HeroSlider /><TopTabs /></div></div></section>
    <DonationBanner />
    <TrendingProposals />
    {issueSections.map((issue, index) => <IssueSection key={issue.title} issue={issue} index={index} />)}
    <SeedCitizen />
    <InterestIssueForm />
    <AdBanner />
    <DailyContentGrid />
  </>;
}
