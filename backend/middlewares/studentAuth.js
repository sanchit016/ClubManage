const jwt = require('jsonwebtoken');

const Student = require("../models/Student");

const studentAuthentication = async (req, res, next) => {
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

        const student = await Student.findOne({ _id: decoded.studentId });

        if (!student) {
            return res.status(403).json({
                success: false,
                error_code: 403,
                message: "Authentication failed. User is not a Student.",
                data: null
            });
        }

        req.student = student;
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


module.exports = { studentAuthentication};