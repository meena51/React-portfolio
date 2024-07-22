import React from 'react';
import './AboutContent.css';
import myPhoto from '../images/About.jpeg'; // Ensure you have your photo in the images folder

function AboutContent() {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <div className='about-text'>
                    <h2>About Me</h2>
                    <p>
                        I am a passionate Frontend Developer with expertise in creating interactive and responsive web applications.
                        I enjoy coding and continuously learning new technologies to enhance my skills. I am proficient in HTML, CSS,
                        JavaScript, and React, and I have a strong understanding of modern web development practices.
                    </p>
                </div>
                <div className='about-photo'>
                    <img src={myPhoto} alt="My Photo" />
                </div>
            </div>

            <div className='skills-section'>
                <h2>My Skills</h2>
                <div className='skills-container'>
                    <div className='skill'>
                        <div className='skill-card'>
                            <h3>HTML</h3>
                            <div className='skill-circle'>
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1c40f" strokeWidth="10"
                                        strokeDasharray="283" strokeDashoffset="0"></circle>
                                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#f1c40f">100%</text>
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className='skill'>
                        <div className='skill-card'>
                            <h3>CSS</h3>
                            <div className='skill-circle'>
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1c40f" strokeWidth="10"
                                        strokeDasharray="283" strokeDashoffset="56"></circle>
                                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#f1c40f">80%</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* <div className='skill-heading'>
                        <h2>My Skills</h2>
                    </div> */}
                    <div className='skill'>
                        <div className='skill-card'>
                            <h3>Javascript</h3>
                            <div className='skill-circle'>
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1c40f" strokeWidth="10"
                                        strokeDasharray="283" strokeDashoffset="28"></circle>
                                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#f1c40f">90%</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='skill'>
                        <div className='skill-card'>
                            <h3>React</h3>
                            <div className='skill-circle'>
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1c40f" strokeWidth="10"
                                        strokeDasharray="283" strokeDashoffset="56"></circle>
                                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#f1c40f">80%</text>
                                </svg>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default AboutContent;
