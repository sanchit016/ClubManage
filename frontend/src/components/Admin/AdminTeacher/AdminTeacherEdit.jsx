import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminTeacherEdit() {
  const slug = useParams();
  const id = slug.slug;
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    assignedClub: "",
  });
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    e.preventDefault();
    let response = await axios.patch(
      `http://localhost:8080/api/admin/edit-teacher/${id}`,
      {
        name: input.name,
        email: input.email,
        password: input.password,
        contact: input.contact,
        assignedClub: input.assignedClub,
      },
      {
        withCredentials: true,
      }
    );

    response = response.data;
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.update('Changes Updated',{
        closeOnClick:true,
        theme:'dark'
      })
      Navigate(`/admin/adminTeacherView/${id}`);
    }
  };
  let responseData;
  const load_data = async () => {
    responseData = await axios.get(
      `http://localhost:8080/api/admin/get-teacher/${id}`,
      {
        withCredentials: true,
      }
    );
    setInput(responseData.data.data.teacher);
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex " style={{backgroundColor:"#071e3d"}}>
        <div
          style={{ width: "20%" }}
          className=" bg-light"
        >
          <Sidebar />
        </div>

        <section
          className="vh-75 mt-5 "
          style={{
            backgroundColor: "#071e3d",
            width: "60%", marginLeft:"10%"
          }}
        >
          <div className="container h-100" style={{backgroundColor:"#071e3d"}}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{backgroundColor:"#071e3d"}}
                >
                  <div className="card-body ">
                    <div className="row justify-content-center">
                      <div className="col-lg-10 col-xl-11 order-2 order-lg-12">
                      <div className="row justify-content-center text-center mb-3">
                            <div className="col-lg-8 col-xl-7">
                              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Edit Teacher</h1>
                              <p className="lead mb-5" style={{ color: 'white' }}>Edit name, teacher and description of club</p>
                            </div>
                          </div>

                        <form className="mx-1 mx-md-3">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>

                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control m-1"
                              placeholder="Name"
                              name="name"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                              style={{ width: "70%", backgroundColor:"#425b7c", border:"none", color:"white"}}
                              value={input.name}
                            />
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-phone fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>
                            <input
                              type="tel"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Phone No."
                              name="contact"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                              style={{ width: "70%", backgroundColor:"#425b7c", border:"none"}}
                              value={input.contact}
                            />
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-info fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Asign Club"
                              name="assignedClub"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                              style={{ width: "70%", backgroundColor:"#425b7c", border:"none", color:"white"}}
                              value={input.assignedClub}
                            />
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>

                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="email"
                              name="username"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                              style={{ width: "70%", backgroundColor:"#425b7c", border:"none", color:"white"}}
                              value={input.email}
                            />
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>

                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                              style={{ width: "70%", backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                              Edit
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
    </>
  );
}
