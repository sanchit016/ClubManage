import React, { useEffect, useState } from "react";
import TeacherSidebar from './TeacherSidebar/TeacherSidebar'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
export default function TeacherRequests() {
  const [pendingRequestsNameData, setPendingRequestNameData] = useState([]);
  const [pastRequestsNameData, setPastRequestNameData] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [show2, setShow2] = useState(false);

  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const clubId = localStorage.getItem("clubId");
  const handleAcceptRequest = async (requestId) => {
    console.log(requestId);
    const acceptResponse = await axios.post(
      "http://localhost:8080/api/teacher/approve-request",
      { requestId: requestId, clubId: clubId },
      { withCredentials: true }
    );
  };

  const handleRejectRequest = async (requestId) => {
    console.log(requestId);
    const acceptResponse = await axios.post(
      "http://localhost:8080/api/teacher/reject-request",
      { requestId: requestId, clubId: clubId },
      { withCredentials: true }
    );
  };

  const load_data = async () => {
    const clubId = localStorage.getItem("clubId");

    const pendingResponse = await axios.get(
      `http://localhost:8080/api/teacher/get-pending-requests/${clubId}`,
      { withCredentials: true }
    );
    

    const pastResponse = await axios.get(
      `http://localhost:8080/api/teacher/get-past-requests/${clubId}`,
      { withCredentials: true }
    );

    let pendingRequests = pendingResponse.data.data.pendingRequests;
    console.log(pendingRequests)
    let pastRequests = pastResponse.data.data.pastRequests;

    pendingRequests = await Promise.all(
      pendingRequests.map(async (pendingRequest) => {
        let response = await axios.get(
         `http://localhost:8080/api/teacher/get-request-details/${pendingRequest}`,
          { withCredentials: true }
        );
        response = response.data.data.request;
        return {
          response,
        };
      })
    );

    pastRequests = await Promise.all(
      pastRequests.map(async (pastRequest) => {
        let response = await axios.get(
          `http://localhost:8080/api/teacher/get-request-details/${pastRequest}`,
          { withCredentials: true }
        );

        response = response.data.data.request;
        return {
          response,
        };
      })
    );

    const pendingRequestsWithDetails = await Promise.all(
      pendingRequests.map(async (pendingRequest) => {
        const studentId = pendingRequest.response.studentId;
        const response = await axios.get(
          `http://localhost:8080/api/teacher/get-student/${studentId}`,
          { withCredentials: true }
        );
        return {
          ...pendingRequest,
          studentName: response.data.data.student.name,
        };
      })
    );
    const pastRequestsWithDetails = await Promise.all(
      pastRequests.map(async (pastRequest) => {
        const studentId = pastRequest.response.studentId;
        const response = await axios.get(
          `http://localhost:8080/api/teacher/get-student/${studentId}`,
          { withCredentials: true }
        );
        // console.log(response);
        return {
          ...pastRequest,
          studentName: response.data.data.student.name,
        };
      })
    );

    setPendingRequestNameData(pendingRequestsWithDetails);
    setPastRequestNameData(pastRequestsWithDetails);
  };

  useEffect(() => {
    load_data();
  });

  return (
    <>
      <div className="d-flex">
        <div style={{ width: "20%"}}>
          <TeacherSidebar />
        </div>
        <div style={{ width: "80%", backgroundColor: "#071e3d" }}>
          <nav
            className="navbar d-flex justify-content-between p-2 "
            style={{ width: "100%" }}
          ></nav>
          <div
            className="d-flex"
            style={{
              justifyContent: "space-between",
              paddingLeft: "6%",
              paddingRight: "6%",
              padding: "4%",
            }}
          >
            <div style={{ width: "48%", borderRight: "2px solid grey" }}>
            <div className='features-head'  ><h1 className="display-6" style={{ color: '#21e6c1', fontWeight:'400' }}>Pending Requests</h1>
        </div>
              <ul className="list-group mt-5" style={{ marginRight: "3%" }}>
                {pendingRequestsNameData.length > 0 &&
                  pendingRequestsNameData.map((pendingRequest) => {
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
                          style={{backgroundColor:"#0d2a51", color:"white", fontWeight:"400", fontSize:"20px"}}
                        >
                          <li className="list-group-item  d-flex justify-content-between  mt-1"
                        style={{backgroundColor:"#0d2a51", color:"white", fontWeight:"400", fontSize:"20px"}}>
                            <p> {pendingRequest.studentName}</p>

                            <div
                              className="d-flex"
                              style={{ alignItems: "center" }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 17,
                                }}
                              >

                                <div>
                                  {/*<Button
                                    variant="primary"
                                    onClick={handleShow}
                                    style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"100px", color:"black"}}
                                  >
                                    View Details
                            </Button>*/}

                                  <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Student Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      {/* Your pop-up content goes here */}
                                      <table className="table table-bordered ">
                                        <tbody>
                                          <tr>
                                            <th>Name</th>
                                            <td>
                                              {console.log(pendingRequest)}
                                              {pendingRequest.studentName}
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Branch</th>
                                            <td>
                                              {pendingRequest.response.branch}
                                            </td>
                                          </tr>

                                          <tr>
                                            <th>Year</th>
                                            <td>
                                              <p>
                                                {pendingRequest.response.year}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Description</th>
                                            <td>
                                              <p>
                                                {
                                                  pendingRequest.response
                                                    .description
                                                }
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        variant="secondary"
                                        onClick={handleClose2}
                                      >
                                        Close
                                      </Button>
                                      {/* You can add more buttons if needed */}
                                    </Modal.Footer>
                                  </Modal>
                                </div>
                              </motion.div>
                              <div>
                                <motion.div
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                >
                                  <button
                                    className="btn btn-success m-2"
                                    style={{
                                      fontWeight: "500",
                                      width: "100px",
                                    }}
                                    onClick={(e) => {
                                      handleAcceptRequest(
                                        pendingRequest.response._id
                                      );
                                    }}
                                  >
                                    Accept
                                  </button>
                                </motion.div>
                              </div>

                              <div>
                                <motion.div
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                >
                                  <button
                                    className="btn btn-danger m-2"
                                    style={{
                                      fontWeight: "500",
                                      width: "100px",
                                    }}
                                    onClick={(e) => {
                                      handleRejectRequest(
                                        pendingRequest.response._id
                                      );
                                    }}
                                  >
                                    Delete
                                  </button>
                                </motion.div>
                              </div>
                            </div>
                          </li>
                        </motion.div>
                      </>
                    );
                  })}
              </ul>
            </div>
            <div style={{ width: "45%" , backgroundColor: "#071e3d" }}>
            <div className='features-head'  ><h1 className="display-6" style={{ color: '#21e6c1', fontWeight:'400' }}>Past Requests</h1>
        </div>
              <ul class="list-group mt-5">
                {pastRequestsNameData.length == 0 ? (
                  <p>None</p>
                ) : (
                  <>
                    {" "}
                    {pastRequestsNameData.length > 0 &&
                      pastRequestsNameData.map((pastRequest) => {
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
                              style={{backgroundColor:"#0d2a51", color:"white", fontWeight:"400", fontSize:"20px"}}
                            >
                              <li class="list-group-item  d-flex justify-content-between animated bounceIn mt-1" style={{backgroundColor:"#0d2a51", color:"white", fontWeight:"400", fontSize:"20px"}}>
                                {pastRequest.studentName}
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
                                    <div>
                                      <Button
                                        variant="primary"
                                        onClick={handleShow}
                                        style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"100px", color:"black"}}
                                        
                                      >
                                        View Details
                                      </Button>

                                      <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                          <Modal.Title>
                                            Student Details
                                          </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                          {/* Your pop-up content goes here */}
                                          <table className="table table-bordered ">
                                            <tbody>
                                              <tr>
                                                <th>Name</th>
                                                <td>
                                                  {pastRequest.studentName}
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Branch</th>
                                                <td>
                                                  {pastRequest.response.branch}
                                                </td>
                                              </tr>

                                              <tr>
                                                <th>Year</th>
                                                <td>
                                                  <p>
                                                    {pastRequest.response.year}
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <th>Description</th>
                                                <td>
                                                  <p>
                                                    {
                                                      pastRequest.response
                                                        .description
                                                    }
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <Button
                                            variant="secondary"
                                            onClick={handleClose}
                                          >
                                            Close
                                          </Button>
                                          {/* You can add more buttons if needed */}
                                        </Modal.Footer>
                                      </Modal>
                                    </div>
                                  </motion.div>
                                </div>
                              </li>
                            </motion.div>
                          </>
                        );
                      })}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}