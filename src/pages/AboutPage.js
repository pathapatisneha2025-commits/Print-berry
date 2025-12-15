import React from "react";
import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.badge}>💡 About Us</span>
        <h1 style={styles.heading}>
          We Make Your <span style={styles.brand}>Brand</span> Shine
        </h1>
        <p style={styles.subText}>
          At YourBrand, we combine creativity, technology, and passion to help 
          businesses stand out with high-impact visuals and unforgettable experiences.
        </p>
      </div>

      {/* CORE VALUES / CARDS */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <FaLightbulb style={styles.icon} />
          <h3 style={styles.cardTitle}>Innovative Ideas</h3>
          <p style={styles.cardText}>
            We craft unique designs that capture attention and elevate your brand.
          </p>
        </div>

        <div style={styles.card}>
          <FaRocket style={styles.icon} />
          <h3 style={styles.cardTitle}>Fast Execution</h3>
          <p style={styles.cardText}>
            From concept to delivery, we ensure quick turnaround without compromise.
          </p>
        </div>

        <div style={styles.card}>
          <FaUsers style={styles.icon} />
          <h3 style={styles.cardTitle}>Customer Focus</h3>
          <p style={styles.cardText}>
            Your satisfaction is our priority — we work closely with you at every step.
          </p>
        </div>
      </div>

      {/* HAPPY CUSTOMERS / STATS */}
      <div style={styles.statsContainer}>
        {[
          { value: "5000+", label: "Projects Completed" },
          { value: "500+", label: "Happy Clients" },
          { value: "10+", label: "Years Experience" },
          { value: "24/7", label: "Support Available" },
        ].map((stat) => (
          <div key={stat.label} style={styles.statItem}>
            <h3 style={styles.statValue}>{stat.value}</h3>
            <p style={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
{/* ================= OUR STORY ================= */}
<div style={styles.story}>
  <h2 style={styles.storyTitle}>Our Story</h2>

  <div style={styles.storyContent}>
    {/* LEFT COLUMN */}
    <div style={styles.storyLeft}>
      <div style={styles.storyCard}>
        <p style={styles.storyText}>
          <strong style={{ background: "linear-gradient(90deg,#ff006e,#ffb703)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>A Decade of Excellence</strong><br />
          What started as a small printing shop has grown into one of the most trusted digital printing companies in the region. Our journey has been fueled by a passion for quality and a commitment to helping businesses succeed.
        </p>

        <p style={styles.storyText}>
          We combine cutting-edge technology with creative expertise to deliver stunning visual solutions that help businesses make a lasting impression. Every project is handled with care, precision, and attention to detail.
        </p>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div style={styles.storyRight}>
      <div style={styles.storyCard}>
        <ul style={styles.storyList}>
          {[
            "Premium quality materials and inks",
            "State-of-the-art printing technology",
            "Expert design consultation",
            "Fast turnaround times",
            "Competitive pricing"
          ].map((item, index) => (
            <li key={index} style={styles.storyListItem}>
              <span style={styles.tickCircle}>✔</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ ...styles.storyText, fontWeight: "700", marginTop: "16px" }}>
          100% Customer Satisfaction
        </p>
      </div>
    </div>
  </div>
</div>




     {/* ================= WORK WITH US ================= */}
<div style={styles.workSection}>
  <h2 style={styles.workTitle}>Ready to Work Together?</h2>
  <p style={styles.workText}>
    Let's discuss your project and create something amazing together.
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
    maxWidth: "800px",
    margin: "0 auto 80px",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: "14px",
    marginBottom: "24px",
    backdropFilter: "blur(8px)",
  },

  heading: {
    fontSize: "clamp(38px, 5vw, 56px)",
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
    lineHeight: "1.6",
  },

  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "30px 24px",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    transition: "transform 0.3s",
  },

  icon: {
    fontSize: "32px",
    color: "#ffb703",
    marginBottom: "16px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  cardText: {
    fontSize: "14px",
    color: "#cfcfcf",
    lineHeight: "1.6",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    textAlign: "center",
    gap: "30px",
    marginBottom: "60px",
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

  explanation: {
    maxWidth: "900px",
    margin: "0 auto 60px",
    textAlign: "center",
  },

  explanationText: {
    fontSize: "16px",
    color: "#cfcfcf",
    lineHeight: "1.8",
  },

  cta: {
    textAlign: "center",
  },

  primaryBtn: {
    padding: "16px 36px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 12px 40px rgba(255,183,3,0.35)",
    fontSize: "16px",
  },
 storyCard: {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "20px",
  padding: "30px",
  backdropFilter: "blur(10px)",
  transition: "transform 0.3s, box-shadow 0.3s",
},
storyCardHover: {
  transform: "translateY(-5px)",
  boxShadow: "0 20px 40px rgba(255,183,3,0.3)",
},
storyListItem: {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  color: "#cfcfcf",
  lineHeight: "1.8",
  transition: "color 0.3s",
},
storyListItemHover: {
  color: "#ffb703",
},
storyContent: {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "40px",
  justifyContent: "space-between", // makes left and right align properly
  alignItems: "flex-start",
  marginTop: "20px",
},
storyLeft: {
  flex: "1 1 48%", // take roughly half width
  minWidth: "300px",
},

storyRight: {
  flex: "1 1 48%",
  minWidth: "300px",
},


tickCircle: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  minWidth: "24px",
  borderRadius: "50%",
  backgroundColor: "#ff006e",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "700",
  marginRight: "12px",
},


workSection: {
  textAlign: "center",
  marginTop: "60px",
},

workTitle: {
  fontSize: "32px",
  fontWeight: "700",
  marginBottom: "16px",
  background: "linear-gradient(90deg,#ff006e,#ffb703)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
},

workText: {
  fontSize: "16px",
  color: "#cfcfcf",
  marginBottom: "24px",
  lineHeight: "1.6",
},


};
