const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Club = require("../models/Club");
const Student = require("../models/Student");
const ClubJoinRequest = require("../models/ClubJoinRequest");

const studentAuthentication = require('../middlewares/studentAuth')

//LOGIN
const login = async (req, res) => 
{
    try {
        const currEmail = req.body.email.toLowerCase();
        const currPassword = req.body.password;

        const student = await Student.findOne({ email: currEmail });

        if (!student) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Student not found.",
                data: null
            });
        }

        const isPasswordValid = await bcrypt.compare(currPassword, student.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Incorrect password.",
                data: null
            });
        }
        
        const token = jwt.sign({ studentId: student._id, email: student.email }, process.env.SECRET_KEY);

        res.cookie('jwt', token, {
            httpOnly: true, 
        });

        return res.json({
            success: true,
            error_code: 200,
            message: "Authentication successful",
            data: { student }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};

const raiseRequest = async (req, res) => 
{
    try {
        const clubId = req.body.clubId;
        const studentId = req.student._id;
        const description = req.body.description;

        const newClubJoinRequest = new ClubJoinRequest({
            clubId: clubId,
            studentId: studentId,
            description: description,
            requestDate: Date.now(),
        })

        
        const clubJoinRequest = await newClubJoinRequest.save();

        const club = await Club.findById(clubId);
        club.activeRequests.push(clubJoinRequest);
        await club.save();

        return res.json({
            success: true,
            error_code: 200,
            message: "request successful",
            data: {clubJoinRequest}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};



module.exports = {
    login,
    raiseRequest
}