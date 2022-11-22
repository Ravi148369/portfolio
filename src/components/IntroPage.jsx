import React from 'react'
import MotionDiv from './Animation/MotionFadeDiv'
const IntroPage = () => {
  return ( 
        <div className = "flex items-center justify-between lg:mr-8 h-screen lg:w-4/5 ml-4 lg:ml-auto" id='home'>
            <MotionDiv>
                <div>
                    <h3 className='lg:text-xl ml-1 tracking-widest'>Hi, I'm</h3>
                    <div className='lg:text-6xl text-3xl font-bold'>
                        <h1 className='text-slate-800 tracking-wider'>Ravi Pal.</h1>
                        <h2 className='lg:mt-3 text-slate-700'>I build things for the web.</h2>
                    </div>
                </div>
                <p className='lg:w-3/5 lg:mt-8 mt-5'>
                    I'm a software engineer specializing in building (and occasionally Designing)
                    exceptional digital experiences. Currently, I’m focused on building beautiful Front end UI.
                </p>
                <div className='flex space-x-12 mt-6 items-center'>
                    <div className='text-3xl space-x-4'>
                        <a href="/instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/instagram"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="/instagram"><i className="fa-brands fa-github"></i></a>
                        <a href="/facebook"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div>
                        <button className='border px-5 py-2 rounded-md'>Resume</button>
                    </div>
                </div>
            </MotionDiv>
            <MotionDiv>
                <div className = "w-full hidden lg:block">
                    <img src="./images/intro.svg" alt="not found" className = "w-full h-full"/>
                </div>
            </MotionDiv>
        </div>
  )
}

export default IntroPage