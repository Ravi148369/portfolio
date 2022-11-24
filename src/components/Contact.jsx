import React, { useRef, useState } from 'react'
import MotionFadeDiv from './Animation/MotionFadeDiv'
import validate from './form-validate/validate'
import emailjs from 'emailjs-com'
import customToast from './toaster/customToast'
const Contact = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const formData = useRef({
        name:'',
        email:'',
        subject:'',
        message:''
    })
    const [formError, setFormError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsDisabled(true)
        const error = validate(formData.current)
        if(Object.keys(error).length === 0) {
            emailjs.send("service_sbqxr73", "template_pkmul23",formData.current, "Eio5No0ihe1nQA2Wy")
            .then(()=>{
                customToast()
                setIsDisabled(false)
            })
            return
        }
        setFormError(error)
    }
  return (
    <section className='min-h-screen pb-8 ml-auto pt-8 bg-rose-100' id='contact'>
        <MotionFadeDiv>
            <div className='flex flex-wrap h-full mt-16'>
                <div className='lg:w-1/2 w-11/12 mx-auto h-full my-auto'>
                    <div className='mx-auto w-fit mb-24'>
                        <h2 className='text-gray-800 text-lg'>CONTACT US</h2>
                        <div className='lg:text-5xl text-3xl font-bold'>
                            <p>Let's talk</p>
                            <p>about your project</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className='border lg:w-3/4 w-11/12 mx-auto p-4 rounded-2xl shadow-xl bg-white'>
                        <h2 className='font-bold text-2xl lg:mb-8 mb-6 w-5/6 mx-auto'>Send a Message</h2>
                        <form className='lg:space-y-4 space-y-2 w-11/12 mx-auto' onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label htmlFor="fname" className='ml-1'>
                                    Full Name
                                    <span className='text-blue-300'>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder='Enter name here' 
                                    className='border lg:h-10 h-8 w-full rounded-md mt-1 pl-1'
                                    id='fname'
                                    onChange={(e)=>formData.current.name = e.target.value}
                                    required
                                />
                                <small className='text-red-500'>{formError.name}</small>
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
                                    onChange={(e)=>formData.current.email = e.target.value}
                                    required
                                />
                                <small className='text-red-500'>{formError.email}</small>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="subject" className='ml-1'>
                                    Subject
                                    <span className='text-blue-300'>*</span>
                                </label>
                                <input 
                                    type="subject" 
                                    id='subject' 
                                    placeholder='Subject' 
                                    className='border lg:h-10 rounded-md mt-1 pl-1 h-8' 
                                    onChange={(e)=>formData.current.subject = e.target.value}
                                    required
                                />
                                <small className='text-red-500'>{formError.subject}</small>
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
                                    onChange={(e)=>formData.current.message = e.target.value}
                                    required
                                />
                                <small className='text-red-500'>{formError.message}</small>
                            </div>
                            <input 
                                type="submit" 
                                value={"submit"}
                                className = "border px-4 py-2 rounded-lg bg-rose-400 text-white disabled:bg-slate-300 transition-all duration-400"
                                disabled = {isDisabled}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </MotionFadeDiv>
    </section>
  )
}

export default Contact