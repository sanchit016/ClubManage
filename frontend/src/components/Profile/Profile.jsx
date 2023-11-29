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
      <div className='features-head'  >
        <h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>My Profile</h1>
        <p className="lead mb-0" style={{ color: 'white' }}>Keep a track on your requests and the clubs you follow</p>
      </div>
    <div className="profile-cont">
      <div className="stud-det">
        <div className="card-profile" >
          <div className="card-body-profile" style={{ backgroundColor: '#278ea5' , color: 'white'}}>
            
                
                <div className="name-div">
                  <h4 className="mb-4" style={{fontWeight:'700'}}>{studentDetails && studentDetails.name.charAt(0).toUpperCase() + studentDetails.name.slice(1)}</h4>
                </div>
                <div className="row">
                  <div className="col-sm-4 icon-div">
                    <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-graduation-cap"></i></h6>
                  </div>
                  <div className="col-sm-6">
                    {studentDetails && studentDetails.branch}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-4 icon-div">
                    <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-id-badge"></i></h6>
                  </div>
                  <div className="col-sm-6">
                    {studentDetails && studentDetails.rollNo}
                  </div>
                </div>
            <hr />
            <div className="row">
              <div className="col-sm-4 icon-div">
                <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-envelope"></i></h6>
              </div>
              <div className="col-sm-6">
                {studentDetails && studentDetails.email}
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-4 icon-div">
                <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-phone"></i></h6>
              </div>
              <div className="col-sm-6">
                {studentDetails && studentDetails.contact}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stud-det2">
        <div className="req-cont " style={{backgroundColor:'#1f4287'}}>
          <div id="accordion">
            <div class="card-prof">
              <div class="profile-card-header" id="headingOne">
                <h5 class="mb-0">
                <div className='req-head'  >
                <h2 class="reqs-coll" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    My Requests
                  </h2>
            <p className="lead mb-0" style={{ color: 'white' }}>Keep a track on your requests</p>
  </div>
                  
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body" style={{backgroundColor:'#071e3d'}}>
                  <Request />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="req-cont">
        <div id="accordion">
            <div class="card-prof">
              <div class="profile-card-header" id="headingTwo">
                <h5 class="mb-0">
                <div className='req-head'  >
                <h2 class="reqs-coll" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    My Clubs
                  </h2>
            <p className="lead mb-0" style={{ color: 'white' }}>See clubs that you are a part of</p>
            
  </div>
                </h5>
              </div>
              <div id="collapseTwo" class="" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body" style={{backgroundColor:'#071e3d'}}>
                <Membership studentDetails={studentDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </motion.div>
    </div>
  )
}

