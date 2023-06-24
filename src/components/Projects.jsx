import React from "react";
import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";


const Projects = () => {

    return (

        <div name="Projects" className="w-full bg-[#0a244c] text-white">
            <div className="p-4 flex flex-col justify-center w-full">
                <div className="font-bold px-5 py-5">
                    <h1 className="text-4xl sm:text-5xl px-4">Projects</h1>
                    <p className="py-2 px-4">These are some of my recent projects: </p>

                    
                    <div className="flex flex-row gap-10">
                        <div className="w-full rounded-md flex flex-col md:flex-row gap-3 px-4">
                            
                            <div className="project md:w-[40%] md:h-[40vh]" style={{backgroundImage: `url(${projeto1})` }}>
                            </div>

                            <div className="project md:w-[40%] md:h-[40vh]" style={{backgroundImage: `url(${projeto2})` }}>
                            </div>

                            <div className="project md:w-[40%] md:h-[40vh]" style={{backgroundImage: `url(${projeto3})` }}>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Projects;