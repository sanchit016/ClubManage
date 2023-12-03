import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
export default function ConvenorEventCard({ event, occurence }) {
  const clubId = localStorage.getItem("clubId");
  const Navigate = useNavigate();
  const handleDelete = async (eventId) => {
    console.log(eventId);
    let deleteRequest = await axios.delete(
      `http://localhost:8080/api/convenor/delete-event/${eventId}`,
      { params: { id: eventId } },
      { clubId: clubId },
      {
        withCredentials: true,
      }
    );
    Navigate("/convenor/convenorHome");
  };
  return (
    <div class="card" style={{ width: "18rem", height: "500px" }}>
      <img
        class="card-img-top"
        src={event.image}
        alt="Club image"
        style={{ height: "400px" }}
      />
      <div class="card-body" style={{ height: "280px", padding: "5%" }}>
        <h5 class="card-title">{event.name}</h5>
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
            to={`/convenor/convenorEditEvent/${event._id}`}
            className="card-item btn btn-warning m-2"
          >
            Edit
          </Link>
        )}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              handleDelete(event._id);
            }}
          >
            Delete
          </button>
        </motion.div>
      </div>
    </div>
  );
}
