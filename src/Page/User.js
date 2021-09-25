import React from 'react';
import { Link } from 'react-router-dom';
import { GoPrimitiveDot, GoPlus } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

import Userlist from '../Components/User/Userlist';

import Aside from '../Components/Dashboard/Aside';
import Header from '../Components/Dashboard/Header';

//import Userimg from '../assets/image/userimg-1.jpg';

export default class User extends React.Component{
    constructor(){
        super();
        this.state={
            _userData:[
                {
                    id:1,
                    name:"Muthu",
                    img:"abc",
                    company:"Hexamarvel Tech",
                    roll:"UI ENGINEER",
                    verified:"Yes",
                    status:"Active"
                },
                {
                    id:2,
                    name:"def",
                    img:"def",
                    company:"Hexamarvel Tech",
                    roll:"UI ENGINEER",
                    verified:"Yes",
                    status:"Benned"
                },
                {
                    id:3,
                    name:"ghi",
                    img:"ghi",
                    company:"Hexamarvel Tech",
                    roll:"UI ENGINEER",
                    verified:"Yes",
                    status:"Benned"
                },
                {
                    id:4,
                    name:"jkl",
                    img:"jkl",
                    company:"Hexamarvel Tech",
                    roll:"Manager",
                    verified:"Yes",
                    status:"Active"
                },
                {
                    id:5,
                    name:"mno",
                    img:"mno",
                    company:"Hexamarvel Tech",
                    roll:"UI ENGINEER",
                    verified:"Yes",
                    status:"Benned"
                },
                {
                    id:4,
                    name:"pqr",
                    img:"pqr",
                    company:"Hexamarvel Tech",
                    roll:"Manager",
                    verified:"Yes",
                    status:"Active"
                },
                {
                    id:5,
                    name:"stu",
                    img:"stu",
                    company:"Hexamarvel Tech",
                    roll:"UI ENGINEER",
                    verified:"Yes",
                    status:"Benned"
                }
            ],
            _sortdata :[],

            __maindata: []
        }
    }
    sortUserlist (ele){
        var _user_datas = this.state._userData;
        this.setState({
            _sortdata:_user_datas
        });
        var _inputValue = ele.target.value;
        for(let i=0; i < _user_datas.length ;i++){
            if(_user_datas[i].name === _inputValue){
                console.log(_user_datas[i]);
            }
        }

    }
    componentDidMount() {
        this.Userlist();
        var __data = this.state;

        setTimeout(() => {
            console.log(this.state.__maindata);
         }, 500);
        /*setTimeout(function(){
            var __user__d = __data.__user__data
            console.log(__data.__user__data)
        }, 500);*/
    }
    Userlist() {

        const email = '';
        const password = ''

        var __this = this;

        setTimeout(() => {
          
            const encodedString = new Buffer(email + ':' + password).toString('base64');
            const requestOptions = {
                method: 'GET',
                headers: { 'Authorization': "Basic " + encodedString },
            };
            fetch('https://mocki.io/v1/e68dd9e1-84a9-427f-b85e-e1e713545e46 ', requestOptions)
            .then(res => res.json())
            .then((data) => {
               this.setState({ __maindata: data });
               //console.log(data);
            }).catch((error) => {
                
                console.log();
            });
            

         }, 400);
    }
    render(){
        /*const userData = [
            
        ]*/
        
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
                                <div>
                                  <div className="user-wrapper">
                                   <div className="user-details">
                                       <div className="container">
                                           <div className="row">
                                               <div className="user-list-head col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                   <div className="user-heding-addnew">
                                                       <div className="user-head-link">
                                                           <h4>User List</h4>
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
                                                                       <span className="nav-list-name active-page">List</span>
                                                                   </li>
                                                               </ul>
                                                           </div>
                                                       </div>
                                                       <div className="addnew-user">
                                                           <button>
                                                               <Link to="/dashboard/user">
                                                                   <span className="icon-plus"><GoPlus /></span>
                                                                   <span className="text">Nwe User</span>
                                                               </Link>
                                                           </button>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="user-list-table col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="user-table-section">
                                                        <div className="user-section">
                                                            <div className='search-filter'>
                                                                <div className="search-section">
                                                                    <span>
                                                                        <BiSearch />
                                                                    </span>
                                                                    <input type="text" placeholder="Search User" onChange={this.sortUserlist.bind(this)} />
                                                                </div>
                                                                <div className="filter-btn">
                                                                    <span>
                                                                        <BsFilter />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="table-container">
                                                                <div className="table-section-users">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <div className="checkbox-container"><input type="checkbox" /> <span className="checkmark"></span> </div>
                                                                                    </span>
                                                                                </th>
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <span className="name-of-head">Id</span>
                                                                                        <span className="filter-icon"></span>
                                                                                    </span>
                                                                                </th>
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <span className="name-of-head">Name</span>
                                                                                        <span className="filter-icon"></span>
                                                                                    </span>
                                                                                </th>
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <span className="name-of-head">Lastname</span>
                                                                                        <span className="filter-icon"></span>
                                                                                    </span>
                                                                                </th>
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <span className="name-of-head">Email</span>
                                                                                        <span className="filter-icon"></span>
                                                                                    </span>
                                                                                </th>
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <span className="name-of-head">Gender</span>
                                                                                        <span className="filter-icon"></span>
                                                                                    </span>
                                                                                </th>
                                                                                
                                                                                <th>
                                                                                    <span className="table-cell-container">
                                                                                        <span className="name-of-head"></span>
                                                                                        <span className="filter-icon"></span>
                                                                                    </span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                this.state.__maindata.map((data, index) =>                                                                 
                                                                                    <Userlist userinfo={data} key={index} keyValue={index} />
                                                                                )
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div className="paginations">
                                                                <div className="pagination-container">
                                                                    <div className="row-of-page">
                                                                        <span>Row Of Page :</span>
                                                                        <select>
                                                                            <option>5</option>
                                                                            <option>15</option>
                                                                            <option>25</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="row-of-page-no">
                                                                        <span>1-5 of 24</span>
                                                                    </div>
                                                                    <div className="row-of-page-icon">
                                                                        <span>
                                                                            <RiArrowDropLeftLine />
                                                                        </span>
                                                                        <span>
                                                                            <RiArrowDropRightLine />
                                                                        </span>
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
                    </div>
                </div>
            </div>
            
        );
    }
}