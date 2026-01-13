import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 1024);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const services = [
    { title: "Flex Printing", tag: "Outdoor", color: "#ec4899", icon: "💎", image: "/flexprinting.jpg" },
    { title: "LED Signage", tag: "Premium", color: "#f97316", icon: "✨", image: "/ledsignage.jpg" },
    { title: "Brand Boards", tag: "Corporate", color: "#06b6d4", icon: "🚀", image: "/brandboard.jpeg" },
  ];

  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && setActiveIndex(+e.target.dataset.index)),
      { threshold: 0.6 }
    );
    cardRefs.current.forEach(c => c && observer.observe(c));
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section style={styles.wrapper}>
      <div style={{ ...styles.hero, flexDirection: isMobile ? "column" : "row" }}>

        {/* LEFT IMAGE PANEL */}
        <div style={{ ...styles.left, minHeight: isMobile ? "360px" : "640px" }}>
          <div style={styles.leftOverlay} />

          <div style={styles.leftContent}>
            <div style={styles.badge}>
              <div style={styles.badgeOverlay}></div>
              <span style={styles.badgeText}>✨ Trusted Printing Experts</span>
            </div>

            <h1 style={styles.heading}>
              Make Your <span style={styles.brand}>Brand</span>
              <br />
              Shine With <span style={styles.visibility}>Premium Prints</span>
            </h1>

            <p style={styles.desc}>
              From stunning flex banners to eye-catching LED signage,
              we deliver print solutions that leave a lasting impression.
            </p>

            <div style={styles.btnRow}>
              <Link to="/services">
                <button style={styles.primaryBtn}>Explore Services →</button>
              </Link>
              <Link to="/portfolio">
                <button style={styles.outlineBtn}>View Portfolio</button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT WHITE PANEL */}
        <div style={styles.right}>
          <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)" }}>
            {services.map((s, i) => {
              const active = activeIndex === i;
              return (
                <div
                  key={s.title}
                  ref={el => (cardRefs.current[i] = el)}
                  data-index={i}
                  onMouseEnter={() => !isMobile && setActiveIndex(i)}
                  onMouseLeave={() => !isMobile && setActiveIndex(null)}
                  style={{
                    ...styles.card,
                    gridColumn: !isMobile && i === 2 ? "1 / -1" : "auto",
                    borderColor: active ? s.color : "#e5e7eb",
boxShadow: "none", // no shadow even on hover
                  }}
                >
                  <img src={s.image} alt={s.title} style={styles.cardImg} />

                  <div style={styles.cardTop}>
                    <span style={{ ...styles.tag, color: s.color, borderColor: s.color }}>
                      {s.tag}
                    </span>
                    <span style={styles.icon}>{s.icon}</span>
                  </div>

                  <h4 style={styles.cardTitle}>{s.title}</h4>
                  <p style={styles.cardText}>
                    Premium {s.title.toLowerCase()} for maximum brand visibility.
                  </p>

                  <div style={{ color: s.color, fontWeight: 700 }}>
                    View Project →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
 wrapper: {
    background: "#fafafa",
    margin: "20px 0 0 0", 
    padding: "0 4% 80px 4%",
  },

  hero: {
    display: "flex",
    maxWidth: "1400px",
    margin: "0 auto",
    borderRadius: "28px", 
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(0,0,0,0.08)",
  },

  /* LEFT */
  left: {
    flex: 1.1,
    backgroundImage:
      "url('/landingpage.jpeg')", // real image
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "#111827",
    padding: "60px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    animation: "zoom 20s ease-in-out infinite",
  },

  leftOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.7), rgba(255,255,255,0.4))",
    zIndex: 0,
  },

  leftContent: {
    position: "relative",
    maxWidth: "520px",
    zIndex: 1,
  },

  /* BADGE */
  badge: {
    position: "relative",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581090700227-879b0a635d6b?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "999px",
    padding: "14px 26px",
    marginBottom: "24px",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    minHeight: "42px",
  },

  badgeOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45))",
    zIndex: 1,
  },

  badgeText: {
    position: "relative",
    zIndex: 2,
    fontWeight: 700,
    fontSize: "14px",
    color: "#111827",
  },

  heading: {
    fontSize: "clamp(36px, 5vw, 58px)",
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "20px",
  },

  brand: {
    background: "linear-gradient(90deg,#ec4899,#f97316,#facc15)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  visibility: {
    background: "linear-gradient(90deg,#06b6d4,#8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  desc: {
    fontSize: "18px",
    color: "#374151",
    marginBottom: "36px",
    lineHeight: 1.7,
  },

  btnRow: { display: "flex", gap: "16px", flexWrap: "wrap" },

  primaryBtn: {
    background: "linear-gradient(90deg,#ec4899,#f97316)",
    color: "#fff",
    border: "none",
    padding: "16px 32px",
    borderRadius: "12px",
    fontWeight: 700,
    cursor: "pointer",
  },

  outlineBtn: {
    background: "#fff",
    color: "#111827",
    border: "1px solid #e5e7eb",
    padding: "16px 32px",
    borderRadius: "12px",
    fontWeight: 700,
    cursor: "pointer",
  },

  /* RIGHT */
  right: {
    flex: 1,
    background: "#fff",
    padding: "40px",
  },

  grid: { display: "grid", gap: "24px" },

  card: {
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "none", // removed shadow
    transition: "0.3s ease",
  },


  cardImg: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "14px",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },

  tag: {
    fontSize: "10px",
    padding: "4px 10px",
    borderRadius: "999px",
    border: "1px solid",
    fontWeight: 700,
  },

  icon: { fontSize: "22px" },
  cardTitle: { fontSize: "20px", fontWeight: 700 },
  cardText: { fontSize: "14px", color: "#6b7280", marginBottom: "12px" },

  /* ZOOM ANIMATION */
  "@keyframes zoom": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.05)" },
    "100%": { transform: "scale(1)" },
  },
};
