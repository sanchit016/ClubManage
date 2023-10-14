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
        type: String
    },
    isConvenor: {
        type : Boolean,
        required: true
    },
    currMembership: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
    }],
    reqMembership : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
    }]
});

const Student = mongoose.model("Admin", studentSchema);

module.exports = Student;