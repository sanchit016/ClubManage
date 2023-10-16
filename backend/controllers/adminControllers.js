const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const Teacher = require("../models/Teacher");
const Club = require("../models/Club");
const Student = require("../models/Student");

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
        const { password, ...wAdmin } = admin._doc;

        res.send({
            "success": true,
            "error_code": 201,
            "message": "Admin created successfully",
            "data": {wAdmin}
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
                data: {admin}
            });
        }
        
        const token = jwt.sign({ adminId: admin._id, email: admin.email }, process.env.SECRET_KEY);

        res.cookie('jwt', token, {
            httpOnly: true, 
        });

        const { password, ...wAdmin } = admin._doc;
        return res.json({
            success: true,
            error_code: 200,
            message: "Authentication successful",
            data: { wAdmin }
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
            rollNo
        } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        // Create a new student instance
        const newStudent = new Student({
            name: name,
            email: email, 
            password: hashedPass,
            branch: branch,
            contact: contact, 
            isConvenor: isConvenor,
            rollNo: rollNo,
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

const getAllTeachers = async (req, res) => {
    try {
        // Query the database to fetch all teachers
        const teachers = await Teacher.find();

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Teachers fetched successfully',
            data: { teachers }
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

const getTeacherById = async (req, res) => {
    const teacherId = req.params.id;
    console.log(teacherId)
    try {
        const teacher = await Teacher.findById(teacherId);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: 'Teacher not found',
                data: null
            });
        }
        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Teacher fetched successfully',
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

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Students fetched successfully',
            data: { students }
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

const getStudentById = async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: 'Student not found',
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Student fetched successfully',
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

const editStudent = async (req, res) => {
    const studentId = req.params.id;
    const updateData = req.body; // Assuming the request body contains the updated data

    try {
        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: 'Student not found',
                data: null
            });
        }

        // Update student's information
        student.name = updateData.name || student.name;
        student.email = updateData.email || student.email;
        student.branch = updateData.branch || student.branch;
        student.contact = updateData.contact || student.contact;
        student.isConvenor = updateData.isConvenor || student.isConvenor;
        student.rollNo = updateData.rollNo || student.rollNo;
        student.currMembership = updateData.currMembership || student.currMembership;
        student.reqMembership = updateData.reqMembership || student.reqMembership;

        // Save the updated student
        await student.save();

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Student updated successfully',
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


const editTeacher = async (req, res) => {
    const teacherId = req.params.id;
    const updateData = req.body; // Assuming the request body contains the updated data

    try {
        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: 'Teacher not found',
                data: null
            });
        }

        // Update teacher's information
        teacher.name = updateData.name || teacher.name;
        teacher.email = updateData.email || teacher.email;
        teacher.password = updateData.password || teacher.password;
        teacher.contact = updateData.contact || teacher.contact;
        teacher.assignedClub = updateData.assignedClub || teacher.assignedClub;

        // Save the updated teacher
        await teacher.save();

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Teacher updated successfully',
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

const deleteStudent = async (req, res) => {
    const studentId = req.params.id;

    try {
        const student = await Student.findByIdAndDelete(studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: 'Student not found',
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Student deleted successfully',
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


const deleteTeacher = async (req, res) => {
    const teacherId = req.params.id;

    try {
        const teacher = await Teacher.findByIdAndDelete(teacherId);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                error_code: 404,
                message: 'Teacher not found',
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            error_code: 200,
            message: 'Teacher deleted successfully',
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



module.exports = {
    register,
    login,
    createTeacher,
    createClub,
    assignTeacher,
    unassignTeacher,
    createStudent,
    getAllTeachers,
    getTeacherById,
    getAllStudents,
    getStudentById,
    editStudent,
    editTeacher,
    deleteStudent,
    deleteTeacher
}