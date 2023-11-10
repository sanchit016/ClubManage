import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
export default function AdminStudent() {
  const handleStudentDelete = () => {};
  const [studentsData, setStudentsData] = useState([]);
  let response;
  const load_data = async () => {
    console.log(`hello`);
    response = await axios.get("http://localhost:8080/api/admin/get-students", {
      withCredentials: true,
    });
    console.log(response);
    response = response.data;
    if (!response.success) {
      alert(response.message);
    } else {
      setStudentsData(response.data.students);
    }
  };
  const handleDelete = async (studentId) => {
    let deleteResponse = await axios.delete(
      `http://localhost:8080/api/admin/delete-student/${studentId}`,
      {
        withCredentials: true,
      }
    );
    console.log(deleteResponse);
  };
  useEffect(() => {
    load_data();
  });
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <nav
            class="navbar navbar-light bg-light d-flex justify-content-between p-2 "
            style={{ width: "78.6vw" }}
          >
            <div></div>
            <Link
              to="/admin/adminStudentAdd"
              className="btn btn-primary "
              style={{ color: "white" }}
            >
              Add Student
            </Link>
          </nav>
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
                      // animate={{ x: [-100, 0] }}
                      // transition={{ duration: 1 }}
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
                            <Link
                              to={`/admin/adminStudentView/${student._id}`}
                              className="btn btn-primary m-2"
                            >
                              View
                            </Link>
                          </motion.div>
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
                              to={`/admin/adminStudentEdit/${student._id}`}
                              className="btn btn-warning m-2"
                            >
                              Edit
                            </Link>
                          </motion.div>

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
                                handleDelete(student._id);
                              }}
                            >
                              Delete
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
