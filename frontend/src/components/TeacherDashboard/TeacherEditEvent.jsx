import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TeacherSidebar from "./TeacherSidebar/TeacherSidebar";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TeacherEditEvent() {
  const slug = useParams();
  const id = slug.slug;
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
    let response = await axios.post(
      5`http://localhost:8080/api/teacher/edit-event/${id}`,
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
      toast.error(response.message,  {
        closeOnClick:true,
        theme:'dark'
      });
    } else {
      toast.info('Event Updated', {
        closeOnClick:true,
        theme:'dark'
      })
      Navigate("/teacher/teacherHome");
    }
  };
  let responseData;
  const load_data = async () => {
    responseData = await axios.get(
      `http://localhost:8080/api/teacher/get-event/${id}`,
      { withCredentials: true }
    );
  };
  responseData = responseData.data;
  if (!responseData.success) {
    alert(responseData.message);
  } else {
    setInput(responseData.data);
  }
  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex">
        <div style={{backgroundColor: "#0d2a51" }}>
          <TeacherSidebar />
        </div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div style={{ marginLeft: "30%" }}>
            <section
              className="vh-75 mt-5 "
              style={{ "background-color": "#eee;" }}
            >
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
                              Edit Event
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
                                  value={input.name}
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
                                  value={input.date}
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
                                    value={input.startTime}
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
                                    value={input.endTime}
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
                                  value={input.description}
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
                                  Edit
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
