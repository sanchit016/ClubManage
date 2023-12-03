import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminStudent() {
  const handleStudentDelete = () => {};
  const [studentsData, setStudentsData] = useState([]);
  let response;
  const load_data = async () => {
    response = await axios.get("http://localhost:8080/api/admin/get-students", {
      withCredentials: true,
    });
    response = response.data;
    if (!response.success) {
      toast.error(response.message, {
        closeOnClick:true,
        theme:'dark'
      })
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
    toast.warning('Student Deleted', {
      closeOnClick:true,
      theme:'dark'
    })
  };
  useEffect(() => {
    load_data();
  });
  return (
    <>
      <div className="d-flex bg-light">
        <div
          className="bg-light"
          style={{
            
            width: "20%",
          }}
        >
          <Sidebar />
        </div>
        <div
          style={{
            backgroundColor: "#071e3d",
            width: "80%",
          }}
        >
          <div></div>
          <nav
            class="navbar  d-flex justify-content-between p-2 "
            style={{ width: "100%", height: "65px" , backgroundColor: "#071e3d"}}
          >
            <div></div>
            <Link
              to="/admin/adminStudentAdd"
              className="btn btn-primary "
              style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"150px", marginRight: "2%" , color:"black"}}
            >
              Add Student
            </Link>
          </nav>
          <ul
            class="list-group mt-5"
            style={{ paddingLeft: "2%", paddingRight: "2%" }}
          >
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
                      <li class="list-group-item  d-flex justify-content-between animated bounceIn"
                      style={{backgroundColor:"#0d2a51", color:"white", fontWeight:"400", fontSize:"20px"}}
                      >
                        {student.name}
                        <div className="d-flex">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
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
                              style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"100px", color:"black"}}
                            >
                              View
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
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
                              style={{fontWeight:"500", width:"100px"}}
                            >
                              Edit
                            </Link>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
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
                              style={{fontWeight:"500", width:"100px"}}
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
