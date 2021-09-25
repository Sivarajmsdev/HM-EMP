    import React from 'react'
    import { AiOutlineRise, AiOutlineFall, AiOutlineLine } from 'react-icons/ai'
    import { RiBarChartGroupedLine } from 'react-icons/ri';

    export default class Productivity extends React.Component{
        render(){
            return(
                <div className="productivity-wrapper">
                    <div className="container">
                        <div className="productivity-section">
                            <div className="row">
                                <div className="productivity-blocks col col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="block-pro b-p-1">
                                        <div className="left-pro-name">
                                            <h6>productive</h6>
                                            <div className="analysis">
                                                <span className="analysis-icon">
                                                    <AiOutlineRise />
                                                </span>
                                                <span className="analysis-count">+2.6%</span>
                                            </div>
                                            <h3 className="total-count">5.45 H</h3>
                                        </div>
                                        <div className="right-pro-chart">
                                            <span>
                                                <RiBarChartGroupedLine />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="productivity-blocks col col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="block-pro b-p-2">
                                        <div className="left-pro-name">
                                            <h6>Unproductive</h6>
                                            <div className="analysis">
                                                <span className="analysis-icon">
                                                    <AiOutlineFall />
                                                </span>
                                                <span className="analysis-count">-0.6%</span>
                                            </div>
                                            <h3 className="total-count">0.45 H</h3>
                                        </div>
                                        <div className="right-pro-chart">
                                            <span>
                                                <RiBarChartGroupedLine />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="productivity-blocks col col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="block-pro b-p-3">
                                        <div className="left-pro-name">
                                            <h6>Idle Time</h6>
                                            <div className="analysis">
                                                <span className="analysis-icon">
                                                    <AiOutlineLine />
                                                </span>
                                                <span className="analysis-count">+1.6%</span>
                                            </div>
                                            <h3 className="total-count">0.05 H</h3>
                                        </div>
                                        <div className="right-pro-chart">
                                            <span>
                                                <RiBarChartGroupedLine />
                                            </span>
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
