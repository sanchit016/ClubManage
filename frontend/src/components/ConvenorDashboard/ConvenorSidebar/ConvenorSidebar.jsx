import React from "react";
import { Link } from "react-router-dom";
export default function ConvenorSidebar() {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "20vw" }}
      >
        <span class="fs-4">Convenor</span>

        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/convenor/convenorHome" className="nav-link ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/convenor/convenorCreateEvent" className="nav-link">
              Create Event
            </Link>
          </li>
          <li>
            <Link to="/convenor/newClubRequests" className="nav-link">
              New Requests
            </Link>
            <Link to="/convenor/pendingClubRequests" className="nav-link">
              Pending Requests
            </Link>
            <Link to="/convenor/viewClubMembers" className="nav-link">
              Club Members
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
