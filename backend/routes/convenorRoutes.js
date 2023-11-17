const express = require("express");
const {verifyConvenor} = require("../middlewares/convenorAuth");
const {studentAuthentication,} = require("../middlewares/studentAuth");
const convenorController = require("../controllers/convenorControllers");

convenorRouter = express.Router();
convenorRouter.post("/create-event", studentAuthentication, verifyConvenor,convenorController.createEvent);
convenorRouter.post("/approve-request", studentAuthentication ,verifyConvenor, convenorController.approveRequest);
convenorRouter.post("/reject-request", studentAuthentication, verifyConvenor,convenorController.rejectRequest);

convenorRouter.get("/get-club-members/:id", studentAuthentication, verifyConvenor,convenorController.getClubMembers);
convenorRouter.get("/get-past-requests/:id", studentAuthentication, verifyConvenor,convenorController.getPastRequests);
convenorRouter.get("/get-pending-requests/:id", studentAuthentication, verifyConvenor,convenorController.getPendingRequests);

convenorRouter.patch("/edit-event/:id", studentAuthentication, verifyConvenor,convenorController.editEvent);
convenorRouter.delete("/delete-event/:id", studentAuthentication, verifyConvenor,convenorController.deleteEvent);
convenorRouter.delete("/remove-clubMember/:id", studentAuthentication, verifyConvenor,convenorController.removeClubMember);

convenorRouter.patch("/add-club-images/:id", studentAuthentication, verifyConvenor,convenorController.addImages);


convenorRouter.get("/get-student/:id", studentAuthentication, convenorController.getStudent);

module.exports = convenorRouter;