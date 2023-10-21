import React, { useState } from 'react';
import { raiseClubJoinRequest } from '../../services/student';
import './Club.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
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
    <div className="stud-form-cont container-fluid px-1 py-2 mx-auto" >
        <div className="row d-flex justify-content-center" >
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center" >
        <h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>Curious About Membership?</h1>
        <p className="lead mb-0" style={{ color: 'white' }}>Send us a Join Club Request!</p>
        <div className="card" style={{ backgroundColor: '#278ea5', color: '#071e3d', fontWeight: '600' }}>
        <form className='form-card' onSubmit={handleSubmit}>
          
        <div className="row justify-content-between text-left">
        <div className="form-group col-sm-6 flex-column d-flex">
              <label className="form-control-label px-3" htmlFor="form4Example1">
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
            <div className="form-group col-sm-6 flex-column d-flex">
              <label className="form-control-label px-3" htmlFor="form4Example2">
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
          <div className="row justify-content-between text-left">
          <div className="form-group col-sm-6 flex-column d-flex">
              <label className="form-control-label px-3" htmlFor="branch">
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

            <div className="form-group col-sm-6 flex-column d-flex">
              <label className="form-control-label px-3" htmlFor="year">
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

        <div className="row justify-content-between text-left mt-3 mb-4">
        <div className="form-group col-12 flex-column d-flex">
            <label className="form-control-label px-3" htmlFor="form4Example3">
              Message
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
        <div className="row justify-content-end">
        <div className="form-group col-sm-6"> 
        <button type="submit" className="btn reqs-btn mb-4" >
          Send
        </button>
        </div>
        </div>
      </form>
      </div>
    </div>
    </div>
  </div>
  );
}

