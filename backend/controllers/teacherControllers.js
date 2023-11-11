const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Teacher = require("../models/Teacher");
const Club = require("../models/Club");
const Student = require("../models/Student");
const ClubJoinRequest = require("../models/ClubJoinRequest");
const ClubMember = require("../models/ClubMember");

//LOGIN
const login = async (req, res) => {
  try {
    const currEmail = req.body.email.toLowerCase();
    const currPassword = req.body.password;

    const teacher = await Teacher.findOne({ email: currEmail });

    if (!teacher) {
      return res.status(401).json({
        success: false,
        error_code: 401,
        message: "Authentication failed. Teacher not found.",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(
      currPassword,
      teacher.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error_code: 401,
        message: "Authentication failed. Incorrect password.",
        data: null,
      });
    }

    const token = jwt.sign(
      { teacherId: teacher._id, email: teacher.email },
      process.env.SECRET_KEY
    );

    res.cookie("jwt", token, {
      secure: true,
      sameSite: "none",
    });

    return res.json({
      success: true,
      error_code: 200,
      message: "Authentication successful",
      data: { teacher },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error_code: 500,
      message: err.message,
      data: null,
    });
  }
};

const assignConvenor = async (req, res) => {
  try {
    const studentId = req.body.studentId;
    const club = req.club;

    const student = await Student.findById(studentId);

    if (club.assignedConvenor) {
      return res.status(400).json({
        success: false,
        error_code: 400,
        message: "unassign previous convenor first",
        data: { club },
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
      data: { club },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error_code: 500,
      message: err.message,
      data: null,
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
      data: { club },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error_code: 500,
      message: err.message,
      data: null,
    });
  }
};

const approveRequest = async (req, res) => {
  try {
    const requestId = req.body.requestId;
    const club = req.club;
    const activeRequestIndex = club.activeRequests.findIndex(
      (request) => request._id == requestId
    );

    if (activeRequestIndex === -1) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: "Request not found in active requests.",
        data: null,
      });
    }

    club.activeRequests.splice(activeRequestIndex, 1);

    const request = await ClubJoinRequest.findById(requestId);
    request.accepted = "accepted";
    request.decisionDate = Date.now();
    await request.save();

    club.pastRequests.push(request);
    const newClubMember = new ClubMember({
      studentId: request.studentId,
      clubId: club.id,
      joinDate: Date.now(),
    });


    const student  = await Student.findById(request.studentId);
    student.currMembership.push(club);
    student.save();


    await newClubMember.save();
    club.clubMembers.push(newClubMember);
    await club.save();
    console.log("here");
    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Request accepted and moved to past requests.",
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error_code: 500,
      message: err.message,
      data: null,
    });
  }
};

const rejectRequest = async (req, res) => {
  try {
    const requestId = req.body.requestId;
    const club = req.club;
    const activeRequestIndex = club.activeRequests.findIndex(
      (request) => request._id == requestId
    );

    if (activeRequestIndex === -1) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: "Request not found in active requests.",
        data: null,
      });
    }

    club.activeRequests.splice(activeRequestIndex, 1);
    const request = await ClubJoinRequest.findById(requestId);
    request.accepted = "rejected";
    request.decisionDate = Date.now();
    await request.save();
    club.pastRequests.push(request);
    await club.save();

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Request rejected and moved to past requests.",
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error_code: 500,
      message: err.message,
      data: null,
    });
  }
};


const getPendingRequests = async (req, res) => {
    try {
        // Assuming you have the active requests stored in the club model
        const club = req.club;

        // Retrieve the active requests from the club model
        const pendingRequests = club.activeRequests;

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Pending requests retrieved",
            data: { pendingRequests }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
}


const getClubMembers = async (req, res) => {
    try {
        // Assuming you have the club members stored in the club model
        const club = req.club;

        // Retrieve the club members from the club model
        const clubMembers = club.clubMembers;

        var studentIds = [];

        // Extract studentId from each club member and create an array
        for (const element of clubMembers) {
          const clubMember = await ClubMember.findById(element);
          const student = await Student.findById(clubMember.studentId);
          studentIds.push(student);
        }

        console.log(studentIds);
        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Club members' studentIds retrieved",
            data: { studentIds }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
}



const getPastRequests = async (req, res) => {
    try {
        // Assuming you have the past requests stored in the club model
        const club = req.club;

        // Retrieve the past requests from the club model
        const pastRequests = club.pastRequests;

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Past requests retrieved",
            data: { pastRequests }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
}




module.exports = {
  login,
  assignConvenor,
  unassignConvenor,
  approveRequest,
  rejectRequest,
  getClubMembers,
  getPendingRequests,
  getPastRequests
};
