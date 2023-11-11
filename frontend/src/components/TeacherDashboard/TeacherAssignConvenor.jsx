import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import TeacherSidebar from "./TeacherSidebar/TeacherSidebar";
export default function TeacherAssignConvenor() {
  const handleStudentDelete = () => {};
  const [studentsData, setStudentsData] = useState([]);
  const [clubConvenor, setClubConvenor] = useState("");
  const [search, setSearch] = useState("");
  let response;
  const makeConvenor = async ({ studentId }) => {
    const convenorResponse = await axios.post(
      `http://localhost:8080/api/teacher/assign_convenor`,
      {
        studentId: studentId,
      },
      { withCredentials: true }
    );
  };
  const load_data = async () => {
    console.log(`hello`);
    response = await axios.get(
      "http://localhost:8080/api/teacher/get-students",
      {
        withCredentials: true,
      }
    );
    console.log(response);
    let response2 = await axios.get(
      `http://localhost:8080/api/teacher/get-convenor/${localStorage.getItem(
        "clubId"
      )}`,
      {
        withCredentials: true,
      }
    );
    response2 = response2.data;
    console.log(response2);
    response = response.data;
    if (!response.success) {
      alert(response.message);
    } else {
      setStudentsData(response.data.students);
    }
    if (!response2.success) {
      alert(response2.message);
    } else {
      setClubConvenor(response2.data.convenor);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex">
        <div>
          <TeacherSidebar />
        </div>
        <div>
          <nav
            class="navbar navbar-light bg-light d-flex justify-content-between p-2 "
            style={{ width: "78.6vw" }}
          >
            <div></div>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              style={{ width: "50%" }}
            />
          </nav>

          <div>
            <h2 style={{ borderBottom: "2px solid grey", padding: "2%" }}>
              Club Convenor
            </h2>
            {clubConvenor == "" ? <div>None</div> : <div>{clubConvenor}</div>}
          </div>
          <hr />
          <h2 style={{ borderBottom: "2px solid grey", padding: "2%" }}>
            Club Members
          </h2>
          <ul class="list-group mt-5">
            {studentsData.length > 0 &&
              studentsData
                .filter((student) =>
                  student.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((student) => {
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
                                className="btn btn-primary m-2"
                                onClick={() => {
                                  makeConvenor(student._id);
                                }}
                              >
                                Make Convenor
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
