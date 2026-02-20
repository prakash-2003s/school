import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="bgs-primary h-screen overflow-hidden flex items-center justify-center px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <h3 className="text-black font-bold text-2xl sm:text-3xl text-center mb-6 abhaya">
            Admin Login
          </h3>
          <form className="flex flex-col gap-5">
            <div>
              <label className="mb-1 block font-medium text-base sm:text-lg abhaya">
                Email ID
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"/>
            </div>
            <div>
              <label className="mb-1 block font-medium text-base sm:text-lg abhaya">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"/>
            </div>
            <Link 
            to="/lay" 
            className="bg-purple-600 text-white text-center rounded-full py-3 hover:bg-purple-700 transition font-semibold">
            Log In
            </Link>
            <div className="text-center text-gray-500">or</div>
            <div className="flex flex-col gap-3">
              <p className="text-center text-gray-600">Forgot password?</p>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
              />
              <button className="bg-purple-600 text-white rounded-full py-3 hover:bg-purple-700 transition font-semibold">
                Reset Password
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <h3 className="text-black font-bold text-2xl sm:text-3xl text-center mb-6 abhaya">
            Teacher's Login
          </h3>
          <form className="flex flex-col gap-5">
            <div>
              <label className="mb-1 block font-medium text-base sm:text-lg abhaya">
                Email ID
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-base sm:text-lg abhaya">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>
            <Link
            to="/out" className="bg-purple-600 text-white text-center rounded-full py-3 hover:bg-purple-700 transition font-semibold">
            Log In
            </Link>
            <div className="text-center text-gray-500">or</div>
            <div className="flex flex-col gap-3">
              <p className="text-center text-gray-600">Forgot password?</p>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"
              />
              <button className="bg-purple-600 text-white rounded-full py-3 hover:bg-purple-700 transition font-semibold">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
