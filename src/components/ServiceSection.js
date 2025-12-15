import React, { useState, useEffect } from "react";
import { FaPrint, FaLightbulb, FaTags } from "react-icons/fa";

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      {/* HEADING */}
      <p style={styles.subTitle}>WHAT WE OFFER</p>
      <h2 style={styles.title}>
        Our <span style={styles.gradientText}>Premium</span> Services
      </h2>

      {/* SERVICES GRID */}
      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "30px" : "40px",
          marginBottom: isMobile ? "50px" : "70px",
        }}
      >
        {/* CARD 1 */}
        <div style={styles.card}>
          <div style={styles.iconBox}>
            <FaPrint />
          </div>
          <h3 style={styles.cardTitle}>Flex Printing</h3>
        </div>

        {/* CARD 2 – ACTIVE */}
        <div style={{ ...styles.card, ...styles.activeCard }}>
          <div style={{ ...styles.iconBox, ...styles.activeIcon }}>
            <FaLightbulb />
          </div>
          <h3 style={{ ...styles.cardTitle, color: "#ffb703" }}>
            LED Signage
          </h3>
        </div>

        {/* CARD 3 */}
        <div style={styles.card}>
          <div style={styles.iconBox}>
            <FaTags />
          </div>
          <h3 style={styles.cardTitle}>Vinyl Printing</h3>
        </div>
      </div>

      {/* CTA */}
      <button
        style={{
          ...styles.ctaBtn,
          padding: isMobile ? "14px 28px" : "18px 38px",
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        View All Services →
      </button>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 20px",
    background: "linear-gradient(180deg,#050505,#0c0c0c)",
    textAlign: "center",
    color: "#fff",
  },

  subTitle: {
    color: "#ffb703",
    fontSize: "14px",
    letterSpacing: "2px",
    marginBottom: "14px",
    fontWeight: "600",
  },

  title: {
    fontSize: "clamp(36px,5vw,52px)",
    fontWeight: "800",
    marginBottom: "70px",
  },

  gradientText: {
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  grid: {
    display: "grid",
    maxWidth: "1200px",
    margin: "0 auto 70px",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: "22px",
    padding: "50px 30px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "0.4s ease",
  },

  activeCard: {
    border: "1px solid #ffb703",
    boxShadow: "0 0 60px rgba(255,183,3,0.15)",
    transform: "translateY(-8px)",
  },

  iconBox: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    margin: "0 auto 24px",
    color: "#fff",
  },

  activeIcon: {
    background: "rgba(255,183,3,0.15)",
    color: "#ffb703",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
  },

  ctaBtn: {
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 14px 40px rgba(255,183,3,0.35)",
  },
};
