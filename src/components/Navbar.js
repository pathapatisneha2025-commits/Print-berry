import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* TOP INFO BAR */}
      <div style={styles.topBar}>
        <span>✨ For All Your Digital Needs</span>
        <div style={styles.topRight}>
          <span>📞 +91 9010099111</span>
          <span>✉️ printberry.in@gmail.com</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        style={{
          ...styles.navbar,
          padding: shrink ? "10px 16px" : "14px 16px",
        }}
      >
        {/* LOGO */}
        <Link to="/" style={styles.logoWrap}>
          <img
            src="/logoimage.jpeg"
            alt="Print Berry"
            style={{
              ...styles.logoImg,
              transform: shrink ? "scale(1)" : "scale(1.15)",
            }}
          />
        </Link>

        {/* HAMBURGER */}
        {isMobile && (
          <button
            style={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        )}

        {/* MENU */}
        {(!isMobile || mobileOpen) && (
          <ul
            style={{
              ...styles.menu,
              ...(isMobile ? styles.menuMobileOpen : {}),
            }}
          >
            {menuItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <li
                  key={item.name}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    ...styles.menuItem,
                    ...(active ? styles.active : {}),
                    ...(isMobile ? { margin: "14px 0" } : {}),
                  }}
                >
                  <Link to={item.path} style={styles.navLink}>
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

            {isMobile && (
              <li style={{ marginTop: "16px" }}>
                <a href="tel:+919010099111" style={styles.mobileCallBtn}>
                  📞 Call Now
                </a>
              </li>
            )}
          </ul>
        )}

        {/* DESKTOP CTA */}
        {!isMobile && (
          <div style={styles.actions}>
            <button style={styles.outlineBtn}>Free Quote</button>
            <button style={styles.primaryBtn}>Get Started</button>
          </div>
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
    maxWidth: "100vw",
    overflow: "hidden",
  },

  topRight: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "linear-gradient(180deg, #000, #111)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "100vw",
    boxSizing: "border-box",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(255,183,3,0.08)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },

  logoImg: {
    height: "80px",
    maxWidth: "160px",
    objectFit: "contain",
    transition: "transform 0.3s",
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "24px",
    margin: 0,
    padding: 0,
    alignItems: "center",
    whiteSpace: "nowrap",
  },

  menuItem: {
    position: "relative",
    fontSize: "15px",
    cursor: "pointer",
  },

  navLink: {
    color: "#ddd",
    textDecoration: "none",
  },

  underline: {
    position: "absolute",
    bottom: "-4px",
    left: 0,
    height: "2px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    transition: "width 0.3s",
  },

  active: {
    color: "#ffb703",
  },

  actions: {
    display: "flex",
    gap: "10px",
    flexShrink: 0,
  },

  outlineBtn: {
    padding: "10px 18px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #ffb703",
    color: "#ffb703",
    fontWeight: 600,
  },

  primaryBtn: {
    padding: "10px 22px",
    borderRadius: "12px",
    background: "linear-gradient(90deg,#ff006e,#ffb703)",
    border: "none",
    fontWeight: 700,
  },

  menuBtn: {
    background: "none",
    border: "none",
    fontSize: "26px",
    color: "#fff",
    cursor: "pointer",
    flexShrink: 0,
  },

  menuMobileOpen: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    background: "#050b14",
    overflowX: "hidden",
  },

  mobileCallBtn: {
    background: "#ffb703",
    color: "#000",
    padding: "12px 26px",
    borderRadius: "30px",
    fontWeight: 700,
    textDecoration: "none",
  },
};
