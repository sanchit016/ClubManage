const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  date: {
    type: Date,
  },
  createdByConvenor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  image: {
    type: String,
  },
  clubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: true,
  },
  thumbnail:{
    type: String,
  },
  coverPhoto:{
    type: String,
  },
  logo:{
    type: String,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
