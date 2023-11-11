const jwt = require('jsonwebtoken');

const Club = require("../models/Club");
const { assignConvenor } = require('../controllers/teacherControllers');

const verifyConvenor = async (req, res, next) => {
    // console.log("here 1");
    try {
        var clubId = req.body.clubId;
        if(clubId==null){
            clubId = req.params.id;
        }

        const club = await Club.findById(clubId);
        if(req.student.isConvenor == true && club.assignedConvenor == req.student.id){
            req.club = club;
            next();
        }
        else
            res.status(400).json({
            success: false,
            error_code: 400,
            message: "not a Convenor or not a Convenor of this group",
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


module.exports = { verifyConvenor};