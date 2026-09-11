import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouteMetadata from "./components/RouteMetadata";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterSignup from "./components/NewsletterSignup";
import { LanguageProvider, useLanguage } from "./i18n";

const About = lazy(() => import("./pages/About"));
const PublisherMessage = lazy(() => import("./pages/PublisherMessage"));
const Account = lazy(() => import("./pages/Account"));
const CivicDictionary = lazy(() => import("./pages/CivicDictionary"));
const Forum = lazy(() => import("./pages/Forum"));
const Home = lazy(() => import("./pages/Home"));
const ProposalLab = lazy(() => import("./pages/ProposalLab"));
const Proposals = lazy(() => import("./pages/Proposals"));
const Monitoring = lazy(() => import("./pages/Monitoring"));
const PublicInterestWatchDetail = lazy(() => import("./pages/PublicInterestWatchDetail"));
const CommunityChestResearch = lazy(() => import("./pages/CommunityChestResearch"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const TodayFrame = lazy(() => import("./pages/TodayFrame"));
const Briefings = lazy(() => import("./pages/Briefings"));
const BriefingDetail = lazy(() => import("./pages/BriefingDetail"));
const BriefingCommentary = lazy(() => import("./pages/BriefingCommentary"));
const BCorpDeepDive = lazy(() => import("./pages/BCorpDeepDive"));
const Columns = lazy(() => import("./pages/Columns"));
const ColumnDetail = lazy(() => import("./pages/ColumnDetail"));
const Academy = lazy(() => import("./pages/Academy"));
const Experiments = lazy(() => import("./pages/Experiments"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const FoundingStatement = lazy(() => import("./pages/FoundingStatement"));
const SeedLanguage = lazy(() => import("./pages/SeedLanguage"));
const SeedLanguageDetail = lazy(() => import("./pages/SeedLanguageDetail"));
const Insights = lazy(() => import("./pages/Insights"));
const SearchPage = lazy(() => import("./pages/Search"));

function AppShell() {
  const location = useLocation();
  const { language } = useLanguage();
  const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
  const showNewsletterAtBottom = !["/", "/en", "/account"].includes(normalizedPath) && !normalizedPath.startsWith("/insights");

  return (
    <div className="min-h-screen bg-paper text-charcoal">
      <RouteMetadata />
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div className="container-page min-h-[48vh] py-16" role="status"><p className="text-sm font-bold text-green-deep">{language === "en" ? "Loading page…" : "페이지를 불러오는 중입니다…"}</p></div>}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/content" element={<Insights />} />
          <Route path="/insights/traffic" element={<Insights />} />
          <Route path="/insights/subscribers" element={<Insights />} />
          <Route path="/insights/members" element={<Insights />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/publisher-message" element={<PublisherMessage />} />
          <Route path="/seed-language" element={<SeedLanguage />} />
          <Route path="/seed-language/:slug" element={<SeedLanguageDetail />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/briefings" element={<Briefings />} />
          <Route path="/briefings/social-solidarity-economy-youth-mall-lessons/b-corp" element={<BCorpDeepDive />} />
          <Route path="/briefings/:slug/commentary" element={<BriefingCommentary />} />
          <Route path="/briefings/:slug" element={<BriefingDetail />} />
          <Route path="/columns" element={<Columns />} />
          <Route path="/columns/:slug" element={<ColumnDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/monitoring/:slug" element={<PublicInterestWatchDetail />} />
          <Route path="/research/community-chest-of-korea" element={<CommunityChestResearch />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/today-frame" element={<TodayFrame />} />
          <Route path="/dictionary" element={<CivicDictionary />} />
          <Route path="/proposal-lab" element={<ProposalLab />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/founding-statement" element={<FoundingStatement />} />
          <Route path="/partners/founding-statement" element={<Navigate to="/founding-statement" replace />} />
          <Route path="/partners" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      {showNewsletterAtBottom && <NewsletterSignup />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </LanguageProvider>
  );
}
