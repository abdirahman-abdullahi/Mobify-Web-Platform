import "../components_styles/HowItWorksSection.css";

function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Choose a Phone",
      description: "Browse available smartphones and select the one that fits your needs.",
    },
    {
      id: 2,
      title: "Submit Your Application",
      description: "Fill in your personal details and send your application for review.",
    },
    {
      id: 3,
      title: "Get Approved",
      description: "Once approved, pay the deposit and receive your phone.",
    },
    {
      id: 4,
      title: "Pay in Installments",
      description: "Complete your payment gradually through flexible installment plans.",
    },
  ];

  return (
    <section className="how-section">
      <div className="section-container">
        <div className="how-section-header">
          <h2>How It Works</h2>
          <p>A simple process designed to help you get connected faster.</p>
        </div>

        <div className="how-steps">
          {steps.map((step) => (
            <div key={step.id} className="how-step-card">
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;