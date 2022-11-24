import React from 'react'
import MotionDiv from './Animation/MotionFadeDiv'
import Skills from './Skills'
const About = () => {
  return (
    <section className='pb-4 min-h-screen ml-auto mb-8' id='about'>
        <MotionDiv>
          <div className='text-center pt-8'>
            <h2 className='lg:text-5xl text-3xl font-bold tracking-widest'>ABOUT ME</h2>
            <p className="font-bold">____</p>
            <p className='lg:w-7/12 mx-auto w-11/12'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          </div>
          <div className='flex flex-wrap justify-center mt-8'>
            <div 
              className='lg:w-1/2 lg:mr-16 lg:mx-auto mx-2'>
              <h2 className='text-2xl font-bold tracking-wider'>Get to know me!</h2>
              <p className='lg:text-xl text-lg mt-8 lg:w-11/12'>
                I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              </p>
            </div>
            <div className='lg:w-1/3 w-11/12 mx-auto lg:mt-0 mt-8'>
              <h2 className='text-2xl font-bold tracking-wider'> My Skills </h2>
              <div>
                  <Skills/>
              </div>
            </div>
          </div>
        </MotionDiv>
    </section>
  )
}

export default About