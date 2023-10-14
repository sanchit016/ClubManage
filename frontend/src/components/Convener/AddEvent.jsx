import React from 'react'
import './studreq.css'
export default function AddEvent() {
  return (
    <div className='req-wrapper'>
    
    <div className='req-form' >
        
    <form>
    <h2 className='req-head' >Add an Event to your Club</h2>
    <div className="form-outline mb-4 form-grup">
    <div className="form-grup2-box">

        
            <label className="form-label" for="addEvent1">Name</label>
            <input type="text" id="addEvent1" className="form-control" />
            </div>
    </div>
    <div className="form-outline mb-4 form-grup">
    <div className="form-grup2-box">
            <label className="form-label" for="addEvent2">Images</label>
            <input type="image" id="addEvent2" className="form-control" />
            </div>
    </div>
    <div className="form-outline mb-4 form-grup">
        <div className="form-grup2-box">
            <label className="form-label" for="addEvent3"> Start Time</label>
            <input type="time" id="addEvent3" className="form-control" />
        </div>
        <div className="form-grup2-box">
            <label className="form-label" for="addEvent3"> End Time</label>
            <input type="time" id="addEvent4" className="form-control" />
        </div>
    </div>

    <div className="form-outline mb-4 form-grup">
        <div className="form-grup2-box">
            <label className="form-label" for="addEvent3">Date</label>
            <input type="date" id="addEvent5" className="form-control" />
        </div>
    </div>
  
  <div className="form-outline mb-4 form-grup">
    <div className="form-grup2-box">
        <label className="form-label" for="addEvent3">Description</label>
        <textarea className="form-control" id="addEvent6" rows="4"></textarea>
    </div>
  </div>
  
  <button type="submit" className="btn req-btn mb-4">Send</button>
</form>
</div>
    </div>
  );
}

