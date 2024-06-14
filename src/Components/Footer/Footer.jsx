import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import gmail_icon from '../Assets/gmail_icon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt='' />
                <p>LargoPizza</p>
            </div>
        <ul className='footer-links'>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Contact Us</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={gmail_icon} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt='' />
            </div> 
        </div>
        <div className="footer-copyright">
          <hr />
           <p>2024 LargoPizza. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer