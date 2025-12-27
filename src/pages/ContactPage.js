import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const BRAND_COLOR = "#ff006e";

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
        padding: isMobile ? "80px 20px 60px" : "120px 40px 80px",
      }}
    >
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.badge}>📞 Contact Us</span>
        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? "clamp(28px, 8vw, 38px)" : styles.heading.fontSize,
          }}
        >
          Let’s Build Your <span style={styles.brand}>Brand</span>
        </h1>
        <p
          style={{
            ...styles.subText,
            fontSize: isMobile ? "16px" : styles.subText.fontSize,
          }}
        >
          Have a project in mind? Reach out to us and let’s create something
          powerful together.
        </p>
      </div>

      {/* CONTENT */}
      <div
        style={{
          ...styles.content,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "30px" : "60px",
        }}
      >
        {/* LEFT INFO */}
        <div style={styles.info}>
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              text: "+91 98765 43210",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              text: "info@yourbrand.com",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              text: "Hyderabad, Telangana, India",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                ...styles.infoCard,
                boxShadow: "0 14px 40px rgba(255,0,110,0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.12)";
              }}
            >
              <div
                style={{
                  ...styles.iconWrap,
                  background:
                    "linear-gradient(135deg, rgba(255,0,110,0.25), transparent)",
                }}
              >
                <span style={{ ...styles.icon, color: BRAND_COLOR }}>
                  {item.icon}
                </span>
              </div>

              <div>
                <h4 style={styles.infoTitle}>{item.title}</h4>
                <p style={styles.infoText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT FORM */}
        <form style={{ ...styles.form, padding: isMobile ? "24px" : "32px" }}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />
          <textarea
            placeholder="Tell us about your project"
            rows={4}
            style={styles.textarea}
          />
          <button
            style={{
              ...styles.submitBtn,
              padding: isMobile ? "14px" : "16px",
              fontSize: isMobile ? "14px" : "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(255,183,3,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(255,183,3,0.25)";
            }}
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
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
    transition: "all 0.35s ease",
    cursor: "pointer",
  },

  iconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  icon: {
    fontSize: "22px",
  },

  infoTitle: {
    margin: 0,
    fontSize: "17px",
    fontWeight: "600",
  },

  infoText: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#cfcfcf",
    lineHeight: "1.5",
  },

  form: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
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
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    color: "#000",
    fontWeight: "700",
    cursor: "pointer",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
};
