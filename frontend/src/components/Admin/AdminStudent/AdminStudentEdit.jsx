import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function AdminStudentEdit() {
  const Navigate = useNavigate();
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(input);
    let response = await axios.put(
      "http://localhost:8080/api/admin/student-edit",
      {
        name: input.name,
        email: input.email,
        password: input.password,
        branch: input.branch,
        contact: input.contact,
        isConvenor: input.isConvenor,
        rollNo: input.rollNo,
      }
    );
    response = response.data;
    if (!response.success) {
      alert(response.message);
    } else {
      Navigate("/adminHome");
    }
  };
  let responseData;
  const load_data = async () => {
    responseData = await axios.get(
      "http://localhost:8080/api/admin/get-student"
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
                        Register Student
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
                            value={input.name}
                          />
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control m-1"
                            placeholder="Roll No."
                            name="rollNo"
                            style={{ width: "30%" }}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={input.rollNo}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control m-1"
                            placeholder="Branch"
                            name="branch"
                            style={{ width: "50%" }}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={input.branch}
                          />
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control m-1"
                            placeholder="Is Convenor?"
                            name="isConvenor"
                            style={{ width: "50%" }}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={input.isConvenor}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw"></i>

                          <input
                            type="tel"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Phone No."
                            name="contact"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={input.contact}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="email"
                            name="email"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={input.email}
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
