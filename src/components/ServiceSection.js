import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ================= SERVICES DATA ================= */
const SERVICES = [
  { id: "flex-printing", title: "Flex Printing", image: "/flexprinting.jpg" },
  { id: "led-signage", title: "LED Signage", image: "/ledsignage.jpg" },
  { id: "vinyl-printing", title: "Vinyl Printing", image: "/vinylbranding.jpg" },
  { id: "3d-signage", title: "3D Signage", image: "/3Dsignage.jpeg" },
  { id: "acp-boards", title: "ACP Boards", image: "/acpboards.jpeg" },
];

/* ================= COMPONENT ================= */
export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.section}>
      <p style={styles.subTitle}>WHAT WE OFFER</p>

      <h2 style={styles.title}>
        Our Services
      </h2>

      {/* CONTINUOUS CAROUSEL */}
      <div style={styles.carouselWrapper}>
        <div 
          style={styles.carouselTrack} 
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {[...SERVICES, ...SERVICES].map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <Link
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                to={`/services#${service.id}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  ...styles.card,
                  borderColor: isActive ? "#ed4285" : "#e5e7eb",
                  transform: isActive ? "translateY(-10px)" : "translateY(0)",
                  boxShadow: isActive 
                    ? "0 20px 40px rgba(237, 66, 133, 0.15)" 
                    : "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    ...styles.image,
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                  }}
                />

                <div style={styles.overlay}>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <span style={{...styles.arrow, opacity: isActive ? 1 : 0}}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* VIEW ALL */}
      <div style={{ textAlign: 'center' }}>
        <Link to="/services" style={styles.viewAll}>
          Explore All Services
        </Link>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}

/* ================= STYLES ================= */
const styles = {
  section: {
    padding: "80px 0",
    background: "#fafafa", // Soft white theme
    color: "#1f2937",
    overflow: "hidden",
  },

  subTitle: {
    color: "#ed4285", // Magenta theme color
    fontSize: "14px",
    letterSpacing: "3px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "12px",
  },

  title: {
    fontSize: "clamp(32px, 5vw, 42px)",
    fontWeight: "800",        // Makes "Our" bold and professional
    textAlign: "center",
    marginBottom: "50px",
    color: "#111827",         // A deep, near-black grey used in modern UI
    letterSpacing: "-0.02em", // Slightly tighter for a premium look
  },

  gradient: {
    background: "linear-gradient(90deg, #ed4285, #ff9d2e)", // Brand Magenta to Orange
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  carouselWrapper: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    padding: "20px 0 40px",
  },

  carouselTrack: {
    display: "flex",
    gap: "30px",
    width: "max-content",
    animation: "scroll 40s linear infinite",
  },

  card: {
    width: "280px",
    height: "360px",
    borderRadius: "24px",
    background: "#fff",
    overflow: "hidden",
    position: "relative",
    textDecoration: "none",
    flexShrink: 0,
    border: "1px solid #e5e7eb",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  image: {
    width: "100%",
    height: "100%",
overflow: "hidden",
    transition: "transform 0.6s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "24px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#fff",
    margin: 0,
  },

  arrow: {
    color: "#fff",
    fontSize: "20px",
    transition: "all 0.3s ease",
  },

  viewAll: {
    display: "inline-block",
    marginTop: "20px",
    padding: "16px 40px",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #ed4285, #ff9d2e)", // Brand Gradient
    color: "#fff",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 10px 20px rgba(237, 66, 133, 0.2)",
    transition: "transform 0.3s ease",
  },
};