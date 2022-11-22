import React from 'react'
import {motion} from 'framer-motion'
const MotionScaleDiv = ( {children} ) => {
  return (
    <motion.div 
        whileInView = {{scale:[0,1]}}
        transition = {{duration: .5, ease:'easeInOut'}}
    >
        {children}
    </motion.div>            
  )
}

export default MotionScaleDiv