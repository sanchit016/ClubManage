import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
export default function TeacherCreateEvent() {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    images: "",
    clubId: "",
  });
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(input);
    let response = await Axios.post(
      "http://localhost:8080/api/convenor/create-event",
      {
        name: input.name,
        description: input.description,
        date: input.date,
        startTime: input.startTime,
        endTime: input.endTime,
        images: input.images,
      },
      { withCredentials: true }
    );
    response = response.data;
    if (!response.success) {
      alert(response.message);
    } else {
      Navigate("/convenor/convenorHome");
    }
  };
  return (
    <>
      <div className="d-flex bg-light">
        <div style={{ position: "fixed", height: "75%", width: "20%" }}>
          <ConvenorSidebar />
        </div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.51, 0.2, 1],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          style={{
            marginLeft: "20%",
            backgroundColor: "white",
            width: "95%",
          }}
        >
          <div>
            <section className="vh-75 mt-5 ">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div
                      className="card text-black"
                      style={{ "border-radius": "25px;" }}
                    >
                      <div className="card-body ">
                        <div className="row justify-content-center">
                          <div className="col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1  mt-2">
                              Create Event
                            </p>

                            <form className="mx-1 mx-md-3">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control m-1"
                                  placeholder="Event Name"
                                  name="name"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-calendar fa-lg me-3 fa-fw"></i>

                                <input
                                  type="date"
                                  id="form3Example4cd"
                                  className="form-control"
                                  placeholder="Event Date"
                                  name="date"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-clock fa-lg me-3 fa-fw"></i>
                                <div style={{ width: "50%" }}>
                                  <input
                                    type="time"
                                    id="form3Example3c"
                                    className="form-control"
                                    placeholder="Start Time"
                                    name="startTime"
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  />
                                </div>
                                <div style={{ width: "50%" }}>
                                  <input
                                    type="time"
                                    id="form3Example3c"
                                    className="form-control"
                                    placeholder="End Time"
                                    name="endTime"
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-file fa-lg me-3 fa-fw"></i>

                                <input
                                  type="file"
                                  id="form3Example3c"
                                  className="form-control"
                                  placeholder="Image"
                                  name="image"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                                <textarea
                                  type="text"
                                  id="form3Example3c"
                                  className="form-control m-2 "
                                  placeholder="Description"
                                  name="description"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  style={{ height: "120px" }}
                                />
                              </div>

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-4">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-lg m-2"
                                  onClick={(e) => {
                                    submit(e);
                                  }}
                                >
                                  Create
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid"
                              alt="Sample image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}
