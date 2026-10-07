import "../components_styles/ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-card">
        <h3>Phone</h3>
        <p>+254 700 000 000</p>
      </div>

      <div className="contact-card">
        <h3>Email</h3>
        <p>info@mobify.com</p>
      </div>

      <div className="contact-card">
        <h3>Location</h3>
        <p>Nairobi, Kenya</p>
      </div>

      <div className="contact-card">
        <h3>Business Hours</h3>
        <p>Monday - Saturday, 8:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}

export default ContactInfo;