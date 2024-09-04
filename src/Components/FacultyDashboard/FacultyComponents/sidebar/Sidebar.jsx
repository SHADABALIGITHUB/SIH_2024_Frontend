import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../../../assets/Faculty/logo.svg";
import LightLogo from "../../../../assets/Faculty/light-logo.svg";
import { useContext } from 'react';
import { MyTheme } from "../../../../Context/ThemeContext";
import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiDraftLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";


const Sidebar = () => {
     
    
    const [toggle, showMenu] = useState(false);
    const { Theme,setTheme} = useContext(MyTheme);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={Theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <RiFileList3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#resume" className="nav__link">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#blog" className="nav__link">
                                    <RiDraftLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { setTheme(Theme === "light"?"dark":"light"); showMenu(!toggle)}} className="nav__link footer__button">
                        {Theme === "light" ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
