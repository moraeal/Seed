import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth";
import Footer from "./components/Footer";
import ArticleNewsletterInvite from "./components/ArticleNewsletterInvite";
import Header from "./components/Header";
import HomepageNewsletterNudge from "./components/HomepageNewsletterNudge";
import InlinePageEditor from "./components/InlinePageEditor";
import RouteMetadata from "./components/RouteMetadata";
import ScrollToTop from "./components/ScrollToTop";
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
const PublicInstitutionReformTracker = lazy(() => import("./pages/PublicInstitutionReformTracker"));
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
const HotIssueDetail = lazy(() => import("./pages/HotIssueDetail"));
const HotIssueClusterDetail = lazy(() => import("./pages/HotIssueClusterDetail"));
const FoundingStatement = lazy(() => import("./pages/FoundingStatement"));
const SeedLanguage = lazy(() => import("./pages/SeedLanguage"));
const SeedLanguageDetail = lazy(() => import("./pages/SeedLanguageDetail"));
const CivicLanguageMap = lazy(() => import("./pages/CivicLanguageMap"));
const Insights = lazy(() => import("./pages/Insights"));
const SearchPage = lazy(() => import("./pages/Search"));
const LegislativeWatch = lazy(() => import("./pages/LegislativeWatch"));
const LegislativeCommentaryDetail = lazy(() => import("./pages/LegislativeCommentaryDetail"));
const LegislativeBillDetail = lazy(() => import("./pages/LegislativeBillDetail"));
const TaxWatch = lazy(() => import("./pages/TaxWatch"));
const TaxCommentaryDetail = lazy(() => import("./pages/TaxCommentaryDetail"));
const TaxPolicyDetail = lazy(() => import("./pages/TaxPolicyDetail"));
const PublicInterestWatch = lazy(() => import("./pages/PublicInterestWatch"));
const WriterRoom = lazy(() => import("./pages/WriterRoom"));
const DraftArticlePreview = lazy(() => import("./pages/DraftArticlePreview"));
const Contributions = lazy(() => import("./pages/Contributions"));
const EditorialDesk = lazy(() => import("./pages/EditorialDesk"));

function AppShell() {
  const { language } = useLanguage();

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
          <Route path="/writer" element={<WriterRoom />} />
          <Route path="/writer/preview" element={<DraftArticlePreview />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/content" element={<Insights />} />
          <Route path="/insights/traffic" element={<Insights />} />
          <Route path="/insights/subscribers" element={<Insights />} />
          <Route path="/insights/members" element={<Insights />} />
          <Route path="/insights/editorial" element={<EditorialDesk />} />
          <Route path="/insights/featured" element={<Insights />} />
          <Route path="/insights/legislation" element={<Insights />} />
          <Route path="/insights/tax" element={<Insights />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/publisher-message" element={<PublisherMessage />} />
          <Route path="/seed-language" element={<SeedLanguage />} />
          <Route path="/seed-language/why-civic-language" element={<CivicLanguageMap />} />
          <Route path="/seed-language/words-turn-citizens-into-enemies" element={<Navigate to="/columns/words-turn-citizens-into-enemies" replace />} />
          <Route path="/seed-language/:slug" element={<SeedLanguageDetail />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/briefings" element={<Briefings />} />
          <Route path="/briefings/social-economy-fair-competition/b-corp" element={<BCorpDeepDive />} />
          <Route path="/briefings/:slug/commentary" element={<BriefingCommentary />} />
          <Route path="/briefings/:slug" element={<BriefingDetail />} />
          <Route path="/columns" element={<Columns />} />
          <Route path="/columns/:slug" element={<ColumnDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/issues/:id" element={<HotIssueClusterDetail />} />
          <Route path="/news/:slug" element={<HotIssueDetail />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/monitoring/legislation" element={<LegislativeWatch />} />
          <Route path="/monitoring/legislation/commentary/:slug" element={<LegislativeCommentaryDetail />} />
          <Route path="/monitoring/legislation/:slug" element={<LegislativeBillDetail />} />
          <Route path="/monitoring/tax" element={<TaxWatch />} />
          <Route path="/monitoring/tax/commentary/:slug" element={<TaxCommentaryDetail />} />
          <Route path="/monitoring/tax/:slug" element={<TaxPolicyDetail />} />
          <Route path="/monitoring/public-interest" element={<PublicInterestWatch />} />
          <Route path="/monitoring/public-institution-reform-109" element={<PublicInstitutionReformTracker />} />
          <Route path="/monitoring/yeosu-world-island-expo" element={<Navigate to="/briefings/yeosu-world-island-expo" replace />} />
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
        <ArticleNewsletterInvite />
      </main>
      <Footer />
      <HomepageNewsletterNudge />
      <InlinePageEditor />
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
