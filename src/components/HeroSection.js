import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      title: "Flex Printing",
      tag: "Outdoor",
      color: "#ff006e",
      icon: "💎",
      image: "/flexprinting.jpeg",
    },
    {
      title: "LED Signage",
      tag: "Premium",
      color: "#ffb703",
      icon: "✨",
      image: "/ledsignage.jpeg",
    },
    {
      title: "Brand Boards",
      tag: "Corporate",
      color: "#00f5ff",
      icon: "🚀",
      image: "/brandboard.jpeg",
    },
  ];

  return (
    <section style={styles.hero}>
      <div
        style={{
          ...styles.heroTop,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "70px" : "50px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ ...styles.left, textAlign: isMobile ? "center" : "left" }}>
          <div style={styles.badge}>✨ Trusted Printing Experts</div>

          <h1
            style={{
              ...styles.heading,
              fontSize: isMobile
                ? "clamp(32px, 8vw, 48px)"
                : styles.heading.fontSize,
            }}
          >
            Make Your <span style={styles.brand}>Brand</span>
            <br />
            Impossible to <span style={styles.visibility}>Ignore</span>
          </h1>

          <p
            style={{
              ...styles.description,
              margin: isMobile ? "0 auto 40px" : "0 0 40px",
            }}
          >
            We design and print high-impact visuals that turn attention into
            customers — from storefront branding to premium indoor displays.
          </p>

          <div
            style={{
              ...styles.buttons,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button style={styles.primaryBtn}>Explore Services →</button>
            <button style={styles.outlineBtn}>Get Free Quote</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          style={{
            ...styles.rightContainer,
            width: isMobile ? "100%" : "55%",
          }}
        >
          <div
            style={{
              ...styles.bentoGrid,
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              padding: isMobile ? "0 10px" : "0",
            }}
          >
            {services.map((item, i) => (
              <div
                key={item.title}
                style={{
                  ...styles.card,
                  gridColumn: !isMobile && i === 2 ? "1 / span 2" : "auto",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    ...styles.cardImageWrapper,
                    height: isMobile ? "180px" : "160px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={styles.cardImage}
                  />
                  <div style={styles.imageOverlay} />
                </div>

                <div style={styles.cardHeader}>
                  <span
                    style={{
                      ...styles.cardTag,
                      border: `1px solid ${item.color}66`,
                      color: item.color,
                      backgroundColor: `${item.color}15`,
                    }}
                  >
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
            ))}
          </div>
        </div>
      </div>

      <div style={styles.divider} />

      {/* STATS */}
      <div
        style={{
          ...styles.heroStats,
          gridTemplateColumns: isMobile
            ? "repeat(2,1fr)"
            : "repeat(4,1fr)",
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

const Stat = ({ value, label }) => (
  <div style={styles.statItem}>
    <h3 style={styles.statValue}>{value}</h3>
    <p style={styles.statLabel}>{label}</p>
  </div>
);

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
    justifyContent: "space-between",
  },

  left: { flex: 1 },

  rightContainer: {
    flex: 1.2,
    paddingLeft: "20px",
  },

  bentoGrid: {
    display: "grid",
    gap: "28px",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    marginBottom: "30px",
    fontSize: "14px",
    color: "#ffb703",
  },

  heading: {
    fontSize: "clamp(42px,6vw,68px)",
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
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "18px 36px",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    border: "none",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },

  outlineBtn: {
    padding: "18px 36px",
    borderRadius: "14px",
    border: "2px solid #ffb703",
    background: "transparent",
    color: "#ffb703",
    fontWeight: "600",
    cursor: "pointer",
  },

  card: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "24px",
    padding: "22px",
    backdropFilter: "blur(18px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    transition: "all 0.35s ease",
  },

  cardImageWrapper: {
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "18px",
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
    marginBottom: "12px",
  },

  cardTag: {
    fontSize: "10px",
    padding: "4px 10px",
    borderRadius: "100px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  cardIcon: { fontSize: "24px" },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  cardText: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5",
    marginBottom: "16px",
  },

  cardFooter: {
    fontSize: "14px",
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
    fontSize: "40px",
    fontWeight: "900",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  statLabel: {
    fontSize: "12px",
    color: "#4b5563",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "700",
  },
};
