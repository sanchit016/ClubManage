import React from 'react'
import './banner.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from "../useScroll"
import img from '../../assets/bg.jpg'

export default function Banner() {
  const [element, controls] = useScroll();
  return (
    
    <div id="main" className='main' ref={element} >
      <motion.div className="banner"
      variants={homeAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="home-text">
          <div className='club-con' >Welcome to Club Connect</div>
          <p className='home-para' >The best <strong className='sp-text' >College memories</strong> are made in Clubs <strong className='sp-text' >!!!! </strong><br />
          From <strong className='sp-text' >Academics</strong> to <strong className='sp-text' >Athletics</strong> we have something for everyone</p>

          <div className="home-btns">
            <div className="home-btn">Explore</div>
            <div className="home-btn">About Us</div>
          </div>
        </div>
        
        </motion.div>
    </div>
    
  )
}
