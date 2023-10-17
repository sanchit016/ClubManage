import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function AdminTeacher() {
  const [teachersData, setTeachersData] = useState([]);
  let response;
  const load_data = async () => {
    response = await axios.get("http://localhost:8080/api/admin/get-teachers", {
      withCredentials: true,
    });
    response = response.data;
    console.log(response);
    if (!response.success) {
      alert(response.message);
    } else {
      setTeachersData(response.data.teachers);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <nav
        class="navbar navbar-light bg-light d-flex justify-content-between p-2 "
        style={{ width: "78.6vw" }}
      >
        <div></div>
        <Link
          to="/adminTeacherAdd"
          className="btn btn-primary "
          style={{ color: "white" }}
        >
          Add Teacher
        </Link>
      </nav>
      <ul class="list-group mt-5">
        {teachersData.length > 0 &&
          teachersData.map((teacher) => {
            return (
              <>
                <li class="list-group-item  d-flex justify-content-between">
                  {teacher.name}
                  <div>
                    <Link
                      to={`/adminTeacherView/${teacher._id}`}
                      className="btn btn-primary m-2"
                    >
                      View
                    </Link>
                    <Link
                      to="/adminEditTeacher"
                      className="btn btn-warning m-2"
                    >
                      Edit
                    </Link>
                    <button className="btn btn-danger m-2">Delete</button>
                  </div>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}
