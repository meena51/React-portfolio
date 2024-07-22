import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroProp from '../components/HeroProp'
import Form from '../components/Form'



function Contact() {
  return (
    <div>
        <Navbar/>
        <HeroProp heading="Contact Me" text="Let's have a chat"/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact
