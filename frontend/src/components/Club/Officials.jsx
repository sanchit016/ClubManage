import React, {useState, useEffect} from 'react'
import './Club.css'
import { getClubById } from '../../services/user';
function Officials({ clubId }) {
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
  if (!clubData) {
    return null; // You can render a loading state or error message here
  }
  return (
    <div className='off off-head'>
      <div className="container py-5 ">
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto ">
            <h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>Positions of Responsibility</h1>
            <p className="lead mb-0" style={{ color: 'white' }}>We Add a Dash of Fun to Everything We Do.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          {/* Team item 1 */}
          <div className="col-xl-6 col-sm-2 mb-2" >
            <div className="card rounded shadow-sm py-5 px-4" style={{ backgroundColor: '#278ea5', color: 'white' }}>
              
              <h5 className="mb-0">Name of Incharge</h5>
              <p className="small text-uppercase">Incharge</p>
              <i className="fa-solid fa-envelope"></i>
              <p>Email id here</p>
              <i className="fa-solid fa-phone"></i>
              <p>Phone number here</p>
              
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 mb-5">
            <div className="card rounded shadow-sm py-5 px-4" style={{ backgroundColor: '#278ea5', color: 'white' }}>
              
              <h5 className="mb-0">Name of Convener</h5>
              <p className="small text-uppercase">Convener</p>
              <i className="fa-solid fa-envelope"></i>
              <p>Email id here</p>
              <i className="fa-solid fa-phone"></i>
              <p>Phone number here</p>
              
            </div>
          </div>
          {/* End of Team item 1 */}
          {/* Repeat the above code for other team members */}
        </div>
      </div>
    </div>
  );
}

export default Officials;
