import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div style={{backgroundColor:"#0d2a51", color:"white"}} >
      <div
        class="d-flex flex-column flex-shrink-0 p-3  "
        style={{ width: "20vw", height: "100vh", color:"white"}}
      >
        <span class="fs-4" style={{ color: "#21e6c1" }}>
          Admin
        </span>

        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/admin/adminClub" className="nav-link" style={{color:"white"}}>
              Clubs
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/adminTeacher" className="nav-link" style={{color:"white"}}>
              Teacher
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/adminStudent" className="nav-link" style={{color:"white"}}>
              Student
            </Link>
          </li>
          <hr style={{color:"white"}} />
        </ul>
        
      </div>
    </div>
  );
}
