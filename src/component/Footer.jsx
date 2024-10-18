import React from 'react'
import Logo from '../assets/Logo.svg'
import { BsTwitter,BsYoutube } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'


const Footer = () => {
  return (
      <div className='footer-wrapper'>
          <div className='footer-section-one'>
              <div className='footer-logo-container'>
                  <img src= {Logo} alt=''/>
              </div>
              <div className='footer-icons'>
                  <BsTwitter/>
                  <BsYoutube />
                  <SiLinkedin />
                  <FaFacebook/>
              </div>  
          </div>
          <div className="footer-section-two">
              <div className='footer-section-columns'>
                  <span>Quality</span>
                  <span>Help</span>
                  <span>Share</span>
                  <span>Carrers</span>
                  <span>Testimonial</span>
                  <span>Work</span>
              </div>
              <div className='footer-section-columns'>
                  <span>0312-1002002</span>
                  <span>hello@food.com</span>
                  <span>press@food.com</span>
                  <span>Contact@food.com</span>
                  
              </div>
              <div className='footer-section-columns'>
                  <span>Terms & Conditions</span>
                  <span>Privacy Policy</span>
              </div>
              
        </div>
        
    </div>
  )
}

export default Footer