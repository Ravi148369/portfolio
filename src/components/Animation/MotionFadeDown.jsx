import React from 'react'
import {motion} from 'framer-motion'
const MotionFadeDown = ( {children} ) => {
  return (
    <motion.div animate = {{
      y:[-20,0], 
      opacity: [0,1],
      transition: {
        type: 'spring',
        duration: 0.4,
        bounce: 0.3
      }
    }}>
        {children}
    </motion.div>
  )
}

export default MotionFadeDown