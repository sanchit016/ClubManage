import React from 'react'
import './Request.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from '../useScroll'

export default function Request() {
    const [element, controls] = useScroll();
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
                                    <tr className="cell-1">
                                        
                                        <td>#SO-13487</td>
                                        <td>Gasper Antunes</td>
                                        <td><span className="">Accepted</span></td>
                                        <td>$2674.00</td>
                                        <td>Today</td>
                                        <td><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                    </tr>
                                    <tr className="cell-1">
                                        
                                        <td>#SO-13453</td>
                                        <td>Aartsen van</td>
                                        <td><span className="">Under Review</span></td>
                                        <td>$3454.00</td>
                                        <td>Yesterday</td>
                                        <td><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                    </tr>
                                    <tr className="cell-1">
                                        
                                        <td>#SO-13498</td>
                                        <td>Trashes Habard</td>
                                        <td><span className="">Rejected</span></td>
                                        <td>$6274.00</td>
                                        <td>May 12,2020</td>
                                        <td><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                    </tr>
                                    <tr className="cell-1">
                                        
                                        <td>#SO-16499</td>
                                        <td>Samban Hubart</td>
                                        <td><span className="">Accepted</span></td>
                                        <td>$6375.00</td>
                                        <td>May 11,2020</td>
                                        <td><i className="fa fa-ellipsis-h text-black-50"></i></td>
                                    </tr>
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
