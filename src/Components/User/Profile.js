import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook,AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdWork, MdLocationOn } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt, } from 'react-icons/fa';

import Profilebanner from './Profilecomponents/Profilebanner';
import Education from './Profilecomponents/Education';
import Skills from './Profilecomponents/Skills';
import Experience from './Profilecomponents/Experience';

import Aside from '../Dashboard/Aside';
import Header from '../Dashboard/Header';


export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            _userAbout :{
                id:1,
                location:"Coimbatore",
                mail:"hexamarvel@gmail.com",
                phone:"1234567890",
                work:"Hexamarvel Tech",
                skillset:["Html","css","js","Wordpress","react","angular","nodejs","php","vuejs","shopify"],
                experience:[
                    {
                        id_Experience:1,
                        company:"Abcd technology",
                        role:"UI Enginner",
                        year_Experience:"1yr 5mo",
                        about_your_role:"From small websites to large and time-sensitive enterprise level applications, our expert services are not only available but also guaranteed to convey our clients' ideas and notions with a touch of our own creativity and innovational spirit.",
                        employment_type:"Full-time",
                        location:"india",
                    },
                    {
                        id_Experience:2,
                        company:"flipkat.com",
                        role:"UI Enginner",
                        year_Experience:"3yr 5mo",
                        about_your_role:"From small websites to large and time-sensitive enterprise level applications, our expert services are not only available but also guaranteed to convey our clients' ideas and notions with a touch of our own creativity and innovational spirit.",
                        employment_type:"Full-time",
                        location:"india",
                    }
                ],
                education:[
                    {
                        id_Education:1,
                        education_type:"Bachelor Degree",
                        name_of_institute:"Indian Institiute of Technology",
                        degree:"Mechatronics engineering",
                        year_passout:"2019",
                        cgpa:"9.5",
                        location:"india"
                    },
                    {
                        id_Education:2,
                        education_type:"Higher Secondary",
                        name_of_institute:"Indian Govt School",
                        degree:"+12",
                        year_passout:"2014",
                        cgpa:"7.5",
                        location:"india"
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div>
                <div className="dashboard-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="dashboard-aside" id="aside-wrapper">
                                <Aside />
                            </div>
                            <div className="dashboard-center" id="dashboard-center">
                                <Header dashboad_center="dashboard-center" aside_section="aside-wrapper" />
                                <div className="user-wrapper">
                                    <div className="user-details">
                                        <div className="container">
                                            <div className="row">
                                                <div className="Profile-head col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="user-heding-addnew">
                                                        <div className="user-head-link">
                                                            <h4>Profile</h4>
                                                            <div className="nav-list">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/dashboard" className="nav-list-name" >Dashboard</Link>
                                                                    </li>
                                                                    <li>
                                                                        <span className="nav-list-dot"><GoPrimitiveDot /></span>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/dashboard/user" className="nav-list-name" >User</Link>
                                                                    </li>
                                                                    <li>
                                                                        <span className="nav-list-dot"><GoPrimitiveDot /></span>
                                                                    </li>
                                                                    <li>
                                                                       <span className="nav-list-name active-page">Profile</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="banner-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <Profilebanner />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <div className="extra-info-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="box-sh project">
                                                                <div className="project-innrer">
                                                                    <div className="project-info">
                                                                        <h4 className="count">1900</h4>
                                                                        <p className="head">Completed</p>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="project-info">
                                                                        <h4 className="count">2100</h4>
                                                                        <p className="head">T - Project</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="extra-info-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="box-sh about-section">
                                                                <div className="about-inner">
                                                                    <h4>About</h4>
                                                                    <p className="about-text">Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</p>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon location"><MdLocationOn /></span>
                                                                            <span className="ab-name">Live at <strong>{this.state._userAbout.location}</strong></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon"><FaPhoneAlt /></span>
                                                                            <span className="ab-name">{this.state._userAbout.phone}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon"><GrMail /></span>
                                                                            <span className="ab-name">{this.state._userAbout.mail}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon"><MdWork /></span>
                                                                            <span className="ab-name">Work at <strong>{this.state._userAbout.work}</strong></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="extra-info-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="box-sh about-section">
                                                                <div className="about-inner social-section">
                                                                    <h4>Social</h4>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon in"><AiFillLinkedin /></span>
                                                                            <span className="ab-name">linkedin.com</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon fb"><AiFillFacebook /></span>
                                                                            <span className="ab-name">facebook.com</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon tw"><AiFillTwitterSquare /></span>
                                                                            <span className="ab-name">twitter.com</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="about-user">
                                                                        <div className="wrap">
                                                                            <span className="ab-icon ins"><AiFillInstagram /></span>
                                                                            <span className="ab-name">instagram.com</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-edu-exp col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <div className="extra-info-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="box-sh">
                                                                <Experience experiencelist={this.state._userAbout.experience} />
                                                            </div>
                                                        </div>
                                                        <div className="extra-info-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="box-sh">
                                                                <Education educationlist={this.state._userAbout.education} />
                                                            </div>
                                                        </div>
                                                        <div className="extra-info-user col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="box-sh">
                                                                <Skills skill={this.state._userAbout.skillset} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}