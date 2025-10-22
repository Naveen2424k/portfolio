import React from "react";
import { Link } from "react-router-dom";


function Nav({ isDark, toggleTheme }) {
  return (
    <nav
      className={`flex justify-between items-center p-2 border transition-colors duration-500 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h3 className="font-bold text-xl pr-6">Nav.()</h3>

      <div className="flex gap-6 items-center">
        <Link
          to="/"
          className={`hover:text-green-500 transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Home
        </Link>

        <Link
          to="/education"
          className={`hover:text-orange-500 transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Education & Certifications
        </Link>

        <Link
          to="/projects"
          className={`hover:text-yellow-500 transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Projects
        </Link>

        <Link
          to="/contact"
          className={`hover:text-pink-500 transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Contact & Resume
        </Link>

        {/* 🌙 / 🔆 Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-2xl p-2 rounded-full hover:scale-110 transition-transform"
          aria-label="Toggle theme"
        >
          {isDark ? "🌙" : "🔆"}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
