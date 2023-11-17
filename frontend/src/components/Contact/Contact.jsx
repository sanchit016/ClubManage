import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
import { motion } from "framer-motion";
import { homeAnimation } from '../../animation'
import { useScroll } from "../useScroll"

const Contact = ({darkMode}) => {
  const [element, controls] = useScroll();
  const form = useRef();

  const handleSend = () =>{
    alert("Mail has been sent!!")
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ds5atj",
        "template_tk8gjll",
        form.current,
        "27JceM2gG75iJkfXc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>

<div ref={element} className="stud-form-cont" >
      <motion.div 
      variants={homeAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
     
      >
        
    <div className="row d-flex justify-content-center contact-head">
      <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center" >
        <h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Any Queries or Feedback?</h1>
        <p className="lead mb-5" style={{ color: 'white' }}>Drop us a message and we'll get back to you!</p>
      </div>
    </div>
      <div className="contact-parent">
        <div className="contact-child child1">
            
        </div>
        <div className="contact-child child2">
            <div className="contact-form">
      <form ref={form} onSubmit={sendEmail} className='form2' >
      <div className="row justify-content-between ">
        <div className="form-group  flex-column d-flex">
        <h3>
               <span id="confirm"/>
            </h3>
            <div className="form-group col-sm-12 flex-column d-flex">
            <label className="form-control-label mt-3 px-3" htmlFor="name">
                Name
              </label>
            <input id="txt_name" name="user_name" type="text" Required="required" style={{ backgroundColor: 'white'}} />
            </div>
            <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
            <label className="form-control-label mt-3 px-3" htmlFor="email">
                Email
              </label>
              <input id="txt_email" name="email" type="text" Required="required" style={{ backgroundColor:  'white'}} />
              </div>

              <div className="form-group col-sm-6 flex-column d-flex">
            <label className="form-control-label mt-3 px-3" htmlFor="phone">
                Phone
              </label>
              <input id="txt_phone" type="text" Required="required" style={{ backgroundColor:  'white'}} />
              </div>
            </div>
            
            <label className="form-control-label mt-3 px-3" htmlFor="phone">
                Message
              </label>
            <textarea name="message" rows='4' Required="required" style={{ backgroundColor:  'white'}} />
        
        <input type="submit" value="Send" className="btn reqs-btn mt-4 w-100" onClick={handleSend} />
       
        </div>
        </div>
      </form>
    </div>
        </div>
      </div>
      </motion.div>
    </div>

    </>
  );
};

export default Contact;