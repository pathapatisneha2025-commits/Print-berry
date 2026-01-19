import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div
        style={{
          ...styles.topBar,
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "6px 20px" : "8px 40px",
          fontSize: isMobile ? "13px" : "14px",
        }}
      >
        <span style={{ color: "#ed4285" }}>✨ For All Your Digital Needs</span>
        <div
          style={{
            ...styles.topRight,
            gap: isMobile ? "12px" : "24px",
            marginTop: isMobile ? "4px" : "0",
          }}
        >
          <span>📞 +91 9010099111</span>
          <span>✉️ printberry.in@gmail.com</span>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav style={{ ...styles.navbar,     position: isMobile ? "fixed" : "relative",    top: isMobile ? 0 : "auto",

 }}>
        {/* Logo */}
        <Link to="/" style={styles.logoWrap}>
          <img
            src="/logoimage.jpeg"
            alt="Print Berry"
            style={{ ...styles.logoImg, height: isMobile ? "90px" : "160px" }}
          />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <>
            <ul style={styles.menu}>
              {menuItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <li
                    key={item.name}
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                    style={styles.menuItem}
                  >
                    <Link
                      to={item.path}
                      style={{
                        ...styles.navLink,
                        color: active ? "#ed4285" : "#4b5563",
                      }}
                    >
                      {item.name}
                    </Link>
                    <span
                      style={{
                        ...styles.underline,
                        width: hovered === item.name || active ? "100%" : "0%",
                      }}
                    />
                  </li>
                );
              })}
            </ul>

            {/* Actions */}
            <div style={styles.actions}>
              <button style={styles.outlineBtn}>Free Quote</button>
              <button style={styles.primaryBtn}>Get Started</button>
            </div>
          </>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            style={styles.menuBtn}
            onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        )}

        {/* ===== MOBILE MENU ===== */}
        {isMobile && mobileOpen && (
          <ul style={styles.mobileMenu}>
            {menuItems.map((item) => (
              <li key={item.name} style={styles.mobileItem}>
                <Link
                  to={item.path}
                  style={styles.navLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li style={{ marginTop: "20px" }}>
              <a href="tel:+919010099111" style={styles.mobileCallBtn}>
                📞 Call Now
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

/* ===== STYLES ===== */
const styles = {
  topBar: {
    background: "#ffffff",
    color: "#6b7280",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 500,
    borderBottom: "1px solid #f3f4f6",
  },
  topRight: {
    display: "flex",
  },
  navbar: {
    top: 0,
    zIndex: 1000,
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  logoImg: {
    height: "120px",
    maxWidth: "400px",
    objectFit: "contain",
    display: "block",
  },
  logoWrap: { display: "flex", alignItems: "center", justifyContent: "center" },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "35px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  menuItem: {
    position: "relative",
    fontSize: "16px",
    fontWeight: 500,
  },
  menuBtn: {
    background: "none",
    border: "none",
    fontSize: "30px",
    color: "#333",
    cursor: "pointer",
  },
  mobileItem: {
    margin: "18px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  navLink: {
    textDecoration: "none",
    padding: "6px 0",
    display: "inline-block",
    transition: "color 0.2s ease",
  },
  underline: {
    position: "absolute",
    bottom: "-2px",
    left: 0,
    height: "2px",
    background: "#ed4285",
    transition: "width 0.3s ease",
  },
  actions: { display: "flex", gap: "12px", alignItems: "center" },
  outlineBtn: {
    padding: "8px 20px",
    borderRadius: "8px",
    background: "transparent",
    border: "1.5px solid #ed4285",
    color: "#ed4285",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  primaryBtn: {
    padding: "8px 20px",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #ed4285, #ff9d2e)",
    border: "none",
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(237, 66, 133, 0.2)",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    flexDirection: "column",
    background: "#ffffff",
    padding: "20px 0",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    display: "flex",
    zIndex: 999,
  },
  mobileCallBtn: {
    background: "linear-gradient(90deg, #ed4285, #ff9d2e)",
    color: "#ffffff",
    padding: "12px 30px",
    borderRadius: "10px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
  },
};
