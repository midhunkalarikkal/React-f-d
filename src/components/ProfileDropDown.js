import React, { useContext } from 'react';
import { auth } from '../utils/firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import UserContext from '../utils/UserContext';

const ProfileDropDown = () => {

    const dispatch = useDispatch();
    const {showProfileDropDown, setShowProfileDropDown} = useContext(UserContext);

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
    <div className="relative inline-block text-left">
        <div
          className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Profile
            </a>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Logout
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default ProfileDropDown;
