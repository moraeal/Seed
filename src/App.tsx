import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-charcoal">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
