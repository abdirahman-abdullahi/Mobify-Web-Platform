import "../components_styles/ApplyForm.css";

function ApplyForm() {
  return (
    <form className="apply-form">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email address" />
      </div>

      <div className="form-group">
        <label>National ID Number</label>
        <input type="text" placeholder="Enter your ID number" />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input type="text" placeholder="Enter your location" />
      </div>

      <div className="form-group">
        <label>Selected Phone</label>
        <input type="text" placeholder="Enter selected phone model" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea rows="5" placeholder="Enter any additional details"></textarea>
      </div>

      <button type="submit" className="apply-submit-btn">
        Submit Application
      </button>
    </form>
  );
}

export default ApplyForm;