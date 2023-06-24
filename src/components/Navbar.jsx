import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="fixed w-full h-20 flex justify-between max-w-[1240px] mx-auto px-4 z-10">
            <ul className="hidden md:flex uppercase text-white">
                <li className="p-4">About me</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Technologies</li>
                <li className="p-4">Contact</li>
            </ul>

            <div className={ nav ? "fixed right-1 top-1 w-[40%] pt-14 uppercase bg-slate-800 ease-in-out duration-500"
                            : "fixed left-[-100%]"}>

                <ul className="p-4 uppercase text-white">
                    <li className="p-4 border-b border-gray-600">About me</li>
                    <li className="p-4 border-b border-gray-600">Projects</li>
                    <li className="p-4 border-b border-gray-600">Technologies</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>

            <div onClick={handleNav} className="fixed right-5 top-5 md:hidden z-10">
                { nav ? <AiOutlineClose size={30} color="white"/> : <AiOutlineMenu size={30} color="white"/>}
            </div>
            
        </div>
    )
}

export default Navbar;
