import React from "react";
import Background from "../assets/background.jpg";
import {HiArrowNarrowRight} from "react-icons/hi"

const AboutMe = () => {
    return (
        <div name="AboutMe">
            <img src={Background} className="w-full h-screen absolute z-[-1]" alt="background aurora boreal" />
            <div className="bg-black/60 absolute w-full h-screen z-[-1]"></div>
            <div className="absoulute top-0 w-full h-screen flex flex-col justify-center text-center text-white">
                <h2 className="text-blue-400">Hello, my name is</h2>
                <h1 className="text-4xl sm:text-6xl font-bold">Arthur Salviano</h1>
                <h2 className="text-2xl sm:text-4xl font-bold text-blue-400">I'm a computer science student</h2>
                <p className="text-gray-100 text-center py-4 px-8 italic">I'm currently studying at Paraíba State University (UEPB), doing a bachelor's degree in computer science, and specializing in WEB development.</p>
            
                <div>
                    <button className="text-white border-2 my-2 py-2 px-2 hover:bg-blue-500 hover:border-blue-500">
                        View Projects <HiArrowNarrowRight className="inline ml-3"/>
                    </button>
                </div>
            </div>

            
        </div>
    );
}

export default AboutMe;