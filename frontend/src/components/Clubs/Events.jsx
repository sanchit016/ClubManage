import React from 'react';
import './events.css'

export default function Events() {
  return (
    <div className='event-wrap'>
    <h2 className='event-head' >Events of the Club</h2>
    <div className="event-container">
    
      {/* Start of Event Block 1 */}
      <div className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12 event-card">
          <div className="position-relative">
            <img src="https://www.bootdey.com/image/450x280/FFB6C1/000000" alt="" />
            <div className="events-date">
              <div className="font-size28">10</div>
              <div className="font-size14">Mar</div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
            <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
              <a href="event-details.html" className="text-theme-color">Business Conference</a>
            </h5>
            <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
              <li><i className="far fa-clock margin-10px-right"></i> 01:30 PM - 04:30 PM</li>
            </ul>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore</p>
            <a className="butn small margin-10px-top md-no-margin-top" href="event-details.html">
              Read More <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12 event-card">
          <div className="position-relative">
            <img src="https://www.bootdey.com/image/450x280/FFB6C1/000000" alt="" />
            <div className="events-date">
              <div className="font-size28">10</div>
              <div className="font-size14">Mar</div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
            <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
              <a href="event-details.html" className="text-theme-color">Business Conference</a>
            </h5>
            <ul className="event-time margin-10px-bottom md-margin-5px-bottom">
              <li><i className="far fa-clock margin-10px-right"></i> 01:30 PM - 04:30 PM</li>
              <li><i className="fas fa-user margin-5px-right"></i> Speaker: John Sminth</li>
            </ul>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore</p>
            <a className="butn small margin-10px-top md-no-margin-top" href="event-details.html">
              Read More <i className="fas fa-long-arrow-alt-right margin-10px-left"></i>
            </a>
            
          </div>
        </div>
      </div>
      {/* End of Event Block 1 */}

      {/* Repeat the above code for other event blocks */}
    </div>
    </div>
  );
}


