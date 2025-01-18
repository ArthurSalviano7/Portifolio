import React from "react";
import Java from "../assets/java.png";
import Javascript from "../assets/javascript.png";
import CSS from "../assets/css.png";
import Github from "../assets/github.png";
import HTML from "../assets/html.png";
import react from "../assets/react.png";
import Git from "../assets/git.png"
import { useTranslation } from "react-i18next";

const Technologies = () => {
    const { t } = useTranslation();
    
    return (
        <div name="technologies" className="bg-[#0a244c] text-white">
            <div className="font-bold px-6 py-5">
                <h1 className="text-4xl sm:text-5xl px-4">{t('technologies')}</h1>
                <p className="py-2 px-4">{t('tech_section')}</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto" src={HTML} alt="html icon" />
                    <p>HTML</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto" src={CSS} alt="html icon" />
                    <p>CSS</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto" src={Javascript} alt="html icon" />
                    <p>JAVASCRIPT</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto" src={react} alt="html icon" />
                    <p>REACT</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto scale-150" src={Java} alt="html icon" />
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto" src={Github} alt="html icon" />
                    <p>GITHUB</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img  className="w-20 mx-auto" src={Git} alt="html icon" />
                    <p>GIT</p>
                </div>
            </div>
        </div>
    );
}

export default Technologies;