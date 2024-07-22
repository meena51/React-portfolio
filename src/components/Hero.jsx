import "./Hero.css"
import React from 'react'
import MyPhoto from "../images/MyPhoto.jpeg"
import { Link } from "react-router-dom"
function Hero() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={MyPhoto} alt="" />
        </div>
        <div className="content">
            
            <h1>React Developer</h1>
            <div>
                <Link to="project" className="btn">PROJECTS</Link>
            
                <Link to="contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
