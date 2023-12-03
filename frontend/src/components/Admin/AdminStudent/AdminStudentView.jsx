import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
export default function AdminTeacherView() {
  let slug = useParams();
  const id = slug.slug;
  const [student, setStudent] = useState({});
  let response;
  const load_data = async () => {
    response = await axios.get(
      `http://localhost:8080/api/admin/get-student/${id}`,
      { withCredentials: true }
    );
    response = response.data;
    if (!response.success) {
      alert(response.message);
    } else {
      setStudent(response.data.student);
    }
  };

  useEffect(() => {
    load_data();
  }, []);
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div>
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
              {student == "" ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <h2 className="mb-4">Student Details</h2>
                  <table className="table table-bordered ">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{student.name}</td>
                      </tr>
                      <tr>
                        <th>Branch</th>
                        <td>{student.branch}</td>
                      </tr>
                      <tr>
                        <th>Roll No</th>
                        <td>{student.rollNo}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{student.email}</td>
                      </tr>

                      <tr>
                        <th>Contact</th>
                        <td>
                          {student.contact == "" ? (
                            <p>None</p>
                          ) : (
                            <p>{student.contact}</p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Is Convenor?</th>
                        <td>
                          {student.isConvenor == false ? <p>No</p> : <p>Yes</p>}
                        </td>
                      </tr>
                      <tr>
                        <th>Current Membesrships of Clubs </th>
                        <td>
                          {student.currMembership.length() == 0 ? (
                            <p>None</p>
                          ) : (
                            <p>
                              {student.currMembership.map((membership) => {
                                return <div>{membership}</div>;
                              })}
                            </p>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
