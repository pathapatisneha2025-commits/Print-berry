import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const cardRefs = useRef([]);

  const services = [
    { title: "Flex Printing", tag: "Outdoor", color: "#ec4899", icon: "💎", image: "/flexprinting.jpg" },
    { title: "LED Signage", tag: "Premium", color: "#f97316", icon: "✨", image: "/ledsignage.jpg" },
    { title: "Brand Boards", tag: "Corporate", color: "#06b6d4", icon: "🚀", image: "/acpboards.jpeg" },
  ];

 useEffect(() => {
  // 1. Handle Resize
  const handleResize = () => setIsDesktop(window.innerWidth > 1024);
  window.addEventListener("resize", handleResize);

  // 2. Intersection Observer (your existing code)
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    },
    { threshold: 0.5 }
  );

  cardRefs.current.forEach(card => card && observer.observe(card));

  // Cleanup
  return () => {
    window.removeEventListener("resize", handleResize);
    observer.disconnect();
  };
}, []);

  return (
    <section style={styles.wrapper}>
      <div style={styles.hero}>
        {/* HERO IMAGE */}
        <div style={{ ...styles.left }}>
          <div style={styles.leftOverlay} />
          <div style={styles.leftContent}>
            <div style={styles.badge}>
              <div style={styles.badgeOverlay} />
              <span style={styles.badgeText}>✨ Trusted Printing Experts</span>
            </div>

            <h1 style={styles.heading}>
              Make Your <span style={styles.brand}>Brand</span>
              <br />
              Shine With <span style={styles.visibility}>Premium Prints</span>
            </h1>

            <p style={styles.desc}>
              From stunning flex banners to eye-catching LED signage,
              we deliver print solutions that leave a lasting impression.
            </p>

            <div style={styles.btnRow}>
              <Link to="/services">
                <button style={styles.primaryBtn}>Explore Services →</button>
              </Link>
             {/* Open PDF in a new tab */}
<a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
  <button style={styles.outlineBtn}>View Portfolio</button>
</a>

            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div style={styles.right}>
          <div style={styles.rightHeader}>
<h2 style={styles.rightTitle}>
  Our <span style={{ background: "linear-gradient(90deg,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Printing</span> Services
</h2>
            <p style={styles.rightSub}>
              High-impact printing solutions designed to boost your brand visibility
            </p>
          </div>

<div style={{ 
            ...styles.grid, 
            gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr" 
          }}>   {services.map((s, i) => {
  const isActive = i === activeIndex;
  return (
    <div
      key={s.title}
      ref={el => (cardRefs.current[i] = el)}
      data-index={i}
      onMouseEnter={() => setActiveIndex(i)} // Hover highlight
      onMouseLeave={() => setActiveIndex(null)}
      style={{
        ...styles.card,
        borderColor: isActive ? s.color : "#e5e7eb",
        transform: isActive ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isActive
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 10px 25px rgba(0,0,0,0.06)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
      }}
    >
      <div style={styles.cardImgWrap}>
        <img src={s.image} alt={s.title} style={styles.cardImg} />
      </div>

      <div style={styles.cardBody}>
        <div style={styles.cardTop}>
          <span style={{ ...styles.tag, color: s.color, borderColor: s.color }}>
            {s.tag}
          </span>
          <span style={styles.icon}>{s.icon}</span>
        </div>

        <h4 style={styles.cardTitle}>{s.title}</h4>
        <p style={styles.cardText}>
          Premium {s.title.toLowerCase()} designed for maximum brand impact and durability.
        </p>

        <Link to="/services" style={{ textDecoration: "none" }}>
          <div style={{ ...styles.cardAction, color: s.color, cursor: "pointer" }}>
            View Details →
          </div>
        </Link>
      </div>
    </div>
  );
})}

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES (same as before) ================= */
const styles = {
  
  wrapper: {
    background: "#fafafa",
    overflowX: "hidden",
  },

  hero: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    margin: "0 auto",
    borderRadius: "24px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
    overflowX: "hidden", // Prevents side-to-side movement
  },

  left: {
    width: "100%",
    minHeight: "clamp(360px, 70vh, 520px)", // ✅ responsive
    backgroundImage: "url('/landingpage.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
padding: "0px 20px", // Standardize padding for mobile safety    display: "flex",
    alignItems: "center",
  },

  leftOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6))",
  },

  leftContent: {
    position: "relative",
    maxWidth: "520px",
    width: "100%",
  },

  desc: {
    fontSize: "15px",
    marginBottom: "24px",
    lineHeight: 1.6,
  },

  btnRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
primaryBtn: {
  background: "linear-gradient(90deg,#ec4899,#f97316)",
  color: "#fff",
  border: "none",
  padding: "14px 28px",
  borderRadius: "12px",
  fontWeight: 700,
  fontSize: "15px",
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(236,72,153,0.25)",
},

outlineBtn: {
  background: "#ffffff",
  border: "1.5px solid #e5e7eb",
  color: "#111827",
  padding: "14px 28px",
  borderRadius: "12px",
  fontWeight: 700,
  fontSize: "15px",
  cursor: "pointer",
},

  rightHeader: {
    marginBottom: "24px",
    textAlign: "center",
    padding: "0 12px",
  },

  grid: {
    display: "grid",
    gap: "20px",
  },

  card: {
    background: "#fff",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
  },

 /* ... inside your styles object ... */

  cardImgWrap: {
    width: "100%",
    height: "200px", // Set a fixed height for consistency
    overflow: "hidden",
    position: "relative", // Keeps everything contained
  },

  cardImg: {
    width: "100%",
    height: "100%", // Force image to fill the wrapper height
    objectFit: "cover", // This is the secret sauce: it crops instead of stretching
    display: "block",
  },

  cardBody: {
    padding: "18px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: 800,
  },

  cardText: {
    fontSize: "14px",
    lineHeight: 1.6,
  },
};

