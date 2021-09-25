import React from 'react';

import {GiSkills} from 'react-icons/gi';
import {IoSchoolSharp} from 'react-icons/io5';
import {MdExplicit} from 'react-icons/md';
import {BiUser} from 'react-icons/bi';

import { getUser} from '../../../Utils/Common';

import Avater from '../../../assets/image/hexamarvel-logo-sm.png';


export default class Profilebanner extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            __maindata: [

            ]
        }
        
    }

    componentDidMount(filter) {
        const user = getUser();
        const loggedInUser = localStorage.getItem("user");
        
            this.setState({email: loggedInUser})
            
            setTimeout(() => {
          
            const encodedString = new Buffer(user[0] + ':' + user[1]).toString('base64');
            const requestOptions = {
                method: 'GET',
                headers: { 'Authorization': "Basic " + encodedString },
            };
            fetch('https://mocki.io/v1/e68dd9e1-84a9-427f-b85e-e1e713545e46 ', requestOptions)
            .then(res => res.json())
            .then((data) => {
               var __this = this;
              data.forEach(function (item, index) {
                
                if (item.email === loggedInUser){
                    
                    //__this.setState({firstName: loggedInUser});
                    __this.setState({__maindata: data[index]})
                    //console.log(item.first_name);
                    /*console.log(item.last_name);
                    console.log(item.gender);
                    console.log(item.id);*/
                   /* var element1 = document.getElementById("loginAlert");
                    element1.classList.add("showAlert");
                    setTimeout(() => {
                        localStorage.setItem('user', item.email)
                        setUserSession(item.token, [email,password]);
                        history.push('/dashboard');
                    }, 500);*/
                }
            });
            }).catch((error) => {
                
                console.log();
            });
            

         }, 400);
    }

    render(){
       
        return(
            <div className="profile-banner-section">
                <div className="banner-inner-section">
                    <div className="banner-img">
                        <div className="user-name-role">
                            <div className="user-avater">
                                <img src={Avater} alt="Hexa Employee" />
                            </div>
                            <div className="role-name">
                                <h3 className="name">{this.state.__maindata.first_name}</h3>
                                <h5 className="role">UI Engineer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="lists-target">
                        <ul>
                            <li>
                                <a>
                                    <span className="icon">
                                        <BiUser />
                                    </span>
                                    <span className="icon-name">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="icon">
                                        <GiSkills />
                                    </span>
                                    <span className="icon-name">Skills</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="icon">
                                        <IoSchoolSharp />
                                    </span>
                                    <span className="icon-name">Education</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="icon">
                                        <MdExplicit />
                                    </span>
                                    <span className="icon-name">Experience</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}