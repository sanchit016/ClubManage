import React, { useState, useEffect } from 'react';
import './Club.css';
import { getAllEventsByClub } from '../../services/user';
import EventPage from '../../pages/Events'

import { motion } from "framer-motion";
import  { contactAnimation } from '../../animation'
import { useScroll } from "../useScroll"
import { useNavigate } from 'react-router-dom';
export default function Events({ clubId }) {
  const [element, controls] = useScroll();
  const [events, setEvents] = useState([]);
  const [ selectedEvent, setSelectedEvent ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedEvent)
    const fetchEvents = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint to get events by clubId
        const response = await getAllEventsByClub(clubId)
        console.log(response);

        if (response.success) {
          // Assuming the events data is stored in the 'data' property of the response
          
          setEvents(response.data.events);
        } else {
          console.error('Failed to fetch events:', response.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    };

    fetchEvents();
  }, [clubId]);

  useEffect(() => {
    console.log(selectedEvent)
    if (selectedEvent) {
        
      navigate(`/event/${selectedEvent}`);
    }
  }, [selectedEvent, navigate]);

  return (
    <div ref={element}>
      <motion.div 
      variants={contactAnimation}
      animate={controls}
      transition={{ delay: 0.5, duration: 0.6, type: "tween" }}
      >
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4" style={{ color: '#21e6c1', fontWeight: '400' }}>
                What's on the Calendar?
              </h1>
              <p className="lead mb-0" style={{ color: 'white' }}>
                Our past and upcoming events
              </p>
            </div>
            {/* ... Other elements ... */}
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {/* Map through events array to generate cards */}
                  {events.length > 0 ? events.map((event, index) => (
  // Check if the index is even
  (index % 2 === 0) && (
    <div key={index} className="row">
      {/* Map through two events in this row */}
      {events.slice(index, index + 2).map((event) => (
        <div key={event._id} className="col-md-6">
          <div className="card-event" style={{ backgroundColor: '#278ea5', color: 'white' }}>
            {/*<img
              className="img-fluid"
              alt="100%x280"
              src={event.image || 'https://via.placeholder.com/280x100'}
      />*/}
            <div className="card-body-event">
              <h4 className="card-title">{event.name}</h4>
              <p className="card-text">{event.description}</p>
              <button onClick={() => setSelectedEvent(event._id)} className="event-btn" >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
)) : "No events for this club"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    </div>


  );
}
