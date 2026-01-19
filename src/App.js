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

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />

        {/* MAIN CONTENT */}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServicesSection />
                  <FeaturedClients />
                  <CTASection />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}
