import React from 'react';

import Aside from '../Components/Dashboard/Aside';
import Header from '../Components/Dashboard/Header';
import Leavecards from '../Components/Leave/Leavecards';
import Leavepermission from '../Components/Leave/Leavepermission';

export default class Leave extends React.Component{
    render(){
        return(
            <div className="dashboard-wrapper">
                <div className="leave-section">
                    <div className="leave-container">
                        <div className="container">
                            <div className="row">
                                <div className="dashboard-aside" id="aside-wrapper">
                                    <Aside />
                                </div>
                                <div className="leave-wrapper">
                                    <div className="dashboard-center" id="dashboard-center">
                                        <Header dashboad_center="dashboard-center" aside_section="aside-wrapper" />
                                        <Leavecards />
                                        <Leavepermission />
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