import React, { useState, useEffect } from "react";
import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const statsData = [
    { value: 5000, suffix: "+", label: "Projects" },
    { value: 500, suffix: "+", label: "Clients" },
    { value: 10, suffix: "+", label: "Years" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  const [counters, setCounters] = useState(statsData.map(() => 0));

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate counters
  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.value / 200);
      return setInterval(() => {
        setCounters((prev) => {
          const updated = [...prev];
          if (updated[idx] < stat.value) {
            updated[idx] = Math.min(updated[idx] + increment, stat.value);
          }
          return updated;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Dynamic header style
  const headerStyle = {
    width: "100%",
    padding: isMobile
      ? "170px 0px 40px" // Mobile: top 80px, sides 20px, bottom 40px
      : "500px 60px 100px", // Desktop: top 160px, sides 60px, bottom 100px
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.75)),
      url("/3Dsignage.jpeg")
    `,
  backgroundSize: isMobile ? "contain" : "cover", // CONTAIN for mobile
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section style={styles.page}>
      {/* HEADER */}
      <div style={headerStyle}>
        <div style={styles.container}>
          <h1 style={styles.heading}>
            We Make Your <span style={styles.brand}>Brand</span>{" "}
            <span style={styles.shine}>Shine</span>
          </h1>
          <p style={styles.subText}>
            We combine creativity, technology, and precision printing to help
            brands stand out with powerful visuals.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div style={styles.cardsContainer}>
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
          <div key={i} style={styles.card}>
            <div style={styles.iconWrap}>{item.icon}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div style={styles.statsContainer}>
        {statsData.map((stat, idx) => (
          <div key={stat.label}>
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
        <div style={styles.storyContent}>
          <div style={styles.storyCard}>
            <p style={styles.storyText}>
              <strong style={styles.gradientText}>A Decade of Excellence</strong>
              <br />
              At “Print Berry”, we are more than just an advertising agency –
              we are creative storytellers, strategic thinkers, and brand builders.
              Our passion lies in helping businesses thrive in today's competitive market.
            </p>
            <p style={styles.storyText}>
              Our mission is to transform your brand's vision into captivating
              stories that resonate with your audience through innovative campaigns.
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
  page: { minHeight: "100vh", overflowX: "hidden" },

  container: { margin: "0 auto", padding: "0 20px", textAlign: "center" },

  heading: { fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 800, marginBottom: "16px" },

  brand: { color: "#ec4899" },

  shine: { background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },

  subText: { fontSize: "clamp(14px, 3vw, 18px)", color: "#555", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto", fontWeight: 700 },

  cardsContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" },

  card: { background: "#fff", borderRadius: "20px", padding: "30px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" },

  iconWrap: { width: "60px", height: "60px", margin: "0 auto 18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(236,72,153,0.12)", fontSize: "24px", color: "#ec4899" },

  cardTitle: { fontSize: "20px", fontWeight: 700, marginBottom: "10px" },

  cardText: { fontSize: "15px", color: "#666", lineHeight: 1.6 },

  statsContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "24px", padding: "40px 20px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" },

  statValue: { fontSize: "34px", fontWeight: 800, background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },

  statLabel: { fontSize: "14px", color: "#777", fontWeight: 700 },

  story: { padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" },

  storyTitle: { textAlign: "center", fontSize: "32px", marginBottom: "40px", background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },

  storyContent: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" },

  storyCard: { background: "#fff", borderRadius: "20px", padding: "30px", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" },

  storyText: { color: "#555", fontSize: "16px", lineHeight: 1.7, marginBottom: "14px" },

  gradientText: { background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 },

  storyList: { listStyle: "none", padding: 0 },

  storyListItem: { display: "flex", alignItems: "center", marginBottom: "12px", color: "#555" },

  tickCircle: { width: "22px", height: "22px", borderRadius: "50%", background: "#ec4899", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "12px", fontSize: "12px" },

  highlightText: { marginTop: "16px", fontWeight: 700, color: "#f97316" },

  workSection: { textAlign: "center", padding: "60px 20px" },

  workTitle: { fontSize: "32px", marginBottom: "14px", background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },

  workText: { fontSize: "16px", color: "#666", marginBottom: "26px" },

  primaryBtn: { padding: "14px 32px", borderRadius: "12px", border: "none", background: "linear-gradient(90deg,#ec4899,#f97316)", color: "#fff", fontWeight: 700, cursor: "pointer" },
};
