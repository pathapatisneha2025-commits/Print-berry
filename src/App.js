import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import CTASection from "./components/CtaSection";
import Footer from "./components/FooterSection";
import ServicesPage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FeaturedClients from "./components/FeaturedClients";


// OPTIONAL PAGES (if you create them later)
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <>
        {/* COMMON NAVBAR */}
        <Navbar />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection/>
                <FeaturedClients/>
                
                <CTASection />
             
              </>
            }
          />

          {/* OPTIONAL ROUTES */}
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}
