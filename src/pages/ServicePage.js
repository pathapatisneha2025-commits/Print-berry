import React from "react";

export default function ServicesPage() {
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
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 16px;
          margin-bottom: 22px;
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

          {/* 1. LED SIGNAGE (HIGHLIGHT) */}
          <div className="service-card highlight">
            <div className="service-image">
              <img src="/ledsignage.jpg" alt="LED Signage" />
            </div>
            <h3 style={{ color: "#facc15" }}>LED Signage</h3>
            <p>Premium glow sign boards that give your brand maximum visibility.</p>
            <div className="features">
              <div className="feature">✔ Long life LEDs</div>
              <div className="feature">✔ Professional installation</div>
            </div>
            <span className="quote">Get Quote →</span>
          </div>

          {/* 2. OUTDOOR LED SIGNAGE */}
          <div className="service-card">
            <div className="service-image">
              <img src="/outdoorled.jpg" alt="Outdoor LED Signage" />
            </div>
            <h3>Outdoor LED Signage</h3>
            <p>Weather-resistant LED signboards for outdoor branding.</p>
            <span className="quote">Get Quote →</span>
          </div>

          {/* 3. ACP BOARDS */}
          <div className="service-card">
            <div className="service-image">
              <img src="/acpboards.jpg" alt="ACP Boards" />
            </div>
            <h3>ACP Boards</h3>
            <p>High-quality ACP panels for premium outdoor signage.</p>
            <div className="features">
              <div className="feature">✔ Weather proof</div>
              <div className="feature">✔ Premium finish</div>
            </div>
            <span className="quote">Get Quote →</span>
          </div>

          {/* 4. FLEX */}
          <div className="service-card">
            <div className="service-image">
              <img src="/flexprinting.jpg" alt="Flex Printing" />
            </div>
            <h3>Flex Printing</h3>
            <p>Cost-effective flex banners with vibrant colors.</p>
            <span className="quote">Get Quote →</span>
          </div>

          {/* 5. VINYL */}
          <div className="service-card">
            <div className="service-image">
              <img src="/vinylbranding.jpg" alt="Vinyl Printing" />
            </div>
            <h3>Vinyl Printing</h3>
            <p>Durable vinyl graphics and sticker branding.</p>
            <span className="quote">Get Quote →</span>
          </div>

          {/* 6. INSTORE BRANDING */}
          <div className="service-card">
            <div className="service-image">
              <img src="/instorebranding.jpg" alt="Instore Branding" />
            </div>
            <h3>Instore Branding</h3>
            <p>Creative branding solutions for interiors & retail spaces.</p>
            <span className="quote">Get Quote →</span>
          </div>

        </div>
      </section>
    </>
  );
}
