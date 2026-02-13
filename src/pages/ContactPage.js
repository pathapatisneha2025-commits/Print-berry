import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
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
        padding: isMobile ? "120px 20px 60px" : "0px 40px 80px",
      }}
    >
      {/* HEADER */}
    <div
  style={{
    ...styles.header,
    background: `
      linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url("/kalki.jpeg")
    `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: isMobile ? "top center" : "center",
    backgroundSize: isMobile ? "contain" : "cover", // contain on mobile
    borderRadius: "20px",
    padding: isMobile ? "120px 20px 60px" : "0px 40px 80px",
  }}
>

        <span style={styles.badge}></span>

        <h1 style={styles.heading}>
          Let’s Build Your <span style={styles.brand}>Brand</span>
        </h1>

        <p style={styles.subText}>
          Have a project in mind? Reach out to us and let’s create something
          impactful together.
        </p>
      </div>

      {/* CONTENT */}
      <div
        style={{
          ...styles.content,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        {/* LEFT INFO */}
        <div style={styles.info}>
          {[
            { icon: <FaPhoneAlt />, title: "Call Us", text: "+91 98765 43210" },
            { icon: <FaEnvelope />, title: "Email", text: "info@yourbrand.com" },
            { icon: <FaMapMarkerAlt />, title: "Location", text: "Hyderabad, Telangana, India" },
          ].map((item) => (
            <div
              key={item.title}
              style={styles.infoCard}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={styles.iconWrap}>{item.icon}</div>
              <div>
                <h4 style={styles.infoTitle}>{item.title}</h4>
                <p style={styles.infoText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT FORM */}
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />
          <textarea placeholder="Tell us about your project" rows={4} style={styles.textarea} />
          <button
            style={styles.submitBtn}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    color: "#111",
  },

  header: {
    textAlign: "center",
    maxWidth: "720px",
    margin: "0 auto 60px",
    borderRadius: "20px",
  },

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

  heading: {
    fontSize: "clamp(36px, 5vw, 54px)",
    fontWeight: "800",
    marginBottom: "18px",
  },

  brand: {
    color: "#ec4899",
  },

  subText: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
  },

  content: {
    display: "grid",
    gap: "60px",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
  },

  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "26px",
    borderRadius: "22px",
    background: "#ffffff",
    border: "1px solid #eee",
    boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  iconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "rgba(236,72,153,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    color: "#ec4899",
    flexShrink: 0,
  },

  infoTitle: { margin: 0, fontSize: "17px", fontWeight: "600" },
  infoText: { marginTop: "6px", fontSize: "14px", color: "#666", lineHeight: "1.5" },

  form: {
    background: "#ffffff",
    border: "1px solid #eee",
    borderRadius: "22px",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
  },

  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "#fff",
    color: "#111",
    fontSize: "14px",
    outline: "none",
  },

  textarea: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "#fff",
    color: "#111",
    fontSize: "14px",
    outline: "none",
    resize: "none",
  },

  submitBtn: {
    marginTop: "10px",
    padding: "16px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(90deg,#ec4899,#f97316)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.25s ease",
  },
};
