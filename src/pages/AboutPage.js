import React, { useState, useEffect } from "react";
import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        ...styles.page,
        padding: isMobile ? "90px 20px 70px" : styles.page.padding,
      }}
    >
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.badge}>💡 About Us</span>

        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile
              ? "clamp(30px, 8vw, 40px)"
              : styles.heading.fontSize,
          }}
        >
          We Make Your <span style={styles.brand}>Brand</span> Shine
        </h1>

        <p
          style={{
            ...styles.subText,
            fontSize: isMobile ? "16px" : styles.subText.fontSize,
          }}
        >
          We blend creativity, technology, and strategy to help brands stand out
          with stunning visuals and memorable experiences.
        </p>
      </div>

      {/* VALUES */}
      <div
        style={{
          ...styles.cardsContainer,
          gridTemplateColumns: isMobile ? "1fr" : styles.cardsContainer.gridTemplateColumns,
        }}
      >
        {[
          {
            icon: <FaLightbulb />,
            title: "Innovative Ideas",
            text: "Fresh, bold concepts that make your brand unforgettable.",
          },
          {
            icon: <FaRocket />,
            title: "Fast Execution",
            text: "Quick turnarounds without ever sacrificing quality.",
          },
          {
            icon: <FaUsers />,
            title: "Customer Focus",
            text: "Collaborative approach with results you can trust.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={styles.iconWrap}>{item.icon}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div
        style={{
          ...styles.statsContainer,
          gridTemplateColumns: isMobile ? "1fr 1fr" : styles.statsContainer.gridTemplateColumns,
        }}
      >
        {[
          { value: "5000+", label: "Projects" },
          { value: "500+", label: "Clients" },
          { value: "10+", label: "Years" },
          { value: "24/7", label: "Support" },
        ].map((stat) => (
          <div key={stat.label} style={styles.statItem}>
            <h3 style={styles.statValue}>{stat.value}</h3>
            <p style={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* STORY */}
      <div style={styles.story}>
        <h2 style={styles.storyTitle}>Our Story</h2>

        <div
          style={{
            ...styles.storyContent,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div style={styles.storyCard}>
            <p style={styles.storyText}>
              <strong style={styles.gradientText}>A Decade of Excellence</strong>
              <br />
              From humble beginnings to becoming a trusted name in digital
              printing — our journey is powered by passion and precision.
            </p>
            <p style={styles.storyText}>
              We deliver visual solutions that elevate brands and leave lasting
              impressions.
            </p>
          </div>

          <div style={styles.storyCard}>
            <ul style={styles.storyList}>
              {[
                "Premium materials & inks",
                "Modern printing technology",
                "Expert design support",
                "Fast delivery timelines",
                "Affordable pricing",
              ].map((item, index) => (
                <li key={index} style={styles.storyListItem}>
                  <span style={styles.tickCircle}>✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={styles.highlightText}>100% Customer Satisfaction</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={styles.workSection}>
        <h2 style={styles.workTitle}>Ready to Work Together?</h2>
        <p style={styles.workText}>
          Let’s turn your ideas into impactful visuals.
        </p>
        <button style={styles.primaryBtn}>Get In Touch →</button>
      </div>
    </section>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "120px 40px 80px",
    background: "linear-gradient(180deg, #050505, #0c0c0c)",
    color: "#fff",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    maxWidth: "820px",
    margin: "0 auto 90px",
  },

  badge: {
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: "14px",
    marginBottom: "24px",
    display: "inline-block",
  },

  heading: {
    fontSize: "clamp(40px, 5vw, 58px)",
    fontWeight: "800",
    marginBottom: "18px",
  },

  brand: {
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subText: {
    fontSize: "18px",
    color: "#cfcfcf",
    lineHeight: "1.7",
  },

  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
    marginBottom: "70px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    padding: "36px 28px",
    textAlign: "center",
    transition: "all 0.35s ease",
    backdropFilter: "blur(10px)",
  },

  iconWrap: {
    width: "64px",
    height: "64px",
    margin: "0 auto 18px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,183,3,0.15)",
    fontSize: "28px",
    color: "#ffb703",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  cardText: {
    fontSize: "15px",
    color: "#cfcfcf",
    lineHeight: "1.6",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "32px",
    marginBottom: "80px",
    textAlign: "center",
  },

  statValue: {
    fontSize: "34px",
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

  story: {
    marginBottom: "80px",
  },

  storyTitle: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "40px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  storyContent: {
    display: "flex",
    gap: "40px",
  },

  storyCard: {
    flex: 1,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    padding: "32px",
    backdropFilter: "blur(10px)",
  },

  storyText: {
    color: "#cfcfcf",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "14px",
  },

  gradientText: {
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
  },

  storyList: {
    listStyle: "none",
    padding: 0,
  },

  storyListItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    color: "#cfcfcf",
  },

  tickCircle: {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "#ff006e",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "12px",
    fontSize: "12px",
  },

  highlightText: {
    marginTop: "16px",
    fontWeight: "700",
    color: "#ffb703",
  },

  workSection: {
    textAlign: "center",
  },

  workTitle: {
    fontSize: "32px",
    marginBottom: "14px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  workText: {
    fontSize: "16px",
    color: "#cfcfcf",
    marginBottom: "26px",
  },

  primaryBtn: {
    padding: "16px 38px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 16px 40px rgba(255,183,3,0.35)",
  },
};
