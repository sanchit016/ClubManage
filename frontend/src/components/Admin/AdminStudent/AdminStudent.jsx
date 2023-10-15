import React from "react";
import { Link } from "react-router-dom";

export default function AdminStudent() {
  const handleStudentDelete = () => {};
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
          Add Student
        </Link>
      </nav>
      <ul class="list-group mt-5">
        <li class="list-group-item  d-flex justify-content-between">
          Cras justo odio
          <div>
            <Link to="/adminViewStudent" className="btn btn-primary m-2">
              View
            </Link>
            <Link to="/adminEditStudent" className="btn btn-warning m-2">
              Edit
            </Link>
            <button
              className="btn btn-danger m-2"
              onClick={(e) => {
                handleStudentDelete();
              }}
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
