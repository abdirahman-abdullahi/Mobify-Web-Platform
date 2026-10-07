import HowItWorksSection from "../components/HowItWorksSection";
import "../pages_styles/HowItWorksPage.css";

function HowItWorksPage() {
  return (
    <section className="how-it-works-page">
      <div className="section-container">
        <div className="how-it-works-page-header">
          <h1>How It Works</h1>
          <p>Understand our simple process for getting a smartphone on installments.</p>
        </div>
      </div>

      <HowItWorksSection />
    </section>
  );
}

export default HowItWorksPage;