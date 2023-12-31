const Club = require("../models/Club");
const Event = require("../models/Event");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const { assignTeacher } = require("./adminControllers");

const getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find({});
    console.log(`request received`);
    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Clubs fetched successfully",
      data: { clubs },
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

const getClubById = async (req, res) => {
  const clubId = req.params.id;
  try {
    const club = await Club.findById(clubId);

    if (!club) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: "Club not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Club fetched successfully",
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

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Events fetched successfully",
      data: { events },
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

const getEventById = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: "Event not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "Event fetched successfully",
      data: { event },
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

const getAllEventsByClub = async (req, res) => {
  const clubId = req.params.clubId;

  try {
    const events = await Event.find({ clubId });

    if (!events) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: 'No events found for the specified club',
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: 'Events fetched successfully',
      data: { events },
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

const getClubAdmins = async (req,res) =>{
  try {
    const club = await Club.findById(req.params.id);
    const studentId = club.assignedConvenor;
    const teacherId = club.assignedTeacher;

    const convenor = await Student.findById(studentId);
    const teacher = await Teacher.findById(teacherId);

    if (!club) {
      return res.status(404).json({
        success: false,
        error_code: 404,
        message: "Club not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      error_code: 200,
      message: "get Club Admins",
      data: { convenor, teacher },
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
  getAllClubs,
  getClubById,
  getAllEvents,
  getEventById,
  getAllEventsByClub,
  getClubAdmins
};
