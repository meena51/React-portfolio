import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';
import './ProjectCard.css';

function Projects() {
    return (
        <div className='work-container'>
          <h1 className='project-heading'>Projects</h1>
          <div className='project-container'>
            {
                projectData.map((val, index) => {
                    return (
                        <ProjectCard 
                          key={index}
                          src={val.src}
                          title={val.title}
                          text={val.text}
                          view={val.view}
                          source={val.source}
                        />
                    );
                })
            }
          </div>
        </div>
    );
}

export default Projects;
