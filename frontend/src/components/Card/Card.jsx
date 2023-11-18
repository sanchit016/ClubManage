import React from "react";
import { Link } from "react-router-dom";
export default function Card({ club }) {
  return (
    <div class="card" style={{ width: "16rem", height: "500px" }}>
      <img
        class="card-img-top"
        src={club.logo}
        alt="Club image"
        style={{ height: "350px" }}
      />

      <div class="card-body" style={{ padding: "10px" }}>
        <h5 class="card-title">{club.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <b>Head:- </b>
          {club.assignedTeacher == null ? (
            <>Not Assigned</>
          ) : (
            <>{club.assignedTeacher}</>
          )}
        </li>
      </ul>
      <div class="d-flex">
        <Link
          to={`/club/${club._id}`}
          className="card-item btn btn-primary m-2"
        >
          View
        </Link>
        <Link
          to={`/admin/adminClubEdit/${club._id}`}
          className="card-item btn btn-warning m-2"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
