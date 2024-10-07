import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   -Logo
 *   -Nav items
 * Body
 *   -Search bar with button
 *   -Restaurant card container
 *       -Restaurant Card
 *           -Card image
 *           -Name of res, Star rating, Cuisine, Delivery time
 * Footer
 *   -Coyright
 *   -Links
 *   -Address
 *   -Contact
 **/

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVermuyA5zuSvADyNPet-giCboNoUHK52G9w&s"
          alter=""
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="" className="nav-item">
              Explore
            </a>
          </li>
          <li>
            <a href="" className="nav-item">
              Cart
            </a>
          </li>
          <li>
            <a href="" className="nav-item">
              About
            </a>
          </li>
          <li>
            <a href="" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
