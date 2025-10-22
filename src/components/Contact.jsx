
import Nav from "./Nav"

import img from "../assets/OIP.jpg"

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaYoutube
} from "react-icons/fa"

const socialLinks = [
  { icon: FaGithub, url: "https://github.com", color: "grey" },
  { icon: FaLinkedin, url: "https://linkedin.com/in", color: "#0A66C2" },
  { icon: FaTwitter, url: "https://twitter.com", color: "#1DA1F2" },
  { icon: FaInstagram, url: "https://instagram.com", color: "#E4405F" },
  { icon: FaFacebook, url: "https://facebook.com", color: "#1877F2" },
  { icon: FaYoutube, url: "https://youtube.com", color: "#FF0000" },
];

export default function Contact({isDark,toggleTheme})
{   
    return(
        <>

        <div>

        {/* <Nav isDark={isDark} toggleTheme={toggleTheme} /> */}
      
        <div className="flex pt-40 ">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="ml-100 mr-10     ">
                                <h1 className="text-bold text-6xl">Contact Me</h1>
            <p className="mt-15 text-2xl"> You can contact me at the places mentioned below. I will try to get back to you as fast as I can.</p>


            <div className="flex space-x-6 mt-10">
          {socialLinks.map(({ icon: Icon, url, color }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">    
                <Icon style={{ color, fontSize: "2.8rem" }} className="transition-100 ease-in-out hover:scale-110" />
            </a>
          ))}
          </div>
          <div>
            <button className="bg-red-500  hover:bg-green-900 text-white py-2 px-4 rounded mt-10">See my Resume</button>
          </div>
            </div>
        </div>

          </div>
        </>
    )
}   