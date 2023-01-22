import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import Socials from '../socials/Socials'

const Header = () => {
  return (
   <header>
    <div className="containier header_container">
      <h5>Hello there, I am</h5>
      <h1>Shruti</h1>
      <div className="typewriter">
        <h5>I am a Software Engineer</h5>
      </div>
      
      <Socials/>

      <div className="me">
        <img src= {ME} alt="" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>


    </div>
   </header>
  )
}

export default Header