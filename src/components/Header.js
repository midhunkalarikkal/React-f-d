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
      {/* Logo Section */}
      <div className="flex w-6/12 md:w-1/4 justify-center items-center cursor-pointer bg-green-200">
        <Link to={'/'}>
          <h4 className="px-2 text-sm md:px-5 md:text-lg font-bold underline decoration-orange-500 underline-offset-4">
            Bhookad Buzz
          </h4>
        </Link>
        <Link to={'/'}>
          <img src={LOGO} alt="" className="w-14" />
        </Link>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="text-2xl">☰</span>
      </div>

      {/* Menu Section */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center md:w-3/4 justify-end bg-slate-100 md:bg-transparent md:static absolute top-14 left-0 w-full z-50 shadow-lg md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row md:w-1/2 justify-around items-center gap-4 p-4 md:p-0">
          <li className="cursor-pointer">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>
          <li>
            <Link
              to="/"
              className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold"
            >
              🛒 [{cartItems.length}]
            </Link>
          </li>
          <li>
            <Link to={'/user'}>
              <h4 className="font-bold text-lg cursor-pointer">{logginedUser}</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
