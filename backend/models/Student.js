const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    isConvenor: {
        type : Boolean,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    currMembership: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClubJoinRequest',
    }],
    reqMembership : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClubJoinRequest',
    }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;