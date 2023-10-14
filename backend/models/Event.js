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
    poster: {
        type: String
    }
});

const Event = mongoose.model("Admin", eventSchema);

module.exports = Event;