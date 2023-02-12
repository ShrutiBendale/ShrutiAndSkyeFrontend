import React from 'react'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://www.linkedin.com/in/shrutibendale" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ShrutiBendale" target="_blank"><BsGithub/></a>
        <a href="https://medium.com/@shrutibendale" target="_blank"><BsMedium/></a>
    </div>
  )
}

export default Socials