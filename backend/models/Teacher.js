const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    assignedClub: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
    }
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;