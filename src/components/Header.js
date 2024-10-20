import { LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const {logginedUser} = useContext(UserContext)
  return (
    <nav className="flex p-3 bg-slate-100">
      <div className="flex w-1/4 justify-center items-center">
        <h4 className="px-5 text-lg font-bold underline decoration-orange-500 underline-offset-4">Bhookad Buzz</h4>
        <img src={LOGO} alter="" className="w-14" />
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
            <Link to="/contact" className="nav-item hover:underline hover:underline-offset-4 hover:decoration-orange-400">
              Contact
            </Link>
          </li>
          <li>
            <button
              className="bg-orange-400 py-1 px-4 rounded-md text-yellow-50"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>
            <h4 className="font-bold text-lg">{logginedUser}</h4>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
