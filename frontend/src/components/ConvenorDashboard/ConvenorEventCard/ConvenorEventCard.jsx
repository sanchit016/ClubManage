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
  function parseDateString(dateString) {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedDateWithoutCommas = formattedDate.replace(/,/g, "");

    return formattedDateWithoutCommas;
  }

  function formatTimeString(dateString) {
    const date = new Date(dateString);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = date.toLocaleTimeString("en-US", options);
    return formattedTime;
  }

  return (
    <div class="card" style={{ width: "18rem", height: "480px", backgroundColor:"#0d2a51" }}>
      <img
        class="card-img-top"
        src={event.image}
        alt="Club image"
        style={{ height: "400px" }}
      />
      <div class="card-body" style={{ height: "80px", padding: "5%" }}>
        <h5 class="card-title">{event.name}</h5>
        <p>{event.date == null ? <>Unavailable</> : <>{parseDateString(event.date.toString())}</>}</p>
      </div>
      {/*<ul class="list-group list-group-flush" >
        <li class="list-group-item"  style={{ backgroundColor:"#0d2a51", color:"white"}} >
          <b>Dated:- </b>
          {event.date == null ? <>Unavailable</> : <>{parseDateString(event.date.toString())}</>}
        </li>
  </ul>*/}
      <div class="card-body">
        <div className="d-flex">
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
          className="card-item btn btn-primary m-1"
          style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"80px", color:"black"}}
        >
          View
        </Link>
        </motion.div>
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
            className="card-item btn btn-warning m-1"
            style={{fontWeight:"500", width:"80px"}}
          >
            Edit
          </Link>
          </motion.div>
        {/*<motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <button
            className="btn btn-danger m-1"
            onClick={() => {
              handleDelete(event._id);
            }}
            style={{fontWeight:"500", width:"80px"}}
          >
            Delete
          </button>
          </motion.div>*/}
        </div>
      </div>
    </div>
  );
}