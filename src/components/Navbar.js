import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  /* ===== Mobile detection ===== */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== Close mobile menu on route change ===== */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===== TOP BAR (Desktop only) ===== */}
      {!isMobile && (
        <div style={styles.topBar}>
          <span>✨ For All Your Digital Needs</span>
          <div style={styles.topRight}>
            <span>📞 +91 9010099111</span>
            <span>✉️ printberry.in@gmail.com</span>
          </div>
        </div>
      )}

      {/* ===== NAVBAR ===== */}
      <nav style={styles.navbar}>
        {/* LOGO */}
        <Link to="/" style={styles.logoWrap}>
          <img
            src="/logoimage.jpeg"
            alt="Print Berry"
            style={{
              ...styles.logoImg,
              height: isMobile ? "88px" : "110px", // BIG logo always
            }}
          />
        </Link>

        {/* HAMBURGER (Mobile) */}
        {isMobile && (
          <button
            style={styles.menuBtn}
            onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        )}

        {/* ===== DESKTOP MENU ===== */}
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
                        color: active ? "#ffb703" : "#fff",
                      }}
                    >
                      {item.name}
                    </Link>
                    <span
                      style={{
                        ...styles.underline,
                        width:
                          hovered === item.name || active ? "100%" : "0%",
                      }}
                    />
                  </li>
                );
              })}
            </ul>

            <div style={styles.actions}>
              <button style={styles.outlineBtn}>Free Quote</button>
              <button style={styles.primaryBtn}>Get Started</button>
            </div>
          </>
        )}

        {/* ===== MOBILE MENU ===== */}
        {isMobile && mobileOpen && (
          <ul style={{ ...styles.menu, ...styles.menuMobileOpen }}>
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

/* ================= STYLES ================= */

const styles = {
  topBar: {
    background: "#0b0b0b",
    color: "#bbb",
    padding: "8px 16px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #1f1f1f",
    flexWrap: "wrap",
  },

  topRight: {
    display: "flex",
    gap: "12px",
  },

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "linear-gradient(180deg, #000, #111)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "120px",
    padding: "16px 20px",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 10px 40px rgba(255,183,3,0.08)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
  },

  logoImg: {
    maxWidth: "260px",
    objectFit: "contain",
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "26px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },

  menuItem: {
    position: "relative",
    fontSize: "15px",
    fontWeight: 500,
  },

  mobileItem: {
    margin: "16px 0",
    fontSize: "18px",
    fontWeight: 600,
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "8px 0",
    display: "inline-block",
  },

  underline: {
    position: "absolute",
    bottom: "-4px",
    left: 0,
    height: "2px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    transition: "width 0.3s ease",
  },

  actions: {
    display: "flex",
    gap: "10px",
  },

  outlineBtn: {
    padding: "10px 18px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #ffb703",
    color: "#ffb703",
    fontWeight: 600,
    cursor: "pointer",
  },

  primaryBtn: {
    padding: "10px 22px",
    borderRadius: "12px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },

  menuBtn: {
    background: "none",
    border: "none",
    fontSize: "32px",
    color: "#fff",
    cursor: "pointer",
  },

  menuMobileOpen: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    flexDirection: "column",
    background: "linear-gradient(180deg, #050b14, #000)",
    padding: "28px 0",
    textAlign: "center",
  },

  mobileCallBtn: {
    background: "#ffb703",
    color: "#000",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-block",
  },
};
