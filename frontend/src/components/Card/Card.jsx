import React from "react";
import { Link } from "react-router-dom";
export default function Card({ club }) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img class="card-img-top" src={club.img} alt="Club image" />
      <div class="card-body">
        <h5 class="card-title">Club name</h5>
        <p class="card-text">
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
          <b>Head:-</b>
        </li>
      </ul>
      <div class="card-body">
        <Link to={`/clubView/${club.id}`} className="card-item">
          View
        </Link>
        <Link to={`/adminClubEdit/${club.id}`} className="card-item">
          Edit
        </Link>
      </div>
    </div>
  );
}
