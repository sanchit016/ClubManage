const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ClubJoinRequest = require("../models/ClubJoinRequest");
const ClubMember = require("../models/ClubMember");
const Event = require("../models/Event");

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

        const newEvent = new Event({
            name,
            description,
            startTime,
            endTime,
            date,
            createdByConvenor: convenor._id, 
            image
        });

        console.log("create");
        const savedEvent = await newEvent.save();
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


module.exports = {
    approveRequest,
    rejectRequest,
    createEvent
}