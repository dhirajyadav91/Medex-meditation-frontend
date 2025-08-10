import React from "react";
import { Link } from "react-router-dom";

function Wellcome() {
  return (
    <div className="flex flex-col h-screen bg-purple-100">
      <div className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">
          {/* Logo left aligned */}
          <Link to="/" className="font-bold text-lg bg-purple-200 px-3 py-1 rounded">
            Medex
          </Link>

          {/* Center paragraph absolutely centered */}
          <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg text-purple-200 px-3 ">
            Meditation share
          </p>

          {/* Menu right aligned */}
          <nav>
            <ul className="=">
              <li>
                 <Link to="/login" className="font-bold text-lg bg-purple-200 px-3 py-1 rounded">
                Login
          </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Body section */}
      <div className="flex justify-center flex-grow items-center">
        <div className="flex flex-col bg-purple-200 w-[500px] h-[300px] border rounded-md">
          <div className="text-center font-bold text-lg mt-5 border rounded-md w-[300px] mx-auto bg-gray-500 text-white py-2">
            <span>Welcome to Medex Platform</span>
          </div>
          <div className="flex justify-center flex-grow items-center">
            <Link
              to="/public-sessions"
              className="cursor-pointer border rounded-md bg-blue-600 hover:bg-blue-800 text-white px-4 py-2"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wellcome;
