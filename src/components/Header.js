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
            TasteTown
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
          <li className="relative">
            <Link to="/cart" className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold">
              🛒
              <span className="absolute bottom-2 left-4 bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-auto bg-white shadow-lg z-50">
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
                className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold flex"
                onClick={() => setIsMenuOpen(false)}
              >
                🛒
                <span className=" bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
