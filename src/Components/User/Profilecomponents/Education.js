import React from 'react';

import {IoSchoolSharp} from 'react-icons/io5';

export default class Education extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="education-wrapper">
                <h4>
                    <span><IoSchoolSharp /></span>
                    Education
                </h4>
                <div className="education-list">
                    <ul>
                        {
                            this.props.educationlist.map((data) =>
                                <li className="education-li">
                                   <div className="edu-section">
                                        <h5>{data.name_of_institute}</h5>
                                        <p>{data.education_type}</p>
                                        <p>{data.degree}</p>
                                        <div className="edu-p-g">
                                            <span>YOP: {data.year_passout}</span>
                                            <span>CGPA: {data.cgpa}</span>
                                        </div>
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