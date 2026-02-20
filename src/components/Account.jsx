import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaSchool,
  FaBuilding,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserShield,
  FaPhoneAlt,
  FaLock,
  FaUser,
} from "react-icons/fa";

const InputField = ({ icon: Icon, type, placeholder }) => {
  return (
    <div className="relative">
      {Icon && (
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <Icon />
        </span>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl py-2 pl-10 pr-3 focus:ring-2 focus:ring-black outline-none"
      />
    </div>
  );
};


const Account = () => {
  return (
    <div className="bgs-primary min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
        <form className="flex flex-col space-y-6 p-6 sm:p-8">
          
          <div className="flex flex-col space-y-4">
            <label className="font-semibold text-xl text-gray-800 abhaya">
              School Details
            </label>
            <InputField icon={FaSchool} type="text" placeholder="School Name" />
            <InputField icon={FaBuilding} type="text" placeholder="School Type" />
            <InputField icon={FaEnvelope} type="email" placeholder="School Email Address" />
            <InputField icon={FaMapMarkerAlt} type="text" placeholder="School Address" />
          </div>

          <div className="flex flex-col space-y-4">
            <label className="font-semibold text-xl text-gray-800 abhaya">
              Admin Details
            </label>

            <InputField icon={FaUser} type="text" placeholder="Admin Name" />
            <InputField icon={FaEnvelope} type="email" placeholder="Admin Email" />
            <InputField icon={FaPhoneAlt} type="text" placeholder="Mobile Number" />
            <InputField icon={FaLock} type="password" placeholder="Password" />
          </div>

          <Link
            to="/admin"
            className="bg-purple-600 text-white text-center rounded-full py-3 w-full transition hover:bg-purple-700 font-semibold abhaya">
            Create School Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Account;
