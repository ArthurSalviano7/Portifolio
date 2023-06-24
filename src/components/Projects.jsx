import React from "react";

const Projects = () => {

    return (

        <div name="Projects" className="w-full md:h-screen bg-[#0a244c] text-white">
            <div className="p-4 flex flex-col justify-center w-full">
                <div className="font-bold px-5 py-5">
                    <h1 className="text-4xl sm:text-5xl px-4">Projects</h1>
                    <p className="py-2 px-4">These are some of my recent projects: </p>

                    
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                            <div>
                                
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Projects;