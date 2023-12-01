import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll';
import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navAnimation } from '../../animation'
import './Navbar.css'
import LoadingBar from 'react-top-loading-bar'
import { useUser } from '../../userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [progress, setProgress] = useState(0);
    const { isLoggedIn, setLoggedIn, loggedId, setLoggedId } = useUser();
    const navigate = useNavigate()
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    const handleLogin = ( )=>{
      setLoggedIn(!isLoggedIn);
      navigate('/login')
    }

    const handleLogout = () => {
      toast.success('Logged Out', {
        closeOnClick:true,
        theme:'dark'
      })
      localStorage.clear()
      setLoggedId(null)
      setLoggedIn(!isLoggedIn);
      navigate('/home');
    };

    useEffect(() => {
      const user = localStorage.getItem('User');
      
      if(user!==''){
        setLoggedId(loggedId)
        setLoggedIn(true)
      }
    }, []);
  
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
              <NavLink to="/list" className='navv' >Explore Clubs</NavLink>
              </li>
              {isLoggedIn=='none' && loggedId==null ?
              <>
                <li className="navv line">
                  <NavLink to="/login" className="navv">Login</NavLink>
                </li>
              </> : 
              <>
                <li className='navv line'>
                  <NavLink to='/login' className="navv" onClick={handleLogout}>Logout</NavLink>
                </li>
                {isLoggedIn === 'student' && loggedId.isConvenor == true &&
                <li className='navv line'>
                  <NavLink to="/convenor/convenorHome" className='navv' >Dashboard</NavLink>
                </li>}
                {isLoggedIn==='student' &&
                <li className='navv line'>
                  <NavLink to="/profile" className='navv' >Profile</NavLink>
                </li>}
              </>}
              <li className='navv line'>
              <NavLink to="/contact" className='navv' >Contact</NavLink>
              </li>
              {isLoggedIn=='admin' ?
              <>
                <li className='navv line'>
                <NavLink to='/admin/adminHome' className='navv' >DashBoard</NavLink> 
                </li>
              </> : isLoggedIn=='teacher' ? 
              <>
              <li className='navv line'>
              <NavLink to='/teacher/teacherHome' className='navv' >DashBoard</NavLink> 
              </li>
            </> : ''  }
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