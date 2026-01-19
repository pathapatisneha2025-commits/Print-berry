import React, { useEffect, useRef, useState } from "react";

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const badge = {
    display: "inline-block",
    padding: "16px 32px",
    color: "#ec4899",
    fontSize: "20px",
    fontWeight: "800",
    letterSpacing: "0.5px",
    marginBottom: "32px",
    textTransform: "uppercase",
  };

  /* 🔥 Scroll highlight (mobile-friendly) */
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

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          color: #111827;
        }

       .services-header {
  text-align: center;
  padding: 90px 6% 50px;
  background: 
    linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.3)),
    url('/flexprinting.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 28px;
}


        .services-header h2 {
          font-size: 38px;
          margin-bottom: 16px;
          font-weight: 800;
        }

        .services-header p {
          font-size: 16px;
          color: #6b7280;
          max-width: 700px;
          margin: auto;
          line-height: 1.6;
        }

        .services-page {
          min-height: 100vh;
          padding: 40px 6% 100px;
          background: linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)),
            url('https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 28px;
          border: 1px solid #e5e7eb;
          transition: all 0.35s ease;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(236,72,153,0.18);
        }

        .service-card.highlight {
          border: 1px solid rgba(236,72,153,0.6);
          box-shadow: 0 0 26px rgba(236,72,153,0.25);
        }

        .service-image {
          width: 100%;
          height: 190px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 18px;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.2);
          will-change: transform;
          backface-visibility: hidden;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .service-card p {
          font-size: 14.5px;
          color: #6b7280;
          margin-bottom: 16px;
        }

        .features {
          display: flex;
          gap: 16px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .feature {
          font-size: 14px;
          color: #374151;
        }

        .quote {
          color: #ec4899;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .services-header h2 {
            font-size: 32px;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="services-header">
        <span style={badge}>Our Services</span>
        <h2>Complete Digital Printing Solutions</h2>
        <p>
          From concept to completion, we offer a full range of printing and
          signage services to help your business stand out.
        </p>
      </div>

      {/* SERVICES */}
      <section className="services-page">
        <div className="services-grid">
          {[
  {
    title: "LED Signage",
    img: "/ledsignage.jpg",
    desc: "Premium glow sign boards that give your brand maximum visibility.",
    features: ["✔ Long life LEDs", "✔ Professional installation"],
  },
  {
    title: "Outdoor LED Signage",
    img: "/outdoorled.jpg",
    desc: "Weather-resistant LED signboards for outdoor branding.",
    features: ["✔ Long life LEDs", "✔ Professional installation"],
  },
  {
    title: "ACP Boards",
    img: "/acpboards.jpeg",
    desc: "High-quality ACP panels for premium outdoor signage.",
    features: ["✔ Weather proof", "✔ Premium finish"],
  },
  {
    title: "Flex Printing",
    img: "/flexprinting.jpg",
    desc: "Cost-effective flex banners with vibrant colors.",
    features: ["✔ Vibrant colors", "✔ Cost-effective"],
  },
  {
    title: "Vinyl Printing",
    img: "/vinylbranding.jpg",
    desc: "Durable vinyl graphics and sticker branding.",
    features: ["✔ Long-lasting vinyl", "✔ Easy application"],
  },
  {
    title: "Instore Branding",
    img: "/instorebranding.jpg",
    desc: "Creative branding solutions for interiors & retail spaces.",
    features: ["✔ Interior branding", "✔ Retail ready"],
  },
]
.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`service-card ${isActive ? "highlight" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="service-image">
                  <img src={service.img} alt={service.title} />
                </div>

                <h3 style={isActive ? { color: "#ec4899" } : {}}>
                  {service.title}
                </h3>

                <p>{service.desc}</p>

                {service.features && (
                  <div className="features">
                    {service.features.map((f) => (
                      <div key={f} className="feature">
                        {f}
                      </div>
                    ))}
                  </div>
                )}

                <span className="quote">Get Quote →</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
