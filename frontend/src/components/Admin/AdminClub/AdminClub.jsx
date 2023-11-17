import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import axios from "axios";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
// import { AlertDanger } from "../../Alerts/Alerts";
export default function AdminClub() {
  // const handleClubDelete = () => {};
  const [clubsData, setClubsData] = useState([]);

  const load_data = async () => {
    var response = "";
    response = await axios.get("http://localhost:8080/api/user/get-clubs");

    response = response.data;
    // console.log(response.data);

    // if (!response.success) {
    //   alert(response.message);
    // } else {
    //   setClubsData(response.data.clubs);
    // }
    console.log(response);
    response = response.data.clubs;
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
    setClubsData(response);
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <div className="d-flex bg-light">
      <div
        style={{ position: "fixed", height: "100%", width: "20%" }}
        className="bg-light"
      >
        <Sidebar />
      </div>
      <div
        style={{ marginLeft: "20%", backgroundColor: "white", width: "80%" }}
      >
        <nav
          className="navbar navbar-light bg-light d-flex justify-content-between"
          style={{
            width: "100%",
            height: "65px",
          }}
        >
          <div></div>
          <Link
            to="/admin/adminClubAdd"
            className="btn btn-primary "
            style={{ color: "white", marginRight: "2%" }}
          >
            Create New Club
          </Link>
        </nav>

        <div
          className="container mt-3 ml-3"
          style={{ paddingLeft: "2%", paddingRight: "2%" }}
        >
          <div className="row">
            {clubsData?.map((club) => {
              return (
                <div
                  className="col-12  col-md- col-lg-3"
                  style={{
                    marginLeft: "3.5%",
                    marginRight: "3.5%",
                    marginTop: "1%",
                    marginBottom: "1%",
                  }}
                >
                  {" "}
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
                    <div style={{ margin: "10px" }}>
                      <Card club={club} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
