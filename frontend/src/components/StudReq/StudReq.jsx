import React from 'react'
import './studreq.css'
export default function StudReq() {
  return (
    <div className='req-wrapper'>
    
    <div className='req-form' >
        
    <form>
    <h2 className='req-head' >Request to Join Club</h2>
    <div className="form-outline mb-4 form-grup">

        <div className="form-grup2">
            <label className="form-label" for="form4Example1">Name</label>
            <input type="text" id="form4Example1" className="form-control" />
        </div>
        <div className="form-grup2">
            <label className="form-label" for="form4Example2">Contact</label>
            <input type="phone" id="form4Example2" className="form-control" />
        </div>
    </div>
    <div className="form-outline mb-4 form-grup">
        <div className="form-grup2">
            <label className="form-label" for="form4Example2">Branch</label>
            <select id="form4Example2" className="form-control">
                <option default >Select</option>
                <option value="CSE">Computer Science (CSE)</option>
                <option value="ECE">Electronics and Communication (ECE)</option>
                <option value="IT">Information Technology (IT)</option>
                <option value="EEE">Electrical and Electronics (EEE)</option>
                <option value="Mech">Mechanical Engineering (Mech)</option>
                <option value="BioTech">Biotechnology (BioTech)</option>
            </select>
        </div>

        <div className="form-grup2">
            <label className="form-label" for="form4Example2">Year</label>
            <select id="form4Example3" className="form-control">
                <option default >Select</option>
                <option value="I">Year I</option>
                <option value="II">Year II</option>
                <option value="III">Year III</option>
                <option value="IV">Year IV</option>
            </select>
        </div>
    </div>
  
  <div className="form-outline mb-4 form-grup">
    <div className="form-grup2-box">
        <label className="form-label" for="form4Example3">One reason you want to join</label>
        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
    </div>
  </div>
  
  <button type="submit" className="btn req-btn mb-4">Send</button>
</form>
</div>
    </div>
  );
}

