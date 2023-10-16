const express = require("express");
const {verifyConvenor} = require("../middlewares/convenorAuth");
const {studentAuthentication,} = require("../middlewares/studentAuth");
const convenorController = require("../controllers/convenorControllers");

convenorRouter = express.Router();
convenorRouter.post("/create-event", studentAuthentication, verifyConvenor,convenorController.createEvent);
convenorRouter.post("/approve-request", studentAuthentication ,verifyConvenor, convenorController.approveRequest);
convenorRouter.post("/reject-request", studentAuthentication, verifyConvenor,convenorController.rejectRequest);

module.exports = convenorRouter;