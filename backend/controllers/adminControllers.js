const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const Teacher = require("../models/Teacher");
const Club = require("../models/Club");
const Student = require("../models/Club");

dotenv.config();

//REGISTER
const register = async(req,res) =>{
    try{

        const currEmail = req.body.email.toLowerCase();
        const currPassword = req.body.password;

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(currPassword, salt);
        const newAdmin = new Admin({
            email: currEmail,
            password: hashedPass
        });
        const admin = await newAdmin.save();
        res.send({
            "success": true,
            "error_code": 201,
            "message": "Admin created successfully",
            "data": {admin}
        });

    } catch (err) {
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": null
        });
    }
}


//LOGIN
const login = async (req, res) => 
{
    try {
        const currEmail = req.body.email.toLowerCase();
        const currPassword = req.body.password;

        const admin = await Admin.findOne({ email: currEmail });

        if (!admin) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Admin not found.",
                data: null
            });
        }

        const isPasswordValid = await bcrypt.compare(currPassword, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                error_code: 401,
                message: "Authentication failed. Incorrect password.",
                data: null
            });
        }
        
        const token = jwt.sign({ adminId: admin._id, email: admin.email }, process.env.SECRET_KEY);

        res.cookie('jwt', token, {
            httpOnly: true, 
        });

        return res.json({
            success: true,
            error_code: 200,
            message: "Authentication successful",
            data: { admin }
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

//CREATE TEACHER
const createTeacher = async (req, res) => 
{
    try {
        const currEmail = req.body.email.toLowerCase();
        const currPassword = req.body.password;
        const currName = req.body.name;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(currPassword, salt);
        const newTeacher = new Teacher({
            name: currName,
            email: currEmail,
            password: hashedPass,
            contact: req.contact ?? null,
            assignedClub: req.assignedClub ?? null,
        });

        await newTeacher.save();

        return res.status(201).json({
            success: true,
            error_code: 201,
            message: "Teacher Created",
            data: { newTeacher }
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

//CREATE CLUB
const createClub = async (req, res) => 
{
    try {
        const name = req.body.name;
        const description = req.body.description;

        const newClub = new Club({
            name: name,
            description: description,
            assignedTeacher: null,
        });

        await newClub.save();

        return res.status(201).json({
            success: true,
            error_code: 201,
            message: "Club Created",
            data: { newClub }
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

//CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            branch,
            contact,
            isConvenor,
            currMembership,
            reqMembership
        } = req.body;

        // Create a new student instance
        const newStudent = new Student({
            name,
            email,
            password,
            branch,
            contact,
            isConvenor,
            currMembership,
            reqMembership
        });

        // Save the new student to the database
        await newStudent.save();

        return res.status(201).json({
            success: true,
            error_code: 201,
            message: "Student Created",
            data: { newStudent }
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

const assignTeacher = async (req, res) => {
    try {
        const clubId = req.body.clubId; 
        const teacherId = req.body.teacherId; 

        // Find the club based on clubId
        const club = await Club.findById(clubId);

        if (!club) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Club not found",
                data: null
            });
        }

        // Update the assignedTeacher field of the club with teacherId
        club.assignedTeacher = teacherId;
        await club.save();

        return res.status(202).json({
            success: true,
            error_code: 202,
            message: "Teacher assigned to the club",
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

const unassignTeacher = async (req, res) => {
    try {
        const clubId = req.body.clubId; 
        const teacherId = req.body.teacherId; 

        // Find the club based on clubId
        const club = await Club.findById(clubId);

        if (!club) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: "Club not found",
                data: null
            });
        }

        // Update the assignedTeacher field of the club with teacherId
        club.assignedTeacher = null;
        await club.save();

        return res.status(202).json({
            success: true,
            error_code: 202,
            message: "Teacher unassigned",
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


module.exports = {
    register,
    login,
    createTeacher,
    createClub,
    assignTeacher,
    unassignTeacher,
    createStudent
}