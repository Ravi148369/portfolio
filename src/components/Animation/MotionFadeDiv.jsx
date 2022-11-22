import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const MotionDiv = ( {children} ) => {
  const [ref, Inview] = useInView({
    threshold: 0.1
  })
  const animation = useAnimation()
  useEffect(()=>{
    if(Inview) {
      animation.start({
        y:[100, 0], 
        opacity: [0,1],
        transition: {
          type: 'spring',
          duration: 0.4,
          bounce: 0.3
        }
      })
    }
    else {
      animation.start({opacity:0})
    }
  },[Inview, animation])
  return (
    <motion.div animate = {animation} ref = {ref}>
        {children}
    </motion.div>
  )
}

export default MotionDiv