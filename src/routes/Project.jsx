import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroProp from '../components/HeroProp';
import Projects from '../components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration in milliseconds
  }, []);

  return (
    <div>
      <Navbar/>
      <HeroProp heading="Projects" text="Some of my most recent Projects"/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Project;
