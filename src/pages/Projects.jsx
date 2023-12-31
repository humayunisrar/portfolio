import React from 'react'
import {projects} from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <section className='max-container'>

    <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span></h1>
  
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
        I've worked on various projects. Here are a few of my favorites.
      </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
     {projects.map((project) => (

      <div className='lg:w-[400px] w-full'key={project.name}> 
       <a href={project.link}  target='_blank'
          rel='noopener noreferrer'>
             <img 
                  src={project.iconUrl} 
                  alt='Project Icon'
                  className='w-[75%] h-[60%] object-contain'
                   />
                   </a>
     
      <div className=' mt-2 flex flex-col'>
        <h4 className='text-2xl font-poppins font-semibold'>
          {project.name}
        </h4>
        <p className='mt-2 text-slate-500'>
          {project.description}
        </p>
        <div className='mt-5 flex items-center gap-2 font-poppins mb-5'>
          <Link
          to={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold text-blue-600'
          >
          Live Link
          </Link>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
        </div>
      </div>
      </div>
    ))}
    </div>
    <hr className='border-slate-200 mt-[180px]'/>
    <CTA/>
    
    </section>
    
    
  )
}

export default Projects