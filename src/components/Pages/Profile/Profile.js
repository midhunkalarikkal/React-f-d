import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user?.user);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col items-center justify-start p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-6">
        <div className="flex flex-col items-center">
          <img
            src={user?.profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">
            {user?.name || "Guest"}
          </h2>
          <p className="text-gray-500">{user?.email || "No Email Provided"}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-gray-700 font-medium text-center">Cart Status</h3>
          {cartItems.length > 0 ? (
            <p className="text-green-600 text-center mt-2 font-semibold">
              You have {cartItems.length} item(s) in your cart.
            </p>
          ) : (
            <div className="flex flex-col items-center mt-2">
              <p className="text-red-500 font-semibold">Your cart is empty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
