import React from 'react';

import Maindashboard from '../Components/Dashboard/Maindashboard';


import Aside from '../Components/Dashboard/Aside';
import Header from '../Components/Dashboard/Header';

export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            _dashboardData:[]
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
                                <Maindashboard />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}