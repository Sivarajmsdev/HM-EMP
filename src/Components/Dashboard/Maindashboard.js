import React from 'react';
import Welcomebanner from './Dashboard-inner-components/Welcomebanner';
import Productivity from './Dashboard-inner-components/Productivity';
import Dashboardchart from './Dashboard-inner-components/Dashboardchart';

export default class Maindashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _asideData:[]
        }
    }
    render(){
        return(
            <div className="main-dashboard-wrapper">
                <div className="main-dashboard">
                    <div className="container">
                        <div className="main-ds-section">
                            <Welcomebanner />
                            <Productivity />
                            <Dashboardchart />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}