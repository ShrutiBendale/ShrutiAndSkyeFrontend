import React from 'react'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particlesConfig from './particles-config.json';


const App = () => {
  const particlesInit =  useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='App'>
      <Particles options={particlesConfig} init={particlesInit} />
      <Header/>
      <Nav/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
      
    </div>
    
  )
}

export default App