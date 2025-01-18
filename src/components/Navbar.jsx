import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { useTranslation } from "react-i18next"; // Importação para tradução

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { t, i18n } = useTranslation(); // i18n para mudar o idioma

    const handleNav = () => {
        setNav(!nav);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="fixed w-full h-20 flex justify-between mx-auto px-4 z-10 backdrop-blur-sm">
            <ul className="hidden md:flex uppercase text-white">
                <li className="p-4">{t('about_me')}</li>
                <li className="p-4">{t('projects')}</li>
                <li className="p-4">{t('technologies')}</li>
                <li className="p-4">{t('contact')}</li>
            </ul>

            {/* Botão de Idioma */}
            <div className="fixed text-white p-4 right-10 top-1">
                <button 
                    onClick={() => changeLanguage('pt')} 
                    className={`mr-2 px-2 py-1 rounded-md ${i18n.language === 'pt' ? 'bg-blue-400 shadow-md shadow-blue-500' : ''}`}>
                    PT
                </button>
                <button 
                    onClick={() => changeLanguage('en')} 
                    className={`mr-2 px-2 py-1 rounded-md ${i18n.language === 'en' ? 'bg-blue-400 shadow-md shadow-blue-500' : ''}`}>
                    EN
                </button>
            </div>

            { /* Menu Mobile */}
            <div className={ nav ? "fixed right-1 top-1 w-[40%] pt-14 uppercase bg-slate-800 ease-in-out duration-500"
                            : "fixed left-[-100%]"}>

                <ul className="p-4 uppercase text-white">
                    <li className="p-4 border-b border-gray-600">{t('about_me')}</li>
                    <li className="p-4 border-b border-gray-600">{t('projects')}</li>
                    <li className="p-4 border-b border-gray-600">{t('technologies')}</li>
                    <li className="p-4 border-b border-gray-600">{t('contact')}</li>
                </ul>
            </div>

            <div onClick={handleNav} className="fixed right-5 top-5 md:hidden z-10">
                { nav ? <AiOutlineClose size={30} color="white"/> : <AiOutlineMenu size={30} color="white"/>}
            </div>
            
        </div>
    )
}

export default Navbar;
