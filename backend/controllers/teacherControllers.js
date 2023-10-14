const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Teacher = require("../models/Teacher");
const Club = require("../models/Club");
const Student = require("../models/Student");
const ClubJoinRequest = require("../models/ClubJoinRequest");

//LOGIN
const login = async (req, res) => 
{
    try {
        const currEmail = req.body.email.toLowerCase();
        const currPassword = req.body.password;

        const teacher = await Teacher.findOne({ email: currEmail });

        if (!teacher) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Teacher not found.",
                data: null
            });
        }

        const isPasswordValid = await bcrypt.compare(currPassword, teacher.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Incorrect password.",
                data: null
            });
        }
        
        const token = jwt.sign({ teacherId: teacher._id, email: teacher.email }, process.env.SECRET_KEY);

        res.cookie('jwt', token, {
            httpOnly: true, 
        });

        return res.json({
            success: true,
            error_code: 200,
            message: "Authentication successful",
            data: { teacher }
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


const assignConvenor = async (req, res) => {
    try {
        const studentId = req.body.studentId; 
        const club = req.club;

        const student = await Student.findById(studentId);

        if(club.assignedConvenor){
            return res.status(400).json({
            success: false,
            error_code: 400,
            message: "unassign previous convenor first",
            data: { club }
        });
        }

        student.isConvenor = true;
        await student.save();
        club.assignedConvenor = studentId;
        await club.save();

        return res.status(202).json({
            success: true,
            error_code: 202,
            message: "Convenor assigned to the club",
            data: { club }
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

const unassignConvenor = async (req, res) => {
    try {
        const studentId = req.body.studentId; 
        const club = req.club;
        const student = await Student.findById(studentId);
        student.isConvenor = false;
        student.save();
        club.assignedConvenor = null;
        await club.save();

        return res.status(202).json({
            success: true,
            error_code: 202,
            message: "Convenor unassigned",
            data: { club }
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

const approveRequest = async (req,res) =>{
    // try {
    //     const requestId = req.body.requestId;
    //     const club = req.club;

    //     const activeRequestIndex = club.activeRequests.findIndex(request => request._id == requestId);

    //     if (activeRequestIndex === -1) {
    //         return res.status(404).json({
    //             success: false,
    //             error_code: 404,
    //             message: "Request not found in active requests.",
    //             data: null
    //         });
    //     }

    //     club.activeRequests[activeRequestIndex].accepted = true;
    //     const acceptedRequest = club.activeRequests.splice(activeRequestIndex, 1)[0];
    //     club.pastRequests.push(acceptedRequest);
    //     const acceptedJoinRequest = new ClubJoinRequest({
    //         student: acceptedRequest.student,
    //         club: acceptedRequest.club,
    //     });
    //     await acceptedJoinRequest.save(); 
    //     await club.save(); 

    //     return res.status(200).json({
    //         success: true,
    //         error_code: 200,
    //         message: "Request accepted and moved to past requests.",
    //         data: null
    //     });
    // } catch (err) {
    //     return res.status(500).json({
    //         success: false,
    //         error_code: 500,
    //         message: err.message,
    //         data: null
    //     });
    // }
}


const rejectRequest = async (req, res) => {
    // try {
    //     const requestId = req.body.requestId;
    //     const club = req.club;

    //     // Find the active request in the club's activeRequests array
    //     const activeRequestIndex = club.activeRequests.findIndex(request => request._id == requestId);

    //     if (activeRequestIndex === -1) {
    //         return res.status(404).json({
    //             success: false,
    //             error_code: 404,
    //             message: "Request not found in active requests.",
    //             data: null
    //         });
    //     }

    //     club.activeRequests[activeRequestIndex].accepted = false;
    //     const rejectedRequest = club.activeRequests.splice(activeRequestIndex, 1)[0];
    //     club.pastRequests.push(rejectedRequest);

    //     const rejectedJoinRequest = new ClubJoinRequest({
    //         studentId: rejectedRequest.studentId,
    //         clubId: rejectedRequest.clubId,
    //         description: rejectedRequest.description,
    //         requestDate: rejectedRequest.requestDate,
    //         decisionDate: Date.now(),
    //         accepted: false
    //     });

    //     await rejectedJoinRequest.save(); 
    //     await club.save(); // Save the changes to the database

    //     return res.status(200).json({
    //         success: true,
    //         error_code: 200,
    //         message: "Request rejected and moved to past requests.",
    //         data: null
    //     });
    // } catch (err) {
    //     return res.status(500).json({
    //         success: false,
    //         error_code: 500,
    //         message: err.message,
    //         data: null
    //     });
    // }
};


module.exports = {
    login,
    assignConvenor,
    unassignConvenor,
    approveRequest,
    rejectRequest,
}