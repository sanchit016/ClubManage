import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
export default function ConvenorClubStudentView() {
  const handleStudentDelete = async (studentId) => {
    let deleteRequest = await axios.get(
      `http://localhost:8080/api/convenor/remove-clubMember/${studentId}`,
      {
        withCredentials: true,
      }
    );
  };

  const [studentsData, setStudentsData] = useState([]);

  let response;
  const load_data = async () => {
    // console.log(`hello`);
    // console.log(localStorage.getItem("clubId"));
    response = await axios.get(
      `http://localhost:8080/api/convenor/get-club-members/${localStorage.getItem(
        "clubId"
      )}`,
      {
        withCredentials: true,
      }
    );
    // console.log(`after`);
    // console.log(response);

    response = response.data.data.studentIds;

    setStudentsData(response);
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex bg-light" style={{ height: "84.5vh" }}>
        <div style={{ width: "20%", height: "100%" }} className="bg-light">
          <ConvenorSidebar />
        </div>
        <div
          style={{ width: "80%", backgroundColor: "white", padding: "2.5% " }}
        >
          <ul class="list-group mt-5">
            {studentsData.length > 0 &&
              studentsData.map((student) => {
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
                    >
                      <li class="list-group-item  d-flex justify-content-between animated bounceIn">
                        {student.name}
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
                            {" "}
                            <button
                              className="btn btn-danger m-2"
                              onClick={() => {
                                handleStudentDelete(student._id);
                              }}
                            >
                              Remove
                            </button>
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
    </>
  );
}
