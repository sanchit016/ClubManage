import React, { useEffect, useState } from "react";
import { useUser } from "../../userContext";
import { getClubById } from "../../services/user";
import TeacherSidebar from "./TeacherSidebar/TeacherSidebar";
import { motion } from "framer-motion";
export default function TeacherHome() {
  const { loggedId, setLoggedId } = useUser();
  const [teacher, setTeacher] = useState("");
  const [club, setClub ] = useState('')
  useEffect(() => {
    if (loggedId) {
      setTeacher(loggedId);
      
    }
  }, [loggedId]);
  return (
    <>
      <div className="d-flex" style={{ backgroundColor: "#071e3d" }}>
        <div
          style={{
            backgroundColor: "#0d2a51",
          }}
        >
          <TeacherSidebar />
        </div>
        <div
          style={{
            marginLeft: "7%",
            backgroundColor: "#071e3d",
            color: "white",
            width: "100%",
          }}
        >
          <section
            className=" mt-5 ml-5"
            style={{
              backgroundColor:"#071e3d",
              padding: "50px",
              marginLeft: "3%",
              marginRight: "2%",
            }}
          >
            <div
              className="container mt-5"
              style={{
                backgroundColor:"#0d2a51",
                color:"#21e6c1",
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
                  <div  >
                    <h2 className="mb-4">Teacher Details</h2>
                    <table className="table table-bordered ">
                      <tbody style={{color:"white"}} >
                        <tr>
                          <th>Name</th>
                          <td>{teacher.name}</td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td>{teacher.email}</td>
                        </tr>

                        
                        <tr>
                          <th>Assigned Club</th>
                          <td>
                            {teacher.assignedClub == "" ? (
                              <p>None</p>
                            ) : (
                              <p>{club}</p>
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
