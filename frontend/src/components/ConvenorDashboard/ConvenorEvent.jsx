import React, { useEffect, useState } from "react";
import axios from "axios";
import ConvenorEventCard from "./ConvenorEventCard/ConvenorEventCard";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
export default function ConvenorEvent() {
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
                        <ConvenorEventCard event={event} occurence={"present"} />
                      
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
