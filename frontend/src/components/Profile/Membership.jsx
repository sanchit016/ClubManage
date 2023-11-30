import React, {useState, useEffect} from 'react'
import './Request.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from '../useScroll'
import { getClubById } from '../../services/user';
import Club from '../../pages/Club';

export default function Membership({studentDetails}) {
    const [element, controls] = useScroll();
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Assuming currMembership is an array in the studentDetails object
          const clubDetails = await Promise.all(
            
            studentDetails.currMembership.map(async (membership) => {
              const club = await getClubById(membership);
              return {
                clubName: club.data.club.name,
                assignedTeacher: club.data.club.assignedTeacher,
              };
            })
          );
    
          setClubs(clubDetails);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, [studentDetails]);
  return (
    <div ref={element} >
    <motion.div 
    variants={homeAnimation}
    animate={controls}
    transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
     >
        {/*<div className='features-head'  >
            <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>My Clubs</h1>
            <p className="lead mb-0" style={{ color: 'white' }}>See Clubs you are a part of</p>
  </div>*/}
        {
         clubs.length > 0 ? 
        <>
        <div className="">
            <div className="d-flex justify-content-center row">
                <div className="col-md-12">
                    <div className="rounded">
                        <div className="table-responsive table-borderless">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Club #</th>
                                        <th>Club Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                      {clubs.map((club, index) => (
                        
                        <tr key={index} className="cell-1">

                          <td>{index+1}</td>
                          <td>{club.clubName}</td>
                          <td><i className="fa fa-ellipsis-h text-black-50"></i></td>
                          
                        </tr>
                        
                      ))}
                      
                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </> : <p className='text-center text-white' style={{marginTop:"10px", fontWeight: "500"}} >Not a part of any club</p>}
    </motion.div>

    
    </div>
  )
}
