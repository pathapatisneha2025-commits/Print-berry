import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    { title: "Flex Printing", tag: "Outdoor", color: "#ff006e", icon: "💎", image: "/flexprinting.jpg" },
    { title: "LED Signage", tag: "Premium", color: "#ffb703", icon: "✨", image: "/ledsignage.jpg" },
    { title: "Brand Boards", tag: "Corporate", color: "#00f5ff", icon: "🚀", image: "/brandboard.jpeg" },
  ];

  // IntersectionObserver for scroll highlight
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach(card => card && observer.observe(card));

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section style={styles.hero}>
      <div style={{ ...styles.heroTop, flexDirection: isMobile ? "column" : "row", gap: isMobile ? "64px" : "60px" }}>
        {/* LEFT */}
        <div style={{ ...styles.left, textAlign: isMobile ? "center" : "left" }}>
          <span style={styles.badge}>✨ Trusted Printing Experts</span>
          <h1 style={{ ...styles.heading, fontSize: isMobile ? "clamp(30px, 8vw, 46px)" : "clamp(42px,6vw,68px)" }}>
            Make Your <span style={styles.brand}>Brand</span><br />
            Impossible to <span style={styles.visibility}>Ignore</span>
          </h1>
          <p style={{ ...styles.description, margin: isMobile ? "0 auto 36px" : "0 0 40px" }}>
            We design and print high-impact visuals that turn attention into customers — from storefront branding to premium indoor displays.
          </p>
          <div style={{ ...styles.buttons, justifyContent: isMobile ? "center" : "flex-start" }}>
            <Link to="/services" style={{ textDecoration: "none" }}>
              <button style={styles.primaryBtn}>Explore Services →</button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button style={styles.outlineBtn}>Get Free Quote</button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ ...styles.rightContainer, width: "100%" }}>
          <div style={{ ...styles.bentoGrid, gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)" }}>
            {services.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={item.title}
                  ref={el => cardRefs.current[i] = el}
                  data-index={i}
                  onMouseEnter={() => !isMobile && setActiveIndex(i)}
                  onMouseLeave={() => !isMobile && setActiveIndex(null)}
                  style={{
                    ...styles.card,
                    gridColumn: !isMobile && i === 2 ? "1 / -1" : "auto",
                    border: isActive ? `2px solid ${item.color}` : styles.card.border,
                    boxShadow: isActive ? `0 0 24px ${item.color}55` : "none",
                  }}
                >
                  <div style={styles.cardImageWrapper}>
                    <img src={item.image} alt={item.title} style={styles.cardImage} loading="lazy" />
                    <div style={styles.imageOverlay} />
                  </div>

                  <div style={styles.cardHeader}>
                    <span style={{
                      ...styles.cardTag,
                      color: item.color,
                      border: `1px solid ${item.color}55`,
                      background: isActive ? `${item.color}33` : `${item.color}18`,
                    }}>
                      {item.tag}
                    </span>
                    <span style={styles.cardIcon}>{item.icon}</span>
                  </div>

                  <h4 style={styles.cardTitle}>{item.title}</h4>
                  <p style={styles.cardText}>
                    Premium {item.title.toLowerCase()} for maximum brand visibility.
                  </p>

                  <div style={styles.cardFooter}>View Project →</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={styles.divider} />

      {/* STATS */}
      <div style={{ ...styles.heroStats, gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)" }}>
        <Stat value="10+" label="Years Experience" />
        <Stat value="5000+" label="Projects Completed" />
        <Stat value="500+" label="Happy Clients" />
        <Stat value="24/7" label="Support Available" />
      </div>
    </section>
  );
}

const Stat = ({ value, label }) => (
  <div>
    <h3 style={styles.statValue}>{value}</h3>
    <p style={styles.statLabel}>{label}</p>
  </div>
);

/* styles remain exactly the same as your original HeroSection */

/* styles object remains exactly the same */

const styles = {
  hero: {
    minHeight: "100vh",
    padding: "100px 5% 80px",
    background: "#050505",
    color: "#fff",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  heroTop: {
    display: "flex",
    alignItems: "center",
  },

  left: { flex: 1 },

  rightContainer: {
    flex: 1.2,
    padding: "28px",
    borderRadius: "32px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
  },

  bentoGrid: {
    display: "grid",
    gap: "26px",
    width: "100%",
    maxWidth: "520px",
  },

  badge: {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    marginBottom: "28px",
    fontSize: "14px",
    color: "#ffb703",
    display: "inline-block",
  },

  heading: {
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "24px",
  },

  brand: {
    background: "linear-gradient(90deg,#ff006e,#ff8c00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  visibility: {
    background: "linear-gradient(90deg,#ff8c00,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  description: {
    fontSize: "18px",
    color: "#9ca3af",
    maxWidth: "540px",
    lineHeight: "1.6",
  },

  buttons: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "16px 34px",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    border: "none",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },

  outlineBtn: {
    padding: "16px 34px",
    borderRadius: "14px",
    border: "2px solid #ffb703",
    background: "transparent",
    color: "#ffb703",
    fontWeight: "600",
    cursor: "pointer",
  },

  card: {
    borderRadius: "22px",
    padding: "22px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.16)",
  },

  cardImageWrapper: {
    borderRadius: "16px",
    overflow: "hidden",
    height: "160px",
    marginBottom: "16px",
    position: "relative",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  cardTag: {
    fontSize: "10px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  cardIcon: { fontSize: "22px" },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "6px",
  },

  cardText: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "14px",
  },

  cardFooter: {
    color: "#ffb703",
    fontWeight: "600",
  },

  divider: {
    margin: "80px 0 40px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #222, transparent)",
  },

  heroStats: {
    display: "grid",
    gap: "20px",
    textAlign: "center",
  },

  statValue: {
    fontSize: "38px",
    fontWeight: "900",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  statLabel: {
    fontSize: "12px",
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "700",
  },
};
