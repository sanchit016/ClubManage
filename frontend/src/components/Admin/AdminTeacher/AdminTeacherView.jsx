import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
export default function AdminTeacherView() {
  let slug = useParams();
  const id = slug.slug;
  const [teacher, setTeacher] = useState("");
  let response;
  const load_data = async () => {
    console.log("teacher view");
    response = await axios.get(
      `http://localhost:8080/api/admin/get-teacher/${id}`,
      { withCredentials: true }
    );
    response = response.data;
    console.log(response);
    if (!response.success) {
      alert(response.message);
    } else {
      setTeacher(response.data.teacher);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex bg-light">
        <div
          style={{ position: "sticky", height: "100%", width: "20%" }}
          className=" bg-light"
        >
          <Sidebar />
        </div>
        <div
          style={{
            backgroundColor: "#071e3d",
            width: "80%",
          }}
        >
          <section
            className=" mt-5 ml-5"
            style={{
              "background-color": "#eee",
              padding: "50px",
              borderRadius: "4%",
              marginLeft: "3%",
              marginRight: "2%",
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
              {teacher == "" ? (
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
                    <h2 className="mb-4">Teacher Details</h2>
                    <table className="table table-bordered ">
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <td>{teacher.name}</td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td>{teacher.email}</td>
                        </tr>

                        <tr>
                          <th>Contact</th>
                          <td>
                            {teacher.contact == "" ? (
                              <p>None</p>
                            ) : (
                              <p>{teacher.contact}</p>
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
      </div>
    </>
  );
}
