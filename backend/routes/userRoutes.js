const express = require("express");
const userController = require("../controllers/userControllers");

userRouter = express.Router();
userRouter.get("/get-clubs", userController.getAllClubs);
userRouter.get("/get-club/:id", userController.getClubById);

module.exports = userRouter;