import React,{useEffect, useState} from 'react'
import MotionFadeDown from './Animation/MotionFadeDown'
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;
    useEffect(()=>{
        window.addEventListener('click',()=>{
            setIsOpen(false)
        })
    },[])
    return (
        <div className='lg:hidden fixed right-2 flex flex-col z-30'>
            <button
                className="flex flex-col h-12 w-12 justify-center items-center group self-end"
                onClick={(e) => {e.stopPropagation();setIsOpen(!isOpen)}}
            >
                <div
                className={`${genericHamburgerLine} ${
                    isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 pointer-events-none"
                    : "opacity-50 group-hover:opacity-100 pointer-events-none"
                }`}
                />
                <div
                className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100  pointer-events-none"
                }`}
                />
                <div
                className={`${genericHamburgerLine} ${
                    isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
                />
            </button>
        {
            isOpen?
            <div>
                <MotionFadeDown>
                    <ul className='text-smpx-8 ml-2  px-8 py-4 bg-white rounded-xl w-fit space-y-2'>
                        <li className='text-gray-500 hover:text-black transition-colors ease-in-out duration-100'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='text-gray-500 hover:text-black transition-colors ease-in-out duration-100'>
                            <a href="#about">About</a>
                        </li>
                        <li className='text-gray-500 hover:text-black transition-colors ease-in-out duration-100'>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='text-gray-500 hover:text-black transition-colors ease-in-out duration-100'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    </MotionFadeDown>
            </div>:''
        }
        </div>
    );
}

export default HamburgerMenu