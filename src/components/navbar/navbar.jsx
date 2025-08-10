import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg bg-purple-200 px-3 py-1 rounded">
          Medex
        </Link>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-8 text-white font-semibold">
            <li>
              <Link to="/home" className="hover:text-purple-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-purple-300 transition-colors">
                Service
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
