import React, { useState } from 'react'
import {Link} from 'react-scroll';
import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navAnimation } from '../../animation'
import './Navbar.css'
import LoadingBar from 'react-top-loading-bar'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate()
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    const handleLogin = ( )=>{
      navigate('/login')
    }
  
    return (
      <>
      <motion.div className="home"
      variants={navAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <nav className="navbar" style={{ color: '#21e6c1'}}>
        <div style={{ color: '#21e6c1'}} >
          <div className="menu-icon" onClick={handleShowNavbar}>
            Menu
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              
            <li  className='navv line'>
            <NavLink to="/home" className='navv' >Home</NavLink>
              </li>
              <hr />
              <li className='navv line'>
              <NavLink to="/about"className='navv' >About</NavLink>
              </li>
             
              <li className='navv line' >
              <NavLink to="/list" className='navv' >Clubs List</NavLink>
              </li>
              <li className='navv line'>
              <NavLink to="/login" className='navv' >Login</NavLink>
                </li> 
                <li className='navv line'>
              <NavLink to="/requests" className='navv' >My Requests</NavLink>
              </li>
                <li className='navv line'>
              <NavLink to="/contact" className='navv' >Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
      <div className="yellow"></div>
      </motion.div>
      </>
    )
  }
  
  export default Navbar