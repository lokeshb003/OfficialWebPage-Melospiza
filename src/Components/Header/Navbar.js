import React, { useState } from 'react'
import '../../styles/navbar.css'
import 'react-icons'


const Navbar = () => {

    const[Click, setClick] = useState(false);
    const toggle = () => setClick(!Click);
  
    
  return (
    <nav className='navBarItems'>
        <img src={require('../../assests/logo.png')} alt='melospiza' className='Melospiza_logo'/>
        <div className='menu-icons' onClick={toggle}>
            <i className={`${Click ? 'ri-close-line': 'ri-menu-3-line'}`}></i>
        </div>
        <ul className={`${Click ? 'navMenu active': 'navMenu'}`}>
            <li className='navTitle'>
                <a href="#about">About Us</a>
            </li>
            <li className='navTitle'>
                <a href='#services'>Services</a>
            </li>
            <li className='navTitle'>
                <a href='#projects'>Projects</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar