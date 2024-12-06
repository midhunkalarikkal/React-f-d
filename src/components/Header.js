import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useSelector } from 'react-redux';
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {logginedUser} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex p-3 bg-slate-100 items-center justify-between">
      <div className="flex w-6/12 md:w-1/4 justify-center items-center cursor-pointer">
        <Link to={"/"}>
          <h4 className="px-2 text-sm md:px-5 md:text-lg font-bold underline decoration-orange-500 underline-offset-4">
            Bhookad Buzz
          </h4>
        </Link>
        <Link to={"/"}>
          <img src={LOGO} alt="" className="w-14" />
        </Link>
      </div>

      <div className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="text-2xl">☰</span>
      </div>

      <div className="hidden lg:flex lg:w-3/4 lg:justify-end">
        <ul className="flex flex-row justify-end items-center gap-4 p-4 w-full">
          <li className="cursor-pointer">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/" className="hover:underline hover:underline-offset-4 hover:decoration-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:underline-offset-4 hover:decoration-orange-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold">
              🛒 [{cartItems.length}]
            </Link>
          </li>
          <li>
            <Link to={"/user"}>
              <h4 className="font-bold text-lg cursor-pointer">{logginedUser}</h4>
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
          <ul className="flex flex-col gap-4 p-4">
            <li
              className="cursor-pointer text-right text-lg font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              x
            </li>
            <li className="cursor-pointer">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
            <li>
              <Link
                to="/"
                className="hover:underline hover:underline-offset-4 hover:decoration-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:underline-offset-4 hover:decoration-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                🛒 [{cartItems.length}]
              </Link>
            </li>
            <li>
              <Link to={"/user"} onClick={() => setIsMenuOpen(false)}>
                <h4 className="font-bold text-lg cursor-pointer">{logginedUser}</h4>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
