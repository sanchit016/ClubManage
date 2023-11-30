import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { contactAnimation } from '../../animation'
import { useScroll } from "../useScroll"
import img from '../../assets/logo.jpg'
import './Club.css'
import { getClubById } from '../../services/user';
export default function About({clubId}) {
  const [element, controls] = useScroll();
  const [clubData, setClubData] = useState(null);
  useEffect(() => {
    async function fetchClubData() {
      try {
        const response = await getClubById(clubId);
        setClubData(response.data);
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    }

    fetchClubData();
  }, [clubId]);
  if(!clubData){
    return null;
  }
  return (
    <div ref={element} >
      <motion.div
      variants={contactAnimation}
      animate={controls}
      transition={{ delay: 0.4, duration: 0.6, type: "tween" }}
      >
    <div className='club-abt-cont' >
      <div className="text">
      <h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>Know About Us</h1>
        <p style={{color: 'white'}} >{clubData.club.description}
        </p>
      </div>
      <div className="img-logo">
        <img className='img' src={clubData.club.logo} alt='' />
      </div>
    </div>
    </motion.div>
    </div>
  )
}
