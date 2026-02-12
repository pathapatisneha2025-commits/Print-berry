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
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router>
      <ScrollToTop/>
<div style={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh", 
        width: "100%", 
        overflowX: "hidden",
        position: "relative" // Keeps everything contained
      }}>
              <Navbar />
<div 
          style={{ 
            height: isMobile ? "0px" : "180px", // Shorter gap on mobile
            transition: "height 0.3s ease"        // Smooth transition
          }} 
        />        {/* MAIN CONTENT */}
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
