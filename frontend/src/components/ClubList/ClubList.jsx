import React from 'react'
import './ClubList.css'
import img from '../../assets/header.jpg'
export default function ClubList() {
  return (
    <div className='club-wrapper'>
      <div className="title h1 text-center list-head">Our Clubs</div>
      <div className="container py-3">
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">Club Name</h4>
                <p className="card-text">
                  Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quisquam officia quam provident ipsam maxime recusandae molestias reprehenderit consectetur. Soluta.
                </p>
                <p className="card-text">
                  Incharge: 
                </p>
                <br />
                <a href="#" className="mt-auto btn list-btn">Read More</a>
              </div>
              
            </div>
            <div class="col-md-2 list-img-box">
              <img className='list-img' src={img} />
            </div>
          </div>
         </div>   
      </div>

      <div className="container py-3">
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">Club Name</h4>
                <p className="card-text">
                  Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quisquam officia quam provident ipsam maxime recusandae molestias reprehenderit consectetur. Soluta.
                </p>
                <p className="card-text">
                  Incharge: 
                </p>
                <br />
                <a href="#" className="mt-auto btn list-btn">Read More</a>
              </div>
              
            </div>
            <div class="col-md-2 list-img-box">
              <img className='list-img' src={img} />
            </div>
          </div>
         </div>   
      </div>

      <div className="container py-3">
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">Club Name</h4>
                <p className="card-text">
                  Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quisquam officia quam provident ipsam maxime recusandae molestias reprehenderit consectetur. Soluta.
                </p>
                <p className="card-text">
                  Incharge: 
                </p>
                <br />
                <a href="#" className="mt-auto btn list-btn">Read More</a>
              </div>
              
            </div>
            <div class="col-md-2 list-img-box">
              <img className='list-img' src={img} />
            </div>
          </div>
         </div>   
      </div>

      <div className="container py-3">
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">Club Name</h4>
                <p className="card-text">
                  Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quisquam officia quam provident ipsam maxime recusandae molestias reprehenderit consectetur. Soluta.
                </p>
                <p className="card-text">
                  <strong> Incharge: </strong>
                </p>
                <br />
                <a href="#" className="mt-auto btn list-btn">Read More</a>
              </div>
              
            </div>
            <div class="col-md-2 list-img-box">
              <img className='list-img' src={img} />
            </div>
          </div>
         </div>   
      </div>

    </div>
  )
}
