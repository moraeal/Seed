import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import CivicDictionary from "./pages/CivicDictionary";
import Home from "./pages/Home";
import ProposalLab from "./pages/ProposalLab";
import Roadmap from "./pages/Roadmap";
import Support from "./pages/Support";
import TodayFrame from "./pages/TodayFrame";

export default function App() {
  return <div className="min-h-screen bg-paper text-charcoal"><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/today-frame" element={<TodayFrame />} /><Route path="/dictionary" element={<CivicDictionary />} /><Route path="/proposal-lab" element={<ProposalLab />} /><Route path="/roadmap" element={<Roadmap />} /><Route path="/support" element={<Support />} /><Route path="*" element={<Home />} /></Routes></main><Footer /></div>;
}
