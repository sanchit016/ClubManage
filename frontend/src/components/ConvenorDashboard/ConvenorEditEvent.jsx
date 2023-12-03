import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ConvenorSidebar from "./ConvenorSidebar/ConvenorSidebar";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function ConvenorEditEvent() {
  const Navigate = useNavigate();
  const slug = useParams();
  const eventId = slug.slug;
  const [input, setInput] = useState({
    name: "",
    description: "",
    date: "",
    clubId: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const clubId = localStorage.getItem("clubId");
  const convenorId = localStorage.getItem("convenorId");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [attendanceUrl, setAttendanceUrl] = useState("");
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleChange = (e) => {
    const newUser = { ...input };
    newUser[e.target.name] = e.target.value;
    setInput(newUser);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    console.log(`file uploade`);
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(`handle upload click`);

    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/media/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setImageUrl(response.data.data.uploadedImage.secure_url);
      alert(`image file uploaded`);
      console.log(imageUrl);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  const [selectedAttendance, setSelectedAttendance] = useState(null);

  const handleFileChangeAttendance = (e) => {
    console.log(`file uploade`);
    setSelectedAttendance(e.target.files[0]);
  };

  const handleFormSubmitAttendance = async (e) => {
    e.preventDefault();
    console.log(`handle upload click`);

    if (!selectedAttendance) {
      console.error("No Attendance selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedAttendance);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/media/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setAttendanceUrl(response.data.data.uploadedImage.secure_url);
      console.log(attendanceUrl);
      alert(`attendance uploaded`);
      console.log(attendanceUrl);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error during Attendance upload:", error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(imageUrl);
    let response = await axios.patch(
      `http://localhost:8080/api/convenor/edit-event/${eventId}`,
      {
        name: input.name,
        description: input.description,
        date: input.date,
        startTime: startDate,
        endTime: endDate,
        image: imageUrl,
        clubId: clubId,
        convenorId: convenorId,
      },
      { withCredentials: true }
    );
    console.log(response);
    response = response.data;
    if (attendanceUrl != null) {
      console.log(`on add doc`);
      console.log(attendanceUrl);
      let attendanceResponse = await axios.post(
        `http://localhost:8080/api/convenor/add-doc/${eventId}`,
        {
          clubId: clubId,
          document: attendanceUrl,
        },
        { withCredentials: true }
      );
      console.log(attendanceResponse);
    }

    if (!response.success) {
      alert(response.message);
    } else {
      Navigate("/convenor/convenorHome");
    }
  };

  const loadData = async () => {
    var eventResponse = "";
    eventResponse = await axios.get(
      `http://localhost:8080/api/user/get-events/${eventId}`,
      {
        withCredentials: true,
      }
    );

    eventResponse = eventResponse.data.data.event;
    console.log(eventResponse);
    setInput(eventResponse);
    // setinput[input.name] = eventResponse.name;
    // input.description = eventResponse.description;
    // input.date = dayjs(eventResponse.date).format("DD/MM/YYYY");

    // if (eventResponse.startTime != null) {
    //   setStartDate(eventResponse.startTime);
    // }
    // if (eventResponse.endTime != null) {
    //   setEndDate(eventResponse.endTime);
    // }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="d-flex bg-light">
        <div style={{ position: "fixed", height: "75%", width: "20%" }}>
          <ConvenorSidebar />
        </div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.51, 0.2, 1],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          style={{
            marginLeft: "20%",
            backgroundColor: "white",
            width: "95%",
          }}
        >
          <div>
            <section className="vh-75 mt-5 ">
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
                              Edit Event
                            </p>

                            <form className="mx-1 mx-md-3">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control m-1"
                                  placeholder="Event Name"
                                  name="name"
                                  value={input.name}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-calendar fa-lg me-3 fa-fw"></i>

                                <input
                                  type="date"
                                  id="form3Example4cd"
                                  className="form-control"
                                  placeholder="Event Date"
                                  name="date"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                />
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-clock fa-lg me-3 fa-fw"></i>

                                <label>Start Time:</label>
                                <DatePicker
                                  selected={startDate}
                                  onChange={handleStartDateChange}
                                  showTimeSelect
                                  dateFormat="Pp"
                                />

                                <label>End Time:</label>
                                <DatePicker
                                  selected={endDate}
                                  onChange={handleEndDateChange}
                                  showTimeSelect
                                  dateFormat="Pp"
                                />
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-file fa-lg me-3 fa-fw"></i>

                                <input
                                  type="file"
                                  name="image"
                                  onChange={(e) => {
                                    handleFileChange(e);
                                  }}
                                  // encType="multipart/form-data"
                                />
                                <button
                                  onClick={(e) => {
                                    handleFormSubmit(e);
                                  }}
                                >
                                  Upload
                                </button>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-file fa-lg me-3 fa-fw"></i>

                                <input
                                  type="file"
                                  name="image"
                                  onChange={(e) => {
                                    handleFileChangeAttendance(e);
                                  }}
                                  // encType="multipart/form-data"
                                />
                                <button
                                  onClick={(e) => {
                                    handleFormSubmitAttendance(e);
                                  }}
                                >
                                  Upload Attendance
                                </button>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

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
                                  style={{ height: "120px" }}
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
                                  Edit
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
        </motion.div>
      </div>
    </>
  );
}
