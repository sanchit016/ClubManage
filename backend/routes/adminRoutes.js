const express = require("express");
const {adminAuthentication} = require("../middlewares/adminAuth");
const adminController = require("../controllers/adminControllers");

adminRouter = express.Router();


adminRouter.post("/register", adminController.register);
adminRouter.post("/login", adminController.login);
adminRouter.post("/create-teacher", adminAuthentication ,adminController.createTeacher);
adminRouter.get("/get-teachers", adminAuthentication ,adminController.getAllTeachers);
adminRouter.get("/get-teacher/:id", adminAuthentication ,adminController.getTeacherById);

adminRouter.post("/create-student", adminAuthentication ,adminController.createStudent);
adminRouter.get("/get-students", adminAuthentication ,adminController.getAllStudents);
adminRouter.get("/get-student/:id", adminAuthentication ,adminController.getStudentById);

adminRouter.post("/create-club", adminAuthentication ,adminController.createClub);

adminRouter.put("/assign-teacher", adminAuthentication ,adminController.assignTeacher);
adminRouter.put("/unassign-teacher", adminAuthentication ,adminController.unassignTeacher);

module.exports = adminRouter;