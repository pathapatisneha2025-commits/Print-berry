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
      {/* ===== FIXED TOP BAR ===== */}
      {/* <div
        style={{
          ...styles.topBar,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
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
      </div> */}

      {/* ===== SPACER FOR FIXED TOP BAR + NAVBAR ===== */}
      {isMobile && <div style={{ height: "80px" }} />}

      {/* ===== NAVBAR ===== */}
      <nav
        style={{
          ...styles.navbar,
          position: "fixed",
          top: isMobile ? "0px" : "0",
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Link to="/" style={styles.logoWrap}>
          <img
            src="/logoimage.jpeg"
            alt="Print Berry"
            style={{ ...styles.logoImg, height: isMobile ? "90px" : "100px" }}
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
                        width:
                          hovered === item.name || active ? "100%" : "0%",
                      }}
                    />
                  </li>
                );
              })}
            </ul>

        <div style={{ ...styles.btnRow, gap: "20px" }}>
  <Link to="/contact">
    <button style={styles.outlineBtn}>Free Quote</button>
  </Link>

  <Link to="/contact">
    <button style={styles.primaryBtn}>Get Started</button>
  </Link>
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
          <ul
            style={{
              ...styles.mobileMenu,
              top: "100%",
            }}
          >
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

/* ===== STYLES (UNCHANGED) ===== */
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
  background: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  width: "100%",
  boxSizing: "border-box",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  height: "100px",
},
logoWrap: { 
  display: "flex", 
  alignItems: "center",
  height: "100%",
  margin: 0,
  padding: 0,
  textDecoration: "none",
  background: "#000000",
  flexShrink: 0,   // Important
},

  logoImg: {
    /* REMOVED mix-blend-mode to keep your black background */
    display: "block",         /* Removes the bottom ghost gap */
    width: "auto",
    height: "100%",           /* Stretches to fill the 100px height */
    border: "none",
    outline: "none",
    objectFit: "contain",     /* Maintains logo proportions within the black block */
  },
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
    fontSize: "19px",
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
  },
  primaryBtn: {
    padding: "8px 20px",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #ed4285, #ff9d2e)",
    border: "none",
    color: "#ffffff",
    fontWeight: 600,
  },
  mobileMenu: {
    position: "absolute",
    left: 0,
    right: 0,
    background: "#ffffff",
    padding: "20px 0",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
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
    btnRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px", // <-- this creates the space between buttons
  },

};
