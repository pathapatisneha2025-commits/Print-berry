import React, { useState, useEffect } from "react";
import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Stats with numeric values
  const statsData = [
    { value: 5000, suffix: "+", label: "Projects" },
    { value: 500, suffix: "+", label: "Clients" },
    { value: 10, suffix: "+", label: "Years" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  // State to hold the live counting numbers
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate counters
  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.value / 100); // adjust speed
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[idx] < stat.value) {
            newCounters[idx] = Math.min(newCounters[idx] + increment, stat.value);
          }
          return newCounters;
        });
      }, 70);
    });

    return () => intervals.forEach(clearInterval);
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
        <span style={styles.badge}>About Us</span>

        <h1 style={styles.heading}>
          We Make Your <span style={styles.brand}>Brand</span>{" "}
          <span style={styles.shine}>Shine</span>
        </h1>

        <p style={styles.subText}>
          We combine creativity, technology, and precision printing to help
          brands stand out with powerful visuals.
        </p>
      </div>

      {/* VALUES */}
      <div
        style={{
          ...styles.cardsContainer,
          gridTemplateColumns: isMobile
            ? "1fr"
            : styles.cardsContainer.gridTemplateColumns,
        }}
      >
        {[
          {
            icon: <FaLightbulb />,
            title: "Innovative Ideas",
            text: "Fresh, bold concepts that elevate your brand presence.",
          },
          {
            icon: <FaRocket />,
            title: "Fast Execution",
            text: "Quick turnarounds with uncompromised print quality.",
          },
          {
            icon: <FaUsers />,
            title: "Customer First",
            text: "Transparent process and results you can trust.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
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
        {statsData.map((stat, idx) => (
          <div key={stat.label} style={styles.statItem}>
            <h3 style={styles.statValue}>
              {counters[idx]}
              {stat.suffix}
            </h3>
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
              From small beginnings to a trusted printing partner — our journey
              is built on passion and precision.
            </p>
            <p style={styles.storyText}>
              We create visual solutions that leave lasting impressions.
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
<Link to="/contact">
  <button style={styles.primaryBtn}>Get In Touch →</button>
</Link>
      </div>
    </section>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "120px 40px 80px",
    maxWidth: "1300px",
    margin: "0 auto",
    color: "#111",
   background: `
  linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
  url("/3Dsignage.jpeg")
`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  header: { textAlign: "center", maxWidth: "820px", margin: "0 auto 90px" },
  badge: {
    display: "inline-block",
    padding: "16px 32px",
    color: "#ec4899",
    fontSize: "20px",
    fontWeight: "800",
    letterSpacing: "0.5px",
    marginBottom: "32px",
    textTransform: "uppercase",
  },
  heading: { fontSize: "clamp(38px, 5vw, 56px)", fontWeight: "800", marginBottom: "18px" },
  brand: { color: "#ec4899" },
  shine: {
    background: "linear-gradient(90deg,#ec4899,#f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subText: { fontSize: "18px", color: "#555", lineHeight: "1.7" },
  cardsContainer: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "70px" },
  card: { background: "#fff", border: "1px solid #eee", borderRadius: "22px", padding: "36px 28px", textAlign: "center", transition: "all 0.35s ease", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" },
  iconWrap: { width: "64px", height: "64px", margin: "0 auto 18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(236,72,153,0.12)", fontSize: "26px", color: "#ec4899" },
  cardTitle: { fontSize: "20px", fontWeight: "700", marginBottom: "12px" },
  cardText: { fontSize: "15px", color: "#666", lineHeight: "1.6" },
  statsContainer: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", marginBottom: "80px", textAlign: "center" },
  statValue: { fontSize: "34px", fontWeight: "800", background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  statLabel: { marginTop: "6px", fontSize: "14px", color: "#777" },
  story: { marginBottom: "80px" },
  storyTitle: { textAlign: "center", fontSize: "32px", marginBottom: "40px", background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  storyContent: { display: "flex", gap: "40px" },
  storyCard: { flex: 1, background: "#fff", borderRadius: "22px", padding: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" },
  storyText: { color: "#555", fontSize: "16px", lineHeight: "1.7", marginBottom: "14px" },
  gradientText: { background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "700" },
  storyList: { listStyle: "none", padding: 0 },
  storyListItem: { display: "flex", alignItems: "center", marginBottom: "12px", color: "#555" },
  tickCircle: { width: "22px", height: "22px", borderRadius: "50%", background: "#ec4899", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "12px", fontSize: "12px" },
  highlightText: { marginTop: "16px", fontWeight: "700", color: "#f97316" },
  workSection: { textAlign: "center" },
  workTitle: { fontSize: "32px", marginBottom: "14px", background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  workText: { fontSize: "16px", color: "#666", marginBottom: "26px" },
  primaryBtn: { padding: "16px 38px", borderRadius: "16px", border: "none", background: "linear-gradient(90deg,#ec4899,#f97316)", color: "#fff", fontWeight: "700", cursor: "pointer" },
};
