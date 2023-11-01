import React from 'react'
import img from '../../assets/blogv.jpg'
import { motion } from "framer-motion";
import  { contactAnimation } from '../../animation'
import { useScroll } from "../useScroll"
import './Home.css'
export default function Blog() {
    const [element, controls] = useScroll();
  return (
    
    <div className='blog-wrap' style={{ marginTop: '150px' }} ref={element} >
        <motion.div className="banner"
      variants={contactAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <section className="py-5">
	<div className="container">
		<div className="row justify-content-center text-center mb-3">
			<div className="col-lg-8 col-xl-7">
				<span className="text-muted">Let's Understand</span>
				<h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Importance of College Clubs</h1>
				<p className="lead mb-5" style={{ color: 'white' }}>Do you have a passion or interest you want to share with others? Why not think about joining a club?</p>
			</div>
		</div>
		<div className="row align-items-center">
			<div className="col-md-4 order-2 order-md-1">
                <div class="blog-card">
                    <i class="fa-solid fa-file"></i>
                    <h5 className="fw-bold mt-3">Build Your Resume</h5>
                </div>
                <div class="blog-card">
                    <i class="fa-solid fa-network-wired"></i>
                    <h5 className="fw-bold mt-3">Networking</h5>
                </div>
                <div class="blog-card">
                    <i class="fa-solid fa-microphone"></i>
                    <h5 className="fw-bold mt-3">Public Speaking</h5>
                </div>
				
			</div>
			<div className="col-md-4 order-1 order-md-2">
				<div className="mb-4 mb-md-0"><img alt="" className="img-fluid rounded mx-auto" src={img}/></div>
			</div>
			<div className="col-md-4 order-3 order-md-3 blog-two">
                <div class="blog-card">
                    <i class="fa-solid fa-business-time"></i>
                    <h5 className="fw-bold mt-3">Time Management Skills</h5>
                </div>
                <div class="blog-card">
                    <i class="fa-solid fa-mug-saucer"></i>
                    <h5 className="fw-bold mt-3">Break from Studies</h5>
                </div>
                <div class="blog-card">
                    <i class="fa-solid fa-handshake-simple"></i>
                    <h5 className="fw-bold mt-3">Make New Friends</h5>
                </div>
                
			</div>
		</div>
	</div>
</section>
</motion.div>
    </div>
    
  )
}
