import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import BannerImg from '../../../assets/image/dashboard-top.png';
import Man from '../../../assets/image/celeberate-man.png'

export default class Welcomebanner extends React.Component{
    constructor(){
        super();
        this.state={
            _bannerData:[]
        }
    }
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };
        return(
            <div className="welcome-banner-section">
                <div className="row">
                    <div className="left-lg-banner col col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div className="inner-section">
                            <div className="left-content">
                                <div className="heading-name">
                                    <h6 className="welcome">Welcome back,</h6>
                                    <h6 className="employee-name">Hexa Employee</h6>
                                </div>
                                <p className="quates">
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                </p>
                                <button className="go-now">
                                    <Link to="/dashboard">Go Now</Link>
                                </button>
                            </div>
                            <div className="right-banner-img">
                                <img src={BannerImg} alt="Welcome Banner" />
                            </div>
                        </div>
                    </div>
                    <div className="right-celebrate-banner col col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="inner-section">
                            <Slider {...settings}>
                                <div className="slides">
                                    <div className="overley"></div>
                                    <div className="wrapper">
                                        <div className="img-section">
                                            <img src={Man} alt="Celeberate" />
                                        </div>
                                        <div className="name-content">
                                            <h5 className="name">Hexaemployee</h5>
                                            <p className="wish-future-app">
                                                Id nam laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slides">
                                <div className="overley"></div>
                                    <div className="wrapper">
                                        <div className="img-section">
                                            <img src={Man} alt="Celeberate" />
                                        </div>
                                        <div className="name-content">
                                            <h5 className="name">Hexaemployee</h5>
                                            <p className="wish-future-app">
                                                Id nam laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}