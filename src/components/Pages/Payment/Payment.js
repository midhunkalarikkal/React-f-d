import Confetti from 'react-confetti';
import { toast } from "react-toastify";
import { useWindowSize } from 'react-use';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { clearCart } from "../../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  let [cartTotal, setCartTotal] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [showSuccessDiv, setSuccessDiv] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();
  const LOGO_URL = process.env.LOGO_URL;

  useEffect(() => {

    if (cartItems) {
      const total = cartItems.reduce((acc, cv) => acc + cv.price, 0);
      setCartTotal(total / 100);
    }

    const itemsCount = cartItems.length;
    setCartItemsCount(itemsCount);
  }, [cartItems]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    city: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const addressRegex = /^.{10,}$/;
    const cityRegex = /^[A-Za-z\s-]+$/;
    const pincodeRegex = /^\d{6}$/;

    const name = formData.name;
    const address = formData.address;
    const phone = formData.phone;
    const city = formData.city;
    const pincode = formData.pincode;

    if (!name || !address || !phone || !city || !pincode) {
      toast.error("Please fill the address form");
      return false;
    }

    if (!nameRegex.test(name)) {
      toast.error("Name must contain only letters and at least 3 characters!");
      return false;
    }
    if (!addressRegex.test(address)) {
      toast.error("Address must be at least 10 characters long!");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number!");
      return false;
    }
    if (!pincodeRegex.test(pincode)) {
      toast.error("Invalid pincode number!");
      return false;
    }
    if (!cityRegex.test(city)) {
      toast.error("City cannot be empty!");
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if(cartItems.length === 0){
      toast.error("Your cart is empty.");
    }else{
      if (validateForm()) {
        const options = {
          key: process.env.RAZORPAY_KEY_ID,
          amount: Math.round((cartTotal + 50) * 100),
          currency: "INR",
          name: "CraveRoute",
          description: "Test Transaction",
          handler: async () => {
            toast.success("Payment Successful!");
            dispatch(clearCart());
            setSuccessDiv(true);
            setTimeout(() => {
              navigate("/");
            },5000);
          },
          prefill: {
            name: formData?.name || "Guest User",
            contact: formData?.phone || "9999999999",
          },
          theme: {
            color: "#f97316",
            logo: {LOGO_URL},
          },
        };
        
        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", (response) => {
          toast.error("Payment failed! Please try again.");
        });
        
        rzp.open();
      }
    }
  };

  return (
    <>
      {!showSuccessDiv && (
      <div class="md:flex md:gap-6 w-11/12 md:w-8/12 mx-auto mt-5">
        <div class="w-full md:w-1/2">
          <div class="shadow-lg p-4 bg-slate-100 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">
              Address Details
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-600 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-600 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block text-gray-600 mb-2">
                  Pincode
                </label>
                <input
                  type="number"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <p className="text-gray-500 text-xs md:text-sm">Providing accurate information helps us process your order smoothly and avoid delays. If you’re shipping to a different address, you can add a separate shipping address below.</p>
              </div>
            </form>

          </div>
        </div>
    
      <div class="w-full md:w-1/2 mt-2 md:mt-0">
        <div class="shadow-lg flex flex-col p-4 bg-slate-100 rounded-lg">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Items Count:</p>
              <p className="font-semibold text-gray-800">{cartItemsCount}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Items Total:</p>
              <p className="font-semibold text-gray-800">₹ {cartTotal}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Delivery Fee:</p>
              <p className="font-semibold text-gray-800">₹ 50.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Discount:</p>
              <p className="font-semibold text-gray-800">-₹ 00.00</p>
            </div>
            <div className="border-t-2 border-gray-300 mt-4 pt-4 flex justify-between">
              <p className="font-semibold text-lg text-gray-800">Total:</p>
              <p className="font-semibold text-lg text-gray-800">
                ₹ {cartTotal + 50}
              </p>
            </div>

            <div className="mt-6 text-center text-gray-600">
              <p className="text-sm">Secure payment via</p>
              <p className="font-bold text-blue-600 italic">Razorpay</p>
            </div>

            <div className="mt-6">
              <button
                className="w-full bg-green-500 text-white py-1 md:py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>
            </div>

        </div>
      </div>
    </div>
      )}

    {showSuccessDiv && (
        <div className="flex justify-center items-center w-full h-screen">
          <Confetti
            width={width}
            height={height}
          />
          <div className="p-8 max-w-lg w-full text-center border-2 border-orange-500 shadow-lg rounded-lg bg-white md:w-6/12">
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-3xl font-bold text-orange-500 mb-4">
                Your Order is Placed!
              </h1>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              It will take approximately 30 minutes to deliver.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Wait for the delivery person to arrive and enjoy your order!
            </p>
            <p className="text-sm text-gray-600 mb-6">
              You will redirect to home in 3 seconds.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
