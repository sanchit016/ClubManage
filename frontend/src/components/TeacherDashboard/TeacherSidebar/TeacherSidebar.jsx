import React from "react";
import { Link } from "react-router-dom";
export default function TeacherSidebar() {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 "
        style={{
          width: "20vw",
          backgroundColor: "#071e3d",
          color: "white",
        }}
      >
        <span class="fs-4" style={{ color: "#21e6c1" }}>
          Teacher
        </span>

        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link
              to="/teacher/teacherHome"
              className="nav-link "
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/teacher/teacherCreateEvent"
              className="nav-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create Event
            </Link>
          </li>
          <li>
            <Link
              to="/teacher/teacherAssignConvenor"
              className="nav-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Assign Convenor
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
