import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import React from "react";
import img from "../assets/OIP.jpg";

const TechLinks = [
  { icon: <FaDatabase size={40} color="green" />, name: "Database" },
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <FaJava size={40} color="red" />, name: "Java" },
  { icon: <FaHtml5 size={40} color="orange" />, name: "HTML5" },
  { icon: <FaCss3 size={40} color="#264de4" />, name: "CSS3" },
  { icon: <FaPhp size={45} color="#7377AD" />, name: "PHP" },
  { icon: <FaBootstrap size={40} color="#563d7c" />, name: "Bootstrap" },
];

function Here({ isDark }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Section (Image) */}
      <div className="flex justify-center mb-10 lg:mb-0 lg:mr-16">
        <img
          src={img}
          alt="Tech Illustration"
          className="w-80 h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section (Content) */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-6">Here’s What I Do 🚀</h1>
        <h2 className="text-4xl font-semibold mb-8">
          Full Stack Web Development
        </h2>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
          {TechLinks.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 hover:scale-110 transition-transform duration-300"
            >
              {tech.icon}
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg mb-4">
          ⚡ I create dynamic and responsive web applications using modern
          technologies.
        </p>
        <p className="text-lg mb-4">
          ⚡ I develop both frontend and backend features using MERN stack.
        </p>
        <p className="text-lg mb-4">
          ⚡ I focus on clean, maintainable, and performance-optimized code.
        </p>
      </div>
    </div>
  );
}

export default Here;
