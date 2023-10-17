import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px", height: "80vh" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span class="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/adminHome" className="nav-link ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/adminClub" className="nav-link">
              Clubs
            </Link>
          </li>
          <li>
            <Link to="/adminTeacher" className="nav-link">
              Teacher
            </Link>
          </li>
          <li>
            <Link to="/adminStudent" className="nav-link">
              Student
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
