import React, { useEffect, useState } from "react";
import img from "../assets/logo.jpg";
import "./Events.css";
import { motion } from "framer-motion";
import { contactAnimation } from "../animation";
import { useScroll } from "../../src/components/useScroll";
import { useParams } from "react-router-dom";
import { getEventById, getClubById } from "../services/user";
export default function Events() {
  const { eventId } = useParams();
  const [element, controls] = useScroll();
  const [eventData, setEventData] = useState(null);
  const [clubData, setClubdata] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await getEventById(eventId);
        const clubData = await getClubById(response.data.event.clubId)
        setClubdata(clubData.data.club)
        setEventData(response.data.event); 
        
      } catch (error) {
        console.error("Error fetching event data:", error.message);
      }
    };

    fetchEventData();
  }, [eventId]);

  function parseDateString(dateString) {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedDateWithoutCommas = formattedDate.replace(/,/g, "");

    return formattedDateWithoutCommas;
  }

  function formatTimeString(dateString) {
    const date = new Date(dateString);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = date.toLocaleTimeString("en-US", options);
    return formattedTime;
  }

  return (
    <div className="event-cont" style={{ marginTop: "100px" }} ref={element}>
      <motion.div
        className="event-cont"
        variants={contactAnimation}
        animate={controls}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="features-head">
          <h1
            className="display-4"
            style={{ color: "#21e6c1", fontWeight: "400" }}
          >
            {eventData && eventData.name}
          </h1>
          <p className="lead mb-0" style={{ color: "white" }}>
            Read more about this event
          </p>
        </div>

        <div className="event-box">
          <img src={img} alt="" />
          <div className="event-details">
            <h2
              className="display-4 mb-3"
              style={{ color: "#21e6c1", fontWeight: "400" }}
            >
              {clubData && clubData.name}
            </h2>
            {/* <h3 className="lead mt-5" style={{ color: 'white' }}>Club Convenor</h3> */}
            <div className="event-time mb-5">
              <h2 className="date">
                {eventData && parseDateString(eventData.date.toString())}
              </h2>
              <div className="times">
                <p>
                  {eventData && formatTimeString(eventData.startTime)} -{" "}
                  {eventData && formatTimeString(eventData.endTime)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="event-abt">{eventData && eventData.description}</div>

        {/*<button className="edit-event">Edit Event</button>*/}
      </motion.div>
    </div>
  );
}
