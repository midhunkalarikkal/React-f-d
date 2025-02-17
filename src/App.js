import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import appStore from "./utils/appStore";
import Error from "./components/Pages/Error";
import UserContext from "./utils/UserContext";
import Body from "./components/Pages/Main/Body";
import Cart from "./components/Pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Header/Navbar";
import About from "./components/Pages/About/About";
import React, { useState, useEffect } from "react";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserClass from "./components/Testing/UserClass";
import Contact from "./components/Pages/About/Contact";
import Payment from "./components/Pages/Payment/Payment";
import Profile from "./components/Pages/Profile/Profile";
import RestaurantMenu from "./components/Pages/ResMenu/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
          <Navbar />
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
            <main className="min-h-screen">
              <Outlet />
            </main>
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
      {
        path: "/payment",
        element: <Payment />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
