import React from 'react'
import './assign.css'
import Officials from '../Clubs/Officials'
export default function Assign() {
  return (
    <div>
        <h2 className="stud-head">Group Members</h2>
      <div className="stud-list">
      <table className="table align-middle mb-0 bg-white">
      <thead className="bg-light">
        <tr>
          <th>Name</th>
          <th>Branch</th>
          <th>Year</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              
              <div className="ms-3">
                <p className="fw-bold mb-1">Name</p>
                <p className="text-muted mb-0">Name@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">CSE</p>
          </td>
          <td>
            <p className="">IV</p>
          </td>
          <td>phone num</td>
        </tr>
        
        
      </tbody>
    </table>
      </div>
      <div className="off-cont">

      </div>
    </div>
  )
}
