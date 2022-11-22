import React from 'react'
import MotionScaleDiv from './Animation/MotionScaleDiv'
import MotionFadeDiv from './Animation/MotionFadeDiv'
import projectsObj from './projectsObj'
const Projects = () => {
  return (
    <MotionFadeDiv>
      <section className='lg:w-10/12 h-min-screen ml-auto lg:mr-8' id='projects'>
        <div className='pt-6'>
          <h2 className='text-center lg:text-5xl text-3xl font-bold tracking-wider'>MY RECENT WORK</h2>
          <p className='text-center lg:text-lg mt-4'>Here are a few past projects I've worked on. Want to see more? <a href="/contact" className='text-blue-500 underline'>Email me</a>.</p>
        </div>
        <div className='flex flex-wrap w-full mt-8 mx-auto justify-center border'>
          {
              Array.isArray(projectsObj) && projectsObj.map(project => 
                <div className='lg:w-3/12 w-96 m-4'>
                <MotionScaleDiv>
                  <div className='shadow-lg bg-white rounded-lg overflow-hidden'>
                      <div className='lg:w-62 lg:h-44 h-52 w-96 rounded-lg overflow-hidden'>
                        <img src={project.imgSrc} alt={project.title} className='h-full w-full object-cover'/>
                      </div>
                      <div className='m-2'>
                        <h2 className='font-bold'>{project.title}</h2>
                        <p className='text-gray-600'>{project.description}</p>
                      </div>
                  </div>
                </MotionScaleDiv></div>
              )
            }
        </div>
      </section>
    </MotionFadeDiv>
  )
}

export default Projects