import React, { useState, useEffect, useParams } from "react";
import { motion } from "framer-motion";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function ConvenorRequestView() {
  const location = useLocation();
  const studentData = location.state ? location.state.data : null;
  // console.log(studentData);
  console.log(`befor`);
  console.log(location.state);
  // const load_data = async () => {
  //   console.log("Applicant  view");
  //   response = await axios.get(
  //     `http://localhost:8080/api/admin/get-teacher/${id}`,
  //     { withCredentials: true }
  //   );
  //   response = response.data;
  //   console.log(response);
  //   if (!response.success) {
  //     alert(response.message);
  //   } else {
  //     // setTeacher(response.data.);
  //   }
  // };

  // useEffect(() => {
  //   load_data();
  // }, []);
  return (
    <>
      {/* <div className="d-flex bg-light">
        <div style={{ position: "fixed", height: "75%" }} className=" bg-light">
          <ConvenorSidebar />
        </div>
        <div style={{ width: "80%", padding: "10%", backgroundColor: "white" }}>
          <section
            className=" mt-5 ml-5"
            style={{
              "background-color": "#eee",
              padding: "50px",
              borderRadius: "3%",
              marginLeft: "5%",
            }}
          >
            <div
              className="container mt-5"
              style={{
                backgroundColor: "white",
                borderRadius: "2%",
                padding: "30px",
              }}
            >
              {studentData == null ? (
                <p>Loading...</p>
              ) : (
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div>
                    <h2 className="mb-4">Applicant Details</h2>
                    <table className="table table-bordered ">
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <td>{studentData.studentName}</td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td>{student.responseemail}</td>
                        </tr>

                        <tr>
                          <th>Contact</th>
                          <td>
                            {student.contact == "" ? (
                              <p>None</p>
                            ) : (
                              <p>{student.contact}</p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th>Assigned Club</th>
                          <td>
                            {teacher.assignedClub == "" ? (
                              <p>None</p>
                            ) : (
                              <p>{teacher.assignedClub}</p>
                            )}
                          </td>
                        </tr> 
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </div> */}
    </>
  );
}
