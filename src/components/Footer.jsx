import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Kothapet, Vijayawada</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        
                        +91-9121858372
                        </h4>
                       
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        meenauppada971@gmail.com
                        </h4>
                        
                    </div>
                </div>
                <div className='right'>
                    <h4>
                        About the company
                    </h4>
                    <p>Loreum ipsum jdhf hfjhdfhieuf  fjhhfuhjf  jcdndv jvdfbn jfbf</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
