import Nav from "./Nav";
import img from "../assets/eduu.png";
import img1 from "../assets/edd.jpg";
import img2 from "../assets/1.jpg";
import img3 from "../assets/card3.png";
import Card from "./Card";

export default function Project({ isDark, toggleTheme }) {
  return (
    <>
      <div className="">
        {/* Top banner section */}
        <div className="flex pt-40 items-center justify-center gap-12 ">
          <img
            src={img}
            alt="Projects"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 bg-white"
          />

          <div className="max-w-3xl">
            <h1
              className={`text-bold text-6xl ${isDark ? "text-white" : "text-black"}`}
            >
              PROJECTS
            </h1>

            <p
              className={`mt-4 text-lg ${
                isDark ? "text-white/80" : "text-black/80"
              }`}
            >
              My projects use modern technologies and tools. I love building
              backend applications, frontend interfaces, cloud systems, and
              automation scripts. Below are some highlighted projects —
              more will be added soon.
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          <Card
            title="Education Platform"
            description="A complete Guide of a Student."
            image={img1}
            link="https://naveen2424k.github.io/Education/"
            isDark={isDark}
          />

          <Card
            title="Hospital Management System"
            description="A system to manage hospital operations efficiently."
            image={img2}
            link="https://hms-o4rtbyzwv-naveen2424ks-projects.vercel.app"
            isDark={isDark}
          />

          <Card
            title="UZHAVAN"
            description="Agri product."
            image={img3}
            link="https://naveen2424k.github.io/Uzhavan/"
            isDark={isDark}
          />

        

         
        </div>

        {/* Show More Button */}
        <div className="pt-20 pb-20 flex justify-center">
          <button className="bg-red-900 text-white hover:bg-green-900 px-8 py-3 rounded-xl text-lg shadow-xl transition duration-300 hover:scale-105">
            More Projects
          </button>
        </div>
      </div>
    </>
  );
}
