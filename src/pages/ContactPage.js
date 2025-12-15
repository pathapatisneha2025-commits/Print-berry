import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.badge}>📞 Contact Us</span>
        <h1 style={styles.heading}>
          Let’s Build Your <span style={styles.brand}>Brand</span>
        </h1>
        <p style={styles.subText}>
          Have a project in mind? Reach out to us and let’s create something
          powerful together.
        </p>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        {/* LEFT INFO */}
        <div style={styles.info}>
          <div style={styles.infoCard}>
            <FaPhoneAlt style={styles.icon} />
            <div>
              <h4 style={styles.infoTitle}>Call Us</h4>
              <p style={styles.infoText}>+91 98765 43210</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <FaEnvelope style={styles.icon} />
            <div>
              <h4 style={styles.infoTitle}>Email</h4>
              <p style={styles.infoText}>info@yourbrand.com</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <FaMapMarkerAlt style={styles.icon} />
            <div>
              <h4 style={styles.infoTitle}>Location</h4>
              <p style={styles.infoText}>
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />
          <textarea
            placeholder="Tell us about your project"
            rows="4"
            style={styles.textarea}
          />

          <button style={styles.submitBtn}>Send Message →</button>
        </form>
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
    maxWidth: "700px",
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

  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "22px",
    backdropFilter: "blur(10px)",
  },

  icon: {
    fontSize: "22px",
    color: "#ffb703",
  },

  infoTitle: {
    margin: 0,
    fontSize: "16px",
  },

  infoText: {
    marginTop: "4px",
    color: "#cfcfcf",
    fontSize: "14px",
  },

  form: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    backdropFilter: "blur(12px)",
  },

  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  },

  textarea: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    resize: "none",
  },

  submitBtn: {
    marginTop: "10px",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 12px 40px rgba(255,183,3,0.35)",
  },
};
