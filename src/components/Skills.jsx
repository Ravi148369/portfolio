import React from 'react'
import skillsObj from './skillsObj'
import MotionScaleDiv from './Animation/MotionScaleDiv'

const Skills = () => {
  return (
    <div className='flex w-full mt-4 flex-wrap'>
        {
            Array.isArray(skillsObj) && skillsObj.map(skill=>
                <MotionScaleDiv>
                    <div className='mr-8 p-5 mt-4 rounded-full bg-slate-100 shadow-xl'>
                        <svg
                            className={`lg:w-12 w-9 fill-${skill.color}`}
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >   
                            <title>{skill.name}</title>
                            <path d={skill.path} />
                        </svg>
                    </div>        
                </MotionScaleDiv>
            )
        }
    </div>
  )
}

export default Skills