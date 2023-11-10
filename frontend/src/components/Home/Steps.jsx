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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.
          </p>
        </li>
        <li style={{ '--i': 2 }}>
          <h3>Send a Request</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.
          </p>
        </li>

        <li style={{ '--i': 3 }}>
          <h3 >Selection Process</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.
          </p>
        </li>
        <li style={{ '--i': 4 }}>
          <h3>Join the Club</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.
          </p>
        </li>
      </ol>
      </motion.div>
    </div>
  );
}
