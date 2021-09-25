import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/image/hexa.png';
import Bannerimg from '../../assets/image/login-banner.png';

export default function Banner(){
    return(
        <div className="banner-wrapper">
            <div className="banner-section">
                <div className="top-left-logo">
                    <Link to="/login">
                       <span className="sm-logo">
                            <img src={Logo} alt="Hexamarvel" />
                       </span>
                    </Link>
                </div>
                <div className="heading-section">
                    <h2>Hi, Welcome Back</h2>
                </div>
                <div className="banner-image">
                    <img src={Bannerimg} alt="Login Here" />
                </div>
            </div>
        </div>
    );
}