import { toast } from "react-toastify";
import ProfileDropDown from "./ProfileDropDown";
import UserContext from "../../utils/UserContext";
import { Link, useLocation } from "react-router-dom";
import { auth, provider } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { addUser, removeUser } from "../../utils/userSlice";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const onlineStatus = useOnlineStatus();
  const { showProfileDropDown, setShowProfileDropDown } =
    useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const user = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          profileImage: user.photoURL,
          email: user.email,
          uid: user.uid,
        };
        dispatch(addUser(userInfo));
        toast.success("Sign in successfully.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

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
  };

  return (
    <nav
      className={`flex p-1 items-center justify-between top-0 left-0 w-full z-50 ${
        isHomePage ? "absolute" : ""
      } ${!isHomePage ? "bg-[#101010]" : ""}`}
    >
      <div className="flex w-6/12 md:w-1/4 justify-center items-center cursor-pointer">
        <Link to={"/"}>
          <h4 className="px-2 text-sm md:px-5 md:text-lg font-bold underline decoration-orange-400 underline-offset-4 text-white">
            <span className="text-orange-400">Crave</span>Ruote
          </h4>
        </Link>
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/ddqyiqkbi/image/upload/v1737814756/TasteTown_logo_knv3cx.png"
            alt="Logo"
            className="w-10"
          />
        </Link>
      </div>

      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-2xl text-orange-400">☰</span>
      </div>

      <div className="hidden lg:flex lg:w-3/4 lg:justify-end">
        <ul className="flex flex-row justify-end items-center gap-4 p-4 w-full">
          <li>
            <Link
              to="/"
              className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 text-white"
            >
              Contact
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="hover:underline hover:underline-offset-4 hover:decoration-orange-400 font-bold"
            >
              🛒
              <span className="absolute bottom-2 left-4 bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {user ? cartItems.length : 0}
              </span>
            </Link>
          </li>
          <li>
            {user ? (
              <img
                src={user.profileImage}
                alt="Pr"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-orange-400"
                onClick={() => setShowProfileDropDown((prev) => !prev)}
              />
            ) : (
              <button
                className="bg-orange-400 text-md font-semibold px-2 py-1 rounded-lg text-white hover:bg-orange-500 mx-2"
                onClick={handleLogin}
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      </div>

      {showProfileDropDown && user && <ProfileDropDown />}

      {isMenuOpen && (
        <div className="fixed top-4 right-0 w-48 h-auto bg-white shadow-lg z-50">
          <ul className="flex flex-col gap-4 p-2">
            <li
              className="cursor-pointer text-right text-lg font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              x
            </li>
            <li className="cursor-pointer text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white">
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </li>
            {user && (
              <Link
                to={"/profile"}
                className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
              >
                <li>
                  <div className="flex items-center cursor-pointer">
                    <img
                      src={user.profileImage}
                      alt="Pr"
                      className="w-10 h-10 rounded-full"
                    />
                    <h4 className="mx-2">{user.name}</h4>
                  </div>
                </li>
              </Link>
            )}
            {!user && (
              <Link
                className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
                onClick={handleLogin}
              >
                <li>Sign In</li>
              </Link>
            )}
            <Link
              to="/"
              className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/about"
              className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>About</li>
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Contact</li>
            </Link>
            <Link
              to="/cart"
              className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="flex">
                🛒
                <span className=" bg-orange-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {user ? cartItems.length : 0}
                </span>
              </li>
            </Link>
            {user ? (
              <Link
                className="text-sm hover:bg-orange-400 p-1 rounded-lg hover:text-white"
                onClick={logout}
              >
                <li>Logout</li>
              </Link>
            ) : (
              ""
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
