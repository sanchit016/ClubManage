import React from "react";
import { Link } from "react-router-dom";
export default function ConvenorEventCard({ event, occurence }) {
  // const handleStudentDelete = async (studentId) => {
  //   let deleteRequest = await axios.get(
  //     `http://localhost:8080/api/convenor/remove-clubMember/${studentId}`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // };
  return (
    <div className="card" style={{ width: "18rem", height: "500px" }}>
      <img
        class="card-img-top"
        src={event.image}
        alt="Club image"
        style={{ height: "400px" }}
      />
      <div class="card-body" style={{ height: "100px" }}>
        <h5 class="card-title">{event.name}</h5>
        {/* <p class="card-text p-2">
          {event.description == "" ? (
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          ) : (
            <p>{event.description}</p>
          )}
        </p> */}
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
            to={`/teacher/teacherEditEvent/${event.id}`}
            className="card-item btn btn-warning m-2"
          >
            Edit
          </Link>
        )}
        {/* <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {" "}
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              handleDelete(student._id);
            }}
          >
            Delete
          </button>
        </motion.div> */}
      </div>
    </div>
  );
}
