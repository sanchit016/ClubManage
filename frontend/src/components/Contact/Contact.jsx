import React from 'react'
import './Contact.css'
import Contact2 from './Contact2'
export default function Contact() {
  return (
    <>
    <div className="cont-head">
            <h2>Have a Feedback or a Question?</h2>
            <h1>Contact Us</h1>
            </div>
    <div className="cont-wrap">
    <div className='contact-cont' >
      <div className="contact-us">
        <h1>Contact</h1>
        <p className="name-uiet">University Institute of Engineering And Technology</p>
        <p className="name-uiet" >Sector-25, South Campus, </p>
        <p className="name-uiet">Panjab University</p>
        <p className="name-uiet">Chandigarh, Union Territory</p>
        <p className="name-uiet"><strong>India</strong></p>
        <h3>Pincode: 160014</h3>
        <ul>
            <li>0172-2541242</li>
            <li>directoruiet@pu.ac.in</li>
        </ul>
      </div>
    </div>
    <div className="email">
        <Contact2 />
    </div>
    </div>
    </>
  )
}
