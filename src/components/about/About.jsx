import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Connections</h5>
              <small>1000+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>Undergraduate</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
          Hello Friends!! I am Sujal Gera pursuing my B.Tech from Vellore Institute of Technology, specialization in Information Technology 
          (IT) Engineering. I live in Gohana, Haryana and I am an individual with keen interest in Web Development, Coding and loves to explore
           new technologies and places.   
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About