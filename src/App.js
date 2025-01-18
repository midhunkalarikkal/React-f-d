import Body from "./components/Body";
import Cart from "./components/Cart";
import About from "./components/About";
import Error from "./components/Error";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import UserClass from "./components/UserClass";
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from "react";
import useOnlineStatus from "./utils/useOnlineStatus";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";

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
  const [userInfo, setUserInfo] = useState();
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);

  useEffect(() => {
    const data = {
      name: "Midhun K Paniker",
    };
    setUserInfo(data.name);
  }, []);


  const onlineStatus = useOnlineStatus();
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ logginedUser: userInfo , showProfileDropDown, setShowProfileDropDown }}>
        <div className="app">
          <Header />
          <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
          {onlineStatus === false ? (
            <Error message={"You're offline, Please check your internet connection!"}/>
          ) : (
            <Outlet />
          )}
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/user",
        element: <UserClass />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
