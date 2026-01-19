import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const services = [
    { title: "Flex Printing", tag: "Outdoor", color: "#ec4899", icon: "💎", image: "/flexprinting.jpg" },
    { title: "LED Signage", tag: "Premium", color: "#f97316", icon: "✨", image: "/ledsignage.jpg" },
    { title: "Brand Boards", tag: "Corporate", color: "#06b6d4", icon: "🚀", image: "/acpboards.jpeg" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // 50% of card visible
    );

    cardRefs.current.forEach(card => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.wrapper}>
      <div style={styles.hero}>
        {/* HERO IMAGE */}
        <div style={{ ...styles.left, minHeight: "360px" }}>
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
              <Link to="/portfolio">
                <button style={styles.outlineBtn}>View Portfolio</button>
              </Link>
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

          <div style={{ ...styles.grid, gridTemplateColumns: "1fr" }}>
            {services.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={s.title}
                  ref={el => (cardRefs.current[i] = el)}
                  data-index={i}
                  style={{
                    ...styles.card,
                    borderColor: isActive ? s.color : "#e5e7eb",
                    transform: isActive ? "scale(1.02)" : "scale(1)",
                    boxShadow: isActive
                      ? "0 20px 40px rgba(0,0,0,0.12)"
                      : "0 10px 25px rgba(0,0,0,0.06)",
                    transition: "all 0.35s ease",
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
  wrapper: { background: "#fafafa", marginTop: "20px", padding: "0 4% 80px" },
  hero: { display: "flex", flexDirection: "column", gap: "40px", maxWidth: "1400px", margin: "0 auto", borderRadius: "28px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.08)" },
  left: { width: "100%", backgroundImage: "url('/landingpage.jpeg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative", padding: "60px", display: "flex", alignItems: "center", overflow: "hidden" },
  leftOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.7), rgba(255,255,255,0.4))" },
  leftContent: { position: "relative", maxWidth: "520px" },
  badge: { position: "relative", backgroundImage: "url('https://images.unsplash.com/photo-1581090700227-879b0a635d6b?auto=format&fit=crop&w=800&q=80')", backgroundSize: "cover", borderRadius: "999px", padding: "14px 26px", marginBottom: "24px", overflow: "hidden", display: "inline-flex", alignItems: "center" },
  badgeOverlay: { position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45))" },
  badgeText: { position: "relative", fontWeight: 700, fontSize: "14px" },
  heading: { fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 900, lineHeight: 1.1, marginBottom: "20px" },
  brand: { background: "linear-gradient(90deg,#ec4899,#f97316,#facc15)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  visibility: { background: "linear-gradient(90deg,#06b6d4,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  desc: { fontSize: "15px", marginBottom: "36px", lineHeight: 1.7 },
  btnRow: { display: "flex", gap: "16px", flexWrap: "wrap" },
  primaryBtn: { background: "linear-gradient(90deg,#ec4899,#f97316)", color: "#fff", border: "none", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, cursor: "pointer" },
  outlineBtn: { background: "#fff", border: "1px solid #e5e7eb", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, cursor: "pointer" },
  rightHeader: { marginBottom: "32px", textAlign: "center" },
  rightTitle: { fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, marginBottom: "10px", color: "#111827" },
  rightSub: { fontSize: "16px", color: "#6b7280", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 },
  card: { background: "#ffffff", borderRadius: "22px", border: "1px solid #e5e7eb", overflow: "hidden", cursor: "pointer" },
  cardImgWrap: { position: "relative", overflow: "hidden" },
  cardImg: { width: "100%", height: "500px", objectFit: "cover", transition: "transform 0.4s ease" },
  cardBody: { padding: "22px" },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" },
  cardTitle: { fontSize: "22px", fontWeight: 800, marginBottom: "8px", color: "#111827" },
  cardText: { fontSize: "14px", color: "#6b7280", lineHeight: 1.6, marginBottom: "18px" },
  cardAction: { fontSize: "15px", fontWeight: 700 },
  grid: { display: "grid", gap: "24px" },
  tag: { fontSize: "10px", padding: "4px 10px", borderRadius: "999px", border: "1px solid", fontWeight: 700 },
  icon: { fontSize: "22px" },
};
