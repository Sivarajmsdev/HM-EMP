import React from 'react';
import Leaveform from './Leaveform';
import Permissionformhr from './Permissionformhr';
export default function Leavepermission(){
    const _holiday =[
        {
            date:"August 15",
            day : "Sunday",
            holiday:"Independence Day"
        },
        {
            date:"January 14 or 15",
            day : "Friday",
            holiday:"Vinayagar Chaturthi"
        },
        {
            date:"January 14 or 15",
            day : "Saturday",
            holiday:"Gandhi Jayanthi"
        },
        {
            date:"January 14 or 15",
            day : "Thursday",
            holiday:"Ayudha Pooja/Vijaya Dashami"
        },
        {
            date:"January 14 or 15",
            day : "Thursday",
            holiday:"Diwali"
        }
    ]
    return(
        <div className="leave-permission-wrapper">
            <div className="leave-per-section col col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div className="leave-permission">
                    <Leaveform />
                </div>
            </div>
            <div className="permission-hr-section col col-lg-5 col-md-6 col-sm-12 col-xs-12">
                <div className="hour-permission">
                    <Permissionformhr />
                </div>
            </div>
            <div className="holiday-list col col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <div className="off-holidatlist">
                    <h3>Company Holidays-2021</h3>
                    <div className="holiday-container">
                        {
                            _holiday.map((data, index) =>
                                <div className="holi-card" key={index}>
                                    <h4>{data.holiday}</h4>
                                    <p>{data.date}</p>
                                    <p>{data.day}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}