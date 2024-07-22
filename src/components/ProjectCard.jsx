import React from 'react';
import './ProjectCard.css';
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {
    return (
        <div className='project-card' data-aos="fade-up">
            <img src={props.src} alt="Project" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='project-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.view} className='btn'>View</NavLink>
                    <NavLink to={props.source} className='btn'>Source</NavLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
