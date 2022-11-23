import React from 'react'
import MotionFadeDiv from './Animation/MotionFadeDiv'
const Contact = () => {
  return (
    <section className='lg:w-11/12 min-h-screen pb-8 ml-auto pt-8 bg-rose-100' id='contact'>
        <MotionFadeDiv>
            <div className='flex flex-wrap h-full mt-16'>
                <div className='lg:w-1/2 w-11/12 mx-auto h-full my-auto'>
                    <div className='mx-auto w-fit mb-24'>
                        <h2 className='text-gray-800 text-lg'>CONTACT US</h2>
                        <div className='lg:text-7xl text-5xl font-bold'>
                            <p>Let's talk</p>
                            <p>about you</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className='border lg:w-3/4 w-11/12 mx-auto p-4 rounded-2xl shadow-xl bg-white'>
                        <h2 className='font-bold text-2xl lg:mb-8 mb-6 w-5/6 mx-auto'>Send us a Message</h2>
                        <form className='lg:space-y-4 space-y-2 w-11/12 mx-auto'>
                            <div className='flex flex-col'>
                                <label htmlFor="fname" className='ml-1'>
                                    Full Name
                                    <span className='text-blue-300'>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder='Enter name here' 
                                    className='border lg:h-10 h-8 w-full rounded-md mt-1 pl-1'
                                    required
                                    id='fname'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='ml-1'>
                                    Email
                                    <span className='text-blue-300'>*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id='email' 
                                    placeholder='Email' 
                                    className='border lg:h-10 h-8 rounded-md mt-1 pl-1'
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="subject" className='ml-1'>
                                    Subject
                                    <span className='text-blue-300'>*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id='subject' 
                                    placeholder='Subject' 
                                    className='border lg:h-10 rounded-md mt-1 pl-1 h-8' 
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message">
                                    Message
                                    <span className='text-blue-300'>*</span>
                                </label>
                                <textarea 
                                    id="message" 
                                    cols="20" 
                                    rows="5"
                                    className='mt-2 border rounded-md pl-1'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MotionFadeDiv>
    </section>
  )
}

export default Contact