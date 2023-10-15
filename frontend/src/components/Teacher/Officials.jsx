import React from 'react';
import './officials.css'
function Officials() {
  return (
    <div className='off off-head'>
      <div className="container py-5 ">
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto ">
            <h1 className="display-4">Officials</h1>
            <p className="lead mb-0">We Add a Dash of Fun to Everything We Do.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col-xl-6 col-sm-2 mb-2">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              
              <h5 className="mb-0">Name of Incharge</h5>
              <p className="small text-uppercase text-muted">Incharge</p>
              <i className="fa-solid fa-envelope"></i>
              <p>Email id here</p>
              <i className="fa-solid fa-phone"></i>
              <p>Phone number here</p>
              
            </div>
          </div>

          <div className="col-xl-6 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              
              <h5 className="mb-0">Name of Convener</h5>
              <p className="small text-uppercase text-muted">Convener</p>
              <i className="fa-solid fa-envelope"></i>
              <p>Email id here</p>
              <i className="fa-solid fa-phone"></i>
              <p>Phone number here</p>
              <button className='event-btn btn' >Edit Convener</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Officials;
