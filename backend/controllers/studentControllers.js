const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Club = require("../models/Club");
const Student = require("../models/Student");
const ClubJoinRequest = require("../models/ClubJoinRequest");

const login = async (req, res) => {
  try {
    const currEmail = req.body.email.toLowerCase();
    const currPassword = req.body.password;

    const student = await Student.findOne({ email: currEmail });

    if (!student) {
      return res.status(401).json({
        success: false,
        error_code: 401,
        message: "Authentication failed. Student not found.",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(
      currPassword,
      student.password
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
      { studentId: student._id, email: student.email },
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
      data: { student },
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

const raiseRequest = async (req, res) => {
  try {
    const clubId = req.body.clubId;
    const studentId = req.student._id;
    const description = req.body.description;
    const name = req.student.name;
    const contact = req.body.contact;
    const branch = req.student.branch;
    const year = req.body.year;
    const student = req.student;

    const newClubJoinRequest = new ClubJoinRequest({
      clubId: clubId,
      studentId: studentId,
      description: description,
      name: name,
      contact: contact,
      requestDate: Date.now(),
      branch: branch,
      accepted: "pending",
      year: year,
    });

    const club = await Club.findById(clubId);

    if (!club) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: "Club not found",
        data: null,
      });
    }

    console.log(club.assignedConvenor);

    if (club.assignedConvenor && club.assignedConvenor.equals(studentId)) {
      console.log(equal);
      return res.status(400).json({
        success: false,
        error_code: 400,
        message: "Student is the convenor of grp",
        data: null,
      });
    }

    const clubJoinRequest = await newClubJoinRequest.save();
    club.activeRequests.push(clubJoinRequest);
    await club.save();

    student.reqMembership.push(clubJoinRequest._id);
    await student.save();

    return res.json({
      success: true,
      error_code: 200,
      message: "Request successful",
      data: { clubJoinRequest },
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

const viewRequests = async (req, res) => {
  try {
    const studentId = req.student._id;

    const requests = await ClubJoinRequest.find({ studentId });

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Requests retrieved",
      data: { requests },
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

const getDetails = async (req,res) => {
  try {
    const student = req.student;
    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "student retrieved",
      data: { student },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error_code: 500,
      message: err.message,
      data: null,
    });
  }
}

module.exports = {
  login,
  raiseRequest,
  viewRequests,
  getDetails
};
