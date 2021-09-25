import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Userimg from '../../assets/image/userimg-1.jpg';

export default class Userlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _userListdata:[]
        }
    }
    render(){
        console.log(this.props.keyValue);
        return(
            <>
                <tr>
                    <td>
                        <div className="checkbox-container"><input type="checkbox" /> <span className="checkmark"></span> </div>
                    </td>
                    <td>
                        <span>{this.props.userinfo.id}</span>
                    </td>
                    <td>
                        <div className="users-img-name">
                            <div className="users-img">
                                <img src={Userimg} alt="Users" />
                            </div>
                            <h6>{this.props.userinfo.first_name}</h6>
                        </div>
                    </td>
                    <td>
                        <span>{this.props.userinfo.last_name}</span>
                    </td>
                    <td>
                        <span>{this.props.userinfo.email}</span>
                    </td>
                    <td>
                        <span>{this.props.userinfo.gender}</span>
                    </td>
                    <td>
                        <span className="options">
                            <BsThreeDotsVertical />
                        </span>
                     </td>
                </tr>
            </>
        );
    }
}