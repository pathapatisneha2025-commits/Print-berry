import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.hero}>
      {/* TOP CONTENT */}
      <div
        style={{
          ...styles.heroTop,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "40px" : "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <div style={styles.badge}>✨ Trusted Printing Experts</div>

          <h1
            style={{
              ...styles.heading,
              fontSize: isMobile ? "clamp(28px,6vw,42px)" : styles.heading.fontSize,
            }}
          >
            Make Your <span style={styles.brand}>Brand</span>
            <br />
            Impossible to <span style={styles.visibility}>Ignore</span>
          </h1>

          <p
            style={{
              ...styles.description,
              fontSize: isMobile ? "16px" : styles.description.fontSize,
              maxWidth: isMobile ? "100%" : styles.description.maxWidth,
            }}
          >
            We design and print high-impact visuals that turn attention into
            customers — from storefront branding to premium indoor displays.
          </p>

          <div style={{ ...styles.buttons, justifyContent: isMobile ? "center" : "flex-start" }}>
            <button style={styles.primaryBtn}>Explore Services →</button>
            <button style={styles.outlineBtn}>Get Free Quote</button>
          </div>
        </div>

      
        {/* RIGHT VISUAL CARDS */}
{/* RIGHT VISUAL CARDS */}
<div
  style={{
    ...styles.right,
    width: isMobile ? "100%" : "auto",
    alignItems: isMobile ? "center" : "flex-end",
  }}
>
  {[
    { title: "Flex Printing", tag: "Outdoor", color: "#ff006e", icon: "💎" },
    { title: "LED Signage", tag: "Premium", color: "#ffb703", icon: "✨" },
    { title: "Brand Boards", tag: "Corporate", color: "#00f5ff", icon: "🚀" },
  ].map((item, i) => (
    <div
      key={item.title}
      className="premium-card"
      style={{
        ...styles.card,
        transform: isMobile 
          ? "translateY(0)" 
          : `translateX(${i * -25}px) translateY(${i * 10}px)`,
        zIndex: 3 - i,
      }}
    >
      <div style={{...styles.cardHeader}}>
        <span style={{...styles.cardTag, border: `1px solid ${item.color}`, color: item.color}}>
          {item.tag}
        </span>
        <span style={styles.cardIcon}>{item.icon}</span>
      </div>
      <h4 style={styles.cardTitle}>{item.title}</h4>
      <p style={styles.cardText}>
        Enhance visibility with our industry-leading {item.title.toLowerCase()} solutions.
      </p>
      <div style={styles.cardFooter}>View Project →</div>
    </div>
  ))}
</div>
      </div>

      {/* DIVIDER */}
      <div style={styles.divider} />

      {/* HERO STATS */}
      <div
        style={{
          ...styles.heroStats,
          gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
          gap: isMobile ? "20px" : "30px",
        }}
      >
        <Stat value="10+" label="Years Experience" />
        <Stat value="5000+" label="Projects Completed" />
        <Stat value="500+" label="Happy Clients" />
        <Stat value="24/7" label="Support Available" />
      </div>
    </section>
  );
}

/* STAT COMPONENT */
const Stat = ({ value, label }) => (
  <div style={styles.statItem}>
    <h3 style={styles.statValue}>{value}</h3>
    <p style={styles.statLabel}>{label}</p>
  </div>
);

const styles = {
  hero: {
    minHeight: "100vh",
    padding: "120px 20px 80px",
    background: "linear-gradient(180deg, #050505, #0c0c0c)",
    color: "#fff",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  heroTop: {
    display: "flex",
    alignItems: "center",
  },

  left: { flex: 1 },

  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  divider: {
    margin: "70px 0 40px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #333, transparent)",
  },

  heroStats: {
    display: "grid",
    textAlign: "center",
  },

  statItem: {},

  statValue: {
    fontSize: "32px",
    fontWeight: "800",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  statLabel: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#aaa",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: "14px",
    marginBottom: "30px",
    backdropFilter: "blur(8px)",
  },

  heading: {
    fontSize: "clamp(42px, 6vw, 60px)",
    fontWeight: "800",
    lineHeight: "1.15",
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
    color: "#cfcfcf",
    maxWidth: "540px",
    lineHeight: "1.6",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "16px 32px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 12px 40px rgba(255,183,3,0.35)",
  },

  outlineBtn: {
    padding: "16px 30px",
    borderRadius: "14px",
    border: "2px solid #ffb703",
    background: "transparent",
    color: "#ffb703",
    fontWeight: "600",
    cursor: "pointer",
  },

 card: {
    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "24px",
    backdropFilter: "blur(16px)",
    width: "300px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    position: "relative",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  cardTag: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    padding: "4px 8px",
    borderRadius: "6px",
    fontWeight: "700",
  },

  cardIcon: {
    fontSize: "24px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#fff",
  },

  cardText: {
    color: "#9ca3af",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "16px",
  },

  cardFooter: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#ffb703",
    opacity: 0.8,
  }
};
