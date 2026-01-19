import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Ready to Make Your{" "}
        <span style={styles.brand}>Brand</span>{" "}
        <span style={styles.shine}>Shine?</span>
      </h2>

      <p style={styles.description}>
        Let's discuss your project and bring your vision to life with our
        expert team.
      </p>

      <Link to="/contact" style={styles.link}>
        <button style={styles.ctaBtn}>Start Your Project →</button>
      </Link>
    </section>
  );
}

const styles = {
  section: {
    padding: "clamp(80px, 10vw, 120px) 6%", // responsive top/bottom
    background:
      "radial-gradient(circle at top, rgba(236,72,153,0.08), transparent 60%), #fff",
    textAlign: "center",
    color: "#111",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    boxSizing: "border-box",
  },

  heading: {
    fontSize: "clamp(32px, 5vw, 56px)", // responsive
    fontWeight: "800",
    lineHeight: "1.15",
    margin: "0 0 16px 0", // reduce bottom margin
  },

  brand: {
    color: "#ec4899",
  },

  shine: {
    color: "#111",
  },

  description: {
    maxWidth: "620px",
    fontSize: "clamp(16px, 2.5vw, 18px)", // responsive
    color: "#555",
    lineHeight: "1.5",
    margin: "0 0 24px 0", // reduce bottom margin
  },

  ctaBtn: {
    padding: "clamp(14px, 1.5vw, 18px) clamp(28px, 3vw, 44px)", // responsive
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(90deg,#ec4899,#f97316,#facc15)",
    color: "#fff",
    fontSize: "clamp(15px, 2vw, 17px)",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};
