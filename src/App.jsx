import React from 'react'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default App