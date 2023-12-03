import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useUser } from '../../../userContext';
import { useNavigate } from 'react-router-dom';
export default function ConvenorSidebar() {
  const clubId = localStorage.getItem("clubId")
  const { loggedId, setLoggedId } = useUser();
  const navigate = useNavigate();

  const handleClub = () => {
    navigate(`/club/${clubId}`)
  }
  return (
    <div style={{backgroundColor:"#0d2a51", color:"white", minHeight:"100%"}}>
      <div
        class="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: "20vw" }}
      >
        <span class="fs-4"  style={{ color: "#21e6c1" }}>Convenor</span>

        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/convenor/convenorHome" className="nav-link" style={{color:"white"}}>
              Home
            </Link>
          </li>
          <li class="nav-item">
              <button className="nav-link"
              onClick={handleClub}
              style={{ color: "white", textDecoration: "none"  }} >
              My Club
              </button>
          </li>
          <li className="nav-item">
            <Link to="/convenor/convenorEvent" className="nav-link" style={{color:"white"}}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/convenor/convenorCreateEvent" className="nav-link" style={{color:"white"}}>
              Create Event
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/convenor/clubRequests" className="nav-link" style={{color:"white"}}>
              Requests
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/convenor/viewClubMembers" className="nav-link" style={{color:"white"}}>
              Club Members
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
