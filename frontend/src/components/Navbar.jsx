import { Link } from "react-router";
import "../components_styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container section-container">
        <div className="navbar-logo">
          <Link to="/">Mobify</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/phones">Phones</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;