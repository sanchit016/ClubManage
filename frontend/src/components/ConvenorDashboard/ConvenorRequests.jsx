import React from "react";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
export default function ConvenorRequests() {
  return (
    <>
      <div className="d-flex">
        <div>
          <ConvenorSidebar />
        </div>
        <div>
          <nav
            class="navbar navbar-light bg-light d-flex justify-content-between p-2 "
            style={{ width: "78.6vw" }}
          >
            <div></div>
            <Link
              to="/admin/adminStudentAdd"
              className="btn btn-primary "
              style={{ color: "white" }}
            >
              Add Student
            </Link>
          </nav>
          <ul class="list-group mt-5">
            {studentsData.length > 0 &&
              studentsData.map((student) => {
                return (
                  <>
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      // animate={{ x: [-100, 0] }}
                      // transition={{ duration: 1 }}
                    >
                      <li class="list-group-item  d-flex justify-content-between animated bounceIn">
                        {student.name}
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
                              to={`/admin/adminStudentView/${student._id}`}
                              className="btn btn-primary m-2"
                            >
                              View
                            </Link>
                          </motion.div>
                        </div>
                      </li>
                    </motion.div>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
