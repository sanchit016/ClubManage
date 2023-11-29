import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminClubEdit() {
  const slug = useParams();
  const id = slug.slug;
  const Navigate = useNavigate();
  const [teacherData, setTeachersData] = useState([]);
  const [teacher, setTeacher] = useState("");
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
    let response = await axios.patch(
      "http://localhost:8080/api/admin/edit-club",
      {
        name: input.name,
        description: input.description,
        teacherId: input.assignedTeacher,
        clubId: id,
      },
      {
        withCredentials: true,
      }
    );
    response = response.data;
    console.log(response);
    console.log(`edited`);
    if (!response.success) {
      toast.error(response.message, {
        closeOnClick:true,
        theme:'dark'
      });
    } else {
      toast.update('Changes updated',{
        closeOnClick:true,
        theme:'dark'
      })
      Navigate("/admin/adminClub");
    }
  };
  let responseData;
  const load_data = async () => {
    responseData = await axios.get(
      `http://localhost:8080/api/user/get-club/${id}`,
      {
        withCredentials: true,
      }
    );
    responseData = responseData.data;
    // console.log(responseData);
    if (!responseData.success) {
      alert(responseData.message);
    } else {
      setInput(responseData.data.club);
    }

    let teacherResponse = await axios.get(
      "http://localhost:8080/api/admin/get-teachers",
      {
        withCredentials: true,
      }
    );
    teacherResponse = teacherResponse.data;
    // console.log(teacherResponse);
    if (!teacherResponse.success) {
      alert(teacherResponse.message);
    } else {
      setTeachersData(teacherResponse.data.teachers);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex" style={{backgroundColor:"#071e3d"}}>
        <div
          style={{ position: "sticky", height: "100%", width: "20%" }}
          className=" bg-light"
        >
          <Sidebar />
        </div>
        <div
          style={{ backgroundColor: "#071e3d", width: "80%", marginLeft:"10%"}}
        >
          <section
            className="vh-75 mt-5 "
            style={{backgroundColor:"#071e3d", width:"80%"}}
          >
            <div className="container h-100" style={{backgroundColor:"#071e3d"}}>
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{backgroundColor:"#071e3d"}}
                  >
                    <div className="card-body " >
                      <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-12 order-2 order-lg-12">
                        <div className="row justify-content-center text-center mb-3">
                            <div className="col-lg-8 col-xl-7">
                              <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Edit Club</h1>
                              <p className="lead mb-5" style={{ color: 'white' }}>Edit name, teacher and description of club</p>
                            </div>
                          </div>

                          <form className="mx-1 mx-md-3">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-info fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>

                              <input
                              style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
                                type="text"
                                id="form3Example1c"
                                className="form-control m-1"
                                placeholder="Name"
                                name="name"
                                value={input.name}
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-person fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>

                              {/* <select
                                class="form-select"
                                aria-label="Default select example"
                                name="assignedTeacher"
                              >
                                <option
                                  selected
                                  onClick={() => {
                                    console.log(`st null`);
                                    setTeacher("");
                                  }}
                                >
                                  Select Teacher
                                </option>
                                {teacherData.length == 0 ? (
                                  <></>
                                ) : (
                                  teacherData.map((teacher) => {
                                    return (
                                      <option
                                        onSelect={(e) => {
                                          console.log(`hello option`);
                                          console.log(e.target.value);
                                          setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                          });
                                        }}
                                        onChange={(e) => {
                                          setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                          });
                                        }}
                                      >
                                        {teacher.name}
                                      </option>
                                    );
                                  })
                                )}
                              </select> */}

                              <select
                                name="assignedTeacher"
                                style={{backgroundColor:"#425b7c", border:"none", color:"white"}}
                                onChange={(e) => {
                                  console.log(
                                    `Selected teacher: ${e.target.value}`
                                  );
                                  setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                  });
                                }}
                              >
                                {teacherData.map((teacher) => (
                                  <option key={teacher.id} value={teacher._id} style={{backgroundColor:"#425b7c", border:"none", color:"white"}}>
                                    {teacher.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{color:"#21e6c1",fontSize:"24px"}}></i>

                              <textarea
                                type="text"
                                id="form3Example3c"
                                className="form-control m-2 "
                                placeholder="Description"
                                name="description"
                                value={input.description}
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                style={{height:"180px", backgroundColor:"#425b7c", border:"none", color:"white"}}
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
      </div>
    </>
  );
}
