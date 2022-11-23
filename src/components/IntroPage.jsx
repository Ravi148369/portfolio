import React from 'react'
import MotionDiv from './Animation/MotionFadeDiv'
import MotionScaleDiv from './Animation/MotionScaleDiv'
const IntroPage = () => {
  return ( 
        <section className = "flex lg:mr-8 h-screen lg:w-4/5 ml-4 lg:ml-auto" id='home'>
            <MotionDiv>
                <div className='mt-24 lg:mt-12'>
                    <div className='flex justify-between h-60 lg:h-full'>
                        <div className='self-end mt-8'>
                            <h3 className='lg:text-xl ml-1 tracking-widest'>Hi, I'm</h3>
                            <h1 className='text-slate-800 tracking-wider lg:text-6xl text-3xl font-bold'>Ravi Pal.</h1>
                        </div>
                        <div>
                            <MotionScaleDiv>
                                <div className='lg:w-64 mb-4 lg:h-64 w-40 h-40 rounded-full overflow-hidden flex shadow'>
                                    <img src="./images/intro.svg" alt="not found" className='w-full object-cover' />
                                </div>
                            </MotionScaleDiv>
                            <div className='flex'>
                                <MotionScaleDiv>
                                    <div className='lg:w-16 w-12 -mt-28 -ml-20 h-fit p-2 rounded-full bg-gradient-to-tr from-gray-50'>
                                        <img src="./images/javascript.png" alt="not found" className='w-full object-cover' />    
                                    </div>
                                </MotionScaleDiv>
                                <MotionScaleDiv>
                                    <div className='lg:w-20 w-16 -mt-4 -ml-4 h-fit p-2 rounded-full bg-gradient-to-tr from-gray-50'>
                                        <img src="./images/react.png" alt="not found" className='w-full object-cover' />    
                                    </div>
                                </MotionScaleDiv>
                                <MotionScaleDiv>
                                    <div className='lg:w-16 w-12 mt-3 ml-12 h-fit p-2 rounded-full bg-gradient-to-tr from-gray-50'>
                                        <img src="./images/node.png" alt="not found" className='w-full object-cover' />    
                                    </div>
                                </MotionScaleDiv>
                            </div>
                        </div>
                    </div>
                    <div className='lg:text-6xl text-3xl font-bold'>
                        <h2 className='lg:mt-3 text-slate-700'>I build things for the web.</h2>
                    </div>
                </div>
                <p className='lg:w-3/5 lg:mt-8 mt-5'>
                    I'm a software engineer specializing in building (and occasionally Designing)
                    exceptional digital experiences. Currently, I’m focused on building beautiful Front end UI.
                </p>
                <div className='flex space-x-12 mt-6 items-center'>
                    <div className='text-3xl space-x-4'>
                        <a href="/instagram"><i className="fa-brands fa-instagram text-rose-500"></i></a>
                        <a href="/instagram"><i className="fa-brands fa-linkedin text-blue-800"></i></a>
                        <a href="/instagram"><i className="fa-brands fa-github"></i></a>
                        <a href="/facebook"><i className="fa-brands fa-facebook text-blue-700"></i></a>
                    </div>
                    <div>
                        <button className='border px-5 py-2 rounded-md'>Resume</button>
                    </div>
                </div>
            </MotionDiv>
        </section>
  )
}

export default IntroPage