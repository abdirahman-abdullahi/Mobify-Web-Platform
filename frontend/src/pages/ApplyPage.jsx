import ApplyForm from "../components/ApplyForm";
import "../pages_styles/ApplyPage.css";

function ApplyPage() {
  return (
    <section className="apply-page">
      <div className="section-container">
        <div className="apply-page-header">
          <h1>Apply Now</h1>
          <p>Fill in your details and start your smartphone financing journey.</p>
        </div>

        <ApplyForm />
      </div>
    </section>
  );
}

export default ApplyPage;