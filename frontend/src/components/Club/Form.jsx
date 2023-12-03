import React, { useState } from 'react';
import { raiseClubJoinRequest } from '../../services/student';
import './Club.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../../userContext';
import { motion } from "framer-motion";
import { contactAnimation } from '../../animation'
import { useScroll } from "../useScroll"
export default function Form({clubId}) {
  const { isLoggedIn, setLoggedIn, loggedId, setLoggedId } = useUser();
  const [element, controls] = useScroll();
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
        await raiseClubJoinRequest(clubId, formData.description, formData.branch, formData.year, formData.contact, formData.name);
        toast.success('Request submitted successfully');
        
      } catch (error) {
        toast.error(error);
      }
    };

    const isUserAlreadyMember = loggedId && loggedId.currMembership.includes(clubId);
    const hasUserRequested = loggedId && loggedId.reqMembership.some(req => req.clubId === clubId);
      
        if (isUserAlreadyMember) {
          return (
            <div className='features-head mb-5'>
              <h1 className="display-4" style={{ color: '#21e6c1', fontWeight: '400' }}>Already a part of this club</h1>
              <p className="lead mb-0" style={{ color: 'white' }}>So you cannot send a membership request</p>
            </div>
          );
        }
      
        if (hasUserRequested) {
          return (
            <div className='features-head mb-5'>
              <h1 className="display-4" style={{ color: '#21e6c1', fontWeight: '400' }}>Already sent Request</h1>
              <p className="lead mb-0" style={{ color: 'white' }}>So you cannot send a membership request</p>
            </div>
          );
        }
        if(isLoggedIn == 'none'){
          return (
            <div className='features-head mb-5'>
              <h1 className="display-4" style={{ color: '#21e6c1', fontWeight: '400' }}>Login to send Request</h1>
              <p className="lead mb-0" style={{ color: 'white' }}>You have to login as a studnet to be able to send request</p>
            </div>
          )
        }
        return (
          
        <div ref={element} >
      <motion.div
      variants={contactAnimation}
      animate={controls}
      transition={{ delay: 0.7, duration: 0.6, type: "tween" }}
      >
     <div className="stud-form-cont container-fluid px-1 py-2 mx-auto" >
        <div className="row d-flex justify-content-center" >
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center" >
        <h1 className="display-4" style={{ color: '#21e6c1', fontWeight:'400' }}>Curious About Membership?</h1>
        <p className="lead mb-0" style={{ color: 'white' }}>Send us a Join Club Request!</p>
        <div className="card-form" style={{ backgroundColor: '#278ea5', color: '#071e3d', fontWeight: '600' }}>
        <form className='form-card' onSubmit={handleSubmit}>
          
        <div className="row justify-content-between text-left">
        
            <div className="form-group col-sm-12 flex-column d-flex">
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
              <input
                id="branch"
                className="form-control"
                name="branch"
                onChange={handleChange} 
                value = {loggedId.branch}
              />
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
  </motion.div>
  </div>
  )
}

