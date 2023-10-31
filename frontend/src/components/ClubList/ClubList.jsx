import React, {useState, useEffect} from 'react'
import './ClubList.css'
import { Link } from 'react-router-dom';
import img from '../../assets/header.jpg'
import { getAllClubs } from '../../services/user';

export default function ClubList() {
  const [clubs, setClubs] = useState([]); 
  useEffect(() => {
    async function fetchClubs() {
      try {
        const response = await getAllClubs();
        console.log(response)
        setClubs(response.data.clubs);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    }
    
    fetchClubs(); 
  }, []);
  return (
    <>
    <div className='club-wrapper' style={{ marginTop: '150px' }}  >
    <div className="row justify-content-center text-center mb-3">
			<div className="col-lg-8 col-xl-7">
				<h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Clubs at UIET</h1>
				<p className="lead mb-5" style={{ color: 'white' }}>Clubs are a great way to get the most out of your college experience.</p>
			</div>
		</div>
    <div className="list-cont row md-3">
  {clubs.map((club, index) => (
    // Check if it's the start of a new row (every second club)
    (index % 2 === 0) && <div className="row">
      {clubs.slice(index, index + 2).map((club) => (
        <div key={club._id} className="col-md-6">
          <div className="club-list-container py-3">
            <div className="box-item">
              <div className="flip-box">
                <div className="flip-box-front text-center" style={{ backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')" }}>
                  <div className="inner color-white">
                    <h3 className="flip-box-header">{club.name}</h3>
                    <p>Incharge: {club.assignedTeacher}</p>
                    <p>Convener: {club.assignedConvener}</p>
                    <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
                  </div>
                </div>
                <div className="flip-box-back text-center" style={{ backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')" }}>
                  <div className="inner color-white">
                    <h3 className="flip-box-header">{club.title}</h3>
                    <p>{club.description.substring(0,90)}................</p>
                    <button className="flip-box-button">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

    </div>
    </>
  )
}
