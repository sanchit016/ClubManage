import React from "react";
import { Link } from "react-router-dom";
export default function Card({ event, occurence }) {
  return (
    <div class="card" style={{ width: "18rem", height: "500px" }}>
      <img class="card-img-top" src="..." alt="Club image" />
      <div class="card-body" style={{ height: "280px", padding: "5%" }}>
        <h5 class="card-title">{event.name}</h5>
        <p class="card-text p-2">
          {event.description == "" ? (
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          ) : (
            <p>{event.description}</p>
          )}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <b>Dated:- </b>
          {event.date == null ? <>Unavailable</> : <>{event.date}</>}
        </li>
      </ul>
      <div class="card-body">
        <Link
          to={`/eventView/${event._id}`}
          className="card-item btn btn-primary m-2"
        >
          View
        </Link>
        {occurence == "past" ? (
          <></>
        ) : (
          <Link
            to={`/teacher/teacherEditEvent/${event._id}`}
            className="card-item btn btn-warning m-2"
          >
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}
