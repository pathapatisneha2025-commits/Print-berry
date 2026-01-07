import React, { useState, useEffect, useRef } from "react";

const FeaturedClients = () => {
  const clients = [
    { name: "Yamaha", logo: "yamaha.png" },
    { name: "Toni & Guy", logo: "tonyguy.jpeg" },
    { name: "Lenskart", logo: "Lenskart.png" },
    { name: "KIMS", logo: "kims.png" },
    { name: "Kidzee", logo: "Kidzee.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  /* Scroll highlight for mobile */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const gradientColor = "linear-gradient(90deg,#ec4899,#f97316,#facc15)";

  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#fff",
        color: "#111",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "42px", fontWeight: 600, marginBottom: 8 }}>
        Featured{" "}
        <span
          style={{
            background: gradientColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Clients
        </span>
      </h2>

      <p style={{ color: "#555", fontSize: "18px", marginBottom: "50px" }}>
        Some of the brands that we have worked with.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {clients.map((client, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                width: "200px",
                height: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: isActive
                  ? "2px solid #ec4899"
                  : "1px solid #E5E7EB",
                padding: "20px",
                background: "#F9FAFB",
                transform: isActive ? "scale(1.08)" : "scale(1)",
                boxShadow: isActive
                  ? "0 0 22px rgba(236,72,153,0.4)"
                  : "0 4px 12px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                borderRadius: "12px",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  filter: isActive ? "brightness(1.15)" : "brightness(0.95)",
                  transition: "0.3s",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedClients;
