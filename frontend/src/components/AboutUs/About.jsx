import React from "react";
import Carousel from "../Carousel/Carousel";
import { motion } from "framer-motion";
import { testimonialsAnimations } from '../../animation'
import { useScroll } from "../useScroll"
export default function About() {
  const [element, controls] = useScroll();
  return (
    <>
    
      
      
      <Carousel />
      <section
        className=" mt-3 "
        style={{ backgroundColor: "#071e3d", padding: "10px" }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ padding: "15px" }}
        >
          <div className="" style={{ width: "50%", padding: "4%", marginLeft: "2%"}}>
            <img
              src="https://media.licdn.com/dms/image/C510BAQEsglvLYqmnPw/company-logo_200_200/0/1580462343021?e=1705536000&v=beta&t=Z2Zqn9p8KdiwzqG2Oc8yJeXVHFdvkdX3Ik-PHKeyMa0"
              alt=" image1"
              style={{ height: "280px", borderRadius: "50%" }}
            />
          </div>
          <div style={{ width: "50%", padding: "2%", marginRight: "10%" }}>
            <h2 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }} >Training And Placement Cell(TPC)</h2>
            <p style={{ color: 'white' }} >
              The UNIVERSITY INSTITUTE OF ENGINEERING AND TECHNOLOGY, a
              department of PANJAB UNIVERSITY has prospered by leaps and bounds
              over the years achieving great academic heights besides foraying
              into the top 50 finest engineering colleges of the country. The
              sincere efforts made by the glorious alumni in the progress of the
              institute has further strengthened its fundamentals in a short
              span of time. The atmosphere of creativity and the enterprising
              attitude of the students has promoted a spirit of innovation.
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ padding: "15px" }}
        >
          <div style={{ width: "50%", padding: "4%", marginLeft: "2%"}}>
          <h2 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }} >Brand And Promotion Comittee(BPC)</h2>
            <p  style={{ color: 'white' }}>
              The Brand Promotion Committee is a Student-centric community with
              one goal i.e building UIET as a brand. From organizing Orientation
              to fun events like Legacy, webinars, and much more! We've made a
              family that promotes the work culture in a fun yet formal way. We
              encourage new members to develop skills that assist them not only
              in organizing and managing events but also to work in professional
              environments. Many students when they get into colleges, do not
              get the right exposure and the knack for being in a position to
              organize events and being in a higher authoritative place in
              general. Team BPC stands with their Motto which is "Think Out of
              the Box!" and focuses on making UIET a better place by promoting
              the right work culture among the students.
            </p>
          </div>
          <div className="" style={{ width: "50%", padding: "2%", marginLeft: "10%"}}>
            <img
              src="data:image/png;base64,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"
              alt=" image1"
              style={{ height: "280px", borderRadius: "50%", marginTop: "20%" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ padding: "15px" }}
        >
          <div className="" style={{ width: "50%", padding: "4%", marginLeft: "2%"}}>
            <img
              src="https://i.ytimg.com/vi/dpB7sXgNDfs/mqdefault.jpg"
              alt=" image1"
              style={{ height: "280px", width: "350px", borderRadius: "50%" }}
            />
          </div>
          <div style={{ width: "50%", padding: "2%", marginRight: "10%" }}>
          <h2 className="display-5" style={{ color: '#21e6c1', fontWeight:'400' }} >Goonj</h2>
            <p  style={{ color: 'white' }}>
              Goonj is the annual cultural festival of UIET, Panjab University,
              Chandigarh. It is a platform for students to showcase their
              talents and showcase the cultural diversity of the institution.
              The festival is eagerly awaited by students and staff alike and is
              a much-needed break from the rigors of academic life. Goonj is a
              celebration of art, music, dance, and culture, and it brings
              together students from different backgrounds and cultures to
              create a truly vibrant and inclusive environment. The festival is
              organized by a team of dedicated students and is supported by the
              faculty and staff of UIET. The festival is an opportunity for
              students to showcase their talents, network with peers and
              industry professionals, and create lifelong memories.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
