const jwt = require('jsonwebtoken');

const Teacher = require("../models/Teacher");
const Club = require("../models/Club");

const teacherAuthentication = async (req, res, next) => {
    // console.log("here 1");
    try {
        const token = req.cookies.jwt; 
        if (!token) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Token not provided.",
                data: null
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const teacher = await Teacher.findOne({ _id: decoded.teacherId });

        if (!teacher) {
            return res.status(403).json({
                success: false,
                error_code: 403,
                message: "Authentication failed. User is not a teacher.",
                data: null
            });
        }
        console.log(teacher);
        req.teacher = teacher;
        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};

const teacherClubAuthentication = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; 
        if (!token) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Token not provided.",
                data: null
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const teacherId = decoded.teacherId;

        const club = await Club.findOne({assignedTeacher: teacherId});
        if (club.assignedTeacher!=teacherId) {
            return res.status(403).json({
                success: false,
                error_code: 403,
                message: "Authentication failed. User is not a teacher.",
                data: null
            });
        }
        console.log(club);
        req.club = club;
        next();

    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};

module.exports = { teacherAuthentication, teacherClubAuthentication };