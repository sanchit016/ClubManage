import React from "react";
import car1 from '../../assets/car1 (1).png'
import car2 from '../../assets/car1 (2).png'
import car3 from '../../assets/car1 (3).png'
import { motion } from "framer-motion";
import { pricingAnimation } from '../../animation'
import { useScroll } from "../useScroll"

export default function Carousel() {
  const [element, controls] = useScroll();
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" ref={element} >
      <motion.div className="banner"
      variants={pricingAnimation}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={car1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={car2} alt="Second slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src={car3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </motion.div>
</div>
    </>
  );
}
