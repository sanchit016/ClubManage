const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignedTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    assignedConvenor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    joinRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        reqTime: {
            type: String
        }
    }],
    clubMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        joinTime: {
            type: String
        }
    }],
    rejectedRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        rejectTime: {
            type: String
        }
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;