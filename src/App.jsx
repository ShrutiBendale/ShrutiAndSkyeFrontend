import React from 'react'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


const App = () => {
  const options = {
    background: {
      color: "ffffff"
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 4000,
          duration: 10,
          opacity: 0.8,
          size: 400
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#9f9f9f"
      },
      links: {
        color: "#9f9f9f",
        distance: 200,
        enable: true,
        opacity: 0.6,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 600
        },
        value: 80
      },
      opacity: {
        value: 0.1
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    }
  };
 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='App'>
      <Particles options={options} init={particlesInit} />
      <Header/>
      <Nav/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
      
    </div>
    
  )
}

export default App