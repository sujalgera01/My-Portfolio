import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sujal Gera</a>
      <ul className='perlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/gera_sujal/"><FiInstagram/></a>
        <a href="https://twitter.com/SujalGera"><FiTwitter/></a>
        <a href="https://www.linkedin.com/in/sujal-gera-355847177/"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made with &#10084; by Sujal Gera</small>
      </div>
    </footer>
  )
}

export default Footer