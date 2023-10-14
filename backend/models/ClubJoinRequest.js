const mongoose = require("mongoose");

const clubJoinRequestSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    clubId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    requestDate: {
        type: String,
        required: true,
    },
    decisionDate: {
        type: String,
    },
    accepted: {
        type: String,
    },
});

const ClubJoinRequest = mongoose.model("ClubJoinRequest", clubJoinRequestSchema);

module.exports = ClubJoinRequest;