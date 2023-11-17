import React, {useState, useEffect} from 'react'
import './Request.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from '../useScroll'
import { getStudentJoinRequests } from '../../services/student';
import { getClubById } from '../../services/user';
import Popup from './Popup';
export default function Request() {
    const [element, controls] = useScroll();
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getStudentJoinRequests();
          const updatedRequests = await Promise.all(
            data.data.requests.map(async (request) => {
              const clubInfo = await getClubById(request.clubId);
              return { ...request, 
                clubName: clubInfo.data.club.name, 
                assignedTeacher: clubInfo.data.club.assignedTeacher };
            })
          );
          setRequests(updatedRequests);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

    const handleIconClick = (request) => {
      setSelectedRequest(request);
      // Show your modal or other UI element here
    };

    const handlePopup= () => {
      setSelectedRequest(null);
    }
  return (
    <div ref={element} >
    <motion.div 
    variants={homeAnimation}
    animate={controls}
    transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
     >
        {/*<div className='features-head'  >
            <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>My Requests</h1>
            <p className="lead mb-0" style={{ color: 'white' }}>Keep a track on your requests</p>
  </div>*/}
        {requests.length > 0 ? 
        <>
        <div className=""  >
            <div className="d-flex justify-content-center row">
                <div className="col-md-12">
                    <div className="rounded">
                        <div className="table-responsive table-borderless">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Request #</th>
                                        <th>Club Name</th>
                                        <th>Status</th>
                                        <th>Teacher</th>
                                        <th>Requested on</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                      {requests.map((request, index) => (
                        <tr key={index} className="cell-1">

                          <td>{index+1}</td>
                          <td>{request.clubName}</td>
                          <td><span className="">{request.accepted}</span></td>
                          <td>{request.assignedTeacher}</td>
                          <td>{request.requestDate}</td>
                          <td onClick={() => handleIconClick(request)}><i className="fa fa-ellipsis-h text-black-50"></i></td>
                          
                        </tr>
                        
                      ))}
{selectedRequest  && (
        <Popup handlePopup={handlePopup} content={selectedRequest.description} />
      )}
                      
                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </> : <p className='text-center text-white' style={{marginTop:"10px", fontWeight: "500"}} >No requests ever made </p> }
    </motion.div>

    
    </div>
  )
}
