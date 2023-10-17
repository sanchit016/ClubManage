import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import axios from "axios";
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
    <>
      <nav
        className="navbar navbar-light bg-light d-flex justify-content-between p-2 "
        style={{ width: "78.6vw" }}
      >
        <div></div>
        <Link
          to="/adminTeacherAdd"
          className="btn btn-primary "
          style={{ color: "white" }}
        >
          Create New Club
        </Link>
      </nav>

      <div className="container mt-5 ml-5">
        <div className="row">
          {clubsData?.map((club) => {
            return (
              <div className="col-12  col-md- col-lg-3">
                {" "}
                <div className="card m-3">
                  <Card club={club} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
