import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement : <Error />
  },
  {
    path : "/about",
    element : <About />
  },
  {
    path : '/contact',
    element : <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);
