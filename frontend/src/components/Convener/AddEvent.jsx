import React, { useState }from 'react'
import { createEvent } from '../../services/convenor';
import './studreq.css'
export default function AddEvent() {
  const [formData, setFormData] = useState({
    name: '',
    image: '', // You can add image handling here
    startTime: '',
    endTime: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the event data to your Convenor service
      await createEvent(formData);

      console.log('Event added successfully');

      // You can add code to redirect to a success page or display a success message here.

    } catch (error) {
      console.error('Event addition error', error);

      // You can handle the error case, e.g., show an error message to the user.
    }
  };

  return (
    <div className="req-wrapper">
      <div className="req-form">
        <form onSubmit={handleSubmit}>
          <h2 className="req-head">Add an Event to your Club</h2>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2-box">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2-box">
              <label className="form-label" htmlFor="image">
                Images
              </label>
              <input
                type="text" // Assuming you handle images as text URLs
                id="image"
                className="form-control"
                name="image"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2-box">
              <label className="form-label" htmlFor="starttime">
                Start Time
              </label>
              <input
                type="time"
                id="starttime"
                className="form-control"
                name="startTime"
                onChange={handleChange}
              />
            </div>
            <div className="form-grup2-box">
              <label className="form-label" htmlFor="endtime">
                End Time
              </label>
              <input
                type="time"
                id="endtime"
                className="form-control"
                name="endTime"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2-box">
              <label className="form-label" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="form-control"
                name="date"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-outline mb-4 form-grup">
            <div className="form-grup2-box">
              <label className="form-label" htmlFor="desc">
                Description
              </label>
              <textarea
                className="form-control"
                id="desc"
                rows="4"
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn req-btn mb-4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

