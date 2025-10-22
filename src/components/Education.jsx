import React from "react";
import img from "../assets/OIP.jpg";
// Nav is intentionally not rendered here (layout is route-driven). Remove unused import.

export default function Education({ isDark, toggleTheme }) {
  return (
    <>
      {/* <Nav isDark={isDark} toggleTheme={toggleTheme} /> */}

      <div
        className={`flex flex-col md:flex-row items-center justify-center h-screen gap-10 p-10 transition-colors duration-500 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {/* Left Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={img}
            alt="Education"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Education</h1>
          <h3 className="text-2xl md:text-4xl font-semibold">
            Basic Qualification and Certifications
          </h3>
          <p className="text-lg leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            molestiae quod nesciunt voluptates fugiat voluptas ad quo natus
            doloribus rerum consectetur dolor facere dignissimos quis dolorum
            iste eius repellendus voluptatum.
          </p>
        </div>
      </div>

        {/* 2 page  */}

      <div className="h-screen pt-5">
        <h2 className="text-4xl pl-6"> Pursuing Degree </h2>
        <div className="flex pt-10 md:pt-20 justify-center items-center gap-10 md:gap-20 px-6">

          <div>
            <img
              src={img}
              alt="Student profile"
              className="w-48 h-48 rounded-full object-cover border border-gray-300 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className={`p-5 border-4 border-red-900 bg-red-900 ${isDark ? "text-white" : "text-black"}`}>
              <h2 className={`text-2xl md:text-3xl font-bold`}>SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h2>
              <div className="pt-5 text-left flex justify-between items-center">
                <p className="font-bold">Bachelors in Information Technology</p>
                <p className="font-bold">2023 - 2027</p>
              </div>
            </div>

            <div className="border-4 border-red-900 pb-10 pl-5 pt-5 text-base md:text-lg space-y-2">
              <p>⚡ I am a Computer Science and Engineering student.</p>
              <p>⚡ Coursework: Data Structures, Web Development, Databases.</p>
              <p>⚡ Active in open-source and student projects.</p>
              <button className="bg-red-700 text-white rounded ml-0 mt-4 px-4 py-2">Visit Website</button>
            </div>
          </div>
        </div>
      </div>

    {/* 3rd Page */}
      <div className="h-screen pt-5">
        <h2 className="text-4xl pl-6"> Certifications </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 px-6">
          <div className="border-4 border-red-900 bg-red-900 p-4 ">
            {/* <div className="border-4 border-black bg-black mt-6 p-0"></div> */}
          </div>

          <div className="border-4 border-red-900 bg-red-900 p-4">
            {/* <div className="border-4 border-black bg-black mt-4 p-6"></div> */}
          </div>

          <div className="border-4 border-red-900 bg-red-900 p-4">
            {/* <div className="border-4 border-black bg-black mt-4 p-6"></div> */}
          </div>

          <div className="border-4 border-pink-900 bg-pink-900 p-4">
            {/* <div className="border-4 border-black bg-black mt-4 p-6"></div> */}
          </div>

          <div className="border-4 border-orange-900 bg-orange-900 p-4">
            {/* <div className="border-4 border-black bg-black mt-4 p-6"></div> */}
          </div>

          <div className="border-4 border-blue-900 bg-blue-900 p-4 hover:shadow-blue-600/90 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-blue-400">
            {/* <div className="border-4 border-black bg-black mt-4 p-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
