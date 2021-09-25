import React from 'react';
import {GiSkills} from 'react-icons/gi';

export default class Skills extends React.Component{
    
    render(){
        return(
            <div className="skills-wrapper">
                <h4>
                    <span><GiSkills /></span>
                    Skill Set 
                </h4>
                <div className="skills-list">
                    <ul>
                        {
                            this.props.skill.map((data) =>
                                <li className="skill-li">
                                    <span>{data}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}