import { Link } from "react-router";
import "../components_styles/PhoneCard.css";

function PhoneCard({ brand, model, storage, deposit, installment, duration, totalPrice }) {
  return (
    <div className="phone-card">
      <div className="phone-card-image">
        <span>Phone Image</span>
      </div>

      <div className="phone-card-content">
        <h3>
          {brand} {model}
        </h3>
        <p className="phone-storage">{storage}</p>

        <div className="phone-pricing">
          <p>
            <strong>Deposit:</strong> KES {deposit}
          </p>
          <p>
            <strong>Installment:</strong> KES {installment}
          </p>
          <p>
            <strong>Duration:</strong> {duration}
          </p>
          <p>
            <strong>Total Price:</strong> KES {totalPrice}
          </p>
        </div>

        <Link to="/apply" className="phone-card-btn">
          Apply for This Phone
        </Link>
      </div>
    </div>
  );
}

export default PhoneCard;