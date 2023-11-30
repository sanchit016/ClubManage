import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import TeacherSidebar from "./TeacherSidebar/TeacherSidebar";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      "http://localhost:8080/api/teacher/create-event",
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
      toast.success('Event Created', {
        closeOnClick:true,
        theme:'dark'
      })
      Navigate("/admin/adminTeacher");
    }
  };
  return (
    <>
      <div className="d-flex">
        <div style={{backgroundColor: "#0d2a51" }} >
          <TeacherSidebar />
        </div>
        <motion.div
          className="boxt"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{backgroundColor: "#071e3d", width:"80%"}}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div  style={{width:"80%",  backgroundColor: "#071e3d"}}>
            <section
              className="vh-75 mt-5 "
              style={{ backgroundColor: "#071e3d", width:"80%" }}
            >
              <div className="container h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div
                      className="card text-black"
                      style={{ "border-radius": "25px;" ,  backgroundColor: "#071e3d"}}
                    >
                      <div className="card-body ">
                        <div className="row justify-content-center">
                          <div className="col-lg-12 col-xl-12 order-2 order-lg-12">
                          <div className="row justify-content-center text-center mb-3">
                            <div className="col-lg-12 col-xl-12">
                              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Create an Event</h1>
                            </div>
                          </div>

                            <form className="mx-1 mx-md-3">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                                <input
                                style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                  style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                  style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                style={{height: "120px", backgroundColor:"#425b7c", border:"none", color:"white"}}
                                  type="text"
                                  id="form3Example3c"
                                  className="form-control m-2 "
                                  placeholder="Description"
                                  name="description"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </div>

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-4">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-lg m-2"
                                  onClick={(e) => {
                                    submit(e);
                                  }}
                                  
                                style={{backgroundColor:"#21e6c1", color:"black",fontWeight:"500", width:"50%", marginLeft: "5%" }}
                                >
                                  Create
                                </button>
                              </div>
                            </form>
                          </div>
                          {/*<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid"
                              alt="Sample image"
                            />
                                </div>*/}
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
