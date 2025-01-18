import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div name="Contact" className="w-full bg-[#0a244c] text-white flex  p-4 border-t-2">
            <div className="pb-8">
                <p className="text-4xl font-bold inline px-4 ">{t('contact')}</p>
                <p className="px-4 pt-4">Email: </p> 
                <p className="px-4"> <AiOutlineMail size={20} className="inline"/> arthursalvianodev@gmail.com </p> 
                <p className="px-4 pt-4">Social: </p> 
                <a href="https://github.com/ArthurSalviano7" target="_blank"><AiOutlineGithub size={50} className="pl-4 inline"/></a>
                <AiOutlineInstagram size={50} className="inline px-1"/>
            </div>
        </div>
    )
}

export default Contact;