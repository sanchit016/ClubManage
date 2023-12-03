import React, {useState, useEffect} from 'react'
import img from '../assets/logo.jpg'
import './Events.css'
import { motion } from "framer-motion";
import { contactAnimation } from "../animation";
import { useScroll } from "../../src/components/useScroll";
import { useParams } from "react-router-dom";
import { getEventById, getClubById } from "../services/user";
import { useUser } from '../userContext'
import { getDocumentListForEvent } from "../services/convenor";
import convenorService from '../services/convenor'

export default function Events() {
  const { eventId } = useParams();
  const [element, controls] = useScroll();
  const [eventData, setEventData] = useState(null);
  const [clubData, setClubdata] = useState(null);
  const [convenorClub, setConvenorClub] = useState(null)
  const { isLoggedIn, setLoggedIn, loggedId, setLoggedId } = useUser();
  const clubId = localStorage.getItem("clubId")
  const [documentList, setDocumentList] = useState([]);
  const [seeReport, setSeeReport] = useState(false)

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await getEventById(eventId);
        const clubData = await getClubById(response.data.event.clubId)
        setConvenorClub(clubData.data.club._id)
        setClubdata(clubData.data.club)
        setEventData(response.data.event); 
        
      } catch (error) {
        console.error("Error fetching event data:", error.message);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSeeReport = async() => {
    try {
      const result = await convenorService.getDocumentListForEvent(eventId);
      console.log(result)

      if (result) {
        setDocumentList(result.data.documentList);
      } else {
          // Handle error
          console.error(result.message);
      }
      setSeeReport(true)
    } catch (error) {
        // Handle error
        console.error(error.message);
    }
  }

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
          <img src={eventData && eventData.image} alt="" className='event-img' />
          <div className="event-details">
            <h2
              className="display-5 mb-3"
              style={{ color: "#21e6c1", fontWeight: "400" }}
            >
              {clubData && clubData.name}
            </h2>
            {/* <h3 className="lead mt-5" style={{ color: 'white' }}>Club Convenor</h3> */}
            <div className="event-time  mb-5">
              <h5 className="date">
                {eventData && parseDateString(eventData.date.toString())}
              </h5>
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
        {convenorClub === clubId && 
        <>
        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <button
                              className="btn btn-warning m-2 mb-5"
                              style={{fontWeight:"500", width:"200px"}}
                              onClick={handleSeeReport}
                            >
                              See Attendance
                            </button>
                          </motion.div>
        </>}

        {seeReport && <div>
            {/* Render your component with the documentList state */}
            {documentList.map((document) => (
                <a href={document} >Click Here</a>
            ))}
        </div>}

        {/*<button className="edit-event">Edit Event</button>*/}
      </motion.div>
    </div>
  );
}
