import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function AdminTeacherAdd() {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    age: "",
    username: "",
    password: "",
    gender: "",
  });
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    // e.preventDefault();
    // console.log(input);
    // let response = await Axios.post("http://localhost:5000/adminTeacherAdd", {
    //   name: input.name,
    //   username: input.username,
    //   password: input.password,
    //   c_password: input.c_password,
    // });
    // response = response.data;
    // if (!response.success) {
    //   alert(response.message);
    // } else {
    //   Navigate("/adminHome");
    // }
  };
  return (
    <>
      <section className="vh-75 mt-5 " style={{ "background-color": "#eee;" }}>
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
                        Register Teacher
                      </p>

                      <form className="mx-1 mx-md-3">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control m-1"
                            placeholder="Name"
                            name="name"
                            style={{ width: "70%" }}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                          <input
                            type="number"
                            id="form3Example1c"
                            className="form-control m-1"
                            placeholder="Age"
                            name="age"
                            style={{ width: "30%" }}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw">
                            Gender
                          </i>
                          <div>
                            <div class="form-check d-flex">
                              <div style={{ marginRight: "85%" }}>
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Male
                                </label>
                              </div>
                              <div>
                                <input
                                  className="form-check-input "
                                  type="radio"
                                  name="gender"
                                  id="flexRadioDefault2"
                                />

                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="email"
                            name="username"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Password"
                            name="password"
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
    </>
  );
}