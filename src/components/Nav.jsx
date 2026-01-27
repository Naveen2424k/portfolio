import React from "react";
import { Link } from "react-router-dom";

function Nav({ isDark, toggleTheme }) {
  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-colors duration-500
        ${isDark ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-900"}
        backdrop-blur-md
      `}
    >
      <div className="flex justify-between items-center px-10 py-4">
        
        {/* Logo */}
        <h3 className="font-extrabold text-2xl tracking-wide">
          Nav<span className="text-green-400">.()</span>
        </h3>

        {/* Links */}
        <div className="flex gap-8 items-center font-medium">
          <Link
            to="/"
            className="hover:text-green-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/education"
            className="hover:text-orange-400 transition-colors"
          >
            Education
          </Link>

          <Link
            to="/projects"
            className="hover:text-yellow-400 transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-pink-400 transition-colors"
          >
            Contact
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl p-2 rounded-full
                       hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {isDark ? "🌙" : "🔆"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
