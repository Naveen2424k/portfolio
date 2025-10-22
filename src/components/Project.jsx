import Nav from "./Nav";
import img from "../assets/OIP.jpg";

import Card from "./Card";
export default function Project({isDark,toggleTheme})
{
    return(
        <>
        
        <div className="">
            <div>
                {/* <Nav isDark={isDark} toggleTheme={toggleTheme} /> */}
            </div>
            <div className="flex pt-40 ">
                <div className="ml-20">
                    <img src={img} alt="" className="w-80 h-50 object-cover" />
                </div>
                <div className="  justify-items-center mr-20">
                    <h1 className={` text-bold text-6xl ${isDark ? "text-white" : "text-black"}`}>PROJECTS</h1>
                    <p className={`mt-4  justify-items-center ml-40 ${isDark ? "text-white" : "text-black"}`}>My projects make use of a vast variety of latest technology tools. My best experience is to create Backend Projects, build Python Scripts and setup Cloud Infrastructures. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.</p>
                </div>
            </div>

            <div className="flex justify-center flex-wrap pt-20 grid grid-cols-3 gap-2">
                <Card 
                    title="Project 1"
                    description="Description for Project 1"
                    link="#"
                    isDark={isDark}
                />
                <Card 
                    title="Project 1"
                    description="Description for Project 1"
                    link="#"
                    isDark={isDark}
                />
                <Card 
                    title="Project 1"
                    description="Description for Project 1"
                    link="#"
                    isDark={isDark}
                />
                <Card 
                    title="Project 1"
                    description="Description for Project 1"
                    link="#"
                    isDark={isDark}
                />
                <Card 
                    title="Project 1"
                    description="Description for Project 1"
                    link="#"
                    isDark={isDark}
                />
                <Card 
                    title="Project 1"
                    description="Description for Project 1"
                    link="#"
                    isDark={isDark}
                />
            </div>
            <div className="pt-20 pb-20">
                <button className="bg-red-900 border- border-red-900 hover:bg-green-900 rounded-xl ml-180 p-2">More Projects</button>
                </div>


               
            </div>
        </>
    )
}