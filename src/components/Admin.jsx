import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen font-['Montserrat',sans-serif] p-4 sm:p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
        @keyframes panelShow {
          0%, 49.99% { opacity: 0; z-index: 1; }
          50%, 100% { opacity: 1; z-index: 5; }
        }
      `}</style>

      <div className="block md:hidden w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] overflow-hidden">
          <div className="flex">
            <button
              type="button"
              onClick={() => setIsTeacher(false)}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                !isTeacher
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => setIsTeacher(true)}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                isTeacher
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              Teacher
            </button>
          </div>

          <form className="flex flex-col items-center px-6 py-8 sm:px-10 sm:py-10 gap-4">
            <h1 className="font-bold text-xl sm:text-2xl">
              {isTeacher ? "Teacher Login" : "Admin Login"}
            </h1>
            <span className="text-xs text-gray-400">
              use your credentials to sign in
            </span>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none rounded-lg px-4 py-3 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none rounded-lg px-4 py-3 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
            <a
              href="#"
              className="text-gray-500 text-sm no-underline hover:text-purple-600"
            >
              Forgot your password?
            </a>
            <Link
              to={isTeacher ? "/out" : "/lay"}
              className="w-full text-center rounded-full bg-purple-600 text-white text-xs font-bold py-3 uppercase tracking-wider no-underline hover:bg-purple-700 active:scale-95 transition-all"
            >
              Log In
            </Link>
          </form>
        </div>
      </div>

      <div
        className="hidden md:block bg-white rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[768px] lg:w-[900px] max-w-full min-h-[480px] lg:min-h-[520px]"
      >
        <div
          className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-[600ms] ease-in-out ${
            isTeacher
              ? "translate-x-full opacity-100 z-[5]"
              : "opacity-0 z-[1]"
          }`}
          style={isTeacher ? { animation: "panelShow 0.6s" } : {}}
        >
          <form className="bg-white flex items-center justify-center flex-col px-8 lg:px-12 h-full text-center">
            <h1 className="font-bold text-2xl lg:text-3xl mb-2">
              Teacher Login
            </h1>
            <span className="text-xs text-gray-400 mb-3">
              use your credentials to sign in
            </span>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none rounded-lg px-4 py-3 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none rounded-lg px-4 py-3 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
            <a
              href="#"
              className="text-gray-600 text-sm no-underline my-4 hover:text-purple-600"
            >
              Forgot your password?
            </a>
            <Link
              to="/out"
              className="rounded-full border border-purple-600 bg-purple-600 text-white text-xs font-bold py-3 px-11 uppercase tracking-wider no-underline hover:bg-purple-700 active:scale-95 transition-all"
            >
              Log In
            </Link>
          </form>
        </div>

        <div
          className={`absolute top-0 left-0 w-1/2 h-full z-[2] transition-all duration-[600ms] ease-in-out ${
            isTeacher ? "translate-x-full" : ""
          }`}
        >
          <form className="bg-white flex items-center justify-center flex-col px-8 lg:px-12 h-full text-center">
            <h1 className="font-bold text-2xl lg:text-3xl mb-2">
              Admin Login
            </h1>
            <span className="text-xs text-gray-400 mb-3">
              use your credentials to sign in
            </span>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none rounded-lg px-4 py-3 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none rounded-lg px-4 py-3 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
            <a
              href="#"
              className="text-gray-600 text-sm no-underline my-4 hover:text-purple-600"
            >
              Forgot your password?
            </a>
            <Link
              to="/lay"
              className="rounded-full border border-purple-600 bg-purple-600 text-white text-xs font-bold py-3 px-11 uppercase tracking-wider no-underline hover:bg-purple-700 active:scale-95 transition-all"
            >
              Log In
            </Link>
          </form>
        </div>

        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-[100] transition-transform duration-[600ms] ease-in-out ${
            isTeacher ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`bg-gradient-to-r from-purple-700 to-purple-400 text-white relative h-full w-[200%] left-[-100%] transition-transform duration-[600ms] ease-in-out ${
              isTeacher ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center flex-col px-6 lg:px-10 text-center transition-transform duration-[600ms] ease-in-out ${
                isTeacher ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              <h1 className="font-bold text-xl lg:text-2xl">Welcome, Admin!</h1>
              <p className="text-sm leading-5 tracking-wide my-5">
                Sign in with your admin credentials to access the dashboard
              </p>
              <button
                type="button"
                onClick={() => setIsTeacher(false)}
                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-8 lg:px-11 uppercase tracking-wider cursor-pointer hover:bg-white/15 active:scale-95 transition-all"
              >
                Admin Login
              </button>
            </div>

            <div
              className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center flex-col px-6 lg:px-10 text-center transition-transform duration-[600ms] ease-in-out ${
                isTeacher ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <h1 className="font-bold text-xl lg:text-2xl">Hello, Teacher!</h1>
              <p className="text-sm leading-5 tracking-wide my-5">
                Sign in with your teacher credentials to manage your classes
              </p>
              <button
                type="button"
                onClick={() => setIsTeacher(true)}
                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-8 lg:px-11 uppercase tracking-wider cursor-pointer hover:bg-white/15 active:scale-95 transition-all"
              >
                Teacher Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;