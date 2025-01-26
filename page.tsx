"use client"; // Ensure this page is treated as a client component

import React, { useState } from "react";

const OrderNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    postalCode: "",
    paymentMethod: "creditCard",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 py-20 px-10">
      <div className="max-w-screen-lg mx-auto text-white">
        <h2 className="text-5xl font-extrabold text-center mb-8 drop-shadow-lg text-white">
          Place Your Order Now
        </h2>

        {/* Billing Information */}
        <div className="bg-gradient-to-r from-indigo-700 via-pink-700 to-red-700 p-8 rounded-lg shadow-xl mb-12">
          <h3 className="text-4xl font-semibold mb-6 text-center text-white">Billing Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name and Email */}
              <div>
                <label className="block text-lg mb-2 text-gray-100">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 text-gray-100">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address and Phone */}
              <div>
                <label className="block text-lg mb-2 text-gray-100">Shipping Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 text-gray-100">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* City and Postal Code */}
              <div>
                <label className="block text-lg mb-2 text-gray-100">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 text-gray-100">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="mt-8">
              <h3 className="text-3xl font-semibold mb-4 text-white">Payment Method</h3>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleChange}
                />
                <label htmlFor="creditCard" className="ml-2 text-lg text-gray-100">Credit/Debit Card</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                <label htmlFor="paypal" className="ml-2 text-lg text-gray-100">PayPal</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="jazzCash"
                  name="paymentMethod"
                  value="jazzCash"
                  checked={formData.paymentMethod === "jazzCash"}
                  onChange={handleChange}
                />
                <label htmlFor="jazzCash" className="ml-2 text-lg text-gray-100">JazzCash</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="easyPaisa"
                  name="paymentMethod"
                  value="easyPaisa"
                  checked={formData.paymentMethod === "easyPaisa"}
                  onChange={handleChange}
                />
                <label htmlFor="easyPaisa" className="ml-2 text-lg text-gray-100">EasyPaisa</label>
              </div>

              {/* Conditional Credit Card Fields */}
              {formData.paymentMethod === "creditCard" && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg mb-2 text-gray-100">Card Number</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                      placeholder="Card Number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg mb-2 text-gray-100">Expiration Date</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg mb-2 text-gray-100">CVV</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 p-8 rounded-lg shadow-xl">
              <h3 className="text-3xl font-semibold mb-4 text-white">Order Summary</h3>
              <div className="flex justify-between mb-4">
                <span className="text-lg text-gray-100">Sofa Set - Premium</span>
                <span className="text-lg text-gray-100">$499.99</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-lg text-gray-100">Shipping</span>
                <span className="text-lg text-gray-100">Free</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-lg font-bold text-gray-100">Total</span>
                <span className="text-lg font-bold text-gray-100">$499.99</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
