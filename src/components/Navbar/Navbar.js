import React from "react";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from "../../i18n";
import "./style.css";
import BackgroundImage1Icon from './icon-head.png';

const Navbar = () => {

    const setLanguage = (langCode) => {
        i18n.changeLanguage(langCode)
            .then(t => {
                // props.setLangCode(langCode);
            })
            .catch(err => {
            });
    };
    // TODO: translate navbar headers
    return (
        <header>
            <img  src={BackgroundImage1Icon} className = "icon" alt = "not found"/>
            <span className="display-4 imerge">&nbsp;&nbsp;Imerge</span>
            <nav className="navigbar">
                <ul>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-12 col-md-2 col-sm-2 navList" id="home">
                                <li> <Link to="/">Home</Link></li>
                            </div>
                            <div className="col col-12 col-md-2 col-sm-2 navList" id="Agencies">
                                <li> <Link to="/Agencies">Agencies </Link></li>
                            </div>
                            <div className="col col-12 col-md-2 col-sm-2 navList" id="maps">
                                <li> <Link to="/Maps">Nearby Services </Link></li>
                            </div>
                            <div className="col col-12 col-md-2 col-sm-2 navList" id="news">
                                <li> <Link to="/News">News </Link></li>
                            </div>
                            <div className="col col-12 col-md-2 col-sm-2 navList" id="translator">
                                <li> <Link to="/Translator">Translator </Link></li>
                            </div>
                            
                            <div className="col col-12 col-md-2 col-sm-2" >
                                <li id="langBtn">
                                <button onClick={() => setLanguage("en")}>English</button>
                                <button onClick={() => setLanguage("es")}>Español</button>
                                <button onClick={() => setLanguage("fr")}>Français</button>
                                </li>
                            </div>
                            </div>                  
                    </div>
                </ul>
            </nav>
        </header>
    );

};

export default withTranslation()(Navbar);
