import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bgs-primary min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 font-bold abhaya">
          School Management System
        </h2>
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <form className="flex flex-col gap-4 sm:gap-5 p-5 sm:p-8"> 
            <h3 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center abhaya">
              Login
            </h3>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-base sm:text-lg text-black abhaya">
                School Email ID
              </label>
              <input type="email" placeholder="Enter your email"
                className="border border-gray-300 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-purple-600 outline-none"/>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-base sm:text-lg text-black abhaya">
                Password
              </label>
              <input type="password" placeholder="Enter your password"
                className="border border-gray-300 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-purple-600 outline-none"/>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-full w-full py-3 mt-2 transition hover:bg-purple-700 font-semibold text-sm sm:text-base">
              Continue
            </button>
            <div className="text-center text-lg sm:text-xl text-black-500 abhaya">
              or
            </div>
            <div className="text-center">
              <p className="mb-3 text-black-600 text-sm sm:text-base">
                Don't have an account?
              </p>
              <Link 
                to="/account" 
                className="block text-center bg-purple-600 text-white rounded-full py-3 w-full transition hover:bg-purple-700 font-semibold text-sm sm:text-base abhaya">
                Create New Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
