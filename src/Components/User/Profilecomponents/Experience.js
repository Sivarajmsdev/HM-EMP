import React from 'react';

import {MdWork} from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

export default class Education extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="experience-wrapper">
                <h4>
                    <span><MdWork /></span>
                    Experience
                </h4>
                <div className="experience-list">
                    <ul>
                        {
                            this.props.experiencelist.map((data) =>
                                <li className="experience-li">
                                   <div className="exp-section">
                                        <div className="from-to">
                                            <span className="from"><FaDotCircle /></span>
                                            <span className="to"><FaDotCircle /></span>
                                        </div>
                                        <h5>{data.role}</h5>
                                        <p>{data.company}.<strong>{data.employment_type}</strong></p>
                                        <p>{data.year_Experience}</p>
                                        <p className="ab-yo-role">{data.about_your_role}</p>
                                        <p>{data.location}</p>
                                   </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}