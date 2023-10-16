import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function AdminStudent() {
  const handleStudentDelete = () => {};
  const [studentsData, setStudentsData] = useState([]);
  let response;
  const load_data = async () => {
    response = await axios.get("http://localhost:8080/api/admin/get-students");
  };
  response = response.data;
  if (!response.success) {
    alert(response.message);
  } else {
    setStudentsData(response.data);
  }
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
          to="/adminStudentAdd"
          className="btn btn-primary "
          style={{ color: "white" }}
        >
          Add Student
        </Link>
      </nav>
      <ul class="list-group mt-5">
        {studentsData.map((student) => {
          return (
            <>
              <li class="list-group-item  d-flex justify-content-between">
                {student.name}
                <div>
                  <Link
                    to={`/adminStudentView/${student._id}`}
                    className="btn btn-primary m-2"
                  >
                    View
                  </Link>
                  <Link to="/adminStudentEdit" className="btn btn-warning m-2">
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
