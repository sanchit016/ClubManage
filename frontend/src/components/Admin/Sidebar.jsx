import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div style={{backgroundColor:"#0d2a51", color:"white"}} >
      <div
        class="d-flex flex-column flex-shrink-0 p-5  "
        style={{ width: "20%", height: "100vh", color:"white"}}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span class="fs-4" style={{color:"white"}}>Admin</span>
        </a>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/admin/adminClub" className="nav-links" style={{color:"white"}}>
              Clubs
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/adminTeacher" className="nav-links" style={{color:"white"}}>
              Teacher
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/adminStudent" className="nav-links" style={{color:"white"}}>
              Student
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
