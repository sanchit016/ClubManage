import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { homeAnimation } from "../../animation";
import { useScroll } from "../useScroll";
import { useUser } from "../../userContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const [element, controls] = useScroll();
  const [input, setInput] = useState({ username: "", password: "" });
  const [user, setUser] = useState("student");
  const { isLoggedIn, setLoggedIn, loggedId, setLoggedId } = useUser();
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
      console.log("hello");
      response = await axios.post(
        "http://localhost:8080/api/admin/login",
        {
          email: input.username,
          password: input.password,
        },
        { withCredentials: true }
      );
    }
    if (user == "student") {
      response = await axios.post(
        "http://localhost:8080/api/student/login",
        {
          email: input.username,
          password: input.password,
        },
        { withCredentials: true }
      );
      console.log(response.data.data.student)
      setLoggedId(response.data.data.student)
    }

    if (user == "teacher") {
      console.log(`teacher login`);

      response = await axios.post(
        "http://localhost:8080/api/teacher/login",
        {
          email: input.username,
          password: input.password,
        },
        { withCredentials: true }
      );
      console.log(response)
      setLoggedId(response.data.data.teacher)
    }
    if (user == "convenor") {
      
      response = await axios.post(
        "http://localhost:8080/api/convenor/login",
        {
          email: input.username,
          password: input.password,
        },
        { withCredentials: true }
      );
      console.log(response)
      setLoggedId(response.data.data.student)
    }
    // console.log(response);
    response = response.data;

    if (!response.success) {
      toast.error(response.message,  {
        closeOnClick:true,
        theme:'dark'
      });
    } else {
      localStorage.setItem("User", user)
      if (user == "admin") {
        toast.success('Successfully Logged In', {
          closeOnClick:true,
          theme:'dark'
        })
        setLoggedIn("admin");
        Navigate("/admin/adminHome");
      }
      if (user == "teacher") {
        toast.success('Successfully Logged In', {
          closeOnClick:true,
          theme:'dark'
        })
        setLoggedIn("teacher");
        console.log(response);
        localStorage.setItem("clubId", response.data.teacher.assignedClub);
        Navigate("/teacher/teacherHome");
      }
      if (user == "student") {
        toast.success('Successfully Logged In', {
          closeOnClick:true,
          theme:'dark'
        })
        setLoggedIn("student");
        console.log("student");
        console.log(response);
        if (response.data.student.isConvenor == true) {
          let convenorGetClubIdResponse = await axios.get(
            "http://localhost:8080/api/convenor/get-club-id",

            { withCredentials: true }
          );

          convenorGetClubIdResponse = convenorGetClubIdResponse.data.data;
          localStorage.setItem("clubId", convenorGetClubIdResponse.clubId);
        }
        Navigate("/home");
      }
      if (user == "convenor") {
        toast.success('Successfully Logged In', {
          closeOnClick:true,
          theme:'dark'
        })
        console.log(response);
        Navigate("/convenor/convenorHome");
      }
    }
  };
  return (
    <>
      <div ref={element} className="stud-form-cont">
        <motion.div
          variants={homeAnimation}
          animate={controls}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        >
          <div className="row d-flex justify-content-center contact-head">
            <div
              className="col-xl-7 col-lg-8 col-md-9 col-11 text-center"
              style={{ marginTop: "100px" }}
            >
              <h1
                className="display-5"
                style={{ color: "#21e6c1", fontWeight: "400" }}
              >
                Login
              </h1>
              <p className="lead mb-5" style={{ color: "white" }}>
                Login to explore clubs and send requests
              </p>

              <div className="contact-child d-flex justify-content-center ">
                <form className="log-form w-10">
                  <div className="row justify-content-between ">
                    <div className="form-group  col-sm-12 flex-column d-flex">
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
                              backgroundColor: "#21e6c1",
                              color: "#071e3d",
                              margin: "20px",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="btn"
                            onClick={(e) => {
                              setUser("admin");
                              // console.log(user);
                            }}
                          >
                            <i
                              className="fa-solid fa-lock admin"
                              style={{ color: "#071e3d" }}
                            ></i>
                          </div>
                        ) : (
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "#21e6c1",
                              color: "#071e6d",
                              margin: "20px",
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
                            <i
                              className="fa-solid fa-lock admin"
                              style={{ color: "#071e3d" }}
                            ></i>
                          </div>
                        )}
                        {user != "teacher" ? (
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "#21e6c1",
                              color: "#071e6d",
                              margin: "20px",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="btn"
                            onClick={(e) => {
                              setUser("teacher");
                              // console.log(user);
                            }}
                          >
                            <i
                              className="fa-solid fa-chalkboard-user teacher"
                              style={{ color: "#071e3d" }}
                            ></i>
                          </div>
                        ) : (
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "#21e6c1",
                              color: "#071e6d",
                              margin: "20px",
                              borderRadius: "50%",
                              cursor: "pointer",
                              border: "3px solid  #ffab1f",
                              boxShadow: "3px 3px 3px 3px",
                            }}
                            className="btn"
                            onClick={async (e) => {
                              setUser("teacher");
                              console.log(user);
                            }}
                          >
                            <i
                              className="fa-solid fa-chalkboard-user teacher"
                              style={{ color: "#071e3d" }}
                            ></i>
                          </div>
                        )}
                        {user != "student" ? (
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "#21e6c1",
                              color: "#071e6d",
                              margin: "20px",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="btn "
                            onClick={(e) => {
                              setUser("student");
                            }}
                          >
                            <i
                              className="fa-solid fa-child student"
                              style={{ color: "#071e3d" }}
                            ></i>
                          </div>
                        ) : (
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "#21e6c1",
                              color: "#071e6d",
                              margin: "20px",
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
                            <i
                              className="fa-solid fa-child student"
                              style={{ color: "#071e3d" }}
                            ></i>
                          </div>
                        )}
                        
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i
                          className="fas fa-envelope fa-lg me-3 fa-fw"
                          style={{ color: "#21e6c1" }}
                        ></i>

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
                        <i
                          className="fas fa-lock fa-lg me-3 fa-fw"
                          style={{ color: "#21e6c1" }}
                        ></i>

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
                            backgroundColor: "#21e6c1",
                            color: "#071e3d",
                            width: "50%",
                            fontWeight: "700",
                            fontSize: "24px",
                          }}
                          onClick={(e) => {
                            console.log(user);
                            submit(e);
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
