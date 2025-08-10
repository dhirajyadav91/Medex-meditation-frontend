import React from "react";
import { Link } from "react-router-dom";

function Wellcome() {
  return (
    <div className="flex flex-col h-screen bg-purple-100">
      {/* Header section */}
      <div className="font-bold text-center p-1 bg-gray-800 text-white border rounded-md">
        <div>
          <span>Share Meditation Routine</span>
        </div>

        <div className="flex items-end justify-end">
          <nav>
            <ul className="flex gap-5 mr-4">
              <li className="font-bold border rounded-md px-3 py-1 hover:bg-gray-600">
                <Link to="/login">Login</Link>
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
