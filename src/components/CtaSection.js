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
    padding: "140px 40px",
    background:
      "radial-gradient(circle at top, rgba(236,72,153,0.08), transparent 60%), #fff", // subtle pink glow on white
    textAlign: "center",
    color: "#111", // dark text for white theme
  },

  heading: {
    fontSize: "clamp(40px,6vw,64px)",
    fontWeight: "800",
    lineHeight: "1.15",
    marginBottom: "26px",
  },

  brand: {
    color: "#ec4899", // pink
  },

  shine: {
    color: "#111", // same dark color as main text
  },

  description: {
    maxWidth: "620px",
    margin: "0 auto 50px",
    fontSize: "18px",
    color: "#555", // dark gray
    lineHeight: "1.6",
  },

  ctaBtn: {
    padding: "18px 44px",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(90deg,#ec4899,#f97316,#facc15)", // pink/orange gradient
    color: "#fff", // white text
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};
