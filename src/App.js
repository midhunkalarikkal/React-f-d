import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';

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
