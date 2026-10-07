import "../components_styles/FAQSection.css";

function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "How much deposit do I need?",
      answer: "The deposit depends on the phone model you choose.",
    },
    {
      id: 2,
      question: "How long is the repayment period?",
      answer: "Repayment duration varies depending on the selected financing plan.",
    },
    {
      id: 3,
      question: "Can I apply online?",
      answer: "Yes, you can submit your application through the website.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="section-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;