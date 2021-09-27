import React from 'react';

import { GiUnbalanced } from 'react-icons/gi';
import { MdMoneyOff } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { GrStatusInfo } from 'react-icons/gr';

export default class Leavecards extends React.Component{
    render(){
        return(
            <div className="leave-card">
                <div className="row">
                    <div className="le-card col col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="leave-card-box-sha lb">
                            <div className="leave-bal-in">
                                <div className="count">
                                    <h3>Leave Balance</h3>
                                    <span>5</span>
                                </div>
                                <div className="icon">
                                    <span>
                                        <GiUnbalanced />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="le-card col col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="leave-card-box-sha lop">
                            <div className="leave-lop-in">
                                <div className="count">
                                    <h3>Loss of Pay</h3>
                                    <span>2</span>
                                </div>
                                <div className="icon">
                                    <span>
                                        <MdMoneyOff />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="le-card col col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="leave-card-box-sha hrper">
                            <div className="leave-lop-in">
                                <div className="count">
                                    <h3>Permission<sup> Month</sup></h3>
                                    <span>2<sup>Hr</sup></span>
                                </div>
                                <div className="icon">
                                    <span>
                                        <BiTimeFive />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="le-card col col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        
                        <div className="leave-card-box-sha leave-chart">
                            <div className="leave-lop-in">
                                <div className="count">
                                    <h3>Leave status</h3>
                                    <span>Decline</span>
                                </div>
                                <div className="icon">
                                    <span>
                                        <GrStatusInfo />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}