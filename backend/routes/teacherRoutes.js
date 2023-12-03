const express = require("express");
const {teacherAuthentication,teacherClubAuthentication} = require("../middlewares/teacherAuth");
const teacherController = require("../controllers/teacherControllers");

teacherRouter = express.Router();


teacherRouter.post("/login", teacherController.login);
teacherRouter.post("/assign-convenor", teacherAuthentication, teacherClubAuthentication,teacherController.assignConvenor);
teacherRouter.post("/unassign-convenor", teacherAuthentication, teacherClubAuthentication,teacherController.unassignConvenor);
teacherRouter.post("/approve-request", teacherAuthentication, teacherClubAuthentication,teacherController.approveRequest);
teacherRouter.post("/reject-request", teacherAuthentication, teacherClubAuthentication,teacherController.rejectRequest);


teacherRouter.get("/get-club-members/:id", teacherAuthentication, teacherClubAuthentication,teacherController.getClubMembers);
teacherRouter.get("/get-past-requests/:id", teacherAuthentication, teacherClubAuthentication,teacherController.getPastRequests);
teacherRouter.get("/get-pending-requests/:id", teacherAuthentication, teacherClubAuthentication,teacherController.getPendingRequests);
teacherRouter.get("/get-request-details/:id", teacherAuthentication, teacherController.getRequestDetails);
teacherRouter.get("/get-student/:id", teacherController.getStudent);
module.exports = teacherRouter;