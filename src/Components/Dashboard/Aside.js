import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillPieChart, AiOutlineLineChart , AiOutlineFundProjectionScreen,
    AiOutlineSetting
} from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsChatSquareQuote, BsFileSpreadsheet } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Logo from '../../assets/image/hexa.png';

export default class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _asideData:[]
        }
    }
    dropdownActive(name,dropDown,dropicon, event){
        if(dropicon !== "" && dropDown !==""){
            var _sublist = document.getElementById(dropDown);
            _sublist.classList.toggle("show-list");
            
            var _icon = document.getElementById(dropicon);
            _icon.classList.toggle("rotete");
        }
        
        var _list_block = document.getElementsByClassName("list-blocks");
        for(let i=0; i < _list_block.length ;i++){
            _list_block[i].className = _list_block[0].className.replace(" active", "");
        }
        var _current_list = document.getElementById(name);
        if(!_current_list.classList.contains("active")){
            _current_list.className += " active";
        }
    }
    
    render(){
        return(
            <div className="aside-wrapper">
                <div className="aside-container">
                    <div className="aside-section">
                        <div className="logo-menus">
                            <Link to="/dashboard">
                                <img src={Logo} alt="Hexamarvel" />
                            </Link>
                        </div>
                        <div className="user-details">
                            <div className="user-info">
                                <div className="avatar">
                                    <span className="av-na">H</span>
                                </div>
                                <div className="name-user">
                                    <h6 className="name">Hexa-Employee</h6>
                                    <span className="role">UI Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="aside-nav-list">
                            <div className="list-wrapper">
                                <ul className="list-ul">
                                    <li className="list-blocks active" id="list-1" onClick={this.dropdownActive.bind(this,'list-1','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <FiMonitor />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Dashboard</span>
                                                <span className="drop-down-icon" id="list-1-icon">
                                                    
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="list-blocks" id="list-2" onClick={this.dropdownActive.bind(this,'list-2','list-2-sublist','list-2-icon')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <AiOutlineFundProjectionScreen />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Projects</span>
                                                <span className="drop-down-icon" id="list-2-icon">
                                                    <IoMdArrowDropdown />
                                                </span>
                                            </div>
                                        </button>
                                        <div className="drop-down" id="list-2-sublist">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0)">Web & Hybrid</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Backend & DB</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">CMS & Ecommerce</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Mobile</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-blocks" id="list-3" onClick={this.dropdownActive.bind(this,'list-3','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <BsChatSquareQuote />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Leave</span>
                                                <span className="drop-down-icon" id="list-3-icon">
                                                    
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="list-blocks" id="list-4" onClick={this.dropdownActive.bind(this,'list-4','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <BiUser />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Profile</span>
                                                <span className="drop-down-icon" id="list-4-icon">
                                                    
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="list-blocks" id="list-5" onClick={this.dropdownActive.bind(this,'list-5','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <BsFileSpreadsheet />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Attendance</span>
                                                <span className="drop-down-icon" id="list-5-icon">
                                                    
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="list-blocks" id="list-6" onClick={this.dropdownActive.bind(this,'list-6','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <AiFillPieChart />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Performance</span>
                                                <span className="drop-down-icon" id="list-6-icon">
                                                    
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="list-blocks" id="list-7" onClick={this.dropdownActive.bind(this,'list-7','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <AiOutlineLineChart />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Growth</span>
                                                <span className="drop-down-icon" id="list-7-icon">
                                                    
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="list-blocks" id="list-8" onClick={this.dropdownActive.bind(this,'list-8','','')}>
                                        <button className="lists">
                                            <span className="icon">
                                                <AiOutlineSetting />
                                            </span>
                                            <div className="name-down">
                                                <span className="name">Setting</span>
                                                <span className="drop-down-icon" id="list-7-icon">
                                                   
                                                </span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}