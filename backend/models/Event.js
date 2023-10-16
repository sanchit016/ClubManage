const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    date: {
        type: String,
    },
    createdByConvenor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    image: {
        type: String
    },
    clubId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;