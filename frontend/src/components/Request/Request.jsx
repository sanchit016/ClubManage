import React, {useState, useEffect} from 'react'
import './Request.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from '../useScroll'
import { getStudentJoinRequests } from '../../services/student';
export default function Request() {
    const [element, controls] = useScroll();
    const [requests, setRequests] = useState([]);

  useEffect(() => {
    getStudentJoinRequests()
      .then((data) => {
        setRequests(data.data.requests);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div  style={{ marginTop: '100px' }} ref={element} >
    <motion.div 
    variants={homeAnimation}
    animate={controls}
    transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
     >
        <div className='features-head'  >
            <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>My Requests</h1>
            <p className="lead mb-0" style={{ color: 'white' }}>Keep a track on your requests</p>
        </div>
        <div className="container mt-5">
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
                                        <th>Convenor</th>
                                        <th>Requested on</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                      {requests.map((request, index) => (
                        <tr key={index} className="cell-1">
                          <td>{request.requestNumber}</td>
                          <td>{request.clubName}</td>
                          <td><span className="">{request.status}</span></td>
                          <td>{request.convenor}</td>
                          <td>{request.requestedOn}</td>
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
    </motion.div>
    </div>
  )
}
