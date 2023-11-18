import React, { useEffect, useState } from "react";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
export default function ConvenorRequests() {
  const [pendingRequestNameData, setPendingRequestNameData] = useState([]);
  const [pastRequestNameData, setPastRequestNameData] = useState([]);

  const load_data = async () => {
    const clubId = localStorage.getItem("clubId");
    console.log(clubId);
    const pendingResponse = await axios.get(
      `http://localhost:8080/api/convenor/get-pending-requests/${clubId}`,
      { withCredentials: true }
    );
    console.log(`after get pending requests`);
    const pastResponse = await axios.get(
      `http://localhost:8080/api/convenor/get-past-requests/${clubId}`,
      { withCredentials: true }
    );

    const pendingRequests = pendingResponse.data.data.pendingRequests;
    const pastRequests = pastResponse.data.data.pastRequests;
    console.log(`before`);
    console.log(pendingRequests);
    console.log(`after`);
    const pendingRequestsWithDetails = await Promise.all(
      pendingRequests.map(async (pendingRequest) => {
        // console.log(pendingRequest);
        const response = await axios.get(
          `http://localhost:8080/api/convenor/get-student/${pendingRequest}`,
          { withCredentials: true }
        );
        return {
          ...pendingRequest,
          studentDetails: response.data.data.student.name,
        };
      })
    );

    setPendingRequestNameData(pendingRequestsWithDetails);
    setPastRequestNameData(pastRequests);

    console.log(pendingRequests);
    console.log(pastRequests);
  };

  useEffect(() => {
    load_data();
  }, []);

  return (
    <>
      <div className="d-flex bg-light">
        <div style={{ width: "20%", height: "100%" }} className="bg-light">
          <ConvenorSidebar />
        </div>
        {/* <div
          style={{ marginLeft: "20%", width: "80%", backgroundColor: "white" }}
        >
          <nav
            class="navbar navbar-light bg-light d-flex justify-content-between p-2 "
            style={{ width: "100%" }}
          ></nav>
          <div className="d-flex">
            <ul class="list-group mt-5">
              {pendingRequestData.length > 0 &&
                pendingRequestData.map((pendingRequest) => {
                  return (
                    <>
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
                        <li class="list-group-item  d-flex justify-content-between animated bounceIn">
                          {pendingRequest.name}
                          <div className="d-flex">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <Link
                                to={`/convenor/convenorRequestView/${pendingRequestData._id}`}
                                className="btn btn-primary m-2"
                              >
                                View
                              </Link>
                            </motion.div>
                          </div>
                        </li>
                      </motion.div>
                    </>
                  );
                })}
            </ul>
            <div>
              <ul class="list-group mt-5">
                {pendingRequestData.length > 0 &&
                  pendingRequestData.map((pendingRequest) => {
                    return (
                      <>
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
                          <li class="list-group-item  d-flex justify-content-between animated bounceIn">
                            {pendingRequest.name}
                            <div className="d-flex">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 17,
                                }}
                              >
                                <Link
                                  to={`/convenor/convenorRequestView/${pastRequestData._id}`}
                                  className="btn btn-primary m-2"
                                >
                                  View
                                </Link>
                              </motion.div>
                            </div>
                          </li>
                        </motion.div>
                      </>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
