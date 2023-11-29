import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminStudentAdd() {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    branch: "",
    contact: "",
    rollNo: "",
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
      "http://localhost:8080/api/admin/create-student",
      {
        name: input.name,
        email: input.username,
        password: input.password,
        branch: input.branch,
        contact: input.contact,
        isConvenor: false,
        rollNo: input.rollNo,
      },
      { withCredentials: true }
    );
    console.log(response);
    response = response.data;
    if (!response.success) {
      toast.error(response.message, {
        closeOnClick:true,
        theme:'dark'
      });
    } else {
      toast.success('Student created successfully', {
        closeOnClick:true,
        theme:'dark'
      })
      Navigate("/admin/adminStudent");
    }
  };
  return (
    <>
      <div className="d-flex" style={{backgroundColor:"#071e3d"}}>
        <div
          style={{ position: "sticky", height: "100%", width: "20%" }}
          className="bg-light"
        >
          <Sidebar />
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
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          style={{
            backgroundColor: "#071e3d",
            width: "80%",
            marginLeft:"10%"
          }}
        >
          <div>
            <section className="vh-75  mt-5" style={{width:"80%"}}>
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div
                      className="card"
                      style={{ "border-radius": "25px;",backgroundColor:"#071e3d", color:"white" }}
                    >
                      <div className="card-body ">
                        <div className="row justify-content-center">
                          <div className="col-lg-12 col-xl-12 order-2 order-lg-12">
                          <div className="row justify-content-center text-center mb-3">
                            <div className="col-lg-8 col-xl-7">
                              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Register Student</h1>
                              <p className="lead mb-5" style={{ color: 'white' }}>Specify a Club Name and description to create a club</p>
                            </div>
                          </div>

                            <form className="mx-1 mx-md-3">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control m-1"
                                  placeholder="Name"
                                  name="name"
                                  style={{ width: "70%", backgroundColor:"#425b7c", border:"none", color:"white" }}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control m-1"
                                  placeholder="Roll No."
                                  name="rollNo"
                                  style={{ width: "30%", backgroundColor:"#425b7c", border:"none", color:"white" }}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  
                                />
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                                <select
                                  id="branch"
                                  className="form-control"
                                  name="branch"
                                  onChange={(e) => {
                                    setInput({
                                      ...input,
                                      [e.target.name]: e.target.value,
                                    });
                                  }}
                                  style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
                                >
                                  <option defaultValue>Select</option>
                                  <option value="CSE">
                                    Computer Science (CSE)
                                  </option>
                                  <option value="ECE">
                                    Electronics and Communication (ECE)
                                  </option>
                                  <option value="IT">
                                    Information Technology (IT)
                                  </option>
                                  <option value="EEE">
                                    Electrical and Electronics (EEE)
                                  </option>
                                  <option value="Mech">
                                    Mechanical Engineering (Mech)
                                  </option>
                                  <option value="BioTech">
                                    Biotechnology (BioTech)
                                  </option>
                                </select>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-phone fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                                <input
                                  type="tel"
                                  id="form3Example4cd"
                                  className="form-control"
                                  placeholder="Phone No."
                                  name="contact"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
                                />
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                  placeholder="email"
                                  name="username"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
                                />
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                                <input
                                  type="password"
                                  id="form3Example4cd"
                                  className="form-control"
                                  placeholder="Password"
                                  name="password"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                  Register
                                </button>
                              </div>
                            </form>
                          </div>
                         {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
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
