import React from "react";

export default function ServicesPage() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #020617;
          color: #ffffff;
        }

        /* ================= SERVICES HEADER ================= */
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

        /* ================= SERVICES ================= */
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
          box-shadow: inset 0 0 60px rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .service-card.highlight {
          border: 1px solid rgba(250,204,21,0.5);
        }

        /* ================= SERVICE IMAGE ================= */
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
          display: block;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .service-card p {
          font-size: 14.5px;
          color: #d1d5db;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 16px;
          margin-bottom: 22px;
        }

        .feature {
          font-size: 14px;
          color: #e5e7eb;
        }

        .quote {
          color: #facc15;
          font-weight: 600;
          cursor: pointer;
        }

        /* ================= MOBILE RESPONSIVE ================= */
        @media (max-width: 768px) {
          .services-header {
            padding: 60px 5% 30px;
          }

          .services-header h2 {
            font-size: 28px;
          }

          .services-header p {
            font-size: 15px;
          }

          .service-card {
            padding: 22px;
          }

          .service-image {
            height: 160px;
          }

          .features {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .services-header h2 {
            font-size: 24px;
          }

          .service-image {
            height: 140px;
          }

          .service-card h3 {
            font-size: 18px;
          }
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

          <div className="service-card">
            <div className="service-image">
              <img src="/flexprinting.jpeg" alt="Flex Printing" />
            </div>
            <h3>Flex Printing</h3>
            <p>High-quality flex banners with vibrant colors.</p>
            <div className="features">
              <div className="feature">✔ UV resistant</div>
              <div className="feature">✔ Custom sizes</div>
            </div>
            <span className="quote">Get Quote →</span>
          </div>

          <div className="service-card highlight">
            <div className="service-image">
              <img src="/ledsignage.jpeg" alt="LED Signage" />
            </div>
            <h3 style={{ color: "#facc15" }}>LED Signage</h3>
            <p>Glow signs that make your brand visible 24/7.</p>
            <div className="features">
              <div className="feature">✔ Long life</div>
              <div className="feature">✔ Installation</div>
            </div>
            <span className="quote">Get Quote →</span>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/vinlylettering.jpeg" alt="Vinyl Printing" />
            </div>
            <h3>Vinyl Printing</h3>
            <p>Premium vinyl stickers and decals.</p>
            <span className="quote">Get Quote →</span>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/3Dsignage.jpeg" alt="3D Signage" />
            </div>
            <h3>3D Signage</h3>
            <p>Dimensional letters and logos.</p>
            <span className="quote">Get Quote →</span>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/brandboard.jpeg" alt="ACP Boards" />
            </div>
            <h3>ACP Boards</h3>
            <p>Modern aluminum composite panels for outdoor branding.</p>
            <div className="features">
              <div className="feature">✔ Weather proof</div>
              <div className="feature">✔ Fire resistant</div>
              <div className="feature">✔ Low maintenance</div>
              <div className="feature">✔ Premium finish</div>
            </div>
            <span className="quote">Get Quote →</span>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="/promotional.jpeg" alt="Promotional Items" />
            </div>
            <h3>Promotional Items</h3>
            <p>Custom branded merchandise for business promotion.</p>
            <div className="features">
              <div className="feature">✔ T-shirts & caps</div>
              <div className="feature">✔ Mugs & bottles</div>
              <div className="feature">✔ Corporate gifts</div>
              <div className="feature">✔ Bulk orders</div>
            </div>
            <span className="quote">Get Quote →</span>
          </div>

        </div>
      </section>
    </>
  );
}
