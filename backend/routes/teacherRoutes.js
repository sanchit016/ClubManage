const express = require("express");
const {teacherAuthentication,teacherClubAuthentication} = require("../middlewares/teacherAuth");
const teacherController = require("../controllers/teacherControllers");

teacherRouter = express.Router();


teacherRouter.post("/login", teacherController.login);
teacherRouter.post("/assign-convenor", teacherAuthentication, teacherClubAuthentication,teacherController.assignConvenor);
teacherRouter.post("/unassign-convenor", teacherAuthentication, teacherClubAuthentication,teacherController.unassignConvenor);
teacherRouter.post("/approve-request", teacherAuthentication, teacherClubAuthentication,teacherController.approveRequest);
teacherRouter.post("/reject-request", teacherAuthentication, teacherClubAuthentication,teacherController.rejectRequest);


module.exports = teacherRouter;