import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { contactAnimation } from '../../animation'
import { useScroll } from '../useScroll'
import Request from './Request';
import Membership from './Membership';
import { getStudentDetails } from '../../services/student';
import './Profile.css'
export default function Profile() {
    const [element, controls] = useScroll();
    const [studentDetails, setStudentDetails] = useState();

  useEffect(() => {
    // Fetch student details when component mounts
    getStudentDetails()
      .then((data) => {
        console.log(data.data.student.name)
        setStudentDetails(data.data.student);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
    
  return (
    <div  style={{ marginTop: '100px' }} ref={element} >
    <motion.div 
    variants={contactAnimation}
    animate={controls}
    transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
     >
    <div className="container">
    <div className="main-body">
    <div className='features-head'  >
            <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>My Profile</h1>
            <p className="lead mb-5" style={{ color: 'white' }}></p>
        </div>
          <div className="row gutters-sm"  >
            <div className="col-md-4 mb-3">
              <div className="card-profile" >
                <div className="card-body-profile" style={{ backgroundColor: '#278ea5' , color: '#21e6c1'}}>
                  <div className="d-flex flex-column align-items-center text-center text-white">
                    
                    <div className="mt-3 text-white">
                      <h4>{studentDetails && studentDetails.name}</h4>
                      <p className="mb-1">{studentDetails && studentDetails.branch} </p>
                      <p className="font-size-sm">{studentDetails && studentDetails.rollNo}</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-8" >
              <div className="card mb-3" style={{ backgroundColor: '#278ea5' , color: 'white'}}>
                <div className="card-body-profile" >
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"  style={{fontSize:'20px', fontWeight:'700'}} >Name of student</h6>
                    </div>
                    <div className="col-sm-7">
                      {studentDetails && studentDetails.name}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}>Email</h6>
                    </div>
                    <div className="col-sm-7">
                    {studentDetails && studentDetails.email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}>Phone</h6>
                    </div>
                    <div className="col-sm-7">
                      {studentDetails && studentDetails.contact}
                    </div>
                  </div>
                  
                  <hr/>
                  {/*<div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
  </div>*/}
                </div>
              </div>

                      
                    



            </div>
          </div>

        </div>
    </div>
    <Membership studentDetails={studentDetails} />
    <Request />
    </motion.div>
    </div>
  )
}

