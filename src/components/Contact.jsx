import React from "react";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";

const Contact = () => {

    return (
        <div name="Contact" className="w-full bg-[#0a244c] text-white flex  p-4 border-t-2">
            <div className="pb-8">
                <p className="text-4xl font-bold inline px-4 ">Contact</p>
                <p className="px-4 pt-4">Send me an email: </p> 
                <p className="px-4"> <AiOutlineMail size={20} className="inline"/> arthursalviano7@gmail.com </p> 
                <p className="px-4 pt-4">Social: </p> 
                <a href="https://github.com/ArthurSalviano7" target="_blank"><AiOutlineGithub size={50} className="pl-4 inline"/></a>
                <AiOutlineInstagram size={50} className="inline px-1"/>
            </div>
        </div>
    )
}

export default Contact;