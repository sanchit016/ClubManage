import React from 'react'
import Banner from '../components/Club/Banner'
import About from '../components/Club/About'
import Features from '../components/Club/Features'
import Events from '../components/Club/Events'
import Officials from '../components/Club/Officials'
import Form from '../components/Club/Form'
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { contactAnimation, homeAnimation } from '../animation'
import { useScroll } from "../components/useScroll"
import { useUser } from '../userContext';
export default function Club() {
  const { isLoggedIn, setLoggedIn } = useUser();
  const { clubId } = useParams();
  const [element, controls] = useScroll();
  return (
    <div  ref={element} >
    <motion.div className="banner"
      variants={contactAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      <Banner clubId={clubId} />
      <About clubId={clubId} />
      <Features clubId={clubId} />
      <Events clubId={clubId} />
      <Officials clubId={clubId} />
      {isLoggedIn ==='student' && <Form clubId={clubId} />}
    </motion.div>
    </div>
  )
}
