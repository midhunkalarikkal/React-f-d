import { LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header = () => {
  const onlineStatus = useOnlineStatus()
  const {logginedUser} = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <nav className="flex p-3 bg-slate-100">
      <div className="flex w-1/4 justify-center items-center cursor-pointer">
      <Link to={'/'}>
        <h4 className="px-5 text-lg font-bold underline decoration-orange-500 underline-offset-4">Bhookad Buzz</h4>
      </Link>
      <Link to={'/'}>
        <img src={LOGO} alter="" className="w-14" />
      </Link>
      </div>
      <div className=" flex w-3/4 items- justify-end">
        <ul className="flex w-1/2 justify-around items-center  ">
          <li className="cursor-pointer">
            {
              onlineStatus === true ? (
                "🟢 Online"
              ) : (
                "🔴 Offline"
              )
            }
          </li>
          <li className="">
            <Link to='/' className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400">
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/about" className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400">
              About
            </Link>
          </li>
          <li className="">
            <Link to="/cart" className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold">
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
