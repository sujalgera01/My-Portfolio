import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio3.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'IE(I)-VIT Official Website',
    github: 'https://github.com/sujalgera01/IEI-Website-Main',
    demo: 'http://ieivit.in/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Software Testing using Neoload',
    github: 'https://github.com/sujalgera01/Software-Testing-Project',
    demo: 'https://www.softwaretestinghelp.com/neoload-tutorial/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Leetcode with Me',
    github: 'https://github.com/sujalgera01/Lets-LeetCode-with-Me',
    demo: 'https://leetcode.com/problemset/all/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Madad NGO - OSPProject',
    github: 'https://github.com/sujalgera01/MADAD_ngo',
    demo: 'https://www.w3schools.com/php/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Brain Tumor Detection on MRI images',
    github: 'https://github.com/sujalgera01/Brain-Tumor-Detection-using-MRI-Images',
    demo: 'https://www.youtube.com/watch?v=UeFRo7uALhM'
  },
  {
    id: 6,
    image: IMG6,
    title: 'AcciMe',
    github: 'https://github.com/sujalgera01/AcciMe',
    demo: 'https://developer.android.com/docs'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Reference</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio