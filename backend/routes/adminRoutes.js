const express = require("express");
const {adminAuthentication} = require("../middlewares/adminAuth");
const adminController = require("../controllers/adminControllers");

adminRouter = express.Router();


adminRouter.post("/register", adminController.register);
adminRouter.post("/login", adminController.login);

adminRouter.post("/create-teacher", adminAuthentication ,adminController.createTeacher);
adminRouter.get("/get-teachers", adminAuthentication ,adminController.getAllTeachers);
adminRouter.get("/get-teacher/:id", adminAuthentication ,adminController.getTeacherById);
adminRouter.patch("/edit-teacher/:id", adminAuthentication, adminController.editTeacher);
adminRouter.delete("/delete-teacher/:id", adminAuthentication, adminController.deleteTeacher);

adminRouter.post("/create-student", adminAuthentication ,adminController.createStudent);
adminRouter.get("/get-students", adminAuthentication ,adminController.getAllStudents);
adminRouter.get("/get-student/:id", adminAuthentication ,adminController.getStudentById);
adminRouter.patch("/edit-student/:id", adminAuthentication, adminController.editStudent);
adminRouter.delete("/delete-student/:id", adminAuthentication, adminController.deleteStudent);

adminRouter.post("/create-club", adminAuthentication ,adminController.createClub);

adminRouter.patch("/edit-club", adminAuthentication ,adminController.assignTeacher);
adminRouter.patch("/unassign-teacher", adminAuthentication ,adminController.unassignTeacher);




module.exports = adminRouter;