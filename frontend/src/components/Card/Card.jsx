import React from "react";
import { Link } from "react-router-dom";
export default function Card({ club }) {
  return (
    <div class="card" style={{ width: "16rem", height: "500px" }}>
      <img class="card-img-top" src="..." alt="Club image" />
      <div class="card-body" style={{ height: "380px", padding: "10px" }}>
        <h5 class="card-title">{club.name}</h5>
        <p class="card-text p-2">
          {club.description == "" ? (
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          ) : (
            <p>{club.description}</p>
          )}
        </p>
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
      <div class="card-body">
        <Link
          to={`/clubView/${club.id}`}
          className="card-item btn btn-primary m-2"
        >
          View
        </Link>
        <Link
          to={`/admin/adminClubEdit/${club.id}`}
          className="card-item btn btn-warning m-2"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
