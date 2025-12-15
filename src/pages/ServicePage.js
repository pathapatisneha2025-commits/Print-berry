import React from "react";
import {
  FaPrint,
  FaLightbulb,
  FaStickyNote,
  FaCube,
  FaCheckCircle,
} from "react-icons/fa";

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

        /* ================= SERVICES ================= */
        .services-page {
          background: radial-gradient(circle at top, #111827, #020617);
          padding: 80px 6%;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: linear-gradient(180deg, #0b1220, #020617);
          border-radius: 22px;
          padding: 34px;
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

        .icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 18px;
        }

        .purple { background: rgba(168,85,247,0.15); color: #c084fc; }
        .yellow { background: rgba(250,204,21,0.15); color: #facc15; }
        .white { background: rgba(255,255,255,0.12); color: #ffffff; }
        .green { background: rgba(34,197,94,0.15); color: #22c55e; }

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 18px;
          margin-bottom: 26px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14.5px;
        }

        .feature svg {
          color: #22c55e;
        }

        .quote {
          color: #facc15;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }
          .services-header {
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
}

.services-header h4 {
  color: #facc15;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-weight: 500;
}

.services-header h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #ffffff;
}

.services-header p {
  font-size: 16px;
  color: #9ca3af;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}


        /* ================= PROCESS ================= */
        .process {
          padding: 110px 6% 80px;
          background: #020617;
          text-align: center;
          color: #ffffff;
        }

        .process h4 {
          color: #facc15;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .process h2 {
          font-size: 44px;
          font-weight: 600;
          margin-bottom: 70px;
          color: #ffffff;
        }

        .process h2 span {
          background: linear-gradient(90deg, #f43f5e, #f59e0b);
          -webkit-background-clip: text;
          color: transparent;
        }

        .process-line {
          position: relative;
          max-width: 1050px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-line::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 8%;
          right: 8%;
          height: 1px;
          background: rgba(250,204,21,0.35);
        }

        .process-step {
          position: relative;
          z-index: 2;
        }

        .step-number {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(250,204,21,0.18);
          color: #facc15;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          border: 1px solid rgba(250,204,21,0.35);
        }

        .process-step h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 6px;
          color: #ffffff;
        }

        .process-step p {
          font-size: 14px;
          color: #9ca3af;
          max-width: 220px;
          margin: 0 auto;
        }

        /* ================= CTA ================= */
        .cta {
          width: 100%;
          padding: 120px 6%;
          background: #020617;
          text-align: center;
        }

        .cta-inner {
          max-width: 1050px;
          margin: auto;
        }

        .cta h2 {
          font-size: 42px;
          font-weight: 600;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .cta h2 span {
          background: linear-gradient(90deg, #f43f5e, #f59e0b);
          -webkit-background-clip: text;
          color: transparent;
        }

        .cta p {
          font-size: 16px;
          color: #9ca3af;
          max-width: 680px;
          margin: 0 auto 34px;
        }

        .cta button {
          padding: 16px 44px;
          font-size: 15px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg, #f43f5e, #f97316);
          color: #ffffff;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cta button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(244,63,94,0.35);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 900px) {
          .process-line {
            grid-template-columns: 1fr;
            gap: 46px;
          }

          .process-line::before {
            display: none;
          }
        }
      `}</style>
{/* ================= SERVICES HEADER ================= */}
<div className="services-header">
  <h4>Our Services</h4>
  <h2>Complete Digital Printing Solutions</h2>
  <p>From concept to completion, we offer a full range of printing and signage services to help your business make a powerful visual impact.</p>
</div>

      {/* ================= SERVICES ================= */}
      <section className="services-page">
  <div className="services-grid">
    {/* Existing Services */}
    <div className="service-card">
      <div className="icon purple"><FaPrint /></div>
      <h3>Flex Printing</h3>
      <p>High-quality flex banners with vibrant colors.</p>
      <div className="features">
        <div className="feature"><FaCheckCircle /> UV resistant</div>
        <div className="feature"><FaCheckCircle /> Custom sizes</div>
      </div>
      <span className="quote">Get Quote →</span>
    </div>

    <div className="service-card highlight">
      <div className="icon yellow"><FaLightbulb /></div>
      <h3 style={{ color: "#facc15" }}>LED Signage</h3>
      <p>Glow signs that make your brand visible 24/7.</p>
      <div className="features">
        <div className="feature"><FaCheckCircle /> Long life</div>
        <div className="feature"><FaCheckCircle /> Installation</div>
      </div>
      <span className="quote">Get Quote →</span>
    </div>

    <div className="service-card">
      <div className="icon white"><FaStickyNote /></div>
      <h3>Vinyl Printing</h3>
      <p>Premium vinyl stickers and decals.</p>
      <span className="quote">Get Quote →</span>
    </div>

    <div className="service-card">
      <div className="icon green"><FaCube /></div>
      <h3>3D Signage</h3>
      <p>Dimensional letters and logos.</p>
      <span className="quote">Get Quote →</span>
    </div>

    {/* NEW SERVICE: ACP Boards */}
    <div className="service-card">
      <div className="icon yellow"><FaCube /></div>
      <h3>ACP Boards</h3>
      <p>Aluminum composite panels for modern building facades and durable outdoor signage solutions.</p>
      <div className="features">
        <div className="feature"><FaCheckCircle /> Weather proof</div>
        <div className="feature"><FaCheckCircle /> Fire resistant</div>
        <div className="feature"><FaCheckCircle /> Modern look</div>
        <div className="feature"><FaCheckCircle /> Low maintenance</div>
      </div>
      <span className="quote">Get Quote →</span>
    </div>

    {/* NEW SERVICE: Promotional Items */}
    <div className="service-card">
      <div className="icon purple"><FaPrint /></div>
      <h3>Promotional Items</h3>
      <p>Custom printed merchandise including t-shirts, mugs, caps, and corporate gifts for brand promotion.</p>
      <div className="features">
        <div className="feature"><FaCheckCircle /> T-shirts & caps</div>
        <div className="feature"><FaCheckCircle /> Mugs & bottles</div>
        <div className="feature"><FaCheckCircle /> Pens & notebooks</div>
        <div className="feature"><FaCheckCircle /> Corporate gifts</div>
      </div>
      <span className="quote">Get Quote →</span>
    </div>
  </div>
</section>


      {/* ================= PROCESS ================= */}
      <section className="process">
        <h4>HOW WE WORK</h4>
        <h2>Our <span>Simple</span> Process</h2>

        <div className="process-line">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Consultation</h3>
            <p>Share your vision and requirements with us.</p>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Design</h3>
            <p>We create custom designs for approval.</p>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Production</h3>
            <p>Premium materials & advanced technology.</p>
          </div>

          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Delivery</h3>
            <p>On-time delivery & professional installation.</p>
          </div>
        </div>

        
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="cta-inner">
          <h2>Need a <span>Custom Solution?</span></h2>
          <p>
            Don’t see exactly what you need? We create tailor-made
            branding and printing solutions based on your requirements.
          </p>
          <button>Contact Us Today →</button>
        </div>
      </section>
    </>
  );
}
