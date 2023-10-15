const mongoose = require("mongoose");

const clubMemberSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    clubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
    joinDate: {
        type: String,
    },
    
});

const ClubMember = mongoose.model("ClubMember", clubMemberSchema);

module.exports = ClubMember;