import { Link } from 'gatsby';
import React from 'react';
import {LogoMenu} from "./components/LogoMenu/LogoMenu";
import './header.css';
import telegram from '../../images/social-icons/telegram.png';
import whatsapp from '../../images/social-icons/whatsapp.png';
import vk from '../../images/social-icons/vk.png';
import inst from '../../images/social-icons/inst.png';
import logo from '../../images/logo.png';
import links from '../constLinks';

const Header = () => (
    <header className="header">
        <div className="logo">
            <LogoMenu />
        </div>
        <div className="contact-block">
            <a href={links.TELEGRAM} rel="noreferrer" target="_blank">
                <img src={telegram} alt="telegram" />
            </a>
            <a href={links.WHATSUP} rel="noreferrer" target="_blank">
                <img src={whatsapp} alt="telegram" />
            </a>
            <a href={links.VK} rel="noreferrer" target="_blank">
                <img src={vk} alt="vk" />
            </a>
            <a href={links.INST} rel="noreferrer" target="_blank">
                <img src={inst} alt="inst" />
            </a>
        </div>
    </header>
);

export default Header;
