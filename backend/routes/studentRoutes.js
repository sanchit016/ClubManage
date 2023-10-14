const express = require("express");
const {studentAuthentication} = require("../middlewares/studentAuth");
const studentController = require("../controllers/studentControllers");

studentRouter = express.Router();


studentRouter.post("/login", studentController.login);
studentRouter.post("/join-request", studentAuthentication  , studentController.raiseRequest);

module.exports = studentRouter;