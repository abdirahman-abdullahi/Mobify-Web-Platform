import HeroSection from "../components/HeroSection";
import PhoneCard from "../components/PhoneCard";
import HowItWorksSection from "../components/HowItWorksSection";
import FAQSection from "../components/FAQSection";
import "../pages_styles/HomePage.css";

function HomePage() {
  const featuredPhones = [
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
  ];

  return (
    <div className="home-page">
      <HeroSection />

      <section className="featured-phones-section">
        <div className="section-container">
          <div className="featured-header">
            <h2>Featured Phones</h2>
            <p>Explore some of our available devices and flexible plans.</p>
          </div>

          <div className="featured-phone-grid">
            {featuredPhones.map((phone) => (
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

      <HowItWorksSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;