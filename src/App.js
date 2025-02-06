import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DesktopNavbar from "./Components/DesktopNavbar";
import MobileNavbar from "./Components/MobileNavBar";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import AboutLegsPage from "./pages/AboutLegsPage";
import Footer from "./Components/Footer";
import { AccessibilityWidget } from "react-accessibility";
import "./App.css";
import SocialLinks from "./Components/SocialLinks";
import Balance from "./pages/posts/Balance";
import Reflection from "./pages/posts/Reflection";
import Reflexology from  "./pages/posts/Reflexology";
import Testimonials from "./pages/TestimonialsPage";
import { useMediaQuery } from 'react-responsive';
import Alternative from "./pages/posts/Alternative";
import ReflexologyAndBackPain from "./pages/posts/BackPain";
import Stress from "./pages/posts/stress";
import Headache from "./pages/posts/headache";
import LowerBack from "./pages/posts/LowerBack";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="App">
      <SocialLinks />
      <AccessibilityWidget className="accessibility"/>
      <BrowserRouter>
        <ScrollToTop />
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar/>}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/about-legs" element={<AboutLegsPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reflexology" element={<Reflexology />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/alternative" element={<Alternative />} />
          <Route path="/back-pain" element={<ReflexologyAndBackPain />} />
          <Route path="/stress" element={<Stress />} />
          <Route path="/headache" element={<Headache />} />
          <Route path="/lower-back" element={<LowerBack />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

