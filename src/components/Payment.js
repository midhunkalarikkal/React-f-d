import React, { useState } from "react";
import { toast } from "react-toastify";


const Payment = () => {

  const [ formData, setFormData ] = useState({
    name: "",
    address: "",
    phone: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id] : value,
    })
  }

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const addressRegex = /^.{10,}$/; // Minimum 10 characters for address

    const name = formData.name;
    const address = formData.address;
    const phone = formData.phone;
    const city = formData.city;

    if(!name || !address || !phone || !city){
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
    if (city.trim() === "") {
      toast.error("City cannot be empty!");
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (validateForm()) {
      // Show Razorpay Payment Gateway
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Replace with your Razorpay key
        amount: 11500, // Amount in paisa (₹115.00)
        currency: "INR",
        name: "Your Store Name",
        description: "Test Transaction",
        handler: (response) => {
          toast.success("Payment Successful!");
          console.log(response);
        },
        prefill: {
          name: formData.name,
          email: "user@example.com", // You can add an email field if required
          contact: formData.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  };

  return (
    <div className="md:flex md:justify-between w-full md:w-8/12 m-auto p-6">
      {/* Left form */}
      <div className="w-full md:w-6/12 bg-gray-50 p-6 rounded-lg leftdiv shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Address Details</h2>
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
        </form>
      </div>

      {/* Payment */}
      <div className="w-full mt-2 md:mt-0 md:w-5/12 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Items Total:</p>
          <p className="font-semibold text-gray-800">₹ 120.00</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Delivery Fee:</p>
          <p className="font-semibold text-gray-800">₹ 5.00</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Discount:</p>
          <p className="font-semibold text-gray-800">-₹ 00.00</p>
        </div>
        <div className="border-t-2 border-gray-300 mt-4 pt-4 flex justify-between">
          <p className="font-semibold text-lg text-gray-800">Total:</p>
          <p className="font-semibold text-lg text-gray-800">₹ 115.00</p>
        </div>

        {/* Secure Payment */}
        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">Secure payment via</p>
          <p className="font-bold text-gray-800">Razorpay</p>
        </div>

        {/* Payment Button */}
        <div className="mt-6 flex justify-center">
          <button className="w-full bg-green-500 text-white py-1 md:py-3 px-6 rounded-md hover:bg-green-600 transition duration-300" onClick={handlePayment}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;