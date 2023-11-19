import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Card({ club }) {
  return (
    <div class="card club-card" style={{ width: "25rem", margin:"5%", height: "400px", backgroundColor:"#0d2a51" }}>
      <img
        class="card-img-top"
        src={club.thumbnail}
        alt="Club image"
        style={{ height: "250px",  backgroundColor:"#0d2a51" }}
        
      />

      <div class="card-body" style={{ padding: "10px", backgroundColor:"#0d2a51",  color:"white" }}>
        <h5 class="card-title">{club.name}</h5>
      </div>
      <ul class="list-group list-group-flush"  >
        <li class="list-group-item" style={{ backgroundColor:"#0d2a51", color:"white"}} >
          <b>Head:- </b>
          {club.assignedTeacher == null ? (
            <>Not Assigned</>
          ) : (
            <>{club.assignedTeacher}</>
          )}
        </li>
      </ul>
      <div class="d-flex">
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
          to={`/club/${club._id}`}
          className="dash-btn btn  m-2"
          style={{backgroundColor:"#21e6c1", fontWeight:"500", width:"150px"}}
          
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
          to={`/admin/adminClubEdit/${club._id}`}
          className="card-item btn btn-warning m-2"
          style={{fontWeight:"500", width:"150px"}}
        >
          Edit
        </Link>
        </motion.div>
      </div>
    </div>
  );
}
