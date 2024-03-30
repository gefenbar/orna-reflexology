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
import Crystals from "./pages/posts/Crystals"
import SocialLinks from "./Components/SocialLinks";
import Pregnanat from "./pages/posts/Pregnant"
import Cups from "./pages/posts/Cups"
import Balance from "./pages/posts/Balance"
import Reflection from "./pages/posts/Reflection"
import Thai from "./pages/posts/Thai"
import Candles from "./pages/posts/Candles"
import Reflexology from "./pages/posts/Reflexology"
import Face from "./pages/posts/Face"
import Sound from "./pages/posts/Sound"

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
          <Route path="/reflexology" element={<Reflexology />} />
          <Route path="/thai" element={<Thai />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/pregnant" element={<Pregnanat />} />
          <Route path="/cups" element={<Cups />} />
          <Route path="/crystals" element={<Crystals />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/face" element={<Face />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
