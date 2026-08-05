import React from "react";
import img from "../assets/OIP.jpg";
import imgg from "../assets/contact.png";


import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";


const socialLinks = [
  { icon: FaGithub, url: "https://github.com", color: "grey" },
  { icon: FaLinkedin, url: "linkedin.com/in/naveen-k2424", color: "#0A66C2" },

  { icon: FaInstagram, url: "https://instagram.com", color: "#E4405F" },



   { icon: FaWhatsapp, url: "https://wa.me/919342905752?text=Hello%20Naveen%2C%20I%20want%20to%20connect%20with%20you", color: "#25D366" },
   { icon: SiLeetcode, url: "https://leetcode.com/u/wL3akc8fai/", color: "#FFA116" },
];

export default function Contact({ isDark }) {
  return (
    <div
      className={`min-h-screen pt-32 px-10 flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={imgg}
            alt="Contact"
            className="w-96 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-6xl font-bold mb-6">Contact Me</h1>

          <p className="text-xl opacity-80 mb-10">
            You can reach me through any of the platforms below.  
            I usually reply quickly and I'm always open to new opportunities.
          </p>

          {/* Social Icons */}
          <div className="grid grid-cols-3 gap-6 max-w-sm">
            {socialLinks.map(({ icon: Icon, url, color }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-xl shadow-lg transition transform hover:scale-110 hover:shadow-xl"
                style={{ background: isDark ? "#1f1f1f" : "#ffffff" }}
              >
                <Icon style={{ color, fontSize: "2.8rem" }} />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="mt-10">
            <a
              href="/resume/NAVEEN.pdf"
              download
              className="bg-red-600 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-xl shadow-lg transition transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
