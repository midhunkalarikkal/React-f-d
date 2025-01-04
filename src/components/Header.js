import { auth, provider} from '../utils/firebase';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import ProfileDropDown from './profileDropDown';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {logginedUser ,showProfileDropDown, setShowProfileDropDown} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector((store) => store.user.user)

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {name: user.displayName,
                profileImage: user.photoURL,
                email: user.email,
                uid: user.uid,
         }
        dispatch(addUser(userInfo));
        toast.success("Sign in successfully.")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          name: user.displayName,
          profileImage: user.photoURL,
          email: user.email,
          uid: user.uid,
        };
        dispatch(addUser(userInfo));
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(removeUser());
        setShowProfileDropDown(false);
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        toast.error("Failed to log out: " + error.message);
      });
  }


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
          <li>
            {user ? (
                  <img src={user.profileImage} alt='profile' className='w-10 h-10 rounded-full cursor-pointer' onClick={() => setShowProfileDropDown((prev) => !prev)}/>
                ) : (
                  <Link to="/about" className="hover:underline hover:underline-offset-4 hover:decoration-orange-400">
              <button className="bg-orange-400 text-lg font-bold px-2 py-1 rounded-lg text-white hover:bg-orange-300 hover:text-black mx-2" onClick={handleLogin}>Sign In</button>
            </Link>
              )}
          </li>
        </ul>
      </div>

      {showProfileDropDown && user && <ProfileDropDown />}
  

      {isMenuOpen && (
        <div className="fixed top-5 right-0 w-64 h-auto bg-white shadow-lg z-50">
          <ul className="flex flex-col gap-4 p-4">
            <li
              className="cursor-pointer text-right text-lg font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              x
            </li>
            <li className="cursor-pointer">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
            <li>
              {user ? (
                <div className='flex items-center'>
                  <img src={user.profileImage} alt='profile' className='w-10 h-10 rounded-full'/>
                  <h4 className='mx-2'>{user.name}</h4>
                </div>
              ) : (
                <Link className="hover:underline hover:underline-offset-4 hover:decoration-orange-400" onClick={handleLogin}>
                  Sign In
                </Link>
              )}
            </li>
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
            {user ? (
              <li>
              <Link
                className="hover:underline hover:underline-offset-4 hover:decoration-orange-400"
                onClick={logout}
              >
                Logout
              </Link>
            </li>
            ) : ""}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
