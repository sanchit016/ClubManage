import { useState } from 'react'
import {Link} from 'react-scroll';
import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navAnimation } from '../../animation'
import './Navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
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
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
           
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            Menu
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              
            <li  className='navv'>
              Logout
              </li>
              <li  >
               Saved
              </li>
              <li >Login</li> 
              
              <li>
              <NavLink to="/" className='navv' >Home</NavLink>
              </li>
              <li>
                
              <NavLink to="/about"className='navv' >About</NavLink>
              </li>
              <li>
              <NavLink to="/contact" className='navv' >Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </motion.div>
      </>
    )
  }
  
  export default Navbar