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
    response = response.data.clubs;
    response = await Promise.all(
      response.map(async (club) => {
        if (club.assignedTeacher != null) {
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
    setClubsData(response);
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <div className="d-flex bg-light">
      <div
        style={{ width: "20%" }}
        className="bg-light"
      >
        <Sidebar />
      </div>
      <div
        style={{ backgroundColor: "#071e3d", width: "80%" }}
      >
        <nav
          className="navbar d-flex justify-content-between"
          style={{
            backgroundColor: "#071e3d",
            width: "100%",
            height: "65px",
          }}
        >
          <div></div>
          <Link
            to="/admin/adminClubAdd"
            className="btn dash-btn"
            style={{backgroundColor:"#21e6c1", color:"black",fontWeight:"500", width:"150px", marginRight: "2%" }}
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
                  className="col-12  col-md- col-lg-4"
                  style={{
                    marginLeft: "5%",
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
                    <div style={{ margin: "20px" }}>
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
