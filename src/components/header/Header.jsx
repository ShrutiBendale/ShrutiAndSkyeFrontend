import React from 'react'
import './header.css'
import CoverImg from '../../assets/skye_nobg.png'
import Socials from '../socials/Socials'
import {AiOutlineDownCircle} from 'react-icons/ai';

const Header = () => {
  return (
    <section>
    <div className="containier header_container">
      <div className='header_top'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0 "/> 
        <h5>Hello there, I am</h5>
        <h1>Shruti</h1>
        <div className="typewriter">
          <h5>I am a Software Engineer</h5>
        </div>
      </div>

      <div className="header_mid">
        <div className='header_mid_text'>
          <h4>
            I created this website to learn new technologies related to frontend and backend development. 
            I will be using this page as a collection of links to all my projects and source code. 
          </h4>
          <h4>&nbsp;</h4>
          <h4>   
            So, follow along as I work on new projects and document my learnings!
          </h4>
          <h4>&nbsp;</h4>
          <h4>But before you scroll down, meet my dog, Skye. She also happens to be the majority shareholder of this website.</h4>

        </div>
        <img src= {CoverImg} alt="" />
        
      </div>

    
      <div className='header_bottom'>
        {/* <a href="#contact" className='scroll_down'><AiOutlineDownCircle/></a> */}
      </div>
      
      <div className='header_socials'>
        <Socials/>
      </div>
    </div>
    </section>
  )
}

export default Header