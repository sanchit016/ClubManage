const express = require("express");
const mediaController = require("../controllers/mediaControllers");

mediaRouter = express.Router();
userRouter.post("/upload-image", mediaController.uploadImage);

module.exports = userRouter;