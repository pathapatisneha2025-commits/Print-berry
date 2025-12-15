import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer style={styles.footer}>
      <div
        style={{
          ...styles.container,
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1fr",
          gap: isMobile ? "40px" : "60px",
        }}
      >
        {/* BRAND */}
        <div style={styles.brand}>
          <img
            src="/logoimage.jpeg"
            alt="Print Berry"
            style={styles.logo}
          />
          <p style={styles.text}>
            Your trusted partner for premium digital printing and
            signage solutions. We bring your brand vision to life
            with quality and creativity.
          </p>

          <div style={styles.socials}>
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 style={styles.heading}>Services</h4>
          <ul style={styles.list}>
            <li>Flex Printing</li>
            <li>LED Signage</li>
            <li>Vinyl Printing</li>
            <li>3D Signage</li>
            <li>ACP Boards</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 style={styles.heading}>Company</h4>
          <ul style={styles.list}>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 style={styles.heading}>Support</h4>
          <ul style={styles.list}>
            <li>Get Quote</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={styles.bottom}>
        © 2024 Print Berry. All rights reserved. For All Your Digital Needs.
      </div>
    </footer>
  );
}

/* SOCIAL ICON */
const SocialIcon = ({ icon }) => (
  <div style={styles.icon}>{icon}</div>
);

const styles = {
  footer: {
    background: "linear-gradient(180deg, #050505, #0b0b0b)",
    color: "#d1d5db",
    paddingTop: "100px",
  },

  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px 80px",
    display: "grid",
  },

  brand: {
    maxWidth: "420px",
  },

  logo: {
    width: "70px",
    marginBottom: "20px",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#9ca3af",
    marginBottom: "24px",
  },

  socials: {
    display: "flex",
    gap: "14px",
  },

  icon: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
  },

  heading: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "18px",
    color: "#fff",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    fontSize: "15px",
    color: "#9ca3af",
  },

  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
    padding: "22px 20px",
    fontSize: "14px",
    color: "#9ca3af",
  },
};
