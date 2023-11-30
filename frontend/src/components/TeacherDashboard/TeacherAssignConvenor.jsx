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
      `http://localhost:8080/api/teacher/get-club-members/${localStorage.getItem(
        "clubId"
      )}`,
      {
        withCredentials: true,
      }
    );
    response = response.data.data;
    // console.log(response);
    // let response2 = await axios.get(
    //   `http://localhost:8080/api/teacher/get-convenor/${localStorage.getItem(
    //     "clubId"
    //   )}`,
    //   {
    //     withCredentials: true,
    //   }
    // );
    // response2 = response2.data;
    // console.log(response2);

    // console.log(response);
    // response = response.data;
    // if (!response.success) {
    //   alert(response.message);
    // } else {
    //   console.log(response.data);
    //   setStudentsData(response.data.students);
    // }
    console.log(response);
    response = response.studentIds;
    response = await Promise.all(
      response.map(async (club) => {
        if (club.assignedTeacher != null) {
          console.log(club.assignedTeacher);
          const getHead = await axios.get(
            `http://localhost:8080/api/admin/get-teacher/${club.assignedTeacher}`,
            { withCredentials: true }
          );
          return { ...club, assignedTeacher: getHead.data.data.teacher.name };
        } else {
          return { ...club };
        }
      })
    );
    console.log(response);
    setStudentsData(response);

    // if (!response2.success) {
    //   alert(response2.message);
    // } else {
    //   setClubConvenor(response2.data.convenor);
    // }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex">
        <div style={{ backgroundColor: "#0d2a51" }}>
          <TeacherSidebar />
        </div>
        <div>
          <nav
            class="navbar d-flex p-2 "
            style={{ width: "100vw", marginTop:"50px" }}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              style={{ width: "50%" , backgroundColor:"#0d2a51", outline:'none'}}
            />
          </nav>

          <div
          style={{
            backgroundColor: "#071e3d",
            color: "white",
            width: "100%",
          }}
        >
          <div className="row text-center mb-3 mt-5">
            <div className="col-lg-10 col-xl-10 col-md-10">
              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Club Convenor</h1>
            </div>
          </div>
         
            {clubConvenor == "" ?  <p className='text-white p-3' style={{marginTop:"10px", fontWeight: "500"}}> Not assigned </p>  : <p className='text-white p-3' style={{marginTop:"10px", fontWeight: "500"}}> {clubConvenor}</p>}
          </div>
          <hr />
          <div className="row text-center mb-3 mt-5">
            <div className="col-lg-10 col-xl-10 col-md-10">
              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Club Members</h1>
            </div>
          </div>
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
