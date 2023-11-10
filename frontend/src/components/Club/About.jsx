import React, {useState, useEffect} from 'react'
import img from '../../assets/logo.jpg'
import './Club.css'
import { getClubById } from '../../services/user';
export default function About({clubId}) {
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
    <div className='club-abt-cont' >
      <div className="text">
      <h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>Know About Us</h1>
        <p style={{color: 'white'}} >{clubData.club.description}
        </p>
      </div>
      <div className="img">
        <img src={img} alt='' />
      </div>
    </div>
  )
}
