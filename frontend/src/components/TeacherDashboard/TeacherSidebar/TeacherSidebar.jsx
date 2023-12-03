import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useUser } from '../../../userContext';
import { useNavigate } from 'react-router-dom';
export default function TeacherSidebar() {
  const [clubId, setClubId] = useState()
  const { loggedId, setLoggedId } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loggedId && loggedId.assignedClub) {
      setClubId(loggedId.assignedClub);
    }
  }, [loggedId]);

  const handleClub = () => {
    navigate(`/club/${clubId}`)
  }
  return (
    <div style={{ backgroundColor: "#0d2a51", color: "white" }}>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 "
        style={{
          width: "20vw",
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

          <li class="nav-item">
              <button className="nav-link"
              onClick={handleClub}
              style={{ color: "white", textDecoration: "none"  }} >
              My Club
              </button>
          </li>
          <li class="nav-item">
            <Link
              to="/teacher/teacherEvents"
              className="nav-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Events
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/teacher/teacherCreateEvent"
              className="nav-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create Event
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/teacher/teacherRequest"
              className="nav-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Requests
            </Link>
          </li>
          <li class="nav-item">
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
    </div>
  );
}
