import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
export default function TeacherEventCard({ event, occurence }) {
  function parseDateString(dateString) {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedDateWithoutCommas = formattedDate.replace(/,/g, "");

    return formattedDateWithoutCommas;
  }
  return (
    <div
      class="club-card"
      style={{
        width: "22rem",
        height: "550px",
        backgroundColor: "#0d2a51",
        color: "white",
      }}
    >
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
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          style={{ backgroundColor: "#0d2a51", color: "white" }}
        >
          <b>Dated:- </b>
          {event.date == null ? <>Unavailable</> : <>{parseDateString(event.date.toString())}</>}
        </li>
      </ul>
      <div class="card-body d-flex">
       
      <motion.div
        whileHover={{ scale: 1.05 }}
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
          style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"100px", color:"black"}}
        >
          
            View
          </Link>
        </motion.div>
        {occurence == "past" ? (
          <></>
        ) : (
          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
   
            <Link
              to={`/teacher/teacherEditEvent/${event._id}`}
              className="card-item btn btn-warning m-2"
              style={{ fontWeight: "500", width: "100px" }}
            >
              Edit
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
