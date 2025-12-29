import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ================= SERVICES DATA ================= */
const SERVICES = [
  { id: "flex-printing", title: "Flex Printing", image: "/flexprinting.jpg" },
  { id: "led-signage", title: "LED Signage", image: "/ledsignage.jpg" },
  { id: "vinyl-printing", title: "Vinyl Printing", image: "/vinylbranding.jpg" },
  { id: "3d-signage", title: "3D Signage", image: "/ledsignage.jpg" },
  { id: "acp-boards", title: "ACP Boards", image: "/acpboards.jpg" },
];

/* ================= COMPONENT ================= */
export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  /* 🔥 Scroll highlight (mobile friendly) */
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
        Our <span style={styles.gradient}>Services</span>
      </h2>

      {/* CONTINUOUS CAROUSEL */}
      <div style={styles.carouselWrapper}>
        <div style={styles.carouselTrack}>
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
                  border: isActive
                    ? "1px solid #ffb703"
                    : "1px solid rgba(255,255,255,0.1)",
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                  boxShadow: isActive
                    ? "0 0 28px rgba(255,183,3,0.6)"
                    : "none",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    ...styles.image,
                    transform: isActive ? "scale(1.12)" : "scale(1)",
                  }}
                />

                <div style={styles.overlay}>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* VIEW ALL */}
      <Link to="/services" style={styles.viewAll}>
        View All Services →
      </Link>

      {/* KEYFRAMES */}
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
    padding: "100px 20px",
    background: "radial-gradient(circle at center, #111, #050505)",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
  },

  subTitle: {
    color: "#ffb703",
    fontSize: "13px",
    letterSpacing: "4px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  title: {
    fontSize: "clamp(32px,5vw,48px)",
    fontWeight: "900",
    marginBottom: "50px",
  },

  gradient: {
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  carouselWrapper: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },

  carouselTrack: {
    display: "flex",
    gap: "24px",
    width: "max-content",
    animation: "scroll 35s linear infinite",
  },

  card: {
    width: "260px",
    height: "320px",
    borderRadius: "22px",
    overflow: "hidden",
    position: "relative",
    textDecoration: "none",
    flexShrink: 0,
    transition: "all 0.35s ease",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), transparent 60%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "24px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#fff",
  },

  viewAll: {
    display: "inline-block",
    marginTop: "40px",
    padding: "16px 42px",
    borderRadius: "50px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontWeight: "800",
    textDecoration: "none",
  },
};
