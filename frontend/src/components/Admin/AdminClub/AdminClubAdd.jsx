import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import '../Admin.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminClubAdd() {
  const Navigate = useNavigate();
  const [teacherData, setTeachersData] = useState([]);
  // const [teacher, setTeacher] = useState("");
  // const [search, setSearch] = useState("");
  // const load_data = async () => {
  //   let teacherResponse = await axios.get(
  //     "http://localhost:8080/api/admin/get-teachers",
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   teacherResponse = teacherResponse.data;
  //   console.log(teacherResponse);
  //   if (!teacherResponse.success) {
  //     alert(teacgerResponse.message);
  //   } else {
  //     setTeachersData(teacherResponse.data.teachers);
  //   }
  // };
  const [input, setInput] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(input);
    let response = await axios.post(
      "http://localhost:8080/api/admin/create-club",
      {
        name: input.name,
        description: input.description,
        assignedTeacher: input.assignedTeacher,
      }
    );
    response = response.data;
    if (!response.success) {
      toast.error(response.message,  {
        closeOnClick:true,
        theme:'dark'
      });
    } else {
      toast.success('Club created successfully', {
        closeOnClick:true,
        theme:'dark'
      })
      Navigate("/admin/adminClub");
    }
  };

  // useEffect(() => {
  //   load_data();
  // }, []);
  return (
    <>
      <div className="d-flex" style={{backgroundColor:"#071e3d"}}>
        <div
          style={{ position: "sticky", height: "100%", width: "20%" }}
          className="bg-light"
        >
          <Sidebar />
        </div>
        <div
          style={{
            backgroundColor: "#071e3d",
            marginTop: "2%",
            width:"80%",
            marginLeft:"10%"
          }}
          className="mt-5 dash-form"
        >
          <section className="vh-75" style={{width:"80%"}}>
            <div className="container h-100 dash-forms">
              <div className="row d-flex  justify-content-center align-items-center h-100 dash-forms">
                <div className="col-lg-12 col-xl-11 dash-forms">
                  <div
                    className="card text-black dash-forms"
                    style={{ "border-radius": "25px", backgroundColor:"#071e3d", color:"white" }}
                  >
                    <div className="card-body dash-forms">
                      <div className="row justify-content-center  dash-forms">
                        <div className="text-align-center justigy-content-center  dash-forms">
                          <div className="row justify-content-center text-center mb-3">
                            <div className="col-lg-12 col-xl-12">
                              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Register Club</h1>
                              <p className="lead mb-5" style={{ color: 'white' }}>Specify a Club Name and description to create a club</p>
                            </div>
                          </div>
                          <form className=" dash-forms">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-info fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control m-1"
                                placeholder="Name"
                                name="name"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
                              />
                            </div>

                            {/* <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-person fa-lg me-3 fa-fw"></i>

                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option
                                  selected
                                  onClick={() => {
                                    setTeacher("");
                                  }}
                                >
                                  Select Teacher
                                </option>
                                {teacherData.length == 0 ? (
                                  <></>
                                ) : (
                                  teacherData
                                    .filter((teacher) =>
                                      teacher.name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                    )
                                    .map((teacher) => {
                                      return (
                                        <option
                                          onClick={() => {
                                            setTeacher(teacher.name);
                                          }}
                                        >
                                          {teacher.name}
                                        </option>
                                      );
                                    })
                                )}
                              </select>
                            </div> */}
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}} ></i>

                              <textarea
                                type="text"
                                id="form3Example3c"
                                className="form-control m-2 "
                                placeholder="Description"
                                name="description"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                style={{ height: "150px" ,backgroundColor:"#425b7c", border:"none", color:"white"}}
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
                                style={{backgroundColor:"#21e6c1", color:"black",fontWeight:"500", width:"50%", marginLeft: "5%" }}
                              >
                                Register
                              </button>
                            </div>
                          </form>
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
