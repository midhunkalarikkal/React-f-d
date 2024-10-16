import { LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <nav className="header">
      <div className="logo-container">
        <img src={LOGO} alter="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to='/' className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">
              Contact
            </Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
