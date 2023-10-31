import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Sidebar from "../Sidebar";
export default function AdminClubAdd() {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    assignedTeacher: "",
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
      "http://localhost:8080/api/admin/teacher-create",
      {
        name: input.name,
        description: input.description,
        assignedTeacher: input.assignedTeacher,
      }
    );
    response = response.data;
    if (!response.success) {
      alert(response.message);
    } else {
      Navigate("/admin/adminClub");
    }
  };
  return (
    <>
      <div className="d-flex">
        <div style={{ position: "fixed", height: "75%" }} className=" bg-light">
          <Sidebar />
        </div>
        <div>
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
                            Register Club
                          </p>

                          <form className="mx-1 mx-md-3">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-info fa-lg me-3 fa-fw"></i>

                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control m-1"
                                placeholder="Name"
                                name="name"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-person fa-lg me-3 fa-fw"></i>

                              <input
                                type="text"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Asigned Teacher"
                                name="assignedTeacher"
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
                                style={{ height: "180px" }}
                                value={input.blog}
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
                                Register
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
      </div>
    </>
  );
}
