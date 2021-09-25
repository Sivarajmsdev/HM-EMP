    import React from 'react';
    import ReactApexChart from 'react-apexcharts';
    import ReactApexchart2 from 'react-apexcharts';

    export default class Dashboardchart extends React.Component{
        constructor(){
            super();
            this.state={
                _chartData:[],
                series: [12, 25, 20, 43],
                options: {
                    colors: ['#c8facd', '#5be584', '#00ab55', '#007b55'],
                    chart: {
                        width: 380,
                        type: 'donut',
                    },
                    labels: ['Mobile App', 'Web Hybrid', 'CMS', 'HTML/CSS'],
                    dataLabels: {
                        enabled: false
                    },
                    responsive: [
                        
                        {
                            breakpoint: 767,
                            options: {
                                chart: {
                                    width: '100%'
                                },
                                legend: {
                                    legend: {
                                    position: 'bottom',
                                    offsetY: 0,
                                    height: 32,
                                    width: '100%'
                                    }
                                }
                            }
                        },
                        
                    ],
                    legend: {
                        position: 'bottom',
                        offsetY: 0,
                        height: 72,
                    },
                    stroke: {
                        show: true,
                        curve: 'smooth',
                        lineCap: 'square',
                        width: 3   
                    },
                    plotOptions: {
                        pie: {
                            expandOnClick: true,
                            donut: {
                                labels: {
                                show: true,
                                    total: {
                                        showAlways: false,
                                        show: true
                                    }
                                }
                            }
                        }
                    },
                },
                series_1: [{
                    name: "Performance",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 100, 98, 78,65],
                }],
                options_1: {
                    chart: {
                    height: 250,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                    },
                    dataLabels: {
                    enabled: false
                    },
                    stroke: {
                    curve: 'straight'
                    },
                    
                    xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    }
                }
            };
        }
        render(){
            return(
                <div className="dashboard-main-chart-wrapper">
                    <div className="dashboard-chart">
                        <div className="row">
                            <div className="charts chart-1 col col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="chart-block">
                                    <div className="heasding">
                                        <h4>Projects Feedback</h4>
                                    </div>
                                    <div className="chart-wrap">
                                        <div id="chart">
                                            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={'100%'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="charts chart-2 col col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <div className="chart-block">
                                    <div className="heasding">
                                        <h4>Monthly Performance</h4>
                                    </div>
                                    <div className="chart-wrap">
                                        <div id="chart">
                                            <ReactApexchart2 options={this.state.options_1} series={this.state.series_1} type="line" width={'100%'} height={265} />
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