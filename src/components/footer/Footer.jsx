import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebookF , FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <section id='contact'>
            <div className="containier footer_container">
                <a href="#" className='footer_logo'>Shruti</a> 
                <ul className='permalinks'>
                        <li><a href = '#'>Home</a></li>
                        <li><a href = '#projects'>Projects</a></li>
                        <li><a href = '#contact'>Contact Me</a></li>
                </ul>

                <div className="footer_socials">
                        <a href="https://github.com/ShrutiBendale"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/shrutibendale"><FaLinkedin/></a>
                        <a href="https://www.instagram.com/shrutibendale/"><FaInstagram/></a>
                        <a href="https://www.facebook.com/shruti.bendale.3/"><FaFacebookF/></a>
                        
                </div>
        </div>
       </section>
    </footer>

  )
}

export default Footer