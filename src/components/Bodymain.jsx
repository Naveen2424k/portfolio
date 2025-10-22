import IMG from "../assets/OIP.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com", color: "grey" },
  { icon: FaLinkedin, url: "https://linkedin.com/in", color: "#0A66C2" },
  { icon: FaTwitter, url: "https://twitter.com", color: "#1DA1F2" },
  { icon: FaInstagram, url: "https://instagram.com", color: "#E4405F" },
  { icon: FaFacebook, url: "https://facebook.com", color: "#1877F2" },
  { icon: FaYoutube, url: "https://youtube.com", color: "#FF0000" },
];

export default function Bodymain({ isDark }) {
  return (
    <div
      className={`flex items-center justify-between p-10 min-h-screen transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Left Section */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 mt-10">HELLO 👌</h1>
        <p className="mb-9 text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          atque, alias vero non accusantium architecto voluptas, dolore sequi
          mollitia ad blanditiis praesentium deserunt dicta facere tenetur ab
          odit delectus debitis.
        </p>

        <a
          href="#contact"
          className={`inline-block px-8 py-3 rounded-lg shadow-lg text-lg font-semibold transition-colors ${
            isDark
              ? "bg-blue-600 text-white hover:bg-green-500"
              : "bg-blue-600 text-white hover:bg-green-600"
          }`}
        >
          Contact Me
        </a>

        {/* Social Links */}
        <div className="flex space-x-6 mt-10">
          {socialLinks.map(({ icon: Icon, url, color }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${url}`}
              className="transition-transform duration-300 hover:scale-110"
            >
              <Icon style={{ color, fontSize: "2.8rem" }} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img
          src={IMG}
          alt="Profile"
          className="ml-10 mr-10 mt-10 w-80 h-80 object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}
