import React, { useState } from 'react';
import { raiseClubJoinRequest } from '../../services/student';
import './studreq.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function StudReq() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        branch: '',
        year: '',
        description: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const clubId='652a0ceb0ffe31786c31ea0e';
          await raiseClubJoinRequest(clubId, formData.description, formData.branch, formData.year, formData.contact, formData.name);
          alert('Request submitted successfully');
          toast.success('Request submitted successfully', {
            position: 'top-right',
            autoClose: 3000, 
          });
          
        } catch (error) {
          console.error('Request error', error);
        }
      };
  return (
    <div className="req-wrapper">
      <div className="req-form">
        <form onSubmit={handleSubmit}>
          <h2 className="req-head">Request to Join Club</h2>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2">
              <label className="form-label" htmlFor="form4Example1">
                Name
              </label>
              <input
                type="text"
                id="form4Example1"
                className="form-control"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-grup2">
              <label className="form-label" htmlFor="form4Example2">
                Contact
              </label>
              <input
                type="phone"
                id="form4Example2"
                className="form-control"
                name="contact" 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2">
              <label className="form-label" htmlFor="branch">
                Branch
              </label>
              <select
                id="branch"
                className="form-control"
                name="branch"
                onChange={handleChange} 
              >
                <option defaultValue>Select</option>
                <option value="CSE">Computer Science (CSE)</option>
                <option value="ECE">Electronics and Communication (ECE)</option>
                <option value="IT">Information Technology (IT)</option>
                <option value="EEE">Electrical and Electronics (EEE)</option>
                <option value="Mech">Mechanical Engineering (Mech)</option>
                <option value="BioTech">Biotechnology (BioTech)</option>
              </select>
            </div>

            <div className="form-grup2">
              <label className="form-label" htmlFor="year">
                Year
              </label>
              <select
                id="year"
                className="form-control"
                name="year" 
                onChange={handleChange} 
              ><option defaultValue>Select</option>
              <option value="I">Year I</option>
              <option value="II">Year II</option>
              <option value="III">Year III</option>
              <option value="IV">Year IV</option>
            </select>
          </div>
        </div>

        <div className="form-outline mb-4 form-grup">
          <div className="form-grup2-box">
            <label className="form-label" htmlFor="form4Example3">
              One reason you want to join
            </label>
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
              name="description" 
              onChange={handleChange} 
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn req-btn mb-4">
          Send
        </button>
      </form>
    </div>
  </div>
  );
}

