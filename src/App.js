import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import AboutLegsPage from "./pages/AboutLegsPage";
import Footer from "./Components/Footer";
import { AccessibilityWidget } from "react-accessibility";
import "./App.css";
import Crystals from "./pages/treatments/Crystals"
import SocialLinks from "./Components/SocialLinks";
import Babies from "./pages/treatments/Babies";
import Pregnanat from "./pages/treatments/Pregnant"
import Cups from "./pages/treatments/Cups"
import Bamboo from "./pages/treatments/Bamboo"
import Sweedish from "./pages/treatments/Sweedish"
import Thai from "./pages/treatments/Thai"
import Candles from "./pages/treatments/Candles"
import Reflexology from "./pages/treatments/Reflexology"
import Face from "./pages/treatments/Face"
import Sound from "./pages/treatments/Sound"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div className="App">
      <SocialLinks />
      <AccessibilityWidget className="accessibility"/>

      <BrowserRouter>
      <ScrollToTop />

        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/about-legs" element={<AboutLegsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/babies" element={<Babies />} />
          <Route path="/thai" element={<Thai />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/pregnant" element={<Pregnanat />} />
          <Route path="/cups" element={<Cups />} />
          <Route path="/crystals" element={<Crystals />} />
          <Route path="/bamboo" element={<Bamboo />} />
          <Route path="/sweedish" element={<Sweedish />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/reflexology" element={<Reflexology />} />
          <Route path="/face" element={<Face />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
