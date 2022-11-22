import React from 'react'
import {AiOutlineHome, AiFillProject} from 'react-icons/ai'
import {RiContactsLine} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'
const SideBar = () => {
  return (
    <div className='hidden h-screen w-52 lg:flex flex-col justify-center bg-slate-300'>
        <div className='flex flex-col h-1/2 my-auto'>
            <a href="#home" className='flex items-center border w-2/3 mx-auto mb-6 px-5 py-2 rounded-lg bg-white'>
                <span className='text-2xl'>
                    <AiOutlineHome/>
                </span>
                <span className='text-xl mx-2'>Home</span>
            </a>
            <a href="#about" className='flex items-center border w-2/3 mx-auto mb-6 px-5 py-2 rounded-lg bg-white'>
                <span className='text-2xl'>
                    <FcAbout/>
                </span>
                <span className='text-xl mx-2'>About</span>
            </a>
            <a href="#projects" className='flex items-center border w-2/3 mx-auto mb-6 px-5 py-2 rounded-lg bg-white'>
                <span className='text-2xl'>
                    <AiFillProject/>
                </span>
                <span className='text-xl mx-2'>Projects</span>
            </a>
            <a href="#contact" className='flex items-center border w-2/3 mx-auto mb-6 px-5 py-2 rounded-lg bg-white'>
                <span className='text-2xl'>
                    <RiContactsLine/>
                </span>
                <span className='text-xl mx-2'>Contact</span>
            </a>
        </div>
    </div>
  )
}

export default SideBar