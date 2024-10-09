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

const json = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.528765&lng=76.9375793&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
.then(response => response.json())  
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3027/3027212.png"
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

const RestaurantCard = () => {
  return (
    <div className="res-Card">
      <div className="card-top">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jvupcj5r5g3uy8hnasmz"
          alt="res-card-image"
          className="res-card-img"
        />
        <h3 className="offer">Offer up to 60%</h3>
      </div>
      <div className="card-details">
        <h3 className="resName">Ganapathi Bhavan</h3>
        <h4 className="rating-with-time">4.3 • 30-35 mins</h4>
        <h5 className="rating-with-time">Pastas, Burgers, Ice Cream, Pizzas Cheroor</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
        <div className="container">
          <div className="search">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">Search</button>
          </div>
          <div className="res-container">
            <RestaurantCard/>
          </div>
        </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
