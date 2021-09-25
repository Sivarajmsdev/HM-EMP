import React from 'react';

import { ImMenu } from 'react-icons/im';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _asideData:[]
        }
    }

    hisdside(){
        var _dashboard_section = document.getElementById(this.props.dashboad_center);
        _dashboard_section.classList.toggle("full-width");
        var _aside = document.getElementById(this.props.aside_section);
        _aside.classList.toggle("aside-width");

        /*var _lists = document.getElementsByClassName("name-down");
        for(let i=0; i < _lists.length ; i++){
            _lists[i].classList.toggle("hide-list");
        }*/
    }

    render(){
        return(
            <div className="header-wrapper">
                <div className="left-side">
                    <button className="nav-menu" onClick={this.hisdside.bind(this)}>
                        <span>
                            <ImMenu />
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}