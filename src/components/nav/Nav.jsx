import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'

//todo:  update the correct nav icon background as we scroll through components
const Nav = () => {
    const [activeNav,setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={ activeNav == '#' ? 'active' : '' }><AiOutlineHome/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={ activeNav == '#projects' ? 'active' : ''} ><AiOutlineProject/></a>
            <a href="#footer" onClick={() => setActiveNav('#footer')} className={ activeNav == '#footer' ? 'active' : ''}><AiOutlineUser/></a>
            {/* <a href="#"><AiOutlineHome/></a> */}
        </nav>
    )
}

export default Nav