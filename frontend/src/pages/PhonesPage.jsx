import PhoneCard from "../components/PhoneCard";
import "../pages_styles/PhonesPage.css";

function PhonesPage() {
  const phones = [
    {
      id: 1,
      brand: "Samsung",
      model: "Galaxy A15",
      storage: "128GB",
      deposit: "5,000",
      installment: "250/day",
      duration: "12 months",
      totalPrice: "35,000",
    },
    {
      id: 2,
      brand: "Tecno",
      model: "Spark 20",
      storage: "128GB",
      deposit: "4,500",
      installment: "220/day",
      duration: "12 months",
      totalPrice: "30,000",
    },
    {
      id: 3,
      brand: "Infinix",
      model: "Hot 40",
      storage: "256GB",
      deposit: "6,000",
      installment: "280/day",
      duration: "12 months",
      totalPrice: "38,000",
    },
    {
      id: 4,
      brand: "Redmi",
      model: "Note 13",
      storage: "256GB",
      deposit: "7,000",
      installment: "300/day",
      duration: "12 months",
      totalPrice: "42,000",
    },
  ];

  return (
    <section className="phones-page">
      <div className="section-container">
        <div className="phones-page-header">
          <h1>Available Phones</h1>
          <p>Choose from our range of smartphones available on installment plans.</p>
        </div>

        <div className="phones-grid">
          {phones.map((phone) => (
            <PhoneCard
              key={phone.id}
              brand={phone.brand}
              model={phone.model}
              storage={phone.storage}
              deposit={phone.deposit}
              installment={phone.installment}
              duration={phone.duration}
              totalPrice={phone.totalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhonesPage;