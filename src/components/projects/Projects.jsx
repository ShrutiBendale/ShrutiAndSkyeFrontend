import React from 'react'
import './projects.css'
import project1 from '../../assets/Project1.png'
import project2 from '../../assets/Project2.png'
import project3 from '../../assets/Project3.png'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="projects_header">
        <h1>Projects</h1>
      </div>
      <div className='projects_container'>
        <ul className="cards">
          <li className="card">
            <div>
              <h3 className="card-title">Project 1</h3>
              <div className="card-content">
                <div className="card-img">
                  <img src={project1} alt="project 1" />
                </div> 
                <div className="card-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-link-wrapper">
                  <a href="" className="card-link">Live Demo</a>
                  <a href="" className="card-link">GitHub</a>
                </div>
              </div> 
            </div>
          </li>
          <li className="card">
            <div>
              <h3 className="card-title">Project2</h3>
              <div className="card-content">
                <div className="card-img">
                  <img src={project2} alt="project2" />
                </div> 
                <div className="card-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-link-wrapper">
                  <a href="" className="card-link">Live Demo</a>
                  <a href="" className="card-link">GitHub</a>
                </div>
              </div> 
            </div>
          </li>
          <li className="card">
            <div>
              <h3 className="card-title">Project 3</h3>
              <div className="card-content">
                <div className="card-img">
                  <img src={project3} alt="project 3" />
                </div> 
                <div className="card-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-link-wrapper">
                  <a href="" className="card-link">Live Demo</a>
                  <a href="" className="card-link">GitHub</a>
                </div>
              </div> 
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects