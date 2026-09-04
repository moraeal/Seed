import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouteMetadata from "./components/RouteMetadata";
import { LanguageProvider } from "./i18n";
import About from "./pages/About";
import Account from "./pages/Account";
import CivicDictionary from "./pages/CivicDictionary";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import ProposalLab from "./pages/ProposalLab";
import Proposals from "./pages/Proposals";
import Monitoring from "./pages/Monitoring";
import PublicInterestWatchDetail from "./pages/PublicInterestWatchDetail";
import Roadmap from "./pages/Roadmap";
import TodayFrame from "./pages/TodayFrame";
import Briefings from "./pages/Briefings";
import BriefingDetail from "./pages/BriefingDetail";
import BriefingCommentary from "./pages/BriefingCommentary";
import Columns from "./pages/Columns";
import ColumnDetail from "./pages/ColumnDetail";
import Academy from "./pages/Academy";
import Experiments from "./pages/Experiments";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import FoundingStatement from "./pages/FoundingStatement";
import SeedLanguage from "./pages/SeedLanguage";
import Insights from "./pages/Insights";

function AppShell() {
  return (
    <div className="min-h-screen bg-paper text-charcoal">
      <RouteMetadata />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/seed-language" element={<SeedLanguage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/briefings" element={<Briefings />} />
          <Route path="/briefings/:slug/commentary" element={<BriefingCommentary />} />
          <Route path="/briefings/:slug" element={<BriefingDetail />} />
          <Route path="/columns" element={<Columns />} />
          <Route path="/columns/:slug" element={<ColumnDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/monitoring/:slug" element={<PublicInterestWatchDetail />} />
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
      </main>
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
