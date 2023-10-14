import React from "react";
import { useState } from "react";
export default function Login() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    // e.preventDefault();
    // let response = await Axios.post("http://localhost:5000/login", {
    //   username: input.username,
    //   password: input.password,
    // });
    // response = response.data;
    // if (!response.success) {
    //   alert(response.message);
    // } else {
    //   localStorage.setItem("email", response.username);
    //   localStorage.setItem("name", response.name);
    //   Navigate("/");
    // }
  };
  return (
    <>
      <section
        className=" mt-5 "
        style={{ "background-color": "#eee", height: "75vh" }}
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
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "grey",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              setUser("admin");
                            }}
                          >
                            <img src="" alt="Admin" />
                          </div>
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "grey",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              setUser("teacher");
                            }}
                          >
                            <img src="" alt="Teacher" />
                          </div>
                          <div
                            style={{
                              height: "75px",
                              width: "75px",
                              backgroundColor: "grey",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              setUser("student");
                            }}
                          >
                            <img src="" alt="Student" />
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
                            className="btn  btn-lg m-2"
                            style={{ backgroundColor: "#294a70" }}
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
