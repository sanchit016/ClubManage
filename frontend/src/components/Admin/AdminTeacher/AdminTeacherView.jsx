import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function AdminTeacherView() {
  let slug = useParams();
  const id = slug.slug;
  const [teacher, setTeacher] = useState({});
  let response;
  const load_data = async () => {
    response = await axios.get(
      `http://localhost:8080/api/admin/get-teacher/${id}`,
      { withCredentials: true }
    );
    response = response.data;
    console.log(response);
    if (!response.success) {
      alert(response.message);
    } else {
      setTeacher(response.data.teacher);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <section
        className=" mt-3 ml-5"
        style={{
          "background-color": "#eee",
          padding: "50px",
          borderRadius: "3%",
          marginLeft: "5%",
        }}
      >
        <div
          className="container mt-5"
          style={{
            backgroundColor: "white",
            borderRadius: "2%",
            padding: "30px",
          }}
        >
          {teacher == "" ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2 className="mb-4">Teacher Details</h2>
              <table className="table table-bordered ">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{teacher.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{teacher.email}</td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{teacher.password}</td>
                  </tr>
                  <tr>
                    <th>Contact</th>
                    <td>
                      {teacher.contact == "" ? (
                        <p>None</p>
                      ) : (
                        <p>{teacher.contact}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>Assigned Club</th>
                    <td>
                      {teacher.assignedClub == "" ? (
                        <p>None</p>
                      ) : (
                        <p>{teacher.assignedClub}</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
