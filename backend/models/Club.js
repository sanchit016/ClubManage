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
    activeRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClubJoinRequest',
    }],
    clubMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClubMember',
    }],
    pastRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClubJoinRequest',
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;