import React from "react";
import { Link } from "react-router-dom";
export default function TeacherSidebar() {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "20vw" }}
      >
        <span class="fs-4">Teacher</span>

        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/teacher/teacherHome" className="nav-link ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/teacher/teacherCreateEvent" className="nav-link">
              Create Event
            </Link>
          </li>
          <li>
            <Link to="/teacher/teacherEditEvent" className="nav-link">
              Edit Event
            </Link>
          </li>
          <li>
            <Link to="/teacher/teacherAssignConvenor" className="nav-link">
              Assign Convenor
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
