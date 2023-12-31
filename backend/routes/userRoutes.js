const express = require("express");
const userController = require("../controllers/userControllers");

userRouter = express.Router();
userRouter.get("/get-clubs", userController.getAllClubs);
userRouter.get("/get-club/:id", userController.getClubById);

userRouter.get("/get-events", userController.getAllEvents);
userRouter.get("/get-events/:id", userController.getEventById);
userRouter.get('/get-events-club/:clubId', userController.getAllEventsByClub);

userRouter.get("/get-club-admins/:id", userController.getClubAdmins);

module.exports = userRouter;