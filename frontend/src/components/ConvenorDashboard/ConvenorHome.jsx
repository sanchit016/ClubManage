import React, { useEffect, useState } from "react";
import axios from "axios";
import ConvenorEventCard from "./ConvenorEventCard/ConvenorEventCard";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
import Profile from "../Profile/Profile";
import { getStudentDetails } from '../../services/student';
export default function ConvenorEvent() {
  const [eventsData, setEventsData] = useState([]);
  const [studentDetails, setStudentDetails] = useState();

  useEffect(() => {
    getStudentDetails()
      .then((data) => {
        console.log(data.data.student.name)
        setStudentDetails(data.data.student);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const currentDate = Date();

  const load_data = async () => {
    var response = "";
    response = await axios.get("http://localhost:8080/api/user/get-events", {
      withCredentials: true,
    });

    response = response.data;

    if (!response.success) {
      alert(response.message);
    } else {
      setEventsData(response.data.events);
    }
  };

  useEffect(() => {
    load_data();
  });
  return (
    <>
      <div className="d-flex" style={{ backgroundColor: "#071e3d" }}>
        <div
          style={{
            backgroundColor: "#0d2a51",
          }}
        >
          <ConvenorSidebar />
        </div>
        <div
          style={{
            marginLeft: "7%",
            backgroundColor: "#071e3d",
            color: "white",
            width: "100%",
          }}
        >

         <div className="stud-det" style={{marginTop:"100px"}} >
        <div className="card-profile" >
          <div className="card-body-profile" style={{ backgroundColor: '#278ea5' , color: 'white'}}>
            
                
                <div className="name-div">
                  <h4 className="mb-4" style={{fontWeight:'700'}}>{studentDetails && studentDetails.name.charAt(0).toUpperCase() + studentDetails.name.slice(1)}</h4>
                </div>
                <div className="row">
                  <div className="col-sm-4 icon-div">
                    <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-graduation-cap"></i></h6>
                  </div>
                  <div className="col-sm-8">
                    {studentDetails && studentDetails.branch}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-4 icon-div">
                    <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-id-badge"></i></h6>
                  </div>
                  <div className="col-sm-8">
                    {studentDetails && studentDetails.rollNo}
                  </div>
                </div>
            <hr />
            <div className="row">
              <div className="col-sm-4 icon-div">
                <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-envelope"></i></h6>
              </div>
              <div className="col-sm-8">
                {studentDetails && studentDetails.email}
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-4 icon-div">
                <h6 className="mb-0" style={{fontSize:'20px', fontWeight:'700'}}><i class="fa-solid fa-phone"></i></h6>
              </div>
              <div className="col-sm-8">
                {studentDetails && studentDetails.contact}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}
