import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherEventCard from "./TeacherEventCard/TeacherEventCard";
import TeacherSidebar from "./TeacherSidebar/TeacherSidebar";
import { motion } from "framer-motion";
export default function TeacherEvent() {
  const [eventsData, setEventsData] = useState([]);
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
  }, []);
  return (
    <>
      <div className="d-flex" style={{ backgroundColor: "#071e3d" }}>
        <div
          style={{
            backgroundColor: "#0d2a51",
          }}
        >
          <TeacherSidebar />
        </div>
        <div
          style={{
            marginLeft: "7%",
            backgroundColor: "#071e3d",
            color: "white",
            width: "100%",
          }}
        >
          <div className="row justify-content-center text-center mb-3 mt-5">
            <div className="col-lg-12 col-xl-12">
              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Past Events</h1>
            </div>
          </div>
          <div className="container mt-3 ml-5">
            <div className="row ">
              {eventsData?.map((event) => {
                return currentDate >= event.date ? (
                  <div
                    className="col-12  col-md- col-lg-4"
                    style={{ margin: "4%" }}
                    
                  >
                    {" "}
                        <TeacherEventCard event={event} occurence={"present"} />
                      
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
          <hr />
          <h2
            className="m-3"
            style={{ borderBottom: "2px solid grey", padding: "2%" }}
          >
            Past Events
          </h2>
          <div className="container mt-3 ml-3">
            <div className="row">
              {eventsData?.map((event) => {
                return;
                currentDate < event.date ? (
                  <div
                    className="col-12  col-md- col-lg-3"
                    style={{ margin: "4%" }}
                  >
                    {" "}
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      // animate={{ x: [-100, 0] }}
                      // transition={{ duration: 1 }}
                    >
                      <div className="card ">
                        <TeacherEventCard event={event} occurence={"past"} />
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
