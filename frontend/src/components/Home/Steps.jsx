import React from 'react';
import './Home.css'; 
import { motion } from "framer-motion";
import  { contactAnimation } from '../../animation'
import { useScroll } from "../useScroll"
export default function Steps() {
  const [element, controls] = useScroll();
  return (
    <div className="steps-container" style={{ marginTop: '150px' }} ref={element}  >
      <motion.div className="steps"
      variants={contactAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        		<div className="row justify-content-center text-center mb-3">
			<div className="col-lg-8 col-xl-7">
				<span className="text-muted">Let's Understand</span>
				<h1 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }}>Know the Process</h1>
				<p className="lead mb-5" style={{ color: 'white' }}>From finding the club that best suits you to getting into it</p>
			</div>
		</div>
      <ol className='row' style={{ '--length': 4 }} role="list">
        <li style={{ '--i': 1 }}>
          <h3>Find Your Interest</h3>
          <p>
          Discover a vibrant array of clubs tailored to your interests in our Explore Clubs section. Whether you're passionate about coding, sports, or the arts, our platform provides you to navigate and connect with like-minded individuals.
          </p>
        </li>
        <li style={{ '--i': 2 }}>
          <h3>Send a Request</h3>
          <p>
          Express your enthusiasm by crafting a personalized request to the club that aligns with your interests. Your message could include your background, why the club resonates with you, and how you hope to contribute. 
          </p>
        </li>

        <li style={{ '--i': 3 }}>
          <h3 >Selection Process</h3>
          <p>
          Convenor will carefully review your message, taking into account your passion and reasons for wanting to join. If your request aligns with the club's ethos, the convenor may schedule an interview to get to know you better. 
          </p>
        </li>
        <li style={{ '--i': 4 }}>
          <h3>Join the Club</h3>
          <p>
          If your request is approved,  you will be an integral part of the club. As a club member, you'll have the chance to contribute your unique skills, learn from fellow members.
          </p>
        </li>
      </ol>
      </motion.div>
    </div>
  );
}
