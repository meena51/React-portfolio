import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroProp from '../components/HeroProp'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroProp heading = "About Me" text="I am a friendly front-end developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
