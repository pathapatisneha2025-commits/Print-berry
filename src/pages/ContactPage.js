import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
const [device, setDevice] = useState("desktop"); // "mobile", "tablet", "desktop"

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setDevice("mobile");
    } else if (width >= 768 && width <= 1024) {
      setDevice("tablet");
    } else if (width > 1024 && width <= 1440) {
      setDevice("laptop");
    } else if (width > 1440) {
      setDevice("desktop");
    }
  };

  handleResize(); // Set initial device on mount
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
 <section
  style={{
    ...styles.page,
    padding:
      device === "mobile"
        ? "120px 20px 60px"
        : device === "tablet"
        ? "180px 30px 70px"
        : device === "laptop"
        ? "220px 35px 75px"
        : "250px 40px 80px", // desktop
  }}
>
      {/* HEADER */}
      <div style={styles.header}>
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
gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr",
        }}
      >
        {/* LEFT INFO */}
        <div style={styles.info}>
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              text: "+91 90100 99111",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              text: "printberry.in@gmail.com",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              text: "1st Floor, C-Block, Uptown Cyberabad Building, 100ft Road,Madhapur, Hyderabad. 500081  ",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={styles.infoCard}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
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
<form
  style={styles.form}
  onSubmit={(e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const message = e.target[3].value;

    const whatsappNumber = "+91 90100 99111"; // your number with country code

    const text = `
Hello, I have a new enquiry:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
    `;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );
  }}
>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />
          <textarea
            placeholder="Tell us about your project"
            rows={4}
            style={styles.textarea}
          />
          <button
            style={styles.submitBtn}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
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
  // maxWidth: "1300px",
  // margin: "0 auto",
  color: "#111",

background: `
  linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
  url("/kalki.jpeg")
`,

backgroundSize: "contain",
backgroundRepeat: "no-repeat", 
backgroundPosition: "top center",

},



  header: {
    textAlign: "center",
    maxWidth: "720px",
    margin: "0 auto 100px",
  },

 badge: {
  display: "inline-block",
  padding: "16px 32px",       // bigger padding for a bolder look
  color: "#ec4899",
  fontSize: "20px",           // increased text size
  fontWeight: "800",          // more emphasis
  letterSpacing: "0.5px",
  marginBottom: "32px",       // space below the badge
  textTransform: "uppercase", // makes it stand out
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

  infoTitle: {
    margin: 0,
    fontSize: "17px",
    fontWeight: "600",
  },

  infoText: {
    marginTop: "6px",
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
  },

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
