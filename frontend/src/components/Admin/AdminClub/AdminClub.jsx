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
    console.log(response.data);

    if (!response.success) {
      alert(response.message);
    } else {
      setClubsData(response.data.clubs);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <div className="d-flex " style={{ width: "90vw" }}>
      <div style={{ position: "fixed", height: "75%" }} className=" bg-light">
        <Sidebar />
      </div>
      <div>
        <nav
          className="navbar navbar-light bg-light d-flex justify-content-between p-2 "
          style={{
            width: "100%",
            backgroundColor: "black",
            zIndex: "1000000000",
          }}
        >
          <div></div>
          <Link
            to="/admin/adminClubAdd"
            className="btn btn-primary "
            style={{ color: "white" }}
          >
            Create New Club
          </Link>
        </nav>

        <div className="container mt-3 ml-3">
          <div className="row">
            {clubsData?.map((club) => {
              return (
                <div
                  className="col-12  col-md- col-lg-3"
                  style={{ margin: "4%" }}
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
                    <div className="card ">
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
