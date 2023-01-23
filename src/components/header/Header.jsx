import React from 'react'
import './header.css'
import CoverImg from '../../assets/skye_nobg.png'
import Socials from '../socials/Socials'

const Header = () => {
  return (
   <header>
    <div className="containier header_container">
      <div className='header_top'>
        <h5>Hello there, I am</h5>
        <h1>Shruti</h1>
        <div className="typewriter">
          <h5>I am a Software Engineer</h5>
        </div>
      </div>
      
      {/* <div className="header_left">
        <h2>Hi</h2>
      </div>       */}

      <div className="header_right">
        <img src= {CoverImg} alt="" />
      </div>

    
      <div className='header_bottom'>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      <Socials/>

    </div>
   </header>
  )
}

export default Header