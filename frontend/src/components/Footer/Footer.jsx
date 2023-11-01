import React from 'react';
import './Footer.css'
import { motion } from "framer-motion";
import { footerTextAnimation } from '../../animation'
import { useScroll } from "../useScroll"
export default function Footer() {
  const [element, controls] = useScroll();
  return (
    <footer className="footer" ref={element} >
      <motion.div className="banner"
      variants={footerTextAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <h3> About Campus Connect</h3> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
          ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Sector 25, Panjab University</span> Chandigarh, India</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> 781XXXXXXXX</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="#"> adminuiet@pu.ac.in </a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        {/*<h2> Company<span> logo</span></h2> */}
        <p className="menu">
          <a href="#"> Home</a> |
          <a href="#"> About</a> |
          <a href="#"> Clubs List</a> |
          <a href="#"> Login</a> |
          <a href="#"> Contact</a>
        </p>
        <p className="name"> UIET Club Connect &copy; 2023</p>
      </div>
      </motion.div>
    </footer>
  );
}
