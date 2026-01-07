import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeLink, setActiveLink] = useState(null);
  const linkRefs = useRef([]);

  /* MOBILE CHECK */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Scroll highlight for mobile */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.dataset.label);
          }
        });
      },
      { threshold: 0.6 }
    );

    linkRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getLinkStyle = (label) => ({
    ...styles.link,
    color: activeLink === label ? "#ec4899" : "#6b7280", // pink active, gray inactive
    fontWeight: activeLink === label ? "700" : "400",
  });

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
          <img src="/printberry.png" alt="Print Berry" style={styles.logo} />
          <p style={styles.text}>
            Your trusted partner for premium digital printing and signage
            solutions. We bring your brand vision to life with quality and
            creativity.
          </p>

          <div style={styles.socials}>
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>
        </div>

        <FooterLinks
          title="Services"
          links={[
            ["Flex Printing", "/services"],
            ["LED Signage", "/services"],
            ["Vinyl Printing", "/services"],
            ["3D Signage", "/services"],
            ["ACP Boards", "/services"],
          ]}
          getLinkStyle={getLinkStyle}
          setActiveLink={setActiveLink}
          linkRefs={linkRefs}
        />

        <FooterLinks
          title="Company"
          links={[
            ["About Us", "/about"],
            ["Contact", "/contact"],
            ["Our Services", "/services"],
          ]}
          getLinkStyle={getLinkStyle}
          setActiveLink={setActiveLink}
          linkRefs={linkRefs}
        />

        <FooterLinks
          title="Support"
          links={[
            ["Get Quote", "/contact"],
            ["FAQs", "/faq"],
            ["Privacy Policy", "/privacy-policy"],
            ["Terms of Service", "/terms"],
          ]}
          getLinkStyle={getLinkStyle}
          setActiveLink={setActiveLink}
          linkRefs={linkRefs}
        />
      </div>

      <div style={styles.bottom}>
        © 2025 Print Berry. All rights reserved. For All Your Digital Needs.
      </div>
    </footer>
  );
}

/* LINKS COLUMN */
const FooterLinks = ({ title, links, getLinkStyle, setActiveLink, linkRefs }) => (
  <div>
    <h4 style={styles.heading}>{title}</h4>
    <ul style={styles.list}>
      {links.map(([label, path], index) => (
        <li key={label}>
          <Link
            to={path}
            ref={(el) => linkRefs.current.push(el)}
            data-label={label}
            style={getLinkStyle(label)}
            onMouseEnter={() => setActiveLink(label)}
            onMouseLeave={() => setActiveLink(null)}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* SOCIAL ICON */
const SocialIcon = ({ icon }) => (
  <div style={styles.icon}>{icon}</div>
);

/* STYLES */
const styles = {
  footer: {
    background: "#fff", // white footer
    color: "#111",
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
    width: "150px",
    marginBottom: "24px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#6b7280", // dark gray
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
    background: "rgba(236,72,153,0.1)", // pink transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ec4899", // pink icon
    cursor: "pointer",
    transition: "0.3s",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "18px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    fontSize: "15px",
  },
  link: {
    textDecoration: "none",
    transition: "color 0.25s ease, font-weight 0.25s ease",
    cursor: "pointer",
  },
  bottom: {
    borderTop: "1px solid #ec4899", // pink separator
    textAlign: "center",
    padding: "22px 20px",
    fontSize: "14px",
    color: "#6b7280",
  },
};
