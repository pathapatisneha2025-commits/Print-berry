import React from "react";
import { Link } from "react-router-dom";

/* ================= SERVICES DATA ================= */
const SERVICES = [
  { id: "flex-printing", title: "Flex Printing", image: "/flexprinting.jpeg" },
  { id: "led-signage", title: "LED Signage", image: "/ledsignage.jpeg" },
  { id: "vinyl-printing", title: "Vinyl Printing", image: "/vinlylettering.jpeg" },
  { id: "3d-signage", title: "3D Signage", image: "/3Dsignage.jpeg" },
  { id: "acp-boards", title: "ACP Boards", image: "/brandboard.jpeg" },
];

/* ================= COMPONENT ================= */
export default function ServicesSection() {
  return (
    <section style={styles.section}>
      <p style={styles.subTitle}>WHAT WE OFFER</p>

      <h2 style={styles.title}>
        Our <span style={styles.gradient}>Services</span>
      </h2>

      {/* CONTINUOUS CAROUSEL */}
      <div style={styles.carouselWrapper}>
        <div style={styles.carouselTrack}>
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <Link
              key={index}
              to={`/services#${service.id}`}
              style={styles.card}
            >
              <img
                src={service.image}
                alt={service.title}
                style={styles.image}
              />
              <div style={styles.overlay}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
              </div>
            </Link>
          ))}
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

  /* CAROUSEL */
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
    border: "1px solid rgba(255,255,255,0.1)",
    textDecoration: "none",
    flexShrink: 0,
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
    boxShadow: "0 10px 30px rgba(255,183,3,0.35)",
  },
};
