import ContactInfo from "../components/ContactInfo";
import "../pages_styles/ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="section-container">
        <div className="contact-page-header">
          <h1>Contact Us</h1>
          <p>Reach out to us for any inquiries about our financing plans and devices.</p>
        </div>

        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactPage;