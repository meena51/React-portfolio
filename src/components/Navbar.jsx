import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
function Navbar() {
    const [click, setClick] = useState(false)
    const [color,setColor] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const changeColor = ()=>{
        if(window.scrollY>=100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)
    return (
        <div className={color?"header header-bg":"header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <nav className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className='hamburger' onClick={handleClick}>
                {click ? <FaBars size={20} style={{ color: "#fff" }} /> :
                    <FaTimes size={20} style={{ color: "#fff" }} />
                }


            </div>
        </div>
    )
}

export default Navbar
