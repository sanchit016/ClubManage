const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ClubJoinRequest = require("../models/ClubJoinRequest");
const ClubMember = require("../models/ClubMember");
const Club = require("../models/Club");
const Event = require("../models/Event");
const Student = require("../models/Student");

const approveRequest = async (req,res) =>{
    try {
        const requestId = req.body.requestId;
        const club = req.club;
        const activeRequestIndex = club.activeRequests.findIndex(request => request._id == requestId);

        if (activeRequestIndex === -1) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Request not found in active requests.",
                data: null
            });
        }

        club.activeRequests.splice(activeRequestIndex, 1);

        const request = await ClubJoinRequest.findById(requestId);
        request.accepted = true;
        request.decisionDate = Date.now();
         await request.save();

        club.pastRequests.push(request);
        const newClubMember = new ClubMember({
            studentId: request.studentId,
            clubId: club.id,
            joinDate: Date.now(),
        });

        console.log("here");

        await newClubMember.save();
        club.clubMembers.push(newClubMember);
        await club.save();
        console.log("here");
        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Request accepted and moved to past requests.",
            data: null
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


const rejectRequest = async (req, res) => {
     try {
        const requestId = req.body.requestId;
        const club = req.club;
        const activeRequestIndex = club.activeRequests.findIndex(request => request._id == requestId);

        if (activeRequestIndex === -1) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Request not found in active requests.",
                data: null
            });
        }

        club.activeRequests.splice(activeRequestIndex, 1);
        const request = await ClubJoinRequest.findById(requestId);
        request.accepted = false;
        request.decisionDate = Date.now();
        await request.save();
        club.pastRequests.push(request);
        await club.save();

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Request rejected and moved to past requests.",
            data: null
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

const createEvent = async (req, res) => {
    try {
        const convenor = req.student;
        const { name, description, startTime, endTime, date, image } = req.body;
        
        const clubId = req.body.clubId;

        const newEvent = new Event({
            name,
            description,
            startTime,
            endTime,
            date,
            createdByConvenor: convenor._id, 
            image,
            clubId      
        });
        
        const savedEvent = await newEvent.save();
        
        const club = Club(req.club);
        club.events.push(savedEvent);
        await club.save();

        return res.status(201).json({
            success: true,
            error_code: 201,
            message: "Event Created",
            data: { newEvent: savedEvent }
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

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Club members retrieved",
            data: { clubMembers }
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


const editEvent = async (req, res) => {
    try {
        const eventId = req.params.id; // Assuming you're using `req.params.id` to get the event ID

        // Find the event by ID
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Event not found.",
                data: null
            });
        }

        // Update the event properties as needed
        event.name = req.body.name || event.name;
        event.description = req.body.description || event.description;
        event.startTime = req.body.startTime || event.startTime;
        event.endTime = req.body.endTime || event.endTime;
        event.date = req.body.date || event.date;
        event.image = req.body.image || event.image;

        // Save the updated event to the database
        const updatedEvent = await event.save();

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: "Event updated",
            data: { updatedEvent }
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


const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id; // Assuming you're using `req.params.id` to get the event ID

        // Find the event by ID
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Event not found.",
                data: null
            });
        }

        // Delete the event
        await event.deleteOne();

        return res.status(204).json(); // Return a 204 (No Content) response indicating success
    } catch (err) {
        return res.status(500).json({
            success: false,
            error_code: 500,
            message: err.message,
            data: null
        });
    }
};

const removeClubMember = async (req, res) => {
    try {
        const studentId = req.params.id; // Assuming you're using `req.params.id` to get the student ID
        const club = req.club;

        // Check if the student is a club member
        const memberIndex = club.clubMembers.findIndex(member => member == studentId);

        if (memberIndex === -1) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Student is not a club member.",
                data: null
            });
        }

        // Remove the student from the club's list of members
        club.clubMembers.splice(memberIndex, 1);

        // Save the updated club data to the database
        await club.save();

        return res.status(204).json(); // Return a 204 (No Content) response indicating success
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
    approveRequest,
    rejectRequest,
    createEvent,
    getPendingRequests,
    getClubMembers,
    getPastRequests,
    editEvent,
    deleteEvent,
    removeClubMember
}