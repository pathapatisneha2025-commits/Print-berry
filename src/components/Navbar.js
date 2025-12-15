import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Shrink on scroll
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
          padding: shrink ? "10px 20px" : "14px 20px",
        }}
      >
        {/* LOGO */}
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>
            <img
              src="/logoimage.jpeg"
              alt="Print Berry"
              style={{
                ...styles.logoImg,
                height: shrink ? "32px" : "38px",
              }}
            />
          </Link>
          <span style={styles.logoText}>Print Berry</span>
        </div>

        {/* HAMBURGER (mobile only) */}
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
                    ...(isMobile ? { margin: "16px 0" } : {}),
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

            {/* MOBILE CTA */}
            {isMobile && (
              <li style={{ marginTop: "12px" }}>
                <a
                  href="tel:+919010099111"
                  style={styles.mobileCallBtn}
                >
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

const styles = {
  topBar: {
    background: "#0b0b0b",
    color: "#bbb",
    padding: "8px 20px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #1f1f1f",
  },

  topRight: {
    display: "flex",
    gap: "20px",
  },

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "linear-gradient(180deg, #000, #111)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 10px 40px rgba(255,183,3,0.08)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
  },

  logoImg: {
    height: "38px",
    width: "auto",
    borderRadius: "6px",
    transition: "0.3s",
  },

  logoText: {
    color: "#ffb703",
    fontWeight: 700,
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "32px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },

  menuItem: {
    position: "relative",
    fontSize: "16px",
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
    gap: "14px",
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
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer",
  },

  /* MOBILE */
  menuMobileOpen: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 0",
    background: "#050b14",
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
