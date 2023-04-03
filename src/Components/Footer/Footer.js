import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/Footer.css'
import Logo from '../../assests/logo.png'
const Footer = () => {
  return (
    <div style={{background:'#fff', width:'100%', height:'300px'}}>
        <img src={Logo} className='Logo' alt='Melospiza'/><h1 className='Footer__title'>Melospiza&trade;</h1>
        <Col className='icon__group'>
        <a class='mail' href="mailto: official.melospiza@gmail.com" style={{textDecoration:'none'}}><i className='ri-mail-send-line icon'></i></a>
            <a href="https://www.instagram.com/melospiza.team/" target="blank" style={{textDecoration:'none'}}><i className='ri-instagram-line icon'></i></a>
            <a href="tel:+91 93810 12233" style={{textDecoration:'none'}}><i className='ri-phone-line icon'></i></a>
        </Col>
    </div>
  )
}

export default Footer