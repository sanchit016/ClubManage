import React from 'react'
import '../Banner/banner.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation';
import { useScroll } from "../useScroll"
import img from '../../assets/header.jpg'

export default function Banner() {
  const [element, controls] = useScroll();
  return (
    
    <div id="main" className='main' ref={element} >
      <motion.div className="home"
      variants={homeAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      
        <div className="parents">
            <div className="child title">
                <h3 className='hero-title'>Fuel your <strong className='sp-text'> College </strong>  Journey with <br /><strong className='sp-text'>Club Connect</strong></h3>

                <p className='hero-title2'>Search for a Club that aligns with your passion</p>
                
            </div>
            <div className="child">
                <img src={img} alt='' className='img-banner'/>
            </div>
        </div>
      
        </motion.div>
    </div>
    
  )
}
