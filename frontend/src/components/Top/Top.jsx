import React from 'react'
import './top.css'
import logo from '../../assets/logo.jpg'
export default function Top() {
  return (
    <div>
      <div className="top-cont">
        <div className="quick-contact">
            <ul className='top-ul' >
                <li className="quick-call top-li">
                    <i className="fa-solid fa-phone top-i"></i>
                    781477XXXXX
                </li>
                <li className="quick-email top-li">
                    <i className="fa-solid fa-envelope top-i"></i>
                    adminuiet@pu.ac.in
                </li>
            </ul>
        </div>
        <div className="uiet">
            <div className="uiet-inner">
                    <img src={logo} alt="" className="logo-img" />
                    <h2 className="uiet-name">
                        University Institute of Engineering And Technology  <br  />
                        <h2  className="uiet-name"> 
                            Club Connect
                        </h2>
                    </h2>

            </div>
        </div>
      </div>
      
    </div>
  )
}
