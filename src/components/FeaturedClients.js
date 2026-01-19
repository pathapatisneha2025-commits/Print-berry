import React, { useState, useEffect, useRef } from "react";

const FeaturedClients = () => {
  const clients = [
    { name: "FaShionTv", logo: "fashiontv.jpeg" },
    { name: "Costa Cofee", logo: "coffee.jpeg" },
    { name: "Swadesh", logo: "swadesh.jpeg" },
    { name: "One Golf", logo: "onegolf.jpeg" },
    { name: "VASAVI Group", logo: "vasvai.jpeg" },
    { name: "KalkiFashion", logo: "kalki.jpeg" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const imgRefs = useRef([]);

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
      { threshold: 0.6 }
    );

    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
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

      {/* LOGO GRID */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {clients.map((client, index) => {
          const isActive = activeIndex === index;

          return (
            <img
              key={index}
              ref={(el) => (imgRefs.current[index] = el)}
              data-index={index}
              src={client.logo}
              alt={client.name}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                width: "240px",
                height: "140px",
                objectFit: "contain",
                padding: "10px",
                cursor: "pointer",

                /* Highlight effect */
                transform: isActive ? "scale(1.08)" : "scale(1)",
                filter: isActive
                  ? "drop-shadow(0 12px 25px rgba(236,72,153,0.45))"
                  : "grayscale(25%)",

                transition: "all 0.35s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedClients;
