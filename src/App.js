import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu';
import useOnlineStatus from './utils/useOnlineStatus';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import UserContext from "./utils/UserContext";

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

  const [userInfo , setUserInfo] = useState()

  useEffect(() => {
    const data = {
      name : "Midhun K Paniker"
    }
    setUserInfo(data.name)
  },[])
  
  console.log(userInfo)

  const onlineStatus = useOnlineStatus()
  return (
    <UserContext.Provider value={{ logginedUser : userInfo}}>
    <div className="app">
      <Header />
      {
        onlineStatus === false ? (
          <h1>You're offline, Please check your internet connection!</h1>
        ) : (
          <Outlet />
        )
      }
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : '/restaurant/:resId',
        element : <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
