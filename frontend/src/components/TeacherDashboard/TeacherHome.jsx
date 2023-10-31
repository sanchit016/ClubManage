import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherEventCard from "./TeacherEventCard/TeacherEventCard";
import TeacherSidebar from "./TeacherSidebar/TeacherSidebar";
import { motion } from "framer-motion";
export default function TeacherHome() {
  const [eventsData, setEventsData] = useState([]);
  const currentDate = Date();
  console.log(currentDate);
  const load_data = async () => {
    var response = "";
    response = await axios.get("http://localhost:8080/api/teacher/get-events");

    response = response.data;
    console.log(response.data);

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
      <div className="d-flex">
        <div style={{ position: "fixed", height: "75%" }} className=" bg-light">
          <TeacherSidebar />
        </div>
        <div>
          <h2 className="m-3">Upcoming Events</h2>
          <div className="container mt-3 ml-3">
            <div className="row">
              {eventsData?.map((event) => {
                return currentDate >= event.date ? (
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
                        <TeacherEventCard event={event} occurence={"present"} />
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
          <hr />
          <h2 className="m-3">Past Events</h2>
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