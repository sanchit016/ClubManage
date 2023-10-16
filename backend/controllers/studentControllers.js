const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Club = require("../models/Club");
const Student = require("../models/Student");
const ClubJoinRequest = require("../models/ClubJoinRequest");

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

const raiseRequest = async (req, res) => {
    try {
        const clubId = req.body.clubId;
        const studentId = req.student._id;
        const description = req.body.description;
        const name = req.body.name
        const contact = req.body.contact
        const branch = req.body.branch
        const year = req.body.year

        const newClubJoinRequest = new ClubJoinRequest({
            clubId: clubId,
            studentId: studentId,
            description: description,
            name: name,
            contact: contact,
            requestDate: Date.now(),
            branch: branch,
            year: year,
        });
        const clubJoinRequest = await newClubJoinRequest.save();
        
        const club = await Club.findById(clubId);
        club.activeRequests.push(clubJoinRequest);
        await club.save();

        // const student=Student(req.student);
        // student.reqMembership.push(clubId);
        // await student.save();

        return res.json({
            success: true,
            error_code: 200,
            message: "Request successful",
            data: { clubJoinRequest }
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

const viewRequests = async (req, res) => {
    try {
        const studentId = req.student._id;
        
        const requests = await ClubJoinRequest.find({ studentId });

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Requests retrieved",
            data: { requests }
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
    raiseRequest,
    viewRequests,
}