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
    <div className='club-wrapper'>
      <div className="title h1 text-center list-head">Our Clubs</div>
      {clubs.map((club) => (
        <div key={club._id} className="container py-3">
          <div className="card-club">
            <div className="row">
              <div className="col-md-7 px-3">
                <div className="card-block px-6">
                  <h4 className="card-title">{club.name}</h4>
                  <p className="card-text">{club.description}</p>
                  <p className="card-text">Incharge Id: {club.assignedTeacher}</p>
                  <Link to={`/club`} className="mt-auto btn list-btn">Read More</Link>
                </div>
              </div>
              <div className="col-md-2 list-img-box">
                <img className='list-img' src={img} alt={`Club ${club.name}`} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
