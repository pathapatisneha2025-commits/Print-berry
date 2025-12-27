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
      </Link>    </section>
  );
}
    const styles = {
  section: {
    padding: "140px 40px",
    background:
      "radial-gradient(circle at top, rgba(255,183,3,0.08), transparent 60%), linear-gradient(180deg,#050505,#0b0b0b)",
    textAlign: "center",
    color: "#fff",
  },

  heading: {
    fontSize: "clamp(40px,6vw,64px)",
    fontWeight: "800",
    lineHeight: "1.15",
    marginBottom: "26px",
  },

  brand: {
    color: "#ff006e",
  },

  shine: {
    background: "linear-gradient(90deg,#ff8c00,#ffb703)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  description: {
    maxWidth: "620px",
    margin: "0 auto 50px",
    fontSize: "18px",
    color: "#cfcfcf",
    lineHeight: "1.6",
  },

  ctaBtn: {
    padding: "18px 44px",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};
