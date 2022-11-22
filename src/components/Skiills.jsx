import React,{ useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({
          duration : 700
        });
        Aos.refresh();
      }, []);
  return (
    <>
        <section className='border'>
            <h2>Skills</h2>
            <div 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-center"
                className='h-64 m-4 border w-1/3 mx-auto bg-blue-300'
                >
                   1
            </div>
            <div 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-center"
                className='h-64 m-4 border w-1/3 mx-auto bg-blue-300'
                >
                 2
            </div>
            <div 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-center"
                className='h-64 m-4 border w-1/3 mx-auto bg-blue-300'
                >
                    hello world
            </div>
            <div 
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className='h-64 m-4 border w-1/3 mx-auto bg-blue-300'
                >
                    hello world
            </div>
        </section>
        <footer className='h-64'>

        </footer>
    </>
  )
}

export default Skills