import React, { useEffect, useRef, useState } from "react";

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

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
          background: #020617;
          color: #ffffff;
        }

        .services-header {
          text-align: center;
          padding: 80px 6% 40px;
        }

        .services-header h4 {
          color: #facc15;
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .services-header h2 {
          font-size: 36px;
          margin-bottom: 16px;
        }

        .services-header p {
          font-size: 16px;
          color: #9ca3af;
          max-width: 700px;
          margin: auto;
          line-height: 1.6;
        }

        .services-page {
          background: radial-gradient(circle at top, #111827, #020617);
          padding: 40px 6% 80px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: linear-gradient(180deg, #0b1220, #020617);
          border-radius: 22px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .service-card.highlight {
          border: 1px solid rgba(250,204,21,0.6);
          box-shadow: 0 0 24px rgba(250,204,21,0.25);
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
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .service-card p {
          font-size: 14.5px;
          color: #d1d5db;
          margin-bottom: 16px;
        }

        .features {
          display: flex;
          gap: 16px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .feature { font-size: 14px; }

        .quote {
          color: #facc15;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      {/* HEADER */}
      <div className="services-header">
        <h4>Our Services</h4>
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
              desc:
                "Premium glow sign boards that give your brand maximum visibility.",
              features: ["✔ Long life LEDs", "✔ Professional installation"],
            },
            {
              title: "Outdoor LED Signage",
              img: "/outdoorled.jpg",
              desc: "Weather-resistant LED signboards for outdoor branding.",
            },
            {
              title: "ACP Boards",
              img: "/acpboards.jpg",
              desc: "High-quality ACP panels for premium outdoor signage.",
              features: ["✔ Weather proof", "✔ Premium finish"],
            },
            {
              title: "Flex Printing",
              img: "/flexprinting.jpg",
              desc: "Cost-effective flex banners with vibrant colors.",
            },
            {
              title: "Vinyl Printing",
              img: "/vinylbranding.jpg",
              desc: "Durable vinyl graphics and sticker branding.",
            },
            {
              title: "Instore Branding",
              img: "/instorebranding.jpg",
              desc: "Creative branding solutions for interiors & retail spaces.",
            },
          ].map((service, index) => {
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
                <h3 style={isActive ? { color: "#facc15" } : {}}>
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
