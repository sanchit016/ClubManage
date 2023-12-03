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
    <div class="club-card" style={{ width: "22rem", height: "550px", backgroundColor:"#0d2a51", color:"white" }}>
      <img class="card-img-top" src={event.image} alt="Club image" />
      <div class="card-body" style={{ height: "150px", padding: "5%" }}>
        <h5 class="card-title">{event.name}</h5>

        {/*<p class="card-text p-2">
          {event.description == "" ? (
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          ) : (
            <p>{event.description}</p>
          )}
          </p>*/}
      </div>
      <ul class="list-group list-group-flush" >
        <li class="list-group-item" style={{backgroundColor:"#0d2a51", color:"white"}} >
          <b>Dated:- </b>
          {event.date == null ? <>Unavailable</> : <>{parseDateString(event.date.toString())}</>}
        </li>
      </ul>
      <div class="card-body d-flex">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <Link
          to={`/event/${event._id}`}
          className="card-item btn m-2"
          style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"100px", coloe:"black"}}
        >
          View
        </Link>
        </motion.div>
        {occurence == "past" ? (
          <></>
        ) : (
          <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
          <Link
            to={`/convenor/convenorEditEvent/${event._id}`}
            className="card-item btn btn-warning m-2"
            style={{fontWeight:"500", width:"100px"}}
          >
            Edit
          </Link>
          </motion.div>
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
