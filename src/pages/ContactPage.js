import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
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

  const contactInfo = [
    { icon: <FaPhoneAlt />, title: "Call Us", text: "+91 90100 99111" },
    { icon: <FaEnvelope />, title: "Email", text: "printberry.in@gmail.com" },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "1st Floor, C-Block, Uptown Cyberabad Building, 100ft Road, Madhapur, Hyderabad. 500081",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin:0; padding:0; font-family: 'Poppins', sans-serif;}
        body { background: #fff; color: #111827; }

        .contact-page {
          min-height: 100vh;
          padding: 250px 40px 80px;
          background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
                      url('/kalki.jpeg');
          background-size: contain;
          background-position: top center;
          color: #111;
        }

        .contact-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 100px;
        }

        .contact-header h1 {
          font-size: clamp(36px, 5vw, 54px);
          font-weight: 800;
          margin-bottom: 18px;
        }

        .contact-header .brand { color: #ec4899; }

        .contact-header p {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 26px;
          border-radius: 22px;
          background: #fff;
          border: 1px solid #eee;
          box-shadow: 0 18px 40px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .info-card:hover {
          transform: translateY(-6px);
        }

        .icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(236,72,153,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #ec4899;
          flex-shrink: 0;
        }

        .info-title { margin: 0; font-size: 17px; font-weight: 600; }
        .info-text { margin-top: 6px; font-size: 14px; color: #666; line-height: 1.5; }

        .contact-form {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 22px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.06);
        }

        .contact-form input,
        .contact-form textarea {
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #ddd;
          font-size: 14px;
          outline: none;
        }

        .contact-form button {
          margin-top: 10px;
          padding: 16px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(90deg,#ec4899,#f97316);
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        .contact-form button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1440px) {
          .contact-page { padding: 300px 35px 75px; }
        }

        @media (max-width: 1024px) {
          .contact-page { padding: 300px 30px 70px; }
        }

        @media (max-width: 768px) {
          .contact-page { padding: 120px 20px 60px; }
          .contact-content { grid-template-columns: 1fr; }
          .contact-header h1 { font-size: 32px; }
        }
      `}</style>

      <section className="contact-page">
        <div className="contact-header">
          <span style={badge}></span>
          <h1>
            Let’s Build Your <span className="brand">Brand</span>
          </h1>
          <p>
            Have a project in mind? Reach out to us and let’s create something impactful together.
          </p>
        </div>

        <div className="contact-content">
          <div className="info">
            {contactInfo.map((item) => (
              <div key={item.title} className="info-card">
                <div className="icon-wrap">{item.icon}</div>
                <div>
                  <h4 className="info-title">{item.title}</h4>
                  <p className="info-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target[0].value;
              const email = e.target[1].value;
              const phone = e.target[2].value;
              const message = e.target[3].value;
              const whatsappNumber = "+91 90100 99111";
              const text = `Hello, I have a new enquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
              const encodedText = encodeURIComponent(text);
              window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
            }}
          >
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Tell us about your project" rows={4} />
            <button type="submit">Send Message →</button>
          </form>
        </div>
      </section>
    </>
  );
}
