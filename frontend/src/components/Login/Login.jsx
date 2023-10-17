import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookies";
// import { AlertDanger } from "../Alerts/Alerts";
import { AlertDanger } from "../Alerts/Alerts";
import img from '../../assets/login.jpg'
export default function Login() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [user, setUser] = useState("student");
  const Navigate = useNavigate();
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    e.preventDefault();
    let response;

    if (user == "admin") {
      console.log(`hello`);
      response = await Axios.post(
        "http://localhost:8080/api/admin/login",
        {
          email: input.username,
          password: input.password,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      if (user == "student") {
        response = await Axios.post("http://localhost:8080/api/student/login", {
          email: input.username,
          password: input.password,
        });
      }
      if (user == "teacher") {
        response = await Axios.post("http://localhost:8080/api/teacher/login", {
          email: input.username,
          password: input.password,
        });
        // var temp = await Cookies.get("jwt");
      }
    }

    // console.log(temp);
    //response = response.data;
    // console.log(response);
    // Cookies.set('username', username, { expires: 7 });
    if (!response.success) {
      alert(response.message);
    } else {
      if (user == "admin") {
        console.log(`yo`);
        Navigate("/adminDashboard");
      }
      if (user == "teacher") {
        Navigate("/teacherDashboard");
      }
      if (user == "student") {
        Navigate("/studentDashboard");
      }
    }
  };
  return (
    <>
      <section
        className=" mt-5 "
        style={{ backgroundColor: "#eee", height: "75vh" }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body ">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1  mt-2">
                        Login
                      </p>

                      <form className="mx-1 mx-md-3">
                        <div
                          className="d-flex mb-5 mt-3 "
                          style={{
                            width: "100%",
                            justifyContent: "space-between",
                          }}
                        >
                          {user != "admin" ? (
                            <div
                              style={{
                                height: "75px",
                                width: "75px",
                                backgroundColor: "#294a70",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="btn"
                              onClick={(e) => {
                                setUser("admin");
                                // console.log(user);
                              }}
                            >
                              <i className="fa-solid fa-lock admin"></i>
                            </div>
                          ) : (
                            <div
                              style={{
                                height: "75px",
                                width: "75px",
                                backgroundColor: "#294a70",
                                borderRadius: "50%",
                                cursor: "pointer",
                                border: "3px solid  #ffab1f",
                                boxShadow: "3px 3px 3px 3px",
                              }}
                              className="btn"
                              onClick={(e) => {
                                setUser("admin");
                              }}
                            >
                              <i className="fa-solid fa-lock admin"></i>
                            </div>
                          )}
                          {user != "teacher" ? (
                            <div
                              style={{
                                height: "75px",
                                width: "75px",
                                backgroundColor: "#294a70",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="btn"
                              onClick={(e) => {
                                setUser("teacher");
                                // console.log(user);
                              }}
                            >
                              <i className="fa-solid fa-chalkboard-user teacher"></i>
                            </div>
                          ) : (
                            <div
                              style={{
                                height: "75px",
                                width: "75px",
                                backgroundColor: "#294a70",
                                borderRadius: "50%",
                                cursor: "pointer",
                                border: "3px solid  #ffab1f",
                                boxShadow: "3px 3px 3px 3px",
                              }}
                              className="btn"
                              onClick={async (e) => {
                                setUser("teacher");
                                // console.log(user);
                              }}
                            >
                              <i className="fa-solid fa-chalkboard-user teacher"></i>
                            </div>
                          )}
                          {user != "student" ? (
                            <div
                              style={{
                                height: "75px",
                                width: "75px",
                                backgroundColor: "#294a70",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              className="btn "
                              onClick={(e) => {
                                setUser("student");
                              }}
                            >
                              <i className="fa-solid fa-child student"></i>
                            </div>
                          ) : (
                            <div
                              style={{
                                height: "75px",
                                width: "75px",
                                backgroundColor: "#294a70",
                                borderRadius: "50%",
                                cursor: "pointer",
                                border: "3px solid  #ffab1f",
                                boxShadow: "3px 3px 3px 3px",
                              }}
                              className="btn"
                              onClick={(e) => {
                                setUser("student");
                              }}
                            >
                              <i className="fa-solid fa-child student"></i>
                            </div>
                          )}
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
                            className="btn  btn-lg m-2"
                            style={{
                              backgroundColor: "#294a70",
                              color: "white",
                            }}
                            onClick={(e) => {
                              submit(e);
                            }}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={img}
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
