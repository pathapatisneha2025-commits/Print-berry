import React, { useState } from "react";

const FeaturedClients = () => {
  const clients = [
    { name: "Yamaha", logo: "yamaha.png" },
    { name: "Toni & Guy", logo: "tonyguy.jpeg" },
    { name: "Lenskart", logo: "Lenskart.png" },
    { name: "KIMS", logo: "kims.png" },
    { name: "Kidzee", logo: "Kidzee.png" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#111",
        color: "#fff",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "42px", fontWeight: 600, marginBottom: 8 }}>
        Featured <span style={{ color: "#FFC107" }}>Clients</span>
      </h2>

      <p style={{ color: "#aaa", fontSize: "18px", marginBottom: "50px" }}>
        Some of the brands that we have worked for.
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
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: "200px",
                height: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: isHovered ? "1px solid #FFC107" : "1px solid #333",
                padding: "20px",
                background: "#1a1a1a",
                transform: isHovered ? "scale(1.08)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 0 20px rgba(255,193,7,0.6)"
                  : "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  filter: isHovered ? "brightness(1.2)" : "brightness(0.85)",
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
