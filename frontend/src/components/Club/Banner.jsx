import React, {useState, useEffect} from 'react'
import './Club.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from "../useScroll"
import img from '../../assets/header.jpg'
import { getClubById } from '../../services/user';
export default function Banner({ clubId}) {
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
  }, [clubId]); // Include clubId in the dependency array to re-fetch data when clubId changes

  if (!clubData) {
    return null; // You can render a loading state or error message here
  }
  return (
    <div id="main" className="club-ban-cont" ref={element} >
      <motion.div className="banner"
      variants={homeAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
    <div className="p-5 text-center bg-image rounded-3" style={{
      backgroundImage: clubData.club.coverPhoto? `url(${clubData.club.coverPhoto})` : "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
      backgroundRepeat: 'none',
      backgroundSize: 'cover',
      height: '400px',
      
    }}>
      <div className="masks">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h4 className="mb-3">Welcome to the virtual world of</h4>
            <h1 className="mb-3">{clubData.club.name}</h1>  
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  )
}

