import { Link } from "react-router";
import "../components_styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container section-container">
        <div className="hero-text">
          <h1>Own your dream smartphone today.</h1>
          <p>
            Get quality smartphones with flexible installment plans that fit your budget.
          </p>

          <div className="hero-buttons">
            <Link to="/phones" className="hero-btn primary-btn">
              Browse Phones
            </Link>
            <Link to="/apply" className="hero-btn secondary-btn">
              Apply Now
            </Link>
          </div>
        </div>

        <div className="hero-image-box">
          <div className="hero-placeholder-card">
            <h3>Smartphone Financing Made Simple</h3>
            <p>Fast application. Flexible payments. Trusted service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;